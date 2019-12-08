package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Group;
import com.service.GroupService;

@RestController
@RequestMapping("/group")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:4200"})
public class GroupController {
	
	@Autowired
	GroupService groupService;
	
	@PostMapping
	public ResponseEntity<Group> addGroup(@RequestBody Group group) {
		System.out.println("Add group with details" + group.toString());
		if(groupService.isGroupExist(group.getGroupName())) 
			return new ResponseEntity<Group>(HttpStatus.CONFLICT);
		else{
			groupService.addGroup(group);
			System.out.println("Group added");
			return new ResponseEntity<Group>(HttpStatus.CREATED);
		}
	}
	
	@PutMapping
	public ResponseEntity<Group> updateGroup(@RequestBody Group group) {
		System.out.println("Update group with details" + group.toString());
		if(groupService.isGroupExist(group.getGroupName())) {
			groupService.updateGroup(group);
			System.out.println("Group updated");
			return new ResponseEntity<Group>(HttpStatus.OK);
		}
		else
			return new ResponseEntity<Group>(HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/id/{groupID}")
	public ResponseEntity<Group> getGroupByID(@PathVariable("groupID")String groupID) {
		System.out.println("Get group with details" + groupID);
		Group group = groupService.getGroupByGroupID(groupID);
		if(group == null)
			return new ResponseEntity<Group>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<Group>(group, HttpStatus.OK);
	}
	
	@GetMapping("/name/{groupName}")
	public ResponseEntity<List<Group>> getGroupByGroupName(@PathVariable("groupName")String groupName) {
		System.out.println("Get group with details" + groupName);
		List<Group> list = groupService.getGroupsByGroupname(groupName);
		if(list.size() == 0)
			return new ResponseEntity<List<Group>>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<List<Group>>(list, HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Group>> getAllGroups() {
		List<Group> list = groupService.getAllGroups();
		if(list.size() == 0)
			return new ResponseEntity<List<Group>>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<List<Group>>(list, HttpStatus.OK);
	}
}
