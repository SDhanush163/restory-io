package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.model.Group;
import com.mongodb.client.result.UpdateResult;

@Repository
public class GroupDAOImpl implements GroupDAO {

	@Autowired
	MongoTemplate mongotemplate;
	
	@Override
	public boolean addGroup(Group group) {
		mongotemplate.save(group);
		return false;
	}

	@Override
	public boolean updateGroup(Group group) {
		Query query = new Query();
		query.addCriteria(Criteria.where("_id").is(group.getGroupID()));
		
		Update update = new Update();
		update.set("groupName", group.getGroupName());
		update.set("groupDescription", group.getGroupDescription());
		update.set("users", group.getUsers());
		update.set("posts", group.getPosts());
		update.set("pendingUsers", group.getPendingUsers());
		
		UpdateResult result = mongotemplate.updateFirst(query, update, Group.class);
		
		int rowsAffected = (int) result.getModifiedCount();
		if(rowsAffected == 0)
			return false;
		else
			return true;
	}

	@Override
	public Group getGroupByGroupID(String groupID) {
		return mongotemplate.findById(groupID, Group.class);
	}

	@Override
	public List<Group> getGroupsByGroupname(String groupName) {
		Query query = new Query();
		query.addCriteria(Criteria.where("groupName").is(groupName));
		return mongotemplate.find(query, Group.class);
	}

	@Override
	public boolean isGroupExist(String groupName) {
		Query query = new Query();
		query.addCriteria(Criteria.where("groupName").is(groupName));
		
		List<Group> find = mongotemplate.find(query, Group.class);
		if(find.size() != 0)
			return true;
		else
			return false;
	}

	@Override
	public List<Group> getAllGroups() {
		List<Group> groups = mongotemplate.findAll(Group.class);
		return groups;
	}

}
