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
import { AddEleveComponent } from './add-eleve/add-eleve.component';
import { DetailAttenteDonComponent } from './detail-attente-don/detail-attente-don.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddDonComponent } from './add-don/add-don.component';
import { DetailAttenteDonEcoleComponent } from './detail-attente-don-ecole/detail-attente-don-ecole.component';
import { DetaileleveEcoleComponent } from './detaileleve-ecole/detaileleve-ecole.component';
import { DetailecoleAttenteComponent } from './detailecole-attente/detailecole-attente.component';
import { DetailDonConfirmeComponent } from './detail-don-confirme/detail-don-confirme.component';
import { DetailDemandeConfirmeEcoleComponent } from './detail-demande-confirme-ecole/detail-demande-confirme-ecole.component';
import { DetailDemandeConfirmeUserComponent } from './detail-demande-confirme-user/detail-demande-confirme-user.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PdfViewerModule } from 'ng2-pdf-viewer';


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
    AddEleveComponent,
    DetailAttenteDonComponent,
    DetailAttenteDonComponent,
    AddDonComponent,
    DetailAttenteDonEcoleComponent,
    DetaileleveEcoleComponent,
    DetailecoleAttenteComponent,
    DetailDonConfirmeComponent,
    DetailDemandeConfirmeEcoleComponent,
    DetailDemandeConfirmeUserComponent,
    CorbeilleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
