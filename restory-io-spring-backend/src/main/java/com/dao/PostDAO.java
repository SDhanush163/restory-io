package com.dao;

import java.util.List;

import com.model.Post;

public interface PostDAO {
	public Post getPost(int postId);
	public boolean addPost(Post post);
	public List<Post> getAllPost();
	public boolean deletePost(int postId);
	public boolean updateText(Post post);	
	
}
