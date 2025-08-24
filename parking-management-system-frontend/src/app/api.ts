import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private http: HttpClient) { }

  getHello(): Observable<any> {
    return this.http.get('/api/hello', { responseType: 'text' });
  }

  getParkingSpots(): Observable<any[]> {
    return this.http.get<any[]>('/api/parking-spots');
  }

  createParkingSpot(parkingSpot: any): Observable<any> {
    return this.http.post('/api/parking-spots', parkingSpot);
  }

  getParkingSpot(id: number): Observable<any> {
    return this.http.get(`/api/parking-spots/${id}`);
  }

  updateParkingSpot(id: number, parkingSpot: any): Observable<any> {
    return this.http.put(`/api/parking-spots/${id}`, parkingSpot);
  }

  deleteParkingSpot(id: number): Observable<any> {
    return this.http.delete(`/api/parking-spots/${id}`);
  }
}
