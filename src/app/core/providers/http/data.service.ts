import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  companies: { id: string; name: string }[] = [];
  persons: { id: string; firstName: string; lastName: string; img: string }[] =
    [];

  constructor() {
    this.companies = [
      { id: '1', name: 'Ravvivo / Finance Team / Michael P. Lucifer' },
      { id: '2', name: 'Ravvivo / Technical Team / Marlyn B. Brown' },
      { id: '3', name: 'Ravvivo / HR Team / David P. Perez' },
      { id: '4', name: 'CashLab / Anna J. Kelley' },
      { id: '5', name: 'CashLab / Brenda J. Soto' },
      { id: '6', name: 'Dovish / Management / Timothy A. Merrow' },
    ];
    this.persons = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Smith',
        img: 'https://example.com/johnsmith.jpg',
      },
      {
        id: '2',
        firstName: 'Jane',
        lastName: 'Doe',
        img: '',
      },
      {
        id: '3',
        firstName: 'Adam',
        lastName: 'Johnson',
        img: 'https://example.com/adamjohnson.jpg',
      },
      {
        id: '4',
        firstName: 'Alice',
        lastName: 'Parker',
        img: '',
      },
      {
        id: '5',
        firstName: 'Kevin',
        lastName: 'Williams',
        img: 'https://example.com/kevinwilliams.jpg',
      },
    ];
  }

  getCompanies() {
    return this.companies;
  }

  getPersons() {
    return this.persons;
  }
}
