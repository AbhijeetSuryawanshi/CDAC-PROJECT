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
@Table(name="vehicle_features")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class VehicleFeatures extends BaseEntity {
	@NotEmpty(message ="Please specify Ground Clearance available.")
	@Column(length = 15)
private String groundClearance;
	@NotEmpty(message ="Boot Space can't be blank.")
	@Column(length = 15)
private String bootSpace;
	@NotEmpty(message ="Please specify types of front and rear brakes.")
	@Column(length = 15)
private String frontRearBrakes;
	@NotEmpty(message ="Please specify no. of air bags available.")
	@Column(length = 15)
private String airBags;
	@NotEmpty(message ="Please specify seating capacity.")
	@Column(length = 15)
private String seatingCapacity;
	@OneToOne
	@MapsId
	private VehicleDetails vehicle;

}
