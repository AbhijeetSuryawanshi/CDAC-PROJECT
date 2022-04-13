package com.app.services;

import java.util.List;

import com.app.pojos.VehicleDetails;

public interface IVehicleService {
List<VehicleDetails> findVehiclesBasicDetails();
VehicleDetails findVehicleById(int vehicleId);
VehicleDetails addVehicleDetails(VehicleDetails v);
String removeVehicle(int vehicleId);

}
