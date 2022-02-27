package com.boot.spring.category.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.boot.spring.category.entity.Category;
import com.boot.spring.category.service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	@PostMapping("/save")
	public void saveCategory(@RequestBody Category category) {

//		System.out.println("category : "+category.getCategory().trim());

		if ((category.getCategory() == null) || (category.getCategory().trim().length() == 0)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Actor Not Found");
		} else {
			category.setCategory(category.getCategory().trim());
//			saving category in database data
			categoryService.saveCategory(category);
		}

	}

	@GetMapping("/getData")
	public Iterable<Category> getAllData() {
		return categoryService.getAllData();
	}

	@PutMapping("/update")
	public Category updateData(@RequestBody Category category) {
		return categoryService.updateData(category);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteData(@PathVariable("id") Long id) {
		categoryService.deleteData(id);
	}

}
