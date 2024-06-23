import { Component } from '@angular/core';

@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrl: './bus-search.component.css'
})
export class BusSearchComponent {
  searchCriteria:any = {
    departureTime: new Date(),
    arrivalTime: new Date(),
    departureLocation: '',
    arrivalLocation: '',
    departureDate : ''
  };
  locations = [
    { value: 'NYC', viewValue: 'New York City' },
    { value: 'LAX', viewValue: 'Los Angeles' },
    { value: 'CHI', viewValue: 'Chicago' },
    { value: 'MIA', viewValue: 'Miami' },
    { value: 'SFO', viewValue: 'San Francisco' }
  ];
  searchResults: string[] = [];

  onSearch(): void {
    console.log('Searching with criteria:', this.searchCriteria);

    this.searchResults = [
      `Bus from ${this.searchCriteria.departureLocation} to ${this.searchCriteria.arrivalLocation} departing at ${this.searchCriteria.departureTime} and arriving at ${this.searchCriteria.arrivalTime}`
    ];
  } 
}
