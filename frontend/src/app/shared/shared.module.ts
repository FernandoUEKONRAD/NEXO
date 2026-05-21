import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Componentes reutilizables (ButtonComponent, ModalComponent, LoaderComponent, NavbarComponent)
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    // Los componentes reutilizables irán aquí
  ]
})
export class SharedModule { }
