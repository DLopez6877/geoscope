import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';
import { AdminComponent } from './admin/admin.component';
import { CacheDetailComponent } from './cache-detail/cache-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'geocache-list',
    component: GeocacheListComponent
  },
  {
    path: 'cacheList/:id',
    component: CacheDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
