import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';
import { ReviewTicketComponent } from './review-ticket/review-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bus-list', component: BusListComponent },
    { path: 'seat-selection', component: SeatSelectionComponent },
    { path: 'passenger-info', component: PassengerInfoComponent },
    { path: 'review-ticket', component: ReviewTicketComponent },
    { path: 'view-ticket', component: ViewTicketComponent },
];
