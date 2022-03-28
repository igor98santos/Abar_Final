package com.abar.abar.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abar.abar.model.Comentario;
import com.abar.abar.repository.ComentarioRepository;

@Service
public class ComentarioService {


		@Autowired
		private ComentarioRepository repository;

		public List<Comentario> findAll() {
			return repository.findAll();
		}

		public Optional<Comentario> findById(Long id) {
			return repository.findById(id);
		}

		public void save(Comentario comentario) {
			repository.save(comentario);
		}

		public Comentario update(Comentario comentario) {
			
			return repository.save(comentario);
		}

		public void deleteById(Long id) {
			repository.deleteById(id);
		}


}
