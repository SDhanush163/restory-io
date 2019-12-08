package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.GroupDAO;
import com.model.Group;

@Service
public class GroupServiceImpl implements GroupService {

	@Autowired
	GroupDAO groupDAO;
	
	@Override
	public boolean addGroup(Group group) {
		return groupDAO.addGroup(group);
	}

	@Override
	public boolean updateGroup(Group group) {
		return groupDAO.updateGroup(group);
	}

	@Override
	public Group getGroupByGroupID(String groupID) {
		return groupDAO.getGroupByGroupID(groupID);
	}

	@Override
	public List<Group> getGroupsByGroupname(String groupName) {
		return groupDAO.getGroupsByGroupname(groupName);
	}

	@Override
	public boolean isGroupExist(String groupName) {
		return groupDAO.isGroupExist(groupName);
	}

	@Override
	public List<Group> getAllGroups() {
		return groupDAO.getAllGroups();
	}

}
