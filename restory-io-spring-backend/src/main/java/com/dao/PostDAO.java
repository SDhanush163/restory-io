package com.dao;

import java.util.List;

import com.model.Post;

public interface PostDAO {
	public Post getPost(String postId);
	public boolean addPost(Post post);
	public List<Post> getAllPost();
	public boolean deletePost(String postId);
	public boolean updateText(Post post);	
	
}
