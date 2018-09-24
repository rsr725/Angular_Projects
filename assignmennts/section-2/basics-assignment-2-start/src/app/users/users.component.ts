import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName = '';
  isUserNameEmpty = true;
  constructor() {
    
   }

  ngOnInit() {
  }
  onChangeValue(event : any) {
    if(event.target.value !== '') {
      this.isUserNameEmpty = false;
    }
  }

  onClickBtn(){
    this.userName = '';
    this.isUserNameEmpty = true;
  }
}
