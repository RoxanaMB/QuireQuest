import { Component, OnInit } from '@angular/core';
import { ModelsService } from '../../services/models.service';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // model: string | null;
  models: { id: string, name: string }[];

  constructor(public modelsService: ModelsService, public serviceService: ServiceService) {
    // this.model = "";
    this.models = [];
  }

  ngOnInit(): void {
    this.getModels();
    console.log(this.models);
  }

  getModels() {
    this.modelsService.getModels().subscribe((response: { id: string, name: string }[] ) => {
      this.models = response;
    });
  }

  // setModel(model: string) {
  //   this.model = model;
  // }

  onModelChange(event: any) {
    if (event.target && event.target.value) {
      // this.setModel(event.target.value);
      this.serviceService.setIAModel(event.target.value);
    } else {
      // Manejar el caso en el que no hay un valor seleccionado
      console.error("No se ha seleccionado ningún modelo.");
    }
  }
}
