package com.boot.spring.blogContent.dao;

import java.util.List;
import java.util.Optional;

//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.boot.spring.blogContent.entity.Blog;

@Repository
public interface BlogDao extends CrudRepository<Blog, Long>{
	
	@Query("select u from Blog u where u.category.id=:n")
	public List<Blog>findByCategory(@Param("n") Long id);

	@Query("select u from Blog u where u.id=:n")
	public Optional<Blog> findById(@Param("n") Long id);

	@Query("select u from Blog u where u.category.category=:n")
	public List<Blog>findByCategoryItem(@Param("n") String category);
	
	

}
