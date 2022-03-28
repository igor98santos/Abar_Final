package com.abar.abar.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abar.abar.model.Publicacao;
import com.abar.abar.service.PublicacaoService;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/publicacao")
public class PublicacaoController {
	
	@Autowired
	private PublicacaoService publicacaoService;

	@GetMapping
	public List<Publicacao> getAllPublicacao() {
		return publicacaoService.findAll();
	}

	@GetMapping(path = "/{id}")
	public Optional<Publicacao> getPublicacaobyId(@PathVariable Long id) {
		return publicacaoService.findById(id);
	}

	@PostMapping
	public void saveClient(@RequestBody Publicacao publicacao) {
		publicacaoService.save(publicacao);
	}

	@DeleteMapping(path = "/{id}")
	public void deletePublicacao(@PathVariable Long id) {
		publicacaoService.deleteById(id);
	}

	@PutMapping(path ="/{id}")
	public Publicacao update(@PathVariable Long id, @RequestBody Publicacao publicacao) {
		Publicacao publicacaoAtual = publicacaoService.findById(id).get();
		BeanUtils.copyProperties(publicacao, publicacaoAtual, "id");
		return publicacaoService.update(publicacaoAtual);
	}


}
