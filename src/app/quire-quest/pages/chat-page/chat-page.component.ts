import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {

  showProfile() {
    document.addEventListener("DOMContentLoaded", function(event) {
      const updateProductButton = document.getElementById('updateProductButton');
      if (updateProductButton) {
        updateProductButton.click();
      }
    });
  }

}
