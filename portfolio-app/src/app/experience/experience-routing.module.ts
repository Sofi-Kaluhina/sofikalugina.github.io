import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceListComponent }    from './experience-list.component';
import { ExperienceDetailComponent }  from './experience-detail.component';

const experienceRoutes: Routes = [
  { path: 'experience',  component: ExperienceListComponent },
  { path: 'experience/:id', component: ExperienceDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(experienceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExperienceRoutingModule { }
