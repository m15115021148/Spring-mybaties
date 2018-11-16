package com.geek.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.geek.dao.AccountDao;
import com.geek.po.AccountModel;
import com.geek.po.KindModel;
import com.geek.po.LocationModel;

@Service("accountService")
public class AccountService implements AccountDao{
	@Resource
	private AccountDao dao;

	public int upLoadAccount(AccountModel model) {
		return dao.upLoadAccount(model);
	}

	public List<AccountModel> getAccountList(int userID, String type,
			String kindID, String startTime, String endTime, String note ,int page) {
		return dao.getAccountList(userID, type, kindID, startTime, endTime,note, page);
	}

	public List<KindModel> getKind() {
		return dao.getKind();
	}

	public String findKindID(String kindID) {
		return dao.findKindID(kindID);
	}

	public String getStatisticsMoney(int userID, String type, String kind,
			String startTime, String endTime, int page) {
		return dao.getStatisticsMoney(userID, type, kind, startTime, endTime, page);
	}

	public List<AccountModel> getPieData(int userID, String type, String kind,
			String startTime, String endTime,String note) {
		return dao.getPieData(userID, type, kind, startTime, endTime,note);
	}

	public int updateNote(int id , int userID, String note) {
		return dao.updateNote(id ,userID, note);
	}

	public int insertLocation(LocationModel model) {
		return dao.insertLocation(model);
	}

	public List<AccountModel> getLineData(int userID, String type,
			String kind, String startTime, String endTime,String note) {
		return dao.getLineData(userID, type, kind, startTime, endTime,note);
	}

	public List<String> getKindAll(int userID, String type, String kind,
			String startTime, String endTime,String note) {
		return dao.getKindAll(userID, type, kind, startTime, endTime,note);
	}

}
