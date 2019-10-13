import { Component, OnInit } from '@angular/core';
import {

    trigger, state, style, transition, animate

} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('sideMenuAnime', [
        state('close', style({width: '0px', visibility: 'hidden'})),
        state('open', style({width: '200px'})),

        transition('open => close', animate('300ms ease-in')),
        transition('close => open', animate('300ms ease-out'))
    ]),
    trigger('mainContainerAnime', [
        state('close', style({marginLeft: '0px'})),
        state('open', style({marginLeft: '200px'})),

        transition('open => close', animate('300ms ease-in')),
        transition('close => open', animate('300ms ease-out'))
    ])
]
})
export class HeaderComponent implements OnInit {
    openClose: string = 'open';

    hideAndShow(): void {

        this.openClose = (this.openClose === 'open') ? 'close' : 'open';
    }

  constructor() { }

  ngOnInit() {

  }

}