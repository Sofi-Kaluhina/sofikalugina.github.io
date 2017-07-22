import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';

import {About, AboutService} from './about.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {
  public about: About;

  constructor(private service: AboutService) { }

  ngOnInit() {
    this.service.getAbout().subscribe(
      res => {this.about = res}, err => {console.log(err)}
    )

    //this.service.getAbout((data) => {
    //  this.about = data;
    //  console.log(data);
    //});
  }

}
