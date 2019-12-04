package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.PostDAO;
import com.model.Post;
@Service
public class PostServiceImpl implements PostService{
	@Autowired
	PostDAO postDAO;
	
	@Override
	public Post getPost(int postId) {
		return postDAO.getPost(postId); 
	}

	@Override
	public boolean addPost(Post post) {
		return postDAO.addPost(post);
	}

	@Override
	public List<Post> getAllPost() {
		
		return postDAO.getAllPost();
	}

	@Override
	public boolean deletePost(int postId) {
		
		return postDAO.deletePost(postId);
	}

	@Override
	public boolean updateText(Post post) {
		
		return postDAO.updateText(post);
	}

}
