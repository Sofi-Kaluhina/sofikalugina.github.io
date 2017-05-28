import { Injectable } from '@angular/core';


interface Company {
  name: string,
  start: Date,
  end: Date
}

export class Experience implements Company{
  name: string;
  start: Date;
  end: Date;

  constructor(
    public id: number,
    public companyName: string,
    public companyStart: Date,
    public companyEnd: Date,
    public responsibilityShort: string,
    public responsibilityFull: string
  ) {
    this.name = companyName;
    this.start = companyStart;
    this.end = companyEnd;
  }
}

let EXPERIENCE: Experience[];
EXPERIENCE = [
  new Experience(
    1,
    'BUlavka',
    new Date('2016-05-22T00:00:00'),
    new Date('2016-12-27T00:00:00'),
    'frontend',
    'frontend bla bla bla'
  ),
  new Experience(
    2,
    'Roga & Kopyta LTD',
    new Date('2017-01-12T00:00:00'),
    new Date(),
    'frontend',
    'frontend bla bla bla'
  )
];

let experiencePromise = Promise.resolve(EXPERIENCE);

@Injectable()
export class ExperienceService {

  getExperiences() {
    return experiencePromise;
  }

  getExperience(id: number | string) {
    return experiencePromise.then(
      experience => experience.find(experience => experience.id === +id)
    )
  }
}
