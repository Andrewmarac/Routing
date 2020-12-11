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
        'Bearer BQCXmLxPqOW9jgwdG8v0okzCej7N9MBaxm2WoBdPxd98ExFk4Br0gg5h-4L8uAMqxvH0IoVYInrJ7XIVIC6NKRRelH_QyTAWkqDX__OLrOzhAj9sAkjTCUquaIIuX8kpWWkAI6yivl36KEmhv2u42AnOjebFprA'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
