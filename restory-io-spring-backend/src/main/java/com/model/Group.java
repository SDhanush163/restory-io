package com.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Group {

	@Id
	private String groupID;
	private String groupName;
	private String groupDescription;
	private String admin;
	private boolean privacy;
	private List<String> users;
	private List<String> posts;
	private List<String> pendingUsers;
	
	public Group() {
		// TODO Auto-generated constructor stub
	}

	public Group(String groupID, String groupName, String groupDescription, String admin, boolean privacy,
			List<String> users, List<String> posts, List<String> pendingUsers) {
		super();
		this.groupID = groupID;
		this.groupName = groupName;
		this.groupDescription = groupDescription;
		this.admin = admin;
		this.privacy = privacy;
		this.users = users;
		this.posts = posts;
		this.pendingUsers = pendingUsers;
	}

	public Group(String groupID, String groupName, String groupDescription, String admin, boolean privacy) {
		super();
		this.groupID = groupID;
		this.groupName = groupName;
		this.groupDescription = groupDescription;
		this.admin = admin;
		this.privacy = privacy;
	}

	public String getGroupID() {
		return groupID;
	}

	public void setGroupID(String groupID) {
		this.groupID = groupID;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public String getGroupDescription() {
		return groupDescription;
	}

	public void setGroupDescription(String groupDescription) {
		this.groupDescription = groupDescription;
	}

	public String getAdmin() {
		return admin;
	}

	public void setAdmin(String admin) {
		this.admin = admin;
	}

	public boolean isPrivacy() {
		return privacy;
	}

	public void setPrivacy(boolean privacy) {
		this.privacy = privacy;
	}

	public List<String> getUsers() {
		return users;
	}

	public void setUsers(List<String> users) {
		this.users = users;
	}

	public List<String> getPosts() {
		return posts;
	}

	public void setPosts(List<String> posts) {
		this.posts = posts;
	}

	public List<String> getPendingUsers() {
		return pendingUsers;
	}

	public void setPendingUsers(List<String> pendingUsers) {
		this.pendingUsers = pendingUsers;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((admin == null) ? 0 : admin.hashCode());
		result = prime * result + ((groupDescription == null) ? 0 : groupDescription.hashCode());
		result = prime * result + ((groupID == null) ? 0 : groupID.hashCode());
		result = prime * result + ((groupName == null) ? 0 : groupName.hashCode());
		result = prime * result + ((pendingUsers == null) ? 0 : pendingUsers.hashCode());
		result = prime * result + ((posts == null) ? 0 : posts.hashCode());
		result = prime * result + (privacy ? 1231 : 1237);
		result = prime * result + ((users == null) ? 0 : users.hashCode());
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
		Group other = (Group) obj;
		if (admin == null) {
			if (other.admin != null)
				return false;
		} else if (!admin.equals(other.admin))
			return false;
		if (groupDescription == null) {
			if (other.groupDescription != null)
				return false;
		} else if (!groupDescription.equals(other.groupDescription))
			return false;
		if (groupID == null) {
			if (other.groupID != null)
				return false;
		} else if (!groupID.equals(other.groupID))
			return false;
		if (groupName == null) {
			if (other.groupName != null)
				return false;
		} else if (!groupName.equals(other.groupName))
			return false;
		if (pendingUsers == null) {
			if (other.pendingUsers != null)
				return false;
		} else if (!pendingUsers.equals(other.pendingUsers))
			return false;
		if (posts == null) {
			if (other.posts != null)
				return false;
		} else if (!posts.equals(other.posts))
			return false;
		if (privacy != other.privacy)
			return false;
		if (users == null) {
			if (other.users != null)
				return false;
		} else if (!users.equals(other.users))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Group [groupID=" + groupID + ", groupName=" + groupName + ", groupDescription=" + groupDescription
				+ ", admin=" + admin + ", privacy=" + privacy + ", users=" + users + ", posts=" + posts
				+ ", pendingUsers=" + pendingUsers + "]";
	}
	
	
}
