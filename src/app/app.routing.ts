import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'geocache-list',
    component: GeocacheListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
