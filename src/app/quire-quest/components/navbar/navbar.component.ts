import { Component, Output, EventEmitter } from '@angular/core';
import { ModelsService } from '../../services/models.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() dataChange = new EventEmitter();
  models: { id: string, name: string }[];

  constructor(public modelsService: ModelsService) {
    this.models = [];
    this.getModels();
  }

  getModels() {
    this.modelsService.getModels().subscribe((response: { id: string, name: string }[] ) => {
      this.models = response;
    });
  }

  onModelChange(event: any) {
    if (event.target && event.target.value) {
      this.dataChange.emit(event.target.value);
    } else {
      console.error("No se ha seleccionado ningún modelo.");
    }
  }
}
