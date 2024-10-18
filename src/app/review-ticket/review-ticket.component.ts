import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-ticket',
  templateUrl: './review-ticket.component.html',
  styleUrls: ['./review-ticket.component.css']
})
export class ReviewTicketComponent implements OnInit {
  busId: number =0;
  busName: string = ''; // Add busName property
  selectedSeats: string = '';
  passenger = {
    name: '',
    age: '',
    mobile: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.busId = +params['busId'] || 0;
      this.selectedSeats = params['seats'] || '';
      this.busName = params['busName'] || ''; // Capture the bus name
      this.passenger.name = params['name'] || '';
      this.passenger.age = params['age'] || '';
      this.passenger.mobile = params['mobile'] || '';
    });
  }

  confirmBooking(): void {
    // Handle the final booking logic here
    alert('Booking confirmed!');

    // Redirect to a confirmation page or homepage
    this.router.navigate(['/']);
  }
}
