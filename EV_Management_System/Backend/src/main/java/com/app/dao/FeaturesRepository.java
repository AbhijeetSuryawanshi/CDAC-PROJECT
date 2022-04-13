package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.VehicleDetails;
import com.app.pojos.VehicleFeatures;

public interface FeaturesRepository extends JpaRepository<VehicleFeatures, Integer> {
void deleteByVehicle(VehicleDetails vehicle);
}
