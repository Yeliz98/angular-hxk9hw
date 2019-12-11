import { Component, OnInit } from '@angular/core';
import { Publications } from '../../model/publications';
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent {

  public message = '';
  constructor(private publicationService: PublicationService) { }

  createPublication(publicationsForm) {
    if (publicationsForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const publications: Publications = publicationsForm.value.publications;
      this.publicationService.createPublication(publications);
    }
  }

}