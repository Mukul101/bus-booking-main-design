import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css'],
})
export class SeatSelectionComponent implements OnInit {
  busId: number = 0;
  busName: string = '';
  seats: any[][] = []; // 2D array representing rows of seats
  selectedSeats: string[] = []; // Array to store selected seats

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.busId = +params['busId'] || 0;
      this.busName = params['busName'] || '';
      this.initializeSeats();
    });
  }

  initializeSeats(): void {
    const totalRows = 9;
    let seatNumber = 1;

    for (let i = 0; i < totalRows; i++) {
      const row = [];
      row.push({
        seatNumber: `L${seatNumber++}`,
        isSelected: false,
        isAisle: false,
      });
      row.push({
        seatNumber: `L${seatNumber++}`,
        isSelected: false,
        isAisle: false,
      });
      row.push({ seatNumber: '', isSelected: false, isAisle: true });
      row.push({
        seatNumber: `R${seatNumber++}`,
        isSelected: false,
        isAisle: false,
      });
      row.push({
        seatNumber: `R${seatNumber++}`,
        isSelected: false,
        isAisle: false,
      });

      this.seats.push(row);
    }
  }

  selectSeat(seat: {
    seatNumber: string;
    isSelected: boolean;
    isAisle: boolean;
  }): void {
    if (!seat.isAisle) {
      seat.isSelected = !seat.isSelected; // Toggle selection

      if (seat.isSelected) {
        this.selectedSeats.push(seat.seatNumber);
      } else {
        this.selectedSeats = this.selectedSeats.filter(
          (s) => s !== seat.seatNumber
        );
      }
    }
  }

  proceedToNextPage(): void {
    if (this.selectedSeats.length > 0) {
      this.router.navigate(['/passenger-info'], {
        queryParams: {
          busId: this.busId,
          seats: this.selectedSeats.join(','), // Join selected seats into a string
          busName: this.busName,
        },
      });
    } else {
      alert('Please select at least one seat before proceeding.');
    }
  }
}
