package com.app.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.ChargingDetails;
import com.app.services.IChargingService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ChargingController {
	@Autowired
	IChargingService chargingService;
@GetMapping("/chargingDetails/{id}")
public ResponseEntity<?> getChargingDetails(@PathVariable int id)
{
	
	return new ResponseEntity<>(chargingService.getChargingDetails(id),HttpStatus.OK);
}
@PostMapping("/chargingDetails/addChargingDetails/{vehicleId}")
public ResponseEntity<?> insertChargeDetails(@RequestBody @Valid  ChargingDetails c,@PathVariable int vehicleId) 
{
	System.out.println("in insertChargeDetails and vehicle id is"+vehicleId);
	return new ResponseEntity<>(chargingService.insertChargingDetails(vehicleId,c),HttpStatus.OK);
}
}
