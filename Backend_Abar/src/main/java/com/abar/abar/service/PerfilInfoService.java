package com.abar.abar.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abar.abar.model.PerfilInfo;
import com.abar.abar.repository.PerfilInfoRepository;



@Service
public class PerfilInfoService {
	
	@Autowired
	private PerfilInfoRepository repository;

	public List<PerfilInfo> findAll() {
		return repository.findAll();
	}

	public Optional<PerfilInfo> findById(Long id) {
		return repository.findById(id);
	}

	public void save(PerfilInfo perfilInfo) {
		repository.save(perfilInfo);
	}

	public PerfilInfo update(PerfilInfo perfilInfo) {
		
		return repository.save(perfilInfo);
	}

	public void deleteById(Long id) {
		repository.deleteById(id);
	}

}
