package com.service;

import java.util.List;

import com.model.User;

public interface UserService {
	public boolean addUser(User user);
	public boolean updateUser(User user);
	public boolean deleteUser(String username);
	public boolean isUserExist(String username);
	public boolean validateUser(String email, String password);
	
	public User getUserByUsername(String username);
	public List<User> getUserByName(String name); 
	public User getUserByEmail(String email);
}
