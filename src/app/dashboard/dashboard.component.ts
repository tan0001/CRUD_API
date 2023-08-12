import { Component, OnInit } from '@angular/core';

import { APIServiceService } from '../api-service.service';
import { Details } from '../Details';
import { Result } from '../Result';
import { StartDialogComponent,DialogData } from '../start-dialog/start-dialog.component';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(
    private apiService: APIServiceService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogData>
  ) { }

  ngOnInit() {
    this.getDetails();
    //this.getResult();
  }

  details?: Details;
  result: Result[] = [];
  res: Result = {
    name: '',
    status: ''
  };
  msg: string = '';
  //i: number = 0;
  //numbers: number[] = [];

  
  
  getDetails() {
    //this.details = this.apiService.getDetails();
    this.apiService.getDetails().subscribe(
      data => {
        this.details = data;
      }
    );
  }

  /*getResult() {
    if (this.details) {
      //this.i = this.details.result.length;
      //this.numbers = Array(this.i).fill().map((x,i)=>i); // [0,1,2,3,4]
      
      /*for (let i=0; i<this.details.result.length; i++) {
        //this.numbers.push(i);
        /*
        var nm = this.details.result[i].name
        var stat = this.details.result[i].status;
        this.res.name = nm;
        this.res.status = stat;
        this.result.push(this.res);
      }
    }
  }*/

  onStart() {
    this.msg = "you clicked start";
    this.dialogRef = this.dialog.open(StartDialogComponent, {
      maxWidth: "800px",
      data: {
        title: "Starting Service",
        message: "Service started"
      }
    });

    // listen to response
    this.dialogRef.afterClosed().subscribe();
  }

  onRestart() {
    this.msg = "you clicked restart";
    this.dialogRef = this.dialog.open(StartDialogComponent, {
      maxWidth: "800px",
      data: {
        title: "Restarting Service",
        message: "Service restarted"
      }
    });

    // listen to response
    this.dialogRef.afterClosed().subscribe();
  }

  onStop() {
    this.msg = "you clicked stop";
    this.dialogRef = this.dialog.open(StartDialogComponent, {
      maxWidth: "800px",
      data: {
        title: "Stopping Service",
        message: "Service stopped"
      }
    });

    // listen to response
    this.dialogRef.afterClosed().subscribe()
  }

  onLogs() {
    this.msg = "you clicked logs";
    this.dialogRef = this.dialog.open(StartDialogComponent, {
      maxWidth: "800px",
      data: {
        title: "Fetching Service Logs",
        message: "Service logs fetched"
      }
    });

    // listen to response
    this.dialogRef.afterClosed().subscribe()
  }
}
