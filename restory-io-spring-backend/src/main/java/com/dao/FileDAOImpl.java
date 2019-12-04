package com.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.model.File;
import com.mongodb.client.result.DeleteResult;

@Repository
public class FileDAOImpl implements FileDAO {

	@Autowired
	MongoTemplate mongotemplate;

	@Override
	public boolean addFile(File file) {
		mongotemplate.save(file);
		return true;
	}

	@Override
	public boolean deleteFile(String fileID) {
		File file = new File();
		file.setFileID(fileID);
		DeleteResult result = mongotemplate.remove(file);
		
		int rowsAffected = (int) result.getDeletedCount();
		if(rowsAffected == 0)
			return false;
		else 
			return true;
	}

	@Override
	public File getFileByFileID(String fileID) {
		return mongotemplate.findById(fileID, File.class);
	}

	@Override
	public boolean isFIleExist(String fileID) {
		File file = mongotemplate.findById(fileID, File.class);
		if(file == null)
			return false;
		else
			return true;
	}

}
