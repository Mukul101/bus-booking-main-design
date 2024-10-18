import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passenger-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css']
})
export class PassengerInfoComponent implements OnInit {
  passenger = {
    name: '',
    age: '',
    mobile: ''
  };

  busId: number = 0;
  selectedSeats: string[] = [];
  busName: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.busId = +params['busId'] || 0;
    //   this.seat = params['seat'] || '';
    //   this.busName = params['busName'] || ''; // Capture the bus name correctly
    // });
  }

  submitForm(form: any): void {
    if (form.valid) {
      this.router.navigate(['/review-ticket'], {
        queryParams: {
          busId: this.busId,
          seats: this.selectedSeats.join(','), // Pass selected seats
          busName: this.busName,
          name: this.passenger.name,
          age: this.passenger.age,
          mobile: this.passenger.mobile
        }
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
