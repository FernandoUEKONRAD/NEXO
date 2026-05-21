import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EventosRoutingModule } from './eventos-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    // Componentes de eventos irán aquí
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    EventosRoutingModule,
    SharedModule
  ]
})
export class EventosModule { }
