package com.abar.abar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abar.abar.model.AbarUser;
import com.abar.abar.repository.AbarUserRepository;

@RestController
@RequestMapping(value = "/user")
public class UserController {

	@Autowired
	private AbarUserRepository recodeUserRepository;
	
	@PostMapping
	public ResponseEntity<AbarUser> save(@RequestBody AbarUser recodeUser){
		try {
			PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
			recodeUser.setPassword(passwordEncoder.encode(recodeUser.getPassword()));
			recodeUserRepository.save(recodeUser);
			return ResponseEntity.ok().body(recodeUser);
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
		}
		return null;
	}
}
