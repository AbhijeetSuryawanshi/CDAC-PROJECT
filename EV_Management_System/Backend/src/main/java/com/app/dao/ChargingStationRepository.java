package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ChargingCity;
import com.app.pojos.ChargingStation;

public interface ChargingStationRepository extends JpaRepository<ChargingStation, Integer> {
List<ChargingStation> findByChargingCity(ChargingCity chargingCity);
}
