package com.app.services;

import com.app.pojos.ChargingDetails;

public interface IChargingService {
public ChargingDetails getChargingDetails(int vehicleId);
ChargingDetails insertChargingDetails(int vehicleId, ChargingDetails c);
}
