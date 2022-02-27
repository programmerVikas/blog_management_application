package com.boot.spring.category.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.spring.category.dao.CategoryDao;
import com.boot.spring.category.entity.Category;

@Service
public class CategoryService {

	@Autowired
	private CategoryDao categoryDao;
	
	
	public Category saveCategory(Category category) {
		return categoryDao.save(category);
	}
	
	
	public Iterable<Category> getAllData(){
		return categoryDao.findAll();
	}
	
	public Category updateData(Category category) {
		return categoryDao.save(category);
	}
	
	
	public void deleteData(Long id) {
		categoryDao.deleteById(id);
	}
	
	
}
