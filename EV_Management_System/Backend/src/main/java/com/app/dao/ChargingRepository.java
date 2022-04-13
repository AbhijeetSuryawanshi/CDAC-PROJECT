package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ChargingDetails;
import com.app.pojos.VehicleDetails;

public interface ChargingRepository extends JpaRepository<ChargingDetails, Integer>{
	void deleteByVehicle(VehicleDetails vehicle);

}
