import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Tour} from "../../model/Tour";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Tour[]> {
    return this.http.get<Tour[]>(API_URL + '/tuors');
  }

  saveTour(tour: Tour): Observable<Tour> {
    return this.http.post<Tour>(API_URL + '/tuors', tour);
  }

  findById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${API_URL}/tuors/${id}`);
  }

  updateTour(id: number, tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`${API_URL}/tuors/${id}`, tour);
  }

  deleteTour(id: number): Observable<Tour> {
    return this.http.delete<Tour>(`${API_URL}/tuors/${id}`);
  }
}
