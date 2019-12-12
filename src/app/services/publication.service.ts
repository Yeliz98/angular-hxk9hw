import { Injectable } from '@angular/core';
import { Publications } from '../model/publications';

@Injectable()
export class PublicationService {

  private publications: Publications[];

  constructor() {
    this.publications = [
      {
        name: 'Software Engineering',
        typ: 'wissenschaftliches Journal',
        assignment: 'Learning Angular step by step'
      },
      {
        name: 'Software Projekt',
        typ: 'Konferenzbeitrag',
        assignment: 'Capstone'
      },
      {
        name: 'Software Projekt',
        typ: 'Buch',
        assignment: 'HTML & CSS'
      },
    ];
  }

  getPublications() {
    return this.publications;
  
   }

   createPublication(publications: Publications) {
   
    this.publications.push(publications);
    
  }

}