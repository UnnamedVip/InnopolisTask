import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransferService } from '../service/transfer.service'

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { ChatComponent } from './chat/chat.component';
import { AutofocusDirective } from './autofocus.directive';

const routes: Routes = [
  {path: '', redirectTo: 'info', pathMatch: 'full'},
  { path: 'info', component: InfoComponent }, 
  { path: 'chat', component: ChatComponent }, 
];

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ChatComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: false}),
    FormsModule,
    HttpClientModule
  ],
  providers: [TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
