package com.abar.abar.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PerfilInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String apelido;
	private String text;
	private String imagemperfil;
	
	
	
	
	
	public PerfilInfo(Long id, String apelido, String text, String imagemperfil) {
		super();
		this.id = id;
		this.apelido = apelido;
		this.text = text;
		this.imagemperfil = imagemperfil;
	}
	public String getImagemperfil() {
		return imagemperfil;
	}
	public void setImagemperfil(String imagemperfil) {
		this.imagemperfil = imagemperfil;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getApelido() {
		return apelido;
	}
	public void setApelido(String apelido) {
		this.apelido = apelido;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	@Override
	public int hashCode() {
		return Objects.hash(apelido, id, imagemperfil, text);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PerfilInfo other = (PerfilInfo) obj;
		return Objects.equals(apelido, other.apelido) && Objects.equals(id, other.id)
				&& Objects.equals(imagemperfil, other.imagemperfil) && Objects.equals(text, other.text);
	}
	@Override
	public String toString() {
		return "PerfilInfo [id=" + id + ", apelido=" + apelido + ", text=" + text + ", imagemperfil=" + imagemperfil
				+ "]";
	}
	public PerfilInfo(Long id, String apelido, String text) {
		super();
		this.id = id;
		this.apelido = apelido;
		this.text = text;
	}
	public PerfilInfo() {
		super();
	}
	
	

}
