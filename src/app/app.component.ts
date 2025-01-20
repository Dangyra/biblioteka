import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookAddComponent } from "./components/book-add/book-add.component";
import { BookListComponent } from "./components/book-list/book-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookAddComponent, BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'biblioteka';
}
