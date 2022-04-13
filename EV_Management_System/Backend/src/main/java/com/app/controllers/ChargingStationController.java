package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.app.services.IChargingStationService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

	
public class ChargingStationController {
	@Autowired
	IChargingStationService chargingStationService;
@GetMapping("/chargingCities")
public ResponseEntity<?> getAllChargingCities()
{
	
	
	return new ResponseEntity<>(chargingStationService.getAllChargingCities(),HttpStatus.OK);
}
@GetMapping("/chargingStations/{id}") 
public ResponseEntity<?> getChargingStations(@PathVariable int id) 
{
   	return new ResponseEntity<>(chargingStationService.findChargingStationById(id),HttpStatus.OK);
}

}
