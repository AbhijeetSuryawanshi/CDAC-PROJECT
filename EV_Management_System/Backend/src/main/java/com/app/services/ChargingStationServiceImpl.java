package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ChargingCityRepository;
import com.app.dao.ChargingStationRepository;
import com.app.pojos.ChargingCity;
import com.app.pojos.ChargingStation;
@Service
@Transactional
public class ChargingStationServiceImpl implements IChargingStationService {
    @Autowired
    ChargingCityRepository chargingCityRepo;
    @Autowired
    ChargingStationRepository chargingStationRepo;
	@Override
	public List<ChargingCity> getAllChargingCities() {
		
		return chargingCityRepo.findAll();
	}
	@Override
	public List<ChargingStation> findChargingStationById(int id) {
		// TODO Auto-generated method stub
		ChargingCity chargingCity=chargingCityRepo.findById(id).orElseThrow(()->new RuntimeException("Charging City not found"));;
		return chargingStationRepo.findByChargingCity(chargingCity);
	}

}
