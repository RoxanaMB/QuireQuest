import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  user_id: string;
  user_name: string;

  constructor(private usersService: UsersService) {
    this.user_id = '';
    this.user_name = '';

    const token = localStorage.getItem('token');

    if (!token) {
      this.user_id = ''
      this.user_name = '';
    } else {
      this.usersService.getUser(token).subscribe((response: {user_id: string, user_name: string}) => {
        this.user_id = response.user_id;
        this.user_name = response.user_name;
      });
    }

  }

}
