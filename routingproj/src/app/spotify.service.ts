import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDM4xPlfjFSeAEz1bsm0GGWJUk1mHZttqi7WbGM4ivXJ-ob-lnG5ZBZoTaPMTC6F86_ecutB2eXYPWvAItse5AALMPhKNQp1LE7EOHxGE_rC2AFxG-WVo_I0MUXxUKwzpdGfXY2Mj91cFv73ADHTthYQBQD4K4'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
   getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDM4xPlfjFSeAEz1bsm0GGWJUk1mHZttqi7WbGM4ivXJ-ob-lnG5ZBZoTaPMTC6F86_ecutB2eXYPWvAItse5AALMPhKNQp1LE7EOHxGE_rC2AFxG-WVo_I0MUXxUKwzpdGfXY2Mj91cFv73ADHTthYQBQD4K4'
    });

    return this.http.get(url, { headers });
  }
}
