/**
 * @exicp.com 常用工具类
 */

/**
 * 
 */
var config = {
	isDebug : false,
	pstHost : host = "https://tst.mrjckj.com/restapi",
	pdtHost : host = "https://api.mrjckj.com/restapi",
	host : function() {
		if (config.isDebug)
			return config.pstHost;
		else
			return config.pdtHost;
	},

	searchCommodityUrl : function() {
		return config.host() + "/commodity/search";
	},

	/**
	 * 
	 * @returns {查询附近商家列表请求地址}
	 */
	searchStoreUrl : function() {
		return config.host() + "/store";
	},

	myStoreUrl : function() {
		return config.host() + "/myStore";
	},

	/**
	 * 
	 * @returns {查询附近商家详情}
	 */
	getStoreInfoUrl : function(id) {
		return config.host() + "/store/" + id;
	},

	getCommodityClassUrl : function(id) {
		return config.host() + "/commodityclass/" + id;
	},

	/**
	 * 
	 * @returns {获取系统通知}
	 */
	getSystemNoticeTop : function() {
		return config.host() + "/notice/top";
	},

	getCommodityUrl : function(id) {
		return config.host() + "/commodity/" + id;
	},

	/**
	 * 
	 * create by liuhongyuan 2017年6月21日 下午5:35:49 description: 查询购物车商品
	 */
	queryCommodityCartUrl : function() {
		return config.host() + "/commoditycart";
	},

	/**
	 * 
	 * create by liuhongyuan 2017年6月21日 下午5:35:49 description: 添加，修改，删除购物车商品
	 */
	commodityCartUrl : function(id) {
		return config.host() + "/commoditycart/" + id;
	},

	/**
	 * 
	 * create by liuhongyuan 2017年6月23日 下午2:09:54 description: 查询商品详情
	 */

	searchCommodityInfoUrl : function(id) {
		return config.host() + "/commodity/detail/" + id;
	},

	/**
	 * 
	 * create by liuhongyuan 2017年6月28日 下午2:21:49 description:获取用户收货地址
	 */
	getShippingAddressUrl : function() {
		return config.host() + "/address";
	},

	/**
	 * 
	 * create by liuhongyuan 2017年6月28日 下午5:48:00 description:查询我可使用的优惠券
	 */
	queryValidCouponUrl : function() {
		return config.host() + "/coupon/valid";
	},
	/**
	 * @author renbo
	 * @description:查询生活服务
	 */
	querylifesUrl : function() {
		return config.host() + "/lifes";
	},
	/**
	 * @author renbo
	 * @description:查询个人信息
	 */
	queryUserData : function() {
		return config.host() + "/tokenUser";
	},

	/**
	 * 统一下单接口
	 * 
	 * @returns {String}
	 */
	unifiedorderUrl : function() {
		return config.host() + "/pay/unifiedorder/v1";
	},
	/**
	 * @author renbo
	 * @description:获取验证码
	 */
	getVerifyCode : function(tel) {
		return config.host() + "/captcha/" + tel;
	},
	/**
	 * @author renbo
	 * @description:绑定手机号
	 */
	bindingTel : function() {
		return config.host() + "/users/bindTel";
	},
	/**
	 * @author renbo
	 * @description:设置密码
	 */
	setPassword : function() {
		return config.host() + "/users/password";
	},

	/**
	 * 
	 * create by liuhongyuan 2017年7月3日 上午11:15:09 description:查询订单历史记录
	 */
	queryOrderHistory : function() {
		return config.host() + "/trade";
	},
	/**
	 * @author renbo
	 * @description:查询是否是跑腿员
	 */
	queryDispatcher : function() {
		return config.host() + "/dispatcheruser";
	},
	/**
	 * @author renbo
	 * @description:查询当前用户申请为跑腿员的审核情况
	 */
	auditDispatcherUser : function() {
		return config.host() + "/dispatcheruseraudit";
	},

	/**
	 * 
	 * create by liuhongyuan 2017年7月4日 上午11:33:55 description:查询二手服务
	 */
	queryProjectUrl : function() {
		return config.host() + "/projects";
	},

	/**
	 * 
	 * create by liuhongyuan 2017年7月4日 下午3:20:31 description:查询二手服务详情
	 */
	queryProjectInfoUrl : function(id) {
		return config.host() + "/projects/" + id;
	},

	/**
	 * create by wjh description:获取系统消息通知的列表url
	 */
	sysMsgListUrl : function() {
		return config.host() + "/message";
	},
	/**
	 * @author renbo
	 * @description:查询我的券
	 */
	queryMyCoupon : function() {
		return config.host() + "/coupon";
	},
	/**
	 * @author renbo
	 * @description:删除订单
	 */
	deleteShopOrderInfo : function(orderId) {
		return config.host() + "/trade" + "/" + orderId;
	},

	/**
	 * 
	 * create by liuhongyuan 2017年7月5日 上午11:39:25 description:收货地址 修改，删除
	 */
	editAddressUrl : function(id) {
		return config.host() + "/address/" + id;
	},
	/**
	 * @author renbo
	 * @description:查询系统支付信息
	 */
	querySystemTransaction : function() {
		return config.host() + "/transaction";
	},
	
	/**
	 * @author wjh
	 * @description:获取阿里ossKey
	 */
	ossKeyUrl:function(){
		return config.host() + "/assumeRole";
	},
	
	
	/**
	 * @author wjh
	 * @description:支付-订单查询
	 */
	payOrderQuerry:function() {
		return config.host() + "/pay/orderquery";
	},
	
	/**
	 * @author wjh
	 * @description:客服电话
	 */
	serviceTel:function(){
		return "07302222188";
	}
	
}