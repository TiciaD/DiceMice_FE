import { Routes } from '@angular/router';
import { UnauthorizedComponent } from './features/unauthorized/unauthorized.component';
import { HomeComponent } from './features/home/home.component';
import { ViewAllMicePageComponent } from './features/mice/pages/view-all-mice-page/view-all-mice-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'characters', component: CharacterListComponent, canActivate: [AuthGuard] },
  { path: 'mice', component: ViewAllMicePageComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
];
