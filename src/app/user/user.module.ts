import { NgModule } from "@angular/core";

import { userRoutes } from "./user.routes";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";

import { ProfileComponent } from "./profile.component";
import { RouterModule } from "@angular/router";






@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    ProfileComponent,
  ],
  /**
   * Providers are shared between modules so better to add the AUTH
   * provider in app module.
   */
  providers: [],
})
export class UserModule {}
