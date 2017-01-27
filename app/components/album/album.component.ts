import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { Album } from '../../album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})

export class AlbumComponent implements OnInit{
    private id: string;
    private album: Album[];

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
                this.spotifyService.getAlbum(id).subscribe(
                    album => this.album = album
                )
            }
        )
    }
}