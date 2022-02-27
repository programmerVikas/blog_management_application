package com.boot.spring.category.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.boot.spring.category.entity.Category;


@Repository
public interface CategoryDao extends JpaRepository<Category, Long>{

}
