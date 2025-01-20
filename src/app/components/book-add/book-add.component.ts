import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../modals/books';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-books-add',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingComponent],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BooksAddComponent {

  public bookName:string|null=null;
  public author:string|null=null;
  public year:string|null=null;

  public isLoading=false;
  public isError=false;
  

  public constructor(private booksService:BooksService, private router:Router){

  }

  public addNewBook(f:NgForm){
    
   
      
      const tmp:Book={
        bookName:f.form.value.bookName,
        author:f.form.value.author,
        year:f.form.value.year,
        id:null
      };
      this.isLoading=true;
      this.booksService.addBook(tmp).subscribe({
        next:()=>{
          this.isLoading=false;
          this.isError=false;
          this.router.navigate(["/list"]);
        },
        error:()=>{
          this.isError=true;
          this.isLoading=false;
        }
      });
    
  }

}
