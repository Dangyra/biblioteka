import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public count=0;

  constructor(private booksService:BooksService){
    this.booksService.onBooksCountChange.subscribe(()=>{
      this.count=this.booksService.getCount();
    });
    


  }

}
