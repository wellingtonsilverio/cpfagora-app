import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  openPlanModal() {
    this.ngxSmartModalService.getModal('PlanProModel').open();
  }

}
