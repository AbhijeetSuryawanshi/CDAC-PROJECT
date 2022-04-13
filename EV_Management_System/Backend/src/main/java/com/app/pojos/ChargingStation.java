package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="charging_stations")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ChargingStation extends BaseEntity{
@Column(length = 50)
private String stationName;
@Column(length = 300,nullable = false)
private String stationAddress;
@Column(length =50)
private String stationImage;
@ManyToOne
@JoinColumn(name="city_id")
private ChargingCity chargingCity;
}
