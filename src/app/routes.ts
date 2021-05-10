import {Routes} from '@angular/router'
import { AccountComponent } from './account/account.component';
import { EnglerComponent } from './engler/engler.component';
import { GrammarComponent } from './grammar/grammar.component';

import { MenuComponent } from './menu/menu.component';
import { MessformComponent } from './messform/messform.component';
import { QuizComponent } from './quiz/quiz.component';
import { SignUpComponent } from './sign-up/sign-up.component';



export const appRoutes : Routes =[
    {path:'menu', component: MenuComponent},
    {path:'quiz', component: QuizComponent},
    {path: 'engler', component: EnglerComponent},
    {path: 'messform', component: MessformComponent},
    {path: 'grammar', component: GrammarComponent},
    {path: 'account', component: AccountComponent},
    {path: 'sign-up', component: SignUpComponent}
];