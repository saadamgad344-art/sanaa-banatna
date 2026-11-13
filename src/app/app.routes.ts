import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { BranchPage } from './features/branch-page/branch-page';
import { branchPageResolver } from './features/branch-page/branch-page-resolver';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'سنع بناتنا | حلويات ومعجنات سعودية أصيلة'
  },
  {
    path: 'branches/:slug',
    component: BranchPage,
    resolve: { branch: branchPageResolver }
  },
  { path: '**', redirectTo: '' }
];