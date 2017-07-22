import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

class Education {
  higher: string;
  courses: string;
  certificate: string;
}

export class About {
  firstName: string;
  secondName: string;
  dateBirth: string;
  location: string;
  languages: string;
  education: Education;
  description: string;
}

@Injectable()
export class AboutService {
  data: any;
  obs: Observable<any>;

  constructor(private http: Http) {
    this.obs = this.http.get('assets/main.json')
      .map((res: Response) => res.json())
      .do(res => this.data = <About>res);
  }

  getAbout() {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.obs;
    }
  }
}
