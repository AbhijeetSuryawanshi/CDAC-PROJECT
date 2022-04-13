package com.app.services;

import com.app.pojos.UserEntity;
import com.app.pojos.UserRole;

public interface IUserService {
	UserEntity findByEmail(String email);
	UserEntity save(UserEntity user);

	String linkUserRole(String userName,UserRole role);

}
