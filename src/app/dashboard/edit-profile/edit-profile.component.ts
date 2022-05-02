import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userInfo = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.userInfo);
  }

}
