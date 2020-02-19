import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadService } from './preload.service';
import { TestData } from './testdata';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestData,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('root module load')
  }
}
