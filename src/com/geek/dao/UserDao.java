package com.geek.dao;


import org.apache.ibatis.annotations.Param;

import com.geek.po.UserModel;


public interface UserDao {
	void registerUser(UserModel user);
	UserModel loginUser(UserModel user);
	UserModel findUserById(int userID);
	UserModel findUserByUserName(String name);
	void uploadHeader(
			@Param(value="userID") int userID,
			@Param(value="photo") String photo);
	int updateUserInfo(
			@Param(value="userID") int userID,
			@Param(value="sex") String sex,
			@Param(value="age") String age,
			@Param(value="telphone") String telphone,
			@Param(value="email") String email
			);//修改个人资料
}
