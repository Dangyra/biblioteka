import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-books-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingComponent],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BooksEditComponent {
  public id:string;
  public bookName:string|null=null;
  public author:string|null=null;
  public year:string|null=null;


  public isLoading=false;
  public isError=false;

  constructor (private route:ActivatedRoute, private router:Router, private booksService:BooksService){
    this.id=this.route.snapshot.params["id"];
    this.isLoading=true;
    this.booksService.loadBook(this.id).subscribe( (book)=>{
      this.bookName=book.bookName;
      this.author=book.author;
      this.year=book.year;
      this.isLoading=false;

    });
  }

  public updateRecord(f:NgForm){
    console.log(f.form.value);
    
    
      this.isLoading=true;
      this.booksService.updateRecord({
        id:this.id,
        bookName:f.form.value.bookName,
        author:f.form.value.author,
        year:f.form.value.year
      }).subscribe({
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