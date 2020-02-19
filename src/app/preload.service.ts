import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class PreloadService{

}



// export class PreloadService implements PreloadingStrategy {
//   preload(route: Route, load:()=>Observable<any>):Observable<any>{
//     if(route.loadChildren && route.loadChildren['preload']){
//       return load();
//     }
//     else{
//       // return observable.valueOf(null);
//     }
//   }
//   constructor() { }
// }
