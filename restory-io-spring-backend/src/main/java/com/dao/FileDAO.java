package com.dao;

import com.model.File;

public interface FileDAO {
	public boolean addFile(File file);
	public boolean deleteFile(String fileID);
	public File getFileByFileID(String fileID);
	public boolean isFIleExist(String fileID);
}
