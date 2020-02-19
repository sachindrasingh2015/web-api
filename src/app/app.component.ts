import { Component } from '@angular/core';
// import { PreloadService } from './preload.service';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-api';
  softbook:Book[];
  constructor(private obj:BookService) {}

  ngOnInit(){
    this.getsoftbooks();
  }
  getsoftbooks(){
    this.obj.getBookFromStore().subscribe(books=>this.softbook=books);
  }
}
