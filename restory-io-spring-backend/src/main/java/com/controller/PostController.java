package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Post;
import com.service.PostService;

@RestController
@RequestMapping("/post")
@CrossOrigin(origins= {"http://localhost:3000","http://localhost:4200"})
public class PostController {
	@Autowired
	PostService postService;
	@GetMapping("/{postId}")
	public ResponseEntity<Post> getPost(@PathVariable("postId")int postId){
		Post post = new Post();
		post=postService.getPost(postId);
		
		return new ResponseEntity<Post>(post,HttpStatus.OK);
	}
	@GetMapping
	public ResponseEntity<List<Post>> getAllPosts(){
		System.out.println("Fetching all products ");
		List<Post> allProducts=postService.getAllPost();
		return new ResponseEntity<List<Post>>(allProducts,HttpStatus.OK);
	}
	@PutMapping()
	public ResponseEntity<Post> updatePost(@RequestBody Post post){
		postService.updateText(post);
		return new ResponseEntity<Post>(post,HttpStatus.OK);		
	}
	@DeleteMapping("/{postId}")
	public ResponseEntity<String> deletePost(@PathVariable("postId")int postId){
		postService.deletePost(postId);
		return new ResponseEntity<String>("Post Deleted",HttpStatus.OK);
	}
	@PostMapping()
	public ResponseEntity<String> savePost(@RequestBody Post post){
		postService.addPost(post);
		return new ResponseEntity<String>("Post Post",HttpStatus.OK);
		
		
	}
	

}
