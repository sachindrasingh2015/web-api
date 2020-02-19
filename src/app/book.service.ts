import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl='/api/books';

  constructor( private http:HttpClient){}
  getBookFromStore():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl);
  }
}
