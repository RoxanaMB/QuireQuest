import { Component, Output, EventEmitter } from '@angular/core';
import { ModelsService } from '../../services/models.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() dataChange = new EventEmitter();
  models: { id: string, name: string, rate: string }[];

  constructor(public modelsService: ModelsService) {
    this.models = [];
    this.getModels();
  }

  getModels() {
    this.modelsService.getModels().subscribe((response: { id: string, name: string, rate: string}[] ) => {
      this.models = this.sortModels(this.formatRate(response));
    });
  }

  onModelChange(event: any) {
    if (event.target && event.target.value) {
      this.dataChange.emit(event.target.value);
    } else {
      console.error("No se ha seleccionado ningún modelo.");
    }
  }

  // Debe tener dos decimales
  formatRate(models: { id: string, name: string, rate: string }[]) {
    return models.map(model => {
      return {
        id: model.id,
        name: model.name,
        rate: parseFloat(model.rate).toFixed(2)
      };
    });
  }

  // Ordena los modelos por nombre
  sortModels(models: { id: string, name: string, rate: string }[]) {
    return models.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
