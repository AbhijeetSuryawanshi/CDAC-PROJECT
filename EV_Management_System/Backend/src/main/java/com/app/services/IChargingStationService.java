package com.app.services;

import java.util.List;

import com.app.pojos.ChargingCity;
import com.app.pojos.ChargingStation;

public interface IChargingStationService {
List<ChargingCity> getAllChargingCities();

List<ChargingStation> findChargingStationById(int id);

}
