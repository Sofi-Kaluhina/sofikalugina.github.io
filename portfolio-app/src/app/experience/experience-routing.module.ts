import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceDetailComponent }  from './experience-detail.component';

const experienceRoutes: Routes = [
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
