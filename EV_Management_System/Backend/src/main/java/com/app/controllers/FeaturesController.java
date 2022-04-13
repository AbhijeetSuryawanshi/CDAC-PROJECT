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

import com.app.pojos.VehicleFeatures;
import com.app.services.IFeaturesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FeaturesController {
	@Autowired
	IFeaturesService featuresService;
@GetMapping("/vehicleFeatures/{id}")
public ResponseEntity<?> getVehicleFeatures(@PathVariable int id)
{
	
	return new ResponseEntity<>(featuresService.getVehicleFeatures(id),HttpStatus.OK);
}
@PostMapping("/vehicleFeatures/addVehicleFeatures/{vehicleId}")
public ResponseEntity<?> insertFeaturesDetails(@RequestBody @Valid VehicleFeatures vf,@PathVariable int vehicleId) //de-serial(un marshalling)
{
	System.out.println("in  insertFeaturesDetails and vehicle id is"+vehicleId);
	return new ResponseEntity<>(featuresService.insertVehicleFeatures(vehicleId,vf),HttpStatus.OK);
}

}
