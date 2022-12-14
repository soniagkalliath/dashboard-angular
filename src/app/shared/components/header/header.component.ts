import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() isSideBarToggle = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggle(){
    this.isSideBarToggle.emit()
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      )
    },300)
  }
}
