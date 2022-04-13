package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="reviews")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Review extends BaseEntity {
	@NotEmpty(message ="Please enter the name first.")
	@Column(length=30)
	private String name;
	@Column(length=300)
	private String comment;
	private double rating;
	@ManyToOne
	@JoinColumn(name="vehicle_id")
	private VehicleDetails vehicle;

}
