import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';

import { Experience, ExperienceService } from './experience.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-experience',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css'],
  providers: [ExperienceService]
})
export class ExperienceListComponent implements OnInit {
  public experiences: Observable<Experience[]>;
  private selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ExperienceService
  ) { }

  ngOnInit() {
    this.experiences = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getExperienceList();
      });
  }

  isSelected(experience: Experience) { return experience.id === this.selectedId; }

  onSelect(experience: Experience) {
    this.router.navigate(['/experience', experience.id]);
  }
}
