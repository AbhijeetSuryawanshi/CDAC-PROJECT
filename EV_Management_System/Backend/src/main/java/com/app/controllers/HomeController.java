package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.UserEntity;
import com.app.pojos.UserRole;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HomeController {
	@Autowired
	private UserServiceImpl userService;
    public HomeController() {
    
    }
    @GetMapping("/login")
    public ResponseEntity<?> login(Authentication auth)
    {
    	
    	return new ResponseEntity<>(userService.findByEmail(auth.getName()),HttpStatus.OK);
    }
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody UserEntity user)
    {
    	    
    	     UserEntity newUser =userService.save(user);
    	     userService.linkUserRole(newUser.getEmail(), UserRole.CUSTOMER);
    	    return new ResponseEntity<>("User registered successfuly",HttpStatus.OK);
    	    
    }

}
