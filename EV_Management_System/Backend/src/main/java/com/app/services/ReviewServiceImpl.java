package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ReviewRepository;
import com.app.dao.VehicleRepository;
import com.app.pojos.Review;
import com.app.pojos.VehicleDetails;
@Service
@Transactional
public class ReviewServiceImpl implements IReviewService{
	@Autowired
	ReviewRepository reviewRepo;
	@Autowired
	VehicleRepository vehicleRepo;
	@Override
	public void saveReview(Review review, int vehicleId) {
		// TODO Auto-generated method stub
		Review review2 = reviewRepo.save(review) ;
		
		VehicleDetails vehicle=vehicleRepo.findById(vehicleId).orElseThrow(()->new RuntimeException("Vehicle not found"));
		review2.setVehicle(vehicle);
		
	}
@Override
	public List<Review> getAllReviewDetails(int vehicleId) {
		// TODO Auto-generated method stub
	VehicleDetails vehicle=vehicleRepo.findById(vehicleId).orElseThrow(()->new RuntimeException("Vehicle not found"));
	
	
		return reviewRepo.findByVehicle(vehicle);
	}

}
