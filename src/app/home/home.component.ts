import { Component, OnInit } from '@angular/core';
import { ObService } from '../services/ob.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status:boolean = false
  subscription:any;
  constructor(private ObService:ObService,private router:Router) { }

  ngOnInit() {
    this.subscription=this.ObService.status.subscribe(status=>this.status=status)
  }
  go(){
    this.router.navigate(['s'])
  }
}
