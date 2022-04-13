package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name="users_table")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserEntity extends BaseEntity{
@Column(length=30)
private String firstName;
@Column(length=30)
private String lastName;
@Column(length=30,unique=true)
private String email;
@Column(length=300)
private String password;

//UserEntity*----->*Role
@ManyToMany(fetch = FetchType.EAGER)//acceptable solution since max size of many i.e. roles is 2
@JoinTable(name="user_roles",joinColumns = @JoinColumn(name="user_id"),inverseJoinColumns = @JoinColumn(name="role_id"))
private Set<Role> roles =new HashSet<>();
public UserEntity(String firstName, String lastName,String email, String password) {
	
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.password = password;
}

}
