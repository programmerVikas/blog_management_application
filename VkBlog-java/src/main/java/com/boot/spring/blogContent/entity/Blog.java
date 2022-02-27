package com.boot.spring.blogContent.entity;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.boot.spring.category.entity.Category;



@Entity
public class Blog {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String title;
	private String content;
	private LocalDate date;

	@ManyToOne(fetch = FetchType.EAGER)
	private Category category;

	public Blog() {

	}

	public Blog(String title, String content, Category category) {
		super();
		this.title = title;
		this.content = content;
		this.category = category;
	}

	public Blog(Long id, String title, String content, LocalDate date, Category category) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.date = date;
		this.category = category;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "Blog [id=" + id + ", title=" + title + ", content=" + content + ", category=" + category + "]";
	}

}
