package com.abar.abar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abar.abar.model.Publicacao;


@Repository
public interface PublicacaoRepository extends JpaRepository<Publicacao, Long>{

}
