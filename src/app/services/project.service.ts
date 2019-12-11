import { Injectable } from '@angular/core';
import { Projects } from '../model/projects';

@Injectable()
export class ProjectService {
  private projects: Projects[];
  constructor() { 
    this.projects = [
      {
        id: 1,
        name: 'Software Engineering',
        members:'Kai Petersen, Yeliz Özay',
        sponsor:'Otto Mustermann',
        description:'wissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschaflichewissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenz'
      },
      {
       id: 2,
        name: 'Software Projekt',
        members:'Kai Petersen',
        sponsor:'Müller Hansen',
        description:'LehrveranstaltungLehrveranstaltungLehrveranstaltungLehrveranstaltungLehrveranstaltungLehrveranstaltungLehrveranstaltung LehrveranstaltungLehrveranstaltungLehrveranstaltung LehrveranstaltungLehrveranstaltung vLehrveranstaltungLehrveranstaltungLehrveranstaltung'
      },
      {
        id: 3,
        name: 'Software Technik',
        members:'Yeliz Özay',
        sponsor:'Toni Bauer',
        description:'IndustrietageIndustrietageIndustrietageIndustrietage IndustrietageIndustrietageIndustrietage IndustrietageIndustrietageIndustrietage Industrietage'
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