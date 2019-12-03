package com.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Group {

	@Id
	private String groupsID;
	private String groupName;
	private String groupDescription;
	private String admin;
	private boolean privacy;
	private List<String> users;
	private List<String> posts;
	private List<String> pendingUsers;
	
	
}
