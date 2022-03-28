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

import com.abar.abar.model.PerfilInfo;
import com.abar.abar.service.PerfilInfoService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Perfil")
public class PerfilInfoController {
	
	@Autowired
	private PerfilInfoService perfilInfoService;

	@GetMapping
	public List<PerfilInfo> getAllPerfilInfo() {
		return perfilInfoService.findAll();
	}

	@GetMapping(path = "/{id}")
	public Optional<PerfilInfo> getPerfilInfobyId(@PathVariable Long id) {
		return perfilInfoService.findById(id);
	}

	@PostMapping
	public void saveClient(@RequestBody PerfilInfo perfilInfo) {
		perfilInfoService.save(perfilInfo);
	}

	@DeleteMapping(path = "/{id}")
	public void deletePerfilInfo(@PathVariable Long id) {
		perfilInfoService.deleteById(id);
	}

	@PutMapping("/{id}")
	public PerfilInfo update(@PathVariable Long id, @RequestBody PerfilInfo perfilInfo) {
		PerfilInfo perfilInfoAtual = perfilInfoService.findById(id).get();
		BeanUtils.copyProperties(perfilInfo, perfilInfoAtual, "id");
		return perfilInfoService.update(perfilInfoAtual);
	}

}
