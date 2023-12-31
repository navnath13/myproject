import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { AuthComponent } from './auth.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    ReactiveFormsModule

  ]
})
export class AuthModule { }
