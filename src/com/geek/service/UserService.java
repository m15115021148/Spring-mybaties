package com.geek.service;


import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.geek.dao.UserDao;
import com.geek.po.UserModel;

@Service("userService")
public class UserService implements UserDao{
	@Resource
	private UserDao userDao;

	public UserModel loginUser(UserModel user) {
		return userDao.loginUser(user);
	}

	public UserModel findUserById(int userID) {
		return userDao.findUserById(userID);
	}

	public UserModel findUserByUserName(String name) {
		return userDao.findUserByUserName(name);
	}

	public void registerUser(UserModel user) {
		userDao.registerUser(user);
	}

	public void uploadHeader(int userID, String photo) {
		userDao.uploadHeader(userID, photo);
		
	}

	public int updateUserInfo(int userID, String sex, String age,
			String telphone, String email) {
		return userDao.updateUserInfo(userID, sex, age, telphone, email);
	}
	
}
