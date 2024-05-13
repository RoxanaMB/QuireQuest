import { Component, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ChatService } from '../../services/chat.service';
import { ConversationsService } from '../../services/conversations.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent {
  @Output() data_change = new EventEmitter();

  user_id: string;
  user_name: string;
  conversations: [
    {
      id: string;
      chat_1: string;
      chat_2: string;
      created_at: string;
      title: string | null;
      user: string;
    }
  ];

  conversations_today: [
    {
      id: string;
      chat_1: string;
      chat_2: string;
      created_at: string;
      title: string | null;
      user: string;
    }
  ];

  conversations_yesterday: [
    {
      id: string;
      chat_1: string;
      chat_2: string;
      created_at: string;
      title: string | null;
      user: string;
    }
  ];

  conversations_older: [
    {
      id: string;
      chat_1: string;
      chat_2: string;
      created_at: string;
      title: string | null;
      user: string;
    }
  ];

  constructor(
    private usersService: UsersService,
    private chatService: ChatService,
    private conversatioService: ConversationsService
  ) {
    this.user_id = '';
    this.user_name = '';
    this.conversations = [
      {
        id: '',
        chat_1: '',
        chat_2: '',
        created_at: '',
        title: '',
        user: '',
      },
    ];

    this.conversations_today = [
      {
        id: '',
        chat_1: '',
        chat_2: '',
        created_at: '',
        title: '',
        user: '',
      },
    ];

    this.conversations_yesterday = [
      {
        id: '',
        chat_1: '',
        chat_2: '',
        created_at: '',
        title: '',
        user: '',
      },
    ];

    this.conversations_older = [
      {
        id: '',
        chat_1: '',
        chat_2: '',
        created_at: '',
        title: '',
        user: '',
      },
    ];

    const token = localStorage.getItem('token');

    if (!token) {
      this.user_id = '';
      this.user_name = '';
    } else {
      this.usersService
        .getUser(token)
        .subscribe((response: { user_id: string; user_name: string }) => {
          this.user_id = response.user_id;
          this.user_name = response.user_name;

          this.conversatioService
            .getConversations(this.user_id)
            .subscribe((response: any) => {
              this.conversations = response;
              
              this.copyConversations(this.conversations);
            });
        });
    }
  }

  // Funcion que crea un nuevo chat al hacer click en el boton de nuevo chat
  newChat() {
    this.chatService.createChat(this.user_id).subscribe((response: any) => {
      this.chatService.setChatId1(response[0].id);
    });

    this.chatService.createChat(this.user_id).subscribe((response: any) => {
      this.chatService.setChatId2(response[0].id);
    });

    window.location.reload();
  }

  // Función para copiar conversaciones de un objeto a otro
  copyConversations(
    conversations: [
      {
        id: string;
        chat_1: string;
        chat_2: string;
        created_at: string;
        title: string | null;
        user: string;
      }
    ]
  ) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    for (let i = 0; i < conversations.length; i++) {
      const created_at = new Date(conversations[i].created_at);

      if (created_at.getDate() === today.getDate()) {
        this.conversations_today.push(conversations[i]);
      } else if (created_at.getDate() === yesterday.getDate()) {
        this.conversations_yesterday.push(conversations[i]);
      } else {
        this.conversations_older.push(conversations[i]);
      }
    }
  }

  // Función para obtener la conversación seleccionada y mostrarla en la pantalla de chat
  getConversation(conversation_id: string) {
    this.conversatioService
      .getConversation(conversation_id)
      .subscribe((response: any) => {
        this.data_change.emit(response);

        this.chatService.setChatId1(response[0].chat_1);
        this.chatService.setChatId2(response[0].chat_2);
      });
  }

}
