import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{

  createDb(){
    let bookdetails=[
      {id:100, name: 'sachindra singh', category:'Angular'},
      {id:101, name: 'masum',category:'Angular'},
      {id:102, name: 'sayon', category:'Angular'}
    ];
    return {books: bookdetails};
  }
}
