import { Component, OnInit } from '@angular/core';
import { user } from '../../models/user.model';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newUser: user = new user();
  n:number=0;
  constructor(private UserService: UserService) { }
  ngOnInit(): void {
  }
  SignUp() {
    this.UserService.SignUp(this.newUser).subscribe(user_password => {
      this.newUser.user_password = user_password;
      //משתמש חדש שבוחר סיסמא
      //אם הסיסמא כבר שייכת למישהו אחר חוזר: 0 אם לא:1
      if (user_password ==0)
      {
        console.log("הסיסמא בשימוש יש לבחור סיסמא אחרת");
      }
      else
      {
        console.log("הסיסמא אושרה");
      }
    });
  }

}
