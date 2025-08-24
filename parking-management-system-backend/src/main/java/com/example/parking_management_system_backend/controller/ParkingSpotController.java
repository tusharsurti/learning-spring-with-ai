package com.example.parking_management_system_backend.controller;

import com.example.parking_management_system_backend.entity.ParkingSpot;
import com.example.parking_management_system_backend.repository.ParkingSpotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/parking-spots")
public class ParkingSpotController {

    @Autowired
    private ParkingSpotRepository parkingSpotRepository;

    @GetMapping
    public List<ParkingSpot> getAllParkingSpots() {
        return parkingSpotRepository.findAll();
    }

    @PostMapping
    public ParkingSpot createParkingSpot(@RequestBody ParkingSpot parkingSpot) {
        return parkingSpotRepository.save(parkingSpot);
    }

    @GetMapping("/{id}")
    public ParkingSpot getParkingSpotById(@PathVariable Long id) {
        return parkingSpotRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public ParkingSpot updateParkingSpot(@PathVariable Long id, @RequestBody ParkingSpot parkingSpotDetails) {
        ParkingSpot parkingSpot = parkingSpotRepository.findById(id).orElse(null);
        if (parkingSpot != null) {
            parkingSpot.setSpotNumber(parkingSpotDetails.getSpotNumber());
            parkingSpot.setOccupied(parkingSpotDetails.isOccupied());
            parkingSpot.setVehicleNumber(parkingSpotDetails.getVehicleNumber());
            return parkingSpotRepository.save(parkingSpot);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteParkingSpot(@PathVariable Long id) {
        parkingSpotRepository.deleteById(id);
    }
}
