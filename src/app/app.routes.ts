import { Routes } from '@angular/router';
import { LoginComponet } from './pages/login-componet/login-componet';
import { BoardsComponent } from './pages/boards-component/boards-component';
import { BoardComponent } from './pages/board-component/board-component';
import { ScrollComponent } from './pages/scroll-component/scroll-component';
import { TableComponent } from './pages/table-component/table-component';

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
    {
        path: 'scroll', 
        component: ScrollComponent,
    },
    {
        path: 'table', 
        component: TableComponent,
    },
];
