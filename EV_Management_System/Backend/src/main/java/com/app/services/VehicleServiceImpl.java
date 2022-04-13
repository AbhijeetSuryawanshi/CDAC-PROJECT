package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ChargingRepository;
import com.app.dao.FeaturesRepository;
import com.app.dao.ReviewRepository;
import com.app.dao.VehicleRepository;
import com.app.pojos.VehicleDetails;
@Service
@Transactional
public class VehicleServiceImpl implements IVehicleService {
 @Autowired
 private VehicleRepository vehicleRepo;
 @Autowired
 ChargingRepository chargingRepo;
 @Autowired
 FeaturesRepository featuresRepo;
 @Autowired
 ReviewRepository reviewRepo;
	@Override
	public List<VehicleDetails> findVehiclesBasicDetails() {
		// TODO Auto-generated method stub
		
		return vehicleRepo.findAll();
	}
   @Override
	public VehicleDetails findVehicleById(int vehicleId) {
		// TODO Auto-generated method stub
		return vehicleRepo.findById(vehicleId).orElseThrow(()->new RuntimeException("Vehicle not found"));
	}
@Override
public VehicleDetails addVehicleDetails(VehicleDetails v) {
	// TODO Auto-generated method stub
	return vehicleRepo.save(v) ;
}
@Override
public String removeVehicle(int vehicleId) {
	// TODO Auto-generated method stub
	VehicleDetails vehicle=vehicleRepo.findById(vehicleId).orElseThrow(()->new RuntimeException("Vehicle not found"));
	chargingRepo.deleteByVehicle(vehicle);
	featuresRepo.deleteByVehicle(vehicle);
	reviewRepo.deleteByVehicle(vehicle);
	vehicleRepo.deleteById(vehicleId);
	return vehicleId+"removed successfully";
	
}

}
