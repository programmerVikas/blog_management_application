package com.boot.spring.blogContent.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boot.spring.blogContent.dao.BlogDao;
import com.boot.spring.blogContent.entity.Blog;

@Service
public class BlogService {

	@Autowired
	private BlogDao blogDao;

	public Blog saveBlog(Blog blog) {
		return blogDao.save(blog);

	}

	public Iterable<Blog> getBlogData() {
		Iterable<Blog> findAll = blogDao.findAll();
		return findAll;
	}
	
	public Blog updateData(Blog blog) {
		Blog save = blogDao.save(blog);
		return save;
	}
	
	
	public void deleteDataById(Long id) {
		blogDao.deleteById(id);
	}
	
	public List<Blog> getBlog(){
		return (List<Blog>) blogDao.findAll();
	}
	
	public List<Blog> getBlogBycId(Long cId) {
		return blogDao.findByCategory(cId);
	}

	public List<Blog> getBlogBycItem(String category) {
		return blogDao.findByCategoryItem(category);
	}
	
	public Optional<Blog> getBlogById(Long id){
		return blogDao.findById(id);
	}
	

}
