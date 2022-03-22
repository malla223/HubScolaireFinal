import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddDonComponent } from './add-don/add-don.component';
import { AddEleveComponent } from './add-eleve/add-eleve.component';
import { DetailAdminComponent } from './detail-admin/detail-admin.component';
import { DetailAttenteDonEcoleComponent } from './detail-attente-don-ecole/detail-attente-don-ecole.component';
import { DetailAttenteDonComponent } from './detail-attente-don/detail-attente-don.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';
import { DetailDemandeConfirmeEcoleComponent } from './detail-demande-confirme-ecole/detail-demande-confirme-ecole.component';
import { DetailDemandeConfirmeUserComponent } from './detail-demande-confirme-user/detail-demande-confirme-user.component';
import { DetailDonConfirmeComponent } from './detail-don-confirme/detail-don-confirme.component';
import { DetailDonComponent } from './detail-don/detail-don.component';
import { DetailEcoleComponent } from './detail-ecole/detail-ecole.component';
import { DetailEleveComponent } from './detail-eleve/detail-eleve.component';
import { DetailNiveauComponent } from './detail-niveau/detail-niveau.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { DetailecoleAttenteComponent } from './detailecole-attente/detailecole-attente.component';
import { DetaileleveEcoleComponent } from './detaileleve-ecole/detaileleve-ecole.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { EditDonComponent } from './edit-don/edit-don.component';
import { EditEcoleComponent } from './edit-ecole/edit-ecole.component';
import { EditEleveComponent } from './edit-eleve/edit-eleve.component';
import { EditNiveauComponent } from './edit-niveau/edit-niveau.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { GestionDonComponent } from './gestion-don/gestion-don.component';
import { GestionEcoleComponent } from './gestion-ecole/gestion-ecole.component';
import { GestionEleveComponent } from './gestion-eleve/gestion-eleve.component';
import { GestionNiveauComponent } from './gestion-niveau/gestion-niveau.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { LoginComponent } from './login/login.component';
import { MpOublierComponent } from './mp-oublier/mp-oublier.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'gestionAdmin',
    component: GestionAdminComponent,
  },
  {
    path: 'accueil',
    component: AccueilComponent,
},
{
  path: 'gestionUtilisateur',
  component: GestionUtilisateurComponent,
},
{
  path: 'gestionDon',
  component: GestionDonComponent,
},
{
  path:'editAdmin/:id_admin',
  component: EditAdminComponent,
},
{
  path:'editDon',
  component: EditDonComponent,
},
{
  path:'editecole/:id_ecole',
  component: EditEcoleComponent
},
{
  path:'editeleve',
  component: EditEleveComponent,
},
{
  path:'edituser',
  component: EditUserComponent,
},
{
  path:'gestionecole',
  component: GestionEcoleComponent,
},
{
  path:'gestioneleve',
  component: GestionEleveComponent,
},
{
  path:'detailadmin/:id_admin',
  component: DetailAdminComponent,
},
{
  path:'detaildon/:id_don',
  component: DetailDonComponent,
},
{
  path:'detailAttentedon/:id_demande',
  component: DetailAttenteDonComponent
},
{
  path:'detailecole/:id_ecole',
  component: DetailEcoleComponent
},
{
  path:'detail-ecole-attente/:id_ecole',
  component: DetailecoleAttenteComponent
},
{
  path:'detaileleve/:id_demande',
  component: DetailEleveComponent
},
{
  path:'detaileleveecole/:id_demande',
  component: DetaileleveEcoleComponent
},
{
  path:'detailcategorie/:id_cat',
 component: DetailCategorieComponent
},
{
  path:'detailDemandeCE/:id_demande',
 component: DetailDemandeConfirmeEcoleComponent
},
{
  path:'detailDemandeCU/:id_demande',
 component: DetailDemandeConfirmeUserComponent
},
{
  path:'detailuser/:id_user',
  component: DetailUserComponent
},
{
  path:'profil',
  component: ProfilComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'mp-oublier',
  component: MpOublierComponent
},  
{
   path:'gestioncategorie',
  component:GestionCategorieComponent
}, 
{
  path:'editcategorie/:id_cat',
 component:EditCategorieComponent
},
{
  path:'gestionNiveau',
 component: GestionNiveauComponent
},
{
  path:'editNiveau/:id_niveau',
 component: EditNiveauComponent
},
{
  path:'detailNiveau/:id_niveau',
 component: DetailNiveauComponent
},
{
  path:'detailDonConfirme/:id_don',
 component: DetailDonConfirmeComponent
},
{
  path:'addeleve',
 component: AddEleveComponent
},
{
  path:'adddon',
 component: AddDonComponent
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'attente-ecole/:id_demande',
  component: DetailAttenteDonEcoleComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
