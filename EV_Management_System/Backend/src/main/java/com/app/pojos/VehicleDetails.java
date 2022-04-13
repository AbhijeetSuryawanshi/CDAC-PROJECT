package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="vehicle_details")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class VehicleDetails extends BaseEntity {
@Column(length=300,unique=true)
private String vehicleImage; 
@NotEmpty(message ="Vehicle Name can't be blank.")
@Column(length=30,unique=true)
private String vehicleName;
@Column(length=30)
private String location;
@NotEmpty(message ="You must have to add basic information about the vehicle.")
@Column(length=600)
private String vehicleInfo;
@NotEmpty(message ="Price can't be blank.")
@Column(length=30)
private String vehiclePrice;



}
