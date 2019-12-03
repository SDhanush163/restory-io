package com.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class user {

	@Id
	private String username;
	private String name;
	private String password;
	private List<String> groups;
	private List<String> posts;
	private Date lastlogged;
	
	
}
