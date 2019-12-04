package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.File;
import com.service.FileService;

@RestController
@RequestMapping("/file")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:4200"})
public class FileController {
	
	@Autowired
	FileService fileService;
	
	@PostMapping
	public ResponseEntity<File> addFile(@RequestBody File file) {
		System.out.println("Add file called with details " + file);
		
		if(fileService.isFileExist(file.getFileID())) {
			return new ResponseEntity<File>(HttpStatus.CONFLICT);
		}
		else {
			fileService.addFile(file);
			System.out.println("File created");
			return new ResponseEntity<File>(HttpStatus.CREATED);
		}
	}
	
	@DeleteMapping("/{fileID}")
	public ResponseEntity<File> deleteFile(@PathVariable("fileID")String fileID) {
		System.out.println("Add user called with details " + fileID);
		
		if(fileService.isFileExist(fileID)) {
			fileService.deleteFile(fileID);
			System.out.println("File deleted");
			return new ResponseEntity<File>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<File>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/{fileID}")
	public ResponseEntity<File> getFile(@PathVariable("fileID")String fileID) {
		System.out.println("get file called with details " + fileID);
		
		if(fileService.isFileExist(fileID)) {
			File file = fileService.getFileByFileID(fileID);
			System.out.println("File found");
			return new ResponseEntity<File>(file, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<File>(HttpStatus.NOT_FOUND);
		}
	}
}
