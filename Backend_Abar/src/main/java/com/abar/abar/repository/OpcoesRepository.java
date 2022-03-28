package com.abar.abar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abar.abar.model.Opcoes;

@Repository
public interface OpcoesRepository extends JpaRepository<Opcoes, Long>{

}
