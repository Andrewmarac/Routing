import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const headers = new HttpHeaders({Authorization: environment.oauthToken});
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
        'Bearer BQAE29zLqI-40hCw-BHc2DYDVZ8ak9RTaKELPSB9fHkFTVGeafijGue09q9Q1SiLa2Tx_oPPLlAogW3LGAuMn3ChyKQ9eeZFgM-C6shxfhE98OJH9h22sZtgMvP-EdfmEeHRCi3RTTI-M8VLcZK2dvozYLlYTpw'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
   getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAE29zLqI-40hCw-BHc2DYDVZ8ak9RTaKELPSB9fHkFTVGeafijGue09q9Q1SiLa2Tx_oPPLlAogW3LGAuMn3ChyKQ9eeZFgM-C6shxfhE98OJH9h22sZtgMvP-EdfmEeHRCi3RTTI-M8VLcZK2dvozYLlYTpw'
    });

    return this.http.get(url, { headers });
  }
  getArtist(id : string){
    const url = `https://api.spotify.com/v1/artists/${id}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAKLjFhm4I01eRc3mY6xIC5ghbZyEFhfr0FiUdWKX5zmlvMCgmk3pVrs48FQ6VjBHWkJRFSDgqCcIt2IHp975lwALpiOY4818AZjFiwTtHYVJ3RuF6lUFvqDyU7lcveckTtnSFpv4x9VY75ynzi8uYyw1zFaEI'
    });
    return this.http.get(url, { headers });
  }
  getAlbum(id : string){
    const url = `https://api.spotify.com/v1/albums/${id}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBcuM-B4lBooTgwWf8na-f8r3gERkBiIKHmwM0u8BpZKJ714bWZ4wcyXUsdvM7n2aRce27k8t0FIEJXAQs4QKum4E0DekqOAIeSFANYbzV8ok7El2x6ZmJUMQvmSvlSw36Omq9YGaSBaQJrErQD0BnhHUxN6K0'
    });

    return this.http.get(url, { headers });
  }
}
