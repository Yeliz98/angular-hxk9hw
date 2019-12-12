import { Injectable } from '@angular/core';
import { Projects } from '../model/projects';

@Injectable()
export class ProjectService {
  private projects: Projects[];
  constructor() { 
    this.projects = [
      { name: 'Learning Angular step by step',
        members:'Yeliz Özay',
        sponsor:'Hochschule Flensburg',
        description:'Im Web Engineering spielt Angular eine große Rolle, da das Capstone Projekt öffentlich. Daher wird auf das Projekt "Learning Angular step by step sehr viel aufmerksamkeit geschenkt. '
      },
      {
        name: 'Capstone',
        members:'Kai Petersen',
        sponsor:'Hochschule Flensburg',
        description:'Dieses Projekt wird von Prof. Dr. Petersen geleitet und von den Mitgliedern erforscht'
      },
      {
        name: 'HTML & CSS',
        members:'Yeliz Özay',
        sponsor:'Kai Petersen',
        description:'In diesem Projekt wird auf die Programmierumgebung viel Wert gelegt. '
      }
    ];
  }

  getProjects() {
    return this.projects;
  }

  createProjects(projects: Projects) {
   
    this.projects.push(projects);
    
  }

}