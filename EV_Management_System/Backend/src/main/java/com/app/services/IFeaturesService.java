package com.app.services;

import com.app.pojos.VehicleFeatures;

public interface IFeaturesService {
public VehicleFeatures getVehicleFeatures(int vehicleId);
VehicleFeatures insertVehicleFeatures(int vehicleId, VehicleFeatures vf);
}
