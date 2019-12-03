package com.model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class post {

	@Id
	private int postID;
	private String textBody;
	private String author;
	private Date timeStamp;
	private String fileID;
	private String groupID;
	
	public post() {
		// TODO Auto-generated constructor stub
	}

	public post(int postID, String textBody, String author, Date timeStamp, String fileID, String groupID) {
		super();
		this.postID = postID;
		this.textBody = textBody;
		this.author = author;
		this.timeStamp = timeStamp;
		this.fileID = fileID;
		this.groupID = groupID;
	}

	public int getPostID() {
		return postID;
	}

	public void setPostID(int postID) {
		this.postID = postID;
	}

	public String getTextBody() {
		return textBody;
	}

	public void setTextBody(String textBody) {
		this.textBody = textBody;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Date getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Date timeStamp) {
		this.timeStamp = timeStamp;
	}

	public String getFileID() {
		return fileID;
	}

	public void setFileID(String fileID) {
		this.fileID = fileID;
	}

	public String getGroupID() {
		return groupID;
	}

	public void setGroupID(String groupID) {
		this.groupID = groupID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((author == null) ? 0 : author.hashCode());
		result = prime * result + ((fileID == null) ? 0 : fileID.hashCode());
		result = prime * result + ((groupID == null) ? 0 : groupID.hashCode());
		result = prime * result + postID;
		result = prime * result + ((textBody == null) ? 0 : textBody.hashCode());
		result = prime * result + ((timeStamp == null) ? 0 : timeStamp.hashCode());
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
		post other = (post) obj;
		if (author == null) {
			if (other.author != null)
				return false;
		} else if (!author.equals(other.author))
			return false;
		if (fileID == null) {
			if (other.fileID != null)
				return false;
		} else if (!fileID.equals(other.fileID))
			return false;
		if (groupID == null) {
			if (other.groupID != null)
				return false;
		} else if (!groupID.equals(other.groupID))
			return false;
		if (postID != other.postID)
			return false;
		if (textBody == null) {
			if (other.textBody != null)
				return false;
		} else if (!textBody.equals(other.textBody))
			return false;
		if (timeStamp == null) {
			if (other.timeStamp != null)
				return false;
		} else if (!timeStamp.equals(other.timeStamp))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "post [postID=" + postID + ", textBody=" + textBody + ", author=" + author + ", timeStamp=" + timeStamp
				+ ", fileID=" + fileID + ", groupID=" + groupID + "]";
	}
	
	
	
}
