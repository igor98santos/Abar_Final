package com.abar.abar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abar.abar.model.AbarUser;

@Repository
public interface AbarUserRepository extends JpaRepository<AbarUser, Long>{
	
	AbarUser findByUsername(String username);
	
}
