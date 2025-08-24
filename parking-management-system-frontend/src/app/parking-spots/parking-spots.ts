import { Component, OnInit } from '@angular/core';
import { Api } from '../api';

@Component({
  selector: 'app-parking-spots',
  templateUrl: './parking-spots.html',
  styleUrls: ['./parking-spots.css']
})
export class ParkingSpots implements OnInit {

  parkingSpots: any[] = [];
  newParkingSpot: any = {};
  selectedParkingSpot: any = null;

  constructor(private api: Api) { }

  ngOnInit(): void {
    this.getParkingSpots();
  }

  getParkingSpots(): void {
    this.api.getParkingSpots().subscribe(data => {
      this.parkingSpots = data;
    });
  }

  createParkingSpot(): void {
    this.api.createParkingSpot(this.newParkingSpot).subscribe(() => {
      this.getParkingSpots();
      this.newParkingSpot = {};
    });
  }

  selectParkingSpot(parkingSpot: any): void {
    this.selectedParkingSpot = { ...parkingSpot };
  }

  updateParkingSpot(): void {
    if (this.selectedParkingSpot) {
      this.api.updateParkingSpot(this.selectedParkingSpot.id, this.selectedParkingSpot).subscribe(() => {
        this.getParkingSpots();
        this.selectedParkingSpot = null;
      });
    }
  }

  deleteParkingSpot(id: number): void {
    this.api.deleteParkingSpot(id).subscribe(() => {
      this.getParkingSpots();
    });
  }
}
