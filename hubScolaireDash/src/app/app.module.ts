import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { GestionDonComponent } from './gestion-don/gestion-don.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { LoginComponent } from './login/login.component';
import { EditDonComponent } from './edit-don/edit-don.component';
import { EditEcoleComponent } from './edit-ecole/edit-ecole.component';
import { EditEleveComponent } from './edit-eleve/edit-eleve.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { GestionEcoleComponent } from './gestion-ecole/gestion-ecole.component';
import { GestionEleveComponent } from './gestion-eleve/gestion-eleve.component';
import { DetailAdminComponent } from './detail-admin/detail-admin.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { DetailDonComponent } from './detail-don/detail-don.component';
import { DetailEcoleComponent } from './detail-ecole/detail-ecole.component';
import { DetailEleveComponent } from './detail-eleve/detail-eleve.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { MpOublierComponent } from './mp-oublier/mp-oublier.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';
import { GestionNiveauComponent } from './gestion-niveau/gestion-niveau.component';
import { EditNiveauComponent } from './edit-niveau/edit-niveau.component';
import { DetailNiveauComponent } from './detail-niveau/detail-niveau.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { AddEleveComponent } from './add-eleve/add-eleve.component';
import { AddNiveauComponent } from './add-niveau/add-niveau.component';
import { DetailAttenteDonComponent } from './detail-attente-don/detail-attente-don.component';
import { AddEcoleComponent } from './add-ecole/add-ecole.component';
import { AddDonComponent } from './add-don/add-don.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    GestionAdminComponent,
    AccueilComponent,
    GestionUtilisateurComponent,
    GestionDonComponent,
    EditAdminComponent,
    LoginComponent,
    EditDonComponent,
    EditEcoleComponent,
    EditEleveComponent,
    EditUserComponent,
    GestionEcoleComponent,
    GestionEleveComponent,
    DetailAdminComponent,
    DetailUserComponent,
    DetailDonComponent,
    DetailEcoleComponent,
    DetailEleveComponent,
    ProfilComponent,
    RegisterComponent,
    MpOublierComponent,
    GestionCategorieComponent,
    EditCategorieComponent,
    DetailCategorieComponent,
    GestionNiveauComponent,
    EditNiveauComponent,
    DetailNiveauComponent,
    AddCategoriesComponent,
    AddEleveComponent,
    AddNiveauComponent,
    DetailAttenteDonComponent,
    AddEcoleComponent,
    AddDonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
