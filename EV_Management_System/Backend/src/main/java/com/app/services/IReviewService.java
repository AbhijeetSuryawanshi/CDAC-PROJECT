package com.app.services;

import java.util.List;

import com.app.pojos.Review;

public interface IReviewService {
void  saveReview(Review review, int vehicleId);
List<Review> getAllReviewDetails(int vehicleId);

}
