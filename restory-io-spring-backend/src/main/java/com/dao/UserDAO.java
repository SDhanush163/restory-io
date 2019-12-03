package com.dao;

import com.model.User;

public interface UserDAO {
	public boolean addUser(User user);
	public boolean getUserByUsername(String username);
	public User getUserByName(String name); 
}
