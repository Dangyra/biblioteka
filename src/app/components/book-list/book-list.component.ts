import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../modals/books';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, RouterLink, LoadingComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BooksListComponent {

  public books:Book[]=[];
  public isLoading=false;
  public isError=false;

  private loadData(){
    this.isLoading=true;
    this.booksService.loadBooks().subscribe( {
      next:(data)=>{
        this.books=data;
        this.isLoading=false;
        this.isError=false;
       },
       error:(data)=>{
        this.isError=true;
        this.isLoading=false;
       }
    });
  }

  public constructor ( private booksService:BooksService){
    this.loadData();

  }

  public deleteBook(id:string|null){
    if (id!=null){
      this.booksService.deleteBook(id).subscribe( ()=>{
        this.loadData();
      });
    }

  }

}