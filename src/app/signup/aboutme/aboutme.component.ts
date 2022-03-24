import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  continue(){
    this.router.navigateByUrl('signup/credentials')
  }

}
