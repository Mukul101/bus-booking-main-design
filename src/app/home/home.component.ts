import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  from: string = '';
  to: string = '';
  travelDate: string = '';

  constructor(private router: Router) {}

  onSubmit(form: any): void {
    if (form.valid) {
      console.log(`From: ${this.from}, To: ${this.to}, Date: ${this.travelDate}`);

      this.router.navigate(['/bus-list'], {
        queryParams: {
          from: this.from,
          to: this.to,
          travelDate: this.travelDate,
        },
      });
    }
  }
}
