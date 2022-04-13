package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.FeaturesRepository;
import com.app.dao.VehicleRepository;
import com.app.pojos.VehicleDetails;
import com.app.pojos.VehicleFeatures;
@Service
@Transactional
public class FeaturesServiceImpl implements IFeaturesService {
     @Autowired
     FeaturesRepository featuresRepo;
     @Autowired
     private VehicleRepository vehicleRepo;
	@Override
	public VehicleFeatures getVehicleFeatures(int vehicleId) {
		// TODO Auto-generated method stub
		return featuresRepo.findById(vehicleId).orElseThrow(()->new RuntimeException("Vehicle not found"));
	}
	@Override
	public VehicleFeatures insertVehicleFeatures(int vehicleId, VehicleFeatures vf) {
		// TODO Auto-generated method stub
		VehicleDetails vehicle=vehicleRepo.findById(vehicleId).orElseThrow(()->new RuntimeException("Vehicle not found"));
		vf.setVehicle(vehicle);
		return featuresRepo.save(vf);
		
	}

}
