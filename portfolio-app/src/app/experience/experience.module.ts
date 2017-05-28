import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ExperienceListComponent } from './experience-list.component';
import { ExperienceDetailComponent } from './experience-detail.component';

import { ExperienceService } from './experience.service';

import { ExperienceRoutingModule } from './experience-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExperienceRoutingModule
  ],
  declarations: [
    ExperienceListComponent,
    ExperienceDetailComponent
  ],
  providers: [ ExperienceService ]
})
export class ExperienceModule {}
