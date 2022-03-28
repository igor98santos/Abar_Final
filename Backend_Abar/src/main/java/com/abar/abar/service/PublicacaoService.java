package com.abar.abar.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abar.abar.model.Publicacao;
import com.abar.abar.repository.PublicacaoRepository;



@Service
public class PublicacaoService {
	
	@Autowired
	private PublicacaoRepository repository;

	public List<Publicacao> findAll() {
		return repository.findAll();
	}

	public Optional<Publicacao> findById(Long id) {
		return repository.findById(id);
	}

	public void save(Publicacao publicacao) {
		repository.save(publicacao);
	}

	public Publicacao update(Publicacao publicacao) {
		
		return repository.save(publicacao);
	}

	public void deleteById(Long id) {
		repository.deleteById(id);
	}

}
