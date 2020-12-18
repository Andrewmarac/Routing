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
        'Bearer BQBvWU5xJljm-HSkQxGST2BVIqZQlZVKw09sU9XKnuUzzEZrbXydhmaqEiVsvoAaTjktK1oanl1c1joamTEF4vvnM0EsYMEGuM49f7yHY8YrWnk5TRTwUV3oOsyQ1aESfhG5Gaaf2qZW0mJnZCRGnI-GkNC9QMY'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
   getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAUMtc6M_X-2rLSZyGeCSjp86EDI2_xLj9AjaOR0V5Az8FnVnu30dyISsUfAIxKSlXC3fJFrx3bRPFHDuYOdbGTY2eauCv_G2JDOp7wYCTe88ajUWIfQU1f_mpTlvgShFfgYelYG2aANauRyaQ1T3f0rCOECFs'
    });

    return this.http.get(url, { headers });
  }
  getArtist(id : string){
    const url = `https://api.spotify.com/v1/artists/${id}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAUMtc6M_X-2rLSZyGeCSjp86EDI2_xLj9AjaOR0V5Az8FnVnu30dyISsUfAIxKSlXC3fJFrx3bRPFHDuYOdbGTY2eauCv_G2JDOp7wYCTe88ajUWIfQU1f_mpTlvgShFfgYelYG2aANauRyaQ1T3f0rCOECFs'
    });
    return this.http.get(url, { headers });
  }
  getAlbum(id : string){
    const url = `https://api.spotify.com/v1/albums/${id}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAUMtc6M_X-2rLSZyGeCSjp86EDI2_xLj9AjaOR0V5Az8FnVnu30dyISsUfAIxKSlXC3fJFrx3bRPFHDuYOdbGTY2eauCv_G2JDOp7wYCTe88ajUWIfQU1f_mpTlvgShFfgYelYG2aANauRyaQ1T3f0rCOECFs'
    });

    return this.http.get(url, { headers });
  }
}
