package com.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class File {

	@Id
	private int fileID;
	private String altName;
	private String url;
	private String postID;
	
	public File() {
		// TODO Auto-generated constructor stub
	}

	public File(int fileID, String altName, String url, String postID) {
		super();
		this.fileID = fileID;
		this.altName = altName;
		this.url = url;
		this.postID = postID;
	}

	public int getFileID() {
		return fileID;
	}

	public void setFileID(int fileID) {
		this.fileID = fileID;
	}

	public String getAltName() {
		return altName;
	}

	public void setAltName(String altName) {
		this.altName = altName;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getPostID() {
		return postID;
	}

	public void setPostID(String postID) {
		this.postID = postID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((altName == null) ? 0 : altName.hashCode());
		result = prime * result + fileID;
		result = prime * result + ((postID == null) ? 0 : postID.hashCode());
		result = prime * result + ((url == null) ? 0 : url.hashCode());
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
		File other = (File) obj;
		if (altName == null) {
			if (other.altName != null)
				return false;
		} else if (!altName.equals(other.altName))
			return false;
		if (fileID != other.fileID)
			return false;
		if (postID == null) {
			if (other.postID != null)
				return false;
		} else if (!postID.equals(other.postID))
			return false;
		if (url == null) {
			if (other.url != null)
				return false;
		} else if (!url.equals(other.url))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "File [fileID=" + fileID + ", altName=" + altName + ", url=" + url + ", postID=" + postID + "]";
	}
	
	
}
