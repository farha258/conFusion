import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LeaderService } from '../services/leader.service';
import { ActivatedRoute } from '@angular/router';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor( private leaderService: LeaderService) { }

  ngOnInit() {
    this.leaderService.getLeaders()
      .then(leaders => this.leaders = leaders);
    console.log(this.leaders);
  }

}
