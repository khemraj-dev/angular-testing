import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface DataResponse {
  userId: string;
  id: string;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: HttpClient) { }

  get_all_data(_url: string): Observable<any> {
    return this.get_all(_url);
  }

  get_all(_url: string) {
    return this.http.get<DataResponse>(_url).pipe(map((response: any) => response.json()));
  }
}
