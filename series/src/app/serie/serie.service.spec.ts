import { TestBed } from '@angular/core/testing';


import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Serie} from './serie';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private apiUrl = environment.baseUrl + 'series.json';
  constructor(private http: HttpClient) {}

  getSeries() : Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }
}

describe('SerieService', () => {
  let service: SerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
