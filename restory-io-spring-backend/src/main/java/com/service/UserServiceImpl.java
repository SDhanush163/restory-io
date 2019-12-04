package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.UserDAO;
import com.model.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDAO userDAO;
	
	@Override
	public boolean addUser(User user) {
		return userDAO.addUser(user);
	}

	@Override
	public boolean updateUser(User user) {
		return userDAO.updateUser(user);
	}

	@Override
	public boolean deleteUser(String username) {
		return userDAO.deleteUser(username);
	}

	@Override
	public boolean isUserExist(String username) {
		return userDAO.isUserExist(username);
	}

	@Override
	public boolean validateUser(String email, String password) {
		return userDAO.validateUser(email, password);
	}

	@Override
	public User getUserByUsername(String username) {
		return userDAO.getUserByUsername(username);
	}

	@Override
	public List<User> getUserByName(String name) {
		return userDAO.getUserByName(name);
	}

	@Override
	public User getUserByEmail(String email) {
		return userDAO.getUserByEmail(email);
	}

}
