import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export const ipAddress = "http://192.168.0.16:8080";

export class Artworks {
  id: number;
  name: string;
  author: string;
  country: string;
  media: [MediaApi];
}


export class MediaApi {
  id: number;
  displayName: string;
  fileName: string;
  fileType: string;
  extension: string;
}
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private http: HttpClient) { }

  getArtworksFromBackEnd() {
    return this.http.get(ipAddress + "/artworks");
  }
}
