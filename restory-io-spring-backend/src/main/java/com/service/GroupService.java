package com.service;

import java.util.List;

import com.model.Group;

public interface GroupService {
	public boolean addGroup(Group group);
	public boolean updateGroup(Group group);
	public Group getGroupByGroupID(String groupID);
	public List<Group> getGroupsByGroupname(String groupName);
	public boolean isGroupExist(String groupName);
}
