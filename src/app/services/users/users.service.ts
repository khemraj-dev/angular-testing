import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GenericService } from '../../shared/generic.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<object> = [  // Add employee object
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      pokemon: 'Blastoise'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      pokemon: 'Venusaur'
    },
    {
      id: '4',
      name: 'Adam',
      role: 'Designer',
      pokemon: 'Yoshi'
    }
  ];
  constructor(private gs: GenericService) { }
  _url = 'http://jsonplaceholder.typicode.com/posts';

  all(): Observable<Array<object>> {
    return of(this.users);
  }

  findOne(id: string): Observable<object> {
    const user = this.users.find((u: any) => {
      return u.id === id;
    });
    return of(user);
  }

  get_all_posts(callback: Function) {
    this.gs.get_all_data(this._url).subscribe(res => callback(this._flatten(res)));
  }

  private _flatten(res) {
    return res;
  }

}
