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
        'Bearer BQDTAfDRa1ThoQm7dPk5SZIcuACJ4jHrzF47OIRI3JGjZS-e-WADD5m8kyOpylJsQZU6Ijb67UFgR1IiVU5jg8JRhC1bvrNFciebsQsrqBdyGxo2yq0jmQ1ZbgWAMJr0nfJI91Oxqk5uWqFNXWwT3Pz2KGSmKjE'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
