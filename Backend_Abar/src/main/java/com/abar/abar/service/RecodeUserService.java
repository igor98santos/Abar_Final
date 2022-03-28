package com.abar.abar.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.abar.abar.repository.AbarUserRepository;

@Service
public class RecodeUserService implements UserDetailsService{

	@Autowired
	private AbarUserRepository recodeUserRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return Optional.ofNullable(recodeUserRepository.findByUsername(username))
				.orElseThrow(() -> new UsernameNotFoundException("Usuario nao encontrado"));
	}
}
