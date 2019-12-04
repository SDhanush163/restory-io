package com.dao;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.model.User;
import com.mongodb.WriteResult;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;

@Repository
public class UserDAOImpl implements UserDAO {
	
	@Autowired
	MongoTemplate mongotemplate;
	
	@Override
	public boolean addUser(User user) {
		mongotemplate.save(user);
		return true;
	}

	@Override
	public boolean updateUser(User user) {
		
		Date loggedTime = new Date();
		
		Query query = new Query();
		query.addCriteria(Criteria.where("_id").is(user.getUsername()));
		
		Update update = new Update();
		update.set("name", user.getName());
		update.set("email", user.getEmail());
		update.set("password", user.getPassword());
		update.set("groups", user.getGroups());
		update.set("posts", user.getPosts());
		update.set("lastlogged", loggedTime);
		
		UpdateResult result = mongotemplate.updateFirst(query, update, User.class);
		
		int rowsAffected = (int) result.getModifiedCount();
		if(rowsAffected == 0)
			return false;
		else
			return true;
	}

	@Override
	public boolean deleteUser(String username) {
		User user = new User();
		user.setUsername(username);
		DeleteResult result = mongotemplate.remove(user);
		
		int rowsAffected = (int) result.getDeletedCount();
		if(rowsAffected == 0)
			return false;
		else 
			return true;
	}

	@Override
	public boolean isUserExist(String username) {
		User user = mongotemplate.findById(username, User.class);
		if(user == null)
			return false;
		else
			return true;
	}

	@Override
	public boolean validateUser(String email, String password) {
		Query query = new Query();
		query.addCriteria(Criteria.where("email").is(email));
		query.addCriteria(Criteria.where("password").is(password));
		List<User> user = mongotemplate.find(query, User.class);
		if(user.size() == 0)
			return false;
		else
			return true;
	}

	@Override
	public User getUserByUsername(String username) {
		return mongotemplate.findById(username, User.class);
	}

	@Override
	public List<User> getUserByName(String name) {
		Query query = new Query();
		query.addCriteria(Criteria.where("name").is(name));;
		return mongotemplate.find(query, User.class);
	}

	@Override
	public User getUserByEmail(String email) {
		Query query = new Query();
		query.addCriteria(Criteria.where("email").is(email));
		List<User> user = mongotemplate.find(query, User.class);
		if(user.size() == 0)
			return null;
		else
			return user.get(0);
	}

}
