package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserRepository;
import com.app.pojos.UserEntity;
@Service
@Transactional
public class CustomUserDetailsServiceImpl implements UserDetailsService{
@Autowired
private UserRepository userRepo;
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		UserEntity user = userRepo.findByEmail(userName).orElseThrow(()->new UsernameNotFoundException(userName));
		return new CustomUserDetails(user);
	}

}
