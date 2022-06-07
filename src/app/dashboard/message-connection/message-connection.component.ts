import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-message-connection',
  templateUrl: './message-connection.component.html',
  styleUrls: ['./message-connection.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessageConnectionComponent implements OnInit {

  isSelected = true;
  mesconpage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  openPage( num:number){
         this.mesconpage = num;
  }

}
