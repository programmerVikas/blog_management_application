package com.boot.spring.category.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.boot.spring.blogContent.entity.Blog;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String category;
	private String cDescription;
	
	@OneToMany(cascade = CascadeType.REMOVE, fetch = FetchType.EAGER, mappedBy = "category")
	@JsonIgnore
	private List<Blog> blog = new ArrayList<Blog>();

	
	public Category() {
		
	}
	
	
	public Category(Long id, String category, String cDescription, List<Blog> blog) {
		super();
		this.id = id;
		this.category = category;
		this.cDescription = cDescription;
		this.blog = blog;
	}

	public Category(String category, String cDescription, List<Blog> blog) {
		super();
		this.category = category;
		this.cDescription = cDescription;
		this.blog = blog;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getcDescription() {
		return cDescription;
	}

	public List<Blog> getBlog() {
		return blog;
	}

	public void setBlog(List<Blog> blog) {
		this.blog = blog;
	}

	public void setcDescription(String cDescription) {
		this.cDescription = cDescription;
	}

	@Override
	public String toString() {
		return "Category [id=" + id + ", category=" + category + ", cDescription=" + cDescription + ", blog=" + blog
				+ "]";
	}

	
	
}
