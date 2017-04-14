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

}
