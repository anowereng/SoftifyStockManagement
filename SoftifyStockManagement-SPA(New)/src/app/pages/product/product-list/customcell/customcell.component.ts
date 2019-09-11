import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-customcell',
  templateUrl: './customcell.component.html'
})
export class CustomcellComponent implements OnInit {

  data: any;
  params: any; route: string;
  constructor(location: Location, private router: Router ) { }
  
  ngOnInit() {
  }

  agInit(params) {
    this.params = params;
    this.data = params.value;
  }


  execute() {
    console.log(this.router.url);
    console.log(this.params.data);
  }
}
