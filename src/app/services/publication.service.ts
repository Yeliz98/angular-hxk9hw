import { Injectable } from '@angular/core';
import { Publications } from '../model/publications';

@Injectable()
export class PublicationService {

  private publications: Publications[];

  constructor() {
    this.publications = [
      {
        id: 1,
        name: 'Software Engineering',
        typ: 'wissenschaftliches Journal'
      },
      {
        id: 2,
        name: 'Software Projekt',
        typ: 'Konferenzbeitrag'
      },
      {
        id: 3,
        name: 'Software Projekt',
        typ: 'Buch'
      },
      {
        id: 4,
        name: 'Software Projekt',
        typ: 'Herausgeberbuch'
      },
      {
        id: 5,
        name: 'Software Projekt',
        typ: 'Magazin'
      }
    ];
  }

  getPublications() {
    return this.publications;
  
   }

}