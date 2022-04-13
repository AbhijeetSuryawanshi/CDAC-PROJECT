package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Review;
import com.app.pojos.VehicleDetails;

public interface ReviewRepository extends JpaRepository<Review, Integer>{
	List<Review> findByVehicle(VehicleDetails vehicle);
	void deleteByVehicle(VehicleDetails vehicle);
    
}
