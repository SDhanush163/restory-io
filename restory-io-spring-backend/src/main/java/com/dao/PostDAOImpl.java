package com.dao;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.model.Post;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
@Repository
public class PostDAOImpl implements PostDAO{
	@Autowired
	MongoTemplate mongoTemplate;

	@Override
	public Post getPost(int postId) {
		return mongoTemplate.findById(postId, Post.class);
	}

	@Override
	public boolean addPost(Post post) {
		Date date = new Date();
		post.setTimeStamp(date);
		mongoTemplate.save(post);
		return false;
	}

	@Override
	public List<Post> getAllPost() {
		List<Post> allPosts=mongoTemplate.findAll(Post.class);
		return allPosts;
	}

	@Override
	public boolean deletePost(int postId) {
		Post post=new Post();
		post.setPostID(postId);
		DeleteResult deleteResult = mongoTemplate.remove(post);
		if(deleteResult.wasAcknowledged()== true)
			return true;
		else
			return false;
	}

	@Override
	public boolean updateText(Post post) {
		Query query = new Query();
		query.addCriteria(Criteria.where("_id").is(post.getPostID()));
		Update update= new Update();
		update.set("textBody",post.getTextBody());
		UpdateResult updateResult=mongoTemplate.updateFirst(query,update,Post.class);
		if(updateResult.wasAcknowledged()==false)
			return false;
		else
			return true;
	}

}
