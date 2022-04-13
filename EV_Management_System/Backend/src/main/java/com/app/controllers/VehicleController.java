package com.app.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.VehicleDetails;
import com.app.services.IVehicleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VehicleController {
@Autowired
IVehicleService vehicleService;
	public VehicleController()
	{
		
	}
	@GetMapping("/vehicles")
    public ResponseEntity<?> getAllVehicleBasicDetails()
    {
    	
    	return new ResponseEntity<>(vehicleService.findVehiclesBasicDetails(),HttpStatus.OK);
    }
	
	  @GetMapping("/vehicles/{id}") 
	  public ResponseEntity<?> getVehicleDetails(@PathVariable int id) 
	  {
	     	return new ResponseEntity<>(vehicleService.findVehicleById(id),HttpStatus.OK);
	  }
	  @PostMapping("/vehicles/addVehicle")
		public ResponseEntity<?> insertVehicle(@RequestBody @Valid VehicleDetails v) 
		{
			System.out.println("in insert emp"+v);
			return new ResponseEntity<>(vehicleService.addVehicleDetails(v),HttpStatus.OK);
		}
	  @DeleteMapping("/vehicles/deleteVehicle/{vehicleId}")
		public String removeEmplDetails(@PathVariable int vehicleId){
			System.out.println("in get a remove emps");
			String s= vehicleService.removeVehicle(vehicleId);
			 return s;
		}
	 
}
