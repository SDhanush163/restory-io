package com.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {

	@Id
	private String username;
	private String name;
	private String email;
	private String password;
	private List<String> groups;
	private List<String> posts;
	private Date lastlogged;
	
	
	
	public User(String username, String name, String email, String password, List<String> groups, List<String> posts,
			Date lastlogged) {
		super();
		this.username = username;
		this.name = name;
		this.email = email;
		this.password = password;
		this.groups = groups;
		this.posts = posts;
		this.lastlogged = lastlogged;
	}

	public User(String username, String name, String email, String password, List<String> groups, List<String> posts) {
		super();
		this.username = username;
		this.name = name;
		this.email = email;
		this.password = password;
		this.groups = groups;
		this.posts = posts;
	}
	
	public User(String username, String name, String email, String password) {
		super();
		this.username = username;
		this.name = name;
		this.email = email;
		this.password = password;
	}
	
	public User() {
		// TODO Auto-generated constructor stub
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<String> getGroups() {
		return groups;
	}

	public void setGroups(List<String> groups) {
		this.groups = groups;
	}

	public List<String> getPosts() {
		return posts;
	}

	public void setPosts(List<String> posts) {
		this.posts = posts;
	}

	public Date getLastlogged() {
		return lastlogged;
	}

	public void setLastlogged(Date lastlogged) {
		this.lastlogged = lastlogged;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((groups == null) ? 0 : groups.hashCode());
		result = prime * result + ((lastlogged == null) ? 0 : lastlogged.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((posts == null) ? 0 : posts.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (groups == null) {
			if (other.groups != null)
				return false;
		} else if (!groups.equals(other.groups))
			return false;
		if (lastlogged == null) {
			if (other.lastlogged != null)
				return false;
		} else if (!lastlogged.equals(other.lastlogged))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (posts == null) {
			if (other.posts != null)
				return false;
		} else if (!posts.equals(other.posts))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "user [username=" + username + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", groups=" + groups + ", posts=" + posts + ", lastlogged=" + lastlogged + "]";
	}
	
}
