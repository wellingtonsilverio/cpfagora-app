import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adblock',
  templateUrl: './adblock.component.html',
  styleUrls: ['./adblock.component.css']
})
export class AdblockComponent implements OnInit {

  constructor() {
    console.log("AdBlock");
  }

  ngOnInit() {
  }

}
