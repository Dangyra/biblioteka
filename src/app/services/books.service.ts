import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../modals/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  public addBook(item:Book){
    this.http.post("https://biblioteka-edf6e-default-rtdb.europe-west1.firebasedatabase.app/books.json", item).subscribe(()=>{});
  }

  public loadBooks(){
    return this.http.get<{[key:string]:Book}>("https://biblioteka-edf6e-default-rtdb.europe-west1.firebasedatabase.app/books.json")
  }
}
