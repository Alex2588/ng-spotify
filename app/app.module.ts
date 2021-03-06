import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

import { SpotifyService } from './services/spotify.service';

@NgModule({
  imports: [ BrowserModule, 
             AppRoutingModule, 
             FormsModule,
             HttpModule
           ],
  declarations: [ AppComponent,
                  SearchComponent,
                  NavbarComponent,
                  AboutComponent,
                  ArtistComponent,
                  AlbumComponent
                 ],
  providers: [ SpotifyService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
