import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/hostApiConnect/environment.development';
import { Catalog } from './types/catalog';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCatalogs() {
    const { apiUrl } = environment;

    return this.http.get<Catalog[]>(`${apiUrl}/Catalogs`);
  }

  getPosts(limit?: Number) {
    const { apiUrl } = environment;
    let url = `${apiUrl}/posts`;

    if(limit){
      url += `?limit=${limit}`;
    }

    return this.http.get<Post[]>(url);
  }
}