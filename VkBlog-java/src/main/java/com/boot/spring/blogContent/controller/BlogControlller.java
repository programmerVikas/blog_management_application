package com.boot.spring.blogContent.controller;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

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

import com.boot.spring.blogContent.dao.BlogDao;
import com.boot.spring.blogContent.entity.Blog;
import com.boot.spring.blogContent.service.BlogService;

@RestController
@RequestMapping("/blogContent")
@CrossOrigin
public class BlogControlller {

	@Autowired
	private BlogService blogService;
	

	@PostMapping("/save")
	public void saveContent(@RequestBody Blog blog) throws ParseException {

		if((blog.getTitle().trim().length() == 0 || blog.getTitle()==null) || (blog.getCategory() == null) || (blog.getContent() == null || blog.getContent().trim().length() == 0)) {
			throw new ResponseStatusException(
			          HttpStatus.NOT_FOUND, "Actor Not Found");
			
		}else {
			
			LocalDate date = LocalDate.now();		
			blog.setDate(date);		
			blog.setTitle(blog.getTitle().trim());
			blog.setContent(blog.getContent().trim());
			blogService.saveBlog(blog);
		}
	
	}

	@GetMapping("/getBlogData")
	public Iterable<Blog> getBlogData() {
		return blogService.getBlogData();
	}

	@PutMapping("/update")
	public Blog updateData(@RequestBody Blog blog) {
		return blogService.updateData(blog);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteData(@PathVariable("id") Long id) {		
		blogService.deleteDataById(id);
	}

	@GetMapping("/dataByCategoryId/{id}")
	public List<Blog> getDataByCategory(@PathVariable("id") Long id) {
		return blogService.getBlogBycId(id);
	}

	@GetMapping("/dataByCategoryItem/{category}")
	public List<Blog> getDataByCategoryItem(@PathVariable("category") String item) {		
		return blogService.getBlogBycItem(item);
		
	}
	
	@GetMapping("/getDataById/{id}")
	public Optional<Blog> getBlogById(@PathVariable("id") Long Id){
		return blogService.getBlogById(Id);
	}

	@GetMapping("/getAllBlog")
	public List<Blog> getBlog(){
		return blogService.getBlog();
	}
}
