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
        'Bearer BQBz9y3SW2Zy0DkUaFEBc6bESCy7aQKKgsLUZg62wNfCYOFQBIn30stXCA7eJVjtGo6axYKoN4qYfTpLFTjz6weOxJpDrYuEqPW9VjJBYii3LxZh1UIjlB_1Z0_AlY9Xm1OYyLEDD0vWmJ5TvlmFdCoHK8tm'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
   getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBz9y3SW2Zy0DkUaFEBc6bESCy7aQKKgsLUZg62wNfCYOFQBIn30stXCA7eJVjtGo6axYKoN4qYfTpLFTjz6weOxJpDrYuEqPW9VjJBYii3LxZh1UIjlB_1Z0_AlY9Xm1OYyLEDD0vWmJ5TvlmFdCoHK8tm'
    });

    return this.http.get(url, { headers });
  }
}
