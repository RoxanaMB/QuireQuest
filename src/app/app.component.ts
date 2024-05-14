import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'QuireQuest'

  ngOnInit() {
    // Check for the presence of a user token
    const token = localStorage.getItem('token')
    if (token) {
      localStorage.setItem('authenticated', 'true')
    }
  }
}
