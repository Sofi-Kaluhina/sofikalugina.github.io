import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

class Stack {
  language: string;
  tech: string[];
  vcs: string[];
  responsibilities: string[];
}

class Images {
  label: string;
  screenshots: string[];
}

class Project {
  name: string;
  start: Date;
  end: Date;
  role: string;
  customer: string;
  purpose: string;
  stack: Stack;
}

export class Experience {
  id: number;
  project: Project;
  images: Images;
}


@Injectable()
export class ExperienceService {
  data: any;
  obs: Observable<any>;

  constructor(private http: Http) {
    this.obs = this.http.get('assets/experience.json')
      .map((res: Response) => res.json())
      .do(res => this.data = <Experience[]>res);
  }

  getExperienceList() {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.obs;
    }
  }

  getExperience(id: number | string) {
    return this.obs.map(
      experience => experience.find(experience => experience.id === +id)
    );
  }
}
