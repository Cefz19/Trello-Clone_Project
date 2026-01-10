import { Routes } from '@angular/router';
import { LoginComponet } from './pages/login-componet/login-componet';
import { BoardsComponent } from './pages/boards-component/boards-component';
import { BoardComponent } from './pages/board-component/board-component';

export const routes: Routes = [
    {
        path: 'login', 
        component: LoginComponet,
    },
    {
        path: 'boards', 
        component: BoardsComponent,
    },
    {
        path: 'board', 
        component: BoardComponent,
    },
];
