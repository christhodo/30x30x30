import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '@project-angular/core-data';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'project-angular-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  quote: string = '';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {}
}
