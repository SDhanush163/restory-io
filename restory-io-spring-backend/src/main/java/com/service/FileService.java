package com.service;

import com.model.File;

public interface FileService {
	public boolean addFile(File file);
	public boolean deleteFile(String fileID);
	public File getFileByFileID(String fileID);
	public boolean isFileExist(String fileID);
}
