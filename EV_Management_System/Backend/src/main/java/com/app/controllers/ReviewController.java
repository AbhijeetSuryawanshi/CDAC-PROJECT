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

import com.app.pojos.Review;
import com.app.services.IReviewService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ReviewController {
@Autowired
IReviewService reviewService;
    @GetMapping("/reviews/{vehicleId}")
    public ResponseEntity<?> getAllReviews(@PathVariable int vehicleId)
   {
		
	
		return new ResponseEntity<>(reviewService.getAllReviewDetails(vehicleId),HttpStatus.OK);
	}
	@PostMapping("/reviews/{vehicleId}")
	public ResponseEntity<?> addReview(@RequestBody @Valid Review review,@PathVariable int vehicleId)
	{
		
		reviewService.saveReview(review,vehicleId);
		return new ResponseEntity<>("Review Added Successfully!!!",HttpStatus.OK);
	}
}
