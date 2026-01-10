import { Routes } from '@angular/router';
import { LoginComponet } from './pages/login-componet/login-componet';
import { BoardsComponent } from './pages/boards-component/boards-component';

export const routes: Routes = [
    {
        path: 'login', 
        component: LoginComponet,
    },
    {
        path: 'boars', 
        component: BoardsComponent,
    },
];
