package com.geek.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.geek.po.AccountModel;
import com.geek.po.KindModel;
import com.geek.po.LocationModel;

public interface AccountDao {
	int upLoadAccount(AccountModel model);
	List<KindModel> getKind();
	String findKindID(String kindID);
	List<AccountModel> getAccountList(
			@Param(value="userID") int userID,
			@Param(value="type") String type,
			@Param(value="kind") String kind,
			@Param(value="startTime") String startTime,
			@Param(value="endTime") String endTime,
			@Param(value="note") String note,
			@Param(value="page") int page
			);
	String getStatisticsMoney(
			@Param(value="userID") int userID,
			@Param(value="type") String type,
			@Param(value="kind") String kind,
			@Param(value="startTime") String startTime,
			@Param(value="endTime") String endTime,
			@Param(value="page") int page
			);
	List<AccountModel> getPieData(
			@Param(value="userID") int userID,
			@Param(value="type") String type,
			@Param(value="kind") String kind,
			@Param(value="startTime") String startTime,
			@Param(value="endTime") String endTime,
			@Param(value="note") String note
			);//饼状图 数据 统计
	int updateNote(
			@Param(value="accountID") int accountID,
			@Param(value="userID") int userID,
			@Param(value="note") String note
			);//修改备注
	int insertLocation(LocationModel model);//插入位置信息
	List<AccountModel> getLineData(
			@Param(value="userID") int userID,
			@Param(value="type") String type,
			@Param(value="kind") String kind,
			@Param(value="startTime") String startTime,
			@Param(value="endTime") String endTime,
			@Param(value="note") String note
			);//线形图 数据 统计
	List<String> getKindAll(
			@Param(value="userID") int userID,
			@Param(value="type") String type,
			@Param(value="kind") String kind,
			@Param(value="startTime") String startTime,
			@Param(value="endTime") String endTime,
			@Param(value="note") String note
			);//查询所有存在的类型 集合
}
