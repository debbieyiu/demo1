import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title = "The Deb Deb Web";

  @Output()
  titleChanged = new EventEmitter();

  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  changeTitle(evt:MouseEvent) {
    this.counter ++;
    this.title = "The Deb Deb Deb Web";
    console.log(evt);
    console.log(evt.clientX);

    this.titleChanged.emit(this.title);
  }

  is_h3_hightlight = false;

  getStyle(){
    return { 'background-color' : 'blue'}
  }
}
