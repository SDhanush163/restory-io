package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.FileDAO;
import com.model.File;

@Service
public class FIleServiceImpl implements FileService {

	@Autowired
	FileDAO fileDAO;
	
	@Override
	public boolean addFile(File file) {
		return fileDAO.addFile(file);
	}

	@Override
	public boolean deleteFile(String fileID) {
		return fileDAO.deleteFile(fileID);
	}

	@Override
	public File getFileByFileID(String fileID) {
		return fileDAO.getFileByFileID(fileID);
	}

	@Override
	public boolean isFileExist(String fileID) {
		return fileDAO.isFIleExist(fileID);
	}

}
