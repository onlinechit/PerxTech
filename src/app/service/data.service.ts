import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<any>('assets/data/books.json')
      .toPromise()
      .then(res => <Book[]>res.data);
  }
}
