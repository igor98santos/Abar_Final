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

import com.abar.abar.model.Comentario;
import com.abar.abar.service.ComentarioService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/feed")
public class ComentarioController {
	

	@Autowired
	private ComentarioService comentarioService;

	@GetMapping
	public List<Comentario> getAllComentario() {
		return comentarioService.findAll();
	}

	@GetMapping(path = "/{id}")
	public Optional<Comentario> getComentariobyId(@PathVariable Long id) {
		return comentarioService.findById(id);
	}

	@PostMapping
	public void saveClient(@RequestBody Comentario comentario) {
		comentarioService.save(comentario);
	}

	@DeleteMapping(path = "/{id}")
	public void deleteComentario(@PathVariable Long id) {
		comentarioService.deleteById(id);
	}

	@PutMapping("/{id}")
	public Comentario update(@PathVariable Long id, @RequestBody Comentario comentario) {
		Comentario comentarioAtual = comentarioService.findById(id).get();
		BeanUtils.copyProperties(comentario, comentarioAtual, "id");
		return comentarioService.update(comentarioAtual);
	}
	
}
