package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ChargingRepository;
import com.app.dao.VehicleRepository;
import com.app.pojos.ChargingDetails;
import com.app.pojos.VehicleDetails;
@Service
@Transactional
public class ChargingServiceImpl implements IChargingService {
    @Autowired
    ChargingRepository chargingRepo;
    @Autowired
    private VehicleRepository vehicleRepo;
	@Override
	public ChargingDetails getChargingDetails(int vehicleId) {
		// TODO Auto-generated method stub
		return chargingRepo.findById(vehicleId).orElseThrow(()->new RuntimeException("Vehicle not found"));
	}
	@Override
	public ChargingDetails insertChargingDetails(int vehicleId, ChargingDetails c) {
		// TODO Auto-generated method stub
		VehicleDetails vehicle=vehicleRepo.findById(vehicleId).orElseThrow(()->new RuntimeException("Vehicle not found"));
		c.setVehicle(vehicle);
		
		return chargingRepo.save(c);
		
	}

}
