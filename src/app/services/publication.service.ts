import { Injectable } from '@angular/core';
import { Publications } from '../model/publications';

@Injectable()
export class PublicationService {

  private publications: Publications[];

  constructor() {
    this.publications = [
      {
        name: 'Software Engineering',
        typ: 'wissenschaftliches Journal'
      },
      {
        name: 'Software Projekt',
        typ: 'Konferenzbeitrag'
      },
      {
        name: 'Software Projekt',
        typ: 'Buch'
      },
      {
        name: 'Software Projekt',
        typ: 'Herausgeberbuch'
      },
      {
        name: 'Software Projekt',
        typ: 'Magazin'
      }
    ];
  }

  getPublications() {
    return this.publications;
  
   }

   createPublication(publications: Publications) {
   
    this.publications.push(publications);
    
  }

}