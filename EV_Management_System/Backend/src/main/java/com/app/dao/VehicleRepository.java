package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.VehicleDetails;

public interface VehicleRepository extends JpaRepository<VehicleDetails, Integer>{

}
