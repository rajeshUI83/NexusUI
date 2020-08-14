import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngb-modal';

import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RouterModule } from '@angular/router';
import { FormInputsCreateComponent } from './form-inputs-create/form-inputs-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    FooterPageComponent,
    MainPageComponent,
    WorkspaceComponent,        
    FormInputsCreateComponent,        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule,
    RouterModule.forRoot([
      { path: "", component: MainPageComponent},
      { path: "workspace", component: WorkspaceComponent},      
      { path: "create", component: FormInputsCreateComponent}              
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
