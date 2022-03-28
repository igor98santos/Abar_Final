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

import com.abar.abar.model.Opcoes;
import com.abar.abar.service.OpcoesService;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/config")
public class OpcoesController {
	
	@Autowired
	private OpcoesService opcoesService;

	@GetMapping
	public List<Opcoes> getAllOpcoes() {
		return opcoesService.findAll();
	}

	@GetMapping(path = "/{id}")
	public Optional<Opcoes> getOpcoesbyId(@PathVariable Long id) {
		return opcoesService.findById(id);
	}

	@PostMapping
	public void saveClient(@RequestBody Opcoes opcoes) {
		opcoesService.save(opcoes);
	}

	@DeleteMapping(path = "/{id}")
	public void deleteOpcoes(@PathVariable Long id) {
		opcoesService.deleteById(id);
	}

	@PutMapping("/{id}")
	public Opcoes update(@PathVariable Long id, @RequestBody Opcoes opcoes) {
		Opcoes opcoesAtual = opcoesService.findById(id).get();
		BeanUtils.copyProperties(opcoes, opcoesAtual, "id");
		return opcoesService.update(opcoesAtual);
	}

}
