import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Experience, ExperienceService }  from './experience.service';

@Component({
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css'],
  providers: [ExperienceService]
})

export class ExperienceDetailComponent implements OnInit {

  experience: Experience;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ExperienceService
  ) {}

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getExperience(+params['id']))
      .subscribe((experience: Experience) => this.experience = experience);
  }

  gotoExperiences() {
    let experienceId = this.experience ? this.experience.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/experience', { id: experienceId, foo: 'foo' }]);
  }
}
