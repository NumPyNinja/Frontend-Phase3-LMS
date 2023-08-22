import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { UserService } from 'src/app/user/user.service';
import { BatchService } from 'src/app/batch/batch.service';
import { ProgramService } from 'src/app/program/program.service';

@Component({
  selector: 'app-widgetdata',
  templateUrl: './widgetdata.component.html',
  styleUrls: ['./widgetdata.component.scss'],
  //providers: [DashboardService]
})
export class WidgetdataComponent implements OnInit {

  allUserC: number;
  allBatchC: number;
  allProgramC: number;

  constructor(private dashboardService: DashboardService,
    private userService: UserService,
    private batchService: BatchService,
    private programService: ProgramService) {

    this.userService.getAllUsers().subscribe(allU => {
      this.allUserC = allU.length;
    })

    this.batchService.getBatchList().subscribe(allB => {
      this.allBatchC = allB.length;
    })

    this.programService.getPrograms().subscribe(allP => {
      this.allProgramC = allP.length;
    })
  }

  ngOnInit(): void {
  }

}


