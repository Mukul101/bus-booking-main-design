import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-bus-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css'],
})
export class BusListComponent implements OnInit {
  from: string = '';
  to: string = '';
  travelDate: string = '';

  buses = [
    {
      id: 1,
      name: 'Super Express',
      departureTime: '09:00 AM',
      coach: 'AC Sleeper',
      seatsAvailable: 10,
      fare: 1500,
    },
    {
      id: 2,
      name: 'Comfort Travels',
      departureTime: '11:00 AM',
      coach: 'AC Sleeper',
      seatsAvailable: 8,
      fare: 1600,
    },
    {
      id: 3,
      name: 'Shivaji Travels',
      departureTime: '06:00 AM',
      coach: 'Non-AC Sleeper',
      seatsAvailable: 8,
      fare: 1000,
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.from = params['from'];
      this.to = params['to'];
      this.travelDate = params['travelDate'];
      console.log(`From: ${this.from}, To: ${this.to}, Date: ${this.travelDate}`);
      // You might fetch bus data based on the route and travel date here
    });
  }

  viewSeats(bus: any) {
    this.router.navigate(['/seat-selection'], {
      queryParams: { busId: bus.id },
    });
  }
}
