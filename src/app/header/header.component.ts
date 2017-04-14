import { NgModel } from '@angular/forms/src/directives';
import { Title } from '@angular/platform-browser/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "The Deb Deb Web";

  constructor() { }

  ngOnInit() {
  }

  changeTitle(evt:MouseEvent) {
    this.title = "The Deb Deb Deb Web";
    console.log(evt);
    console.log(evt.clientX);
  }



}
