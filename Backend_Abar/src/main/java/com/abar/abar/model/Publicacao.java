package com.abar.abar.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Publicacao {
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String imgPost;
	private String legenda;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getImgPost() {
		return imgPost;
	}
	public void setImgPost(String imgPost) {
		this.imgPost = imgPost;
	}
	public String getLegenda() {
		return legenda;
	}
	public void setLegenda(String legenda) {
		this.legenda = legenda;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id, imgPost, legenda);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Publicacao other = (Publicacao) obj;
		return Objects.equals(id, other.id) && Objects.equals(imgPost, other.imgPost)
				&& Objects.equals(legenda, other.legenda);
	}
	@Override
	public String toString() {
		return "Publicacao [id=" + id + ", imgPost=" + imgPost + ", legenda=" + legenda + "]";
	}
	public Publicacao(Long id, String imgPost, String legenda) {
		super();
		this.id = id;
		this.imgPost = imgPost;
		this.legenda = legenda;
	}
	public Publicacao() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
