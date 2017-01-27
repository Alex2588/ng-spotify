import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Artist } from '../../artist';
import { Album } from '../../album';

import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})

export class ArtistComponent implements OnInit{
    private id: string;
    private artist: Artist[];
    private albums: Album[];

    constructor(
        private route: ActivatedRoute,
        private spotifyService: SpotifyService
    ){}

    ngOnInit(){
        this.route.params.map(
            params => params['id']
        )
        .subscribe(
            id => {
                this.spotifyService.getArtist(id).subscribe(
                    artist => this.artist = artist
                );

                this.spotifyService.getAlbums(id).subscribe(
                    album => this.albums = album.items
                );
            }
        )
    }
}