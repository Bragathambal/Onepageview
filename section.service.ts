import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { schemaVal } from './Model/schema.model'

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  constructor(private http: HttpClient) { }

  gerSchemaData(): Observable<schemaVal[]> {
    const schemaUrl = "http://localhost:3000/0";
    return this.http.get<schemaVal[]>(schemaUrl);
  }

  getSectionValue(): Observable<any> {
    const sessionUrl = "http://localhost:3002/0"
    return this.http.get<any>(sessionUrl)
  }
}
