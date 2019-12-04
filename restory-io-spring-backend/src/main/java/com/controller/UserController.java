package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.User;
import com.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:4200"})
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping
	public ResponseEntity<User> addUser(@RequestBody User user) {
		System.out.println("Add user called with details " + user);
		
		if(userService.isUserExist(user.getUsername())) {
			return new ResponseEntity<User>(HttpStatus.CONFLICT);
		}
		else {
			userService.addUser(user);
			System.out.println("User created");
			return new ResponseEntity<User>(HttpStatus.CREATED);
		}
	}
	
	@DeleteMapping("/{username}")
	public ResponseEntity<User> deleteUser(@PathVariable("username")String username) {
		System.out.println("Delete user called with username " + username);
		if(userService.isUserExist(username)) {
			userService.deleteUser(username);
			System.out.println("User deleted");
			return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		System.out.println("Update user called with details " + user);
		
		if(userService.isUserExist(user.getUsername())) {
			userService.updateUser(user);
			System.out.println("User updated");
			return new ResponseEntity<User>(HttpStatus.OK);
		}
		else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/valid/{email}/{password}")
	public ResponseEntity<Boolean> validateUser(@PathVariable("email")String email, @PathVariable("password")String password) {
		System.out.println("Validate user called with details " + email + " & " + password);
		if(userService.validateUser(email, password)){
			System.out.println("User validated");
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		}
	}
	
	@GetMapping("/uname/{username}")
	public ResponseEntity<User> getUserByUsername(@PathVariable("username")String username) {
		System.out.println("Get user with details " + username);
		if(userService.isUserExist(username)) {
			User user = userService.getUserByUsername(username);
			System.out.println(user.toString() + " found");
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/name/{name}")
	public ResponseEntity<List<User>> getUserByName(@PathVariable("name")String name) {
		System.out.println("Get user with details " + name);
		List<User> users = userService.getUserByName(name);
		if(users.size() == 0) 
			return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
		else {
			System.out.println(name + " found");
			return new ResponseEntity<List<User>>(users, HttpStatus.OK);
		}
	}
	
	@GetMapping("/mail/{email}")
	public ResponseEntity<User> getUserByEmail(@PathVariable("email")String email) {
		User user = userService.getUserByEmail(email);
		if(user == null) {
			System.out.println(email + " found");
			return new ResponseEntity<User>(HttpStatus.NO_CONTENT); 
			} 
		else
			return new ResponseEntity<User>(user, HttpStatus.OK);
	}
}	
