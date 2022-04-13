package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name="charging_details")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ChargingDetails extends BaseEntity {
	@NotEmpty(message ="Charging Time can't be blank.")
	@Column(length=15)
	private String chargingTime;
	@NotEmpty(message ="Please specify fast charging available or not.")
	@Column(length=5)
	private String fastCharging;
	@NotEmpty(message ="Battery Type can't be blank.")
	@Column(length=15)
	private String batteryType;
	@NotEmpty(message ="Please specify Driving Range.")
	@Column(length=15)
	private String drivingRange;
	@NotEmpty(message ="Battery Capacity can't be blank.")
	@Column(length=15)
	private String batteryCapacity;
	@NotEmpty(message ="Motor Type can't be blank.")
	@Column(length=30)
	private String motorType;
	@NotEmpty(message ="Please specify Motor Torque available.")
	@Column(length=15)
	private String motorTorque;
	@OneToOne
	@MapsId
	private VehicleDetails vehicle;
	
}
