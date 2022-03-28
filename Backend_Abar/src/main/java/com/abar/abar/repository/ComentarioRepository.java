package com.abar.abar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abar.abar.model.Comentario;

@Repository

public interface ComentarioRepository extends JpaRepository<Comentario, Long>{

}
