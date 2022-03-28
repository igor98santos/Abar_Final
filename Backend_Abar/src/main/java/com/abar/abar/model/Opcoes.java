package com.abar.abar.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Opcoes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String sexo;
	private String genero;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public String getGenero() {
		return genero;
	}
	public void setGenero(String genero) {
		this.genero = genero;
	}
	@Override
	public String toString() {
		return "Opcoes [id=" + id + ", sexo=" + sexo + ", genero=" + genero + "]";
	}
	public Opcoes(Long id, String sexo, String genero) {
		super();
		this.id = id;
		this.sexo = sexo;
		this.genero = genero;
	}

	


}


