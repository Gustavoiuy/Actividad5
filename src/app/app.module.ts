import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AcercaDNosotrosComponent } from './acerca-dnosotros/acerca-dnosotros.component';
import { HomeComponent } from './home/home.component';
import { AvisodprivComponent } from './avisodpriv/avisodpriv.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { MujerComponent } from './mujer/mujer.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearcComponent } from './crearc/crearc.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CifrarComponent } from './cifrar/cifrar.component';
import { ErrorusuarioComponent } from './errorusuario/errorusuario.component';
import { AgregarusuarioComponent } from './agregarusuario/agregarusuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';

import { CardComponent } from "./card/card.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { MigaspanComponent } from './migaspan/migaspan.component';

import {HttpClientModule} from '@angular/common/http';
import { ImagenPipe } from './pipes/imagen.pipe';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BodyComponent,
        AcercaDNosotrosComponent,
        HomeComponent,
        AvisodprivComponent,
        ContactanosComponent,
        MujerComponent,
        IniciarSesionComponent,
        CrearcComponent,
        CifrarComponent,
        ErrorusuarioComponent,
        AgregarusuarioComponent,
        EditarUsuarioComponent,
        ListarUsuarioComponent,
        CardComponent,
        SidebarComponent,
        MigaspanComponent,
        ImagenPipe,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        MatSliderModule,
        MatAutocompleteModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,



        FormsModule, ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
  
     
        
       
    ]
})
export class AppModule { }
