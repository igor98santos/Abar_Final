package com.abar.abar.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abar.abar.model.Opcoes;
import com.abar.abar.repository.OpcoesRepository;



@Service
public class OpcoesService {
	
	@Autowired
	private OpcoesRepository repository;

	public List<Opcoes> findAll() {
		return repository.findAll();
	}

	public Optional<Opcoes> findById(Long id) {
		return repository.findById(id);
	}

	public void save(Opcoes opcoes) {
		repository.save(opcoes);
	}

	public Opcoes update(Opcoes opcoes) {
		
		return repository.save(opcoes);
	}

	public void deleteById(Long id) {
		repository.deleteById(id);
	}

}
