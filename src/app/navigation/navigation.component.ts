import { Component, OnInit } from '@angular/core';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  faSmileBeam = faSmileBeam;
  faMusic = faMusic;
  faAlignJustify = faAlignJustify;
  ngOnInit() {
  }

}
