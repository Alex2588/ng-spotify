import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})

export class SearchComponent{
    private searchString: string;
    private searchResult: Artist[];

    constructor(private spotifyService: SpotifyService){}

    searchMusic(){
        this.spotifyService.searchMusic(this.searchString).subscribe(
            result => this.searchResult = result.artists.items
        )
    }
}