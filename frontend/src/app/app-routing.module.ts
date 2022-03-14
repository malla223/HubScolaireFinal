import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'acceuil',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./pages/acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'demande/:id_don',
    loadChildren: () => import('./pages/demande/demande.module').then( m => m.DemandePageModule)
  },
  {
    path: 'attente/:id_don',
    loadChildren: () => import('./pages/attente/attente.module').then( m => m.AttentePageModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./pages/apropos/apropos.module').then( m => m.AproposPageModule),
  },
  {
    path: 'demande-confirmer/:id_demande',
    loadChildren: () => import('./pages/demande-confirmer/demande-confirmer.module').then( m => m.DemandeConfirmerPageModule)
  },   
  {
    path: 'detail-eleve/:id_demande',
    loadChildren: () => import('./pages/detail-eleve/detail-eleve.module').then( m => m.DetailElevePageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'resgi-ecole',
    loadChildren: () => import('./pages/resgi-ecole/resgi-ecole.module').then( m => m.ResgiEcolePageModule)
  },
  {
    path: 'edit-profil-ecole',
    loadChildren: () => import('./pages/edit-profil-ecole/edit-profil-ecole.module').then( m => m.EditProfilEcolePageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
