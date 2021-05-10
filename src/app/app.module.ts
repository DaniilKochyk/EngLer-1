import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { BackgroundDirective } from './background.directive';
import { MenuComponent } from './menu/menu.component';
import { appRoutes } from './routes';
import { EnglerComponent } from './engler/engler.component';
import { MessformComponent } from './messform/messform.component';
import { GrammarComponent } from './grammar/grammar.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './shared/user.service';



@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    BackgroundDirective,
    MenuComponent,
    EnglerComponent,
    MessformComponent,
    GrammarComponent,
    AccountComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
