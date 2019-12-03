package com.model;

import javax.annotation.Generated;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class post {

	@Id
	private int postID;
	private String textBody;
	
	
}
