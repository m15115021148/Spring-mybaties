<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>拍照</title>
<meta charset="utf-8" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="viewport"
	content="width=device-width,target-densitydpi=high-dpi,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />


<script type="text/javascript">
	function getPhotoByPhone() {
		javascript: android.getPhotoByCamera();
	}

	function getPicture() {
		javascript: android.getPhotoByPicture();
	}

	function getQRCode() {
		javascript: android.getQRCode();
	}

	function getPhotoCallback(name, uri) {
		var u = document.getElementById("divuri");
		var u2 = document.getElementById("img");
		if (name == null) {
			alart("cancle");
			return;
		}
		u.innerHTML = name;
		u2.src = "data:image/png;base64," + uri;

	}

	function getQRCodeCallBack(msg) {
		var u = document.getElementById("divuri");
		u.innerHTML = msg;
	}
</script>

<style type="text/css">
html,body {
	width: 100%;
	height: 100%;
	margin: 0px;
	background-color: #00b1af;
}

#img {
	height: 400px;
	width: 100%;
	display: block;
}

input {
	background: orange;
	color: #f00;
	font-size: 20px;
	text-align: center;
	width: 100%;
	margin-top: 20px;
	margin-left: 10px;
	margin-right: 10px;
	height: 40px;
}

h2 {
	height: 20px;
}
</style>


</head>

<body>
	<div>
		<input type="button" value="照相" onclick="getPhotoByPhone()" /> <input
			type="button" value="相册" onclick="getPicture()" /> <input
			type="button" value="二维码" onclick="getQRCode()" />
	</div>

	<h2></h2>
	<div id="divuri"></div>
	<img data-src="holder.js/100%x180" alt="100%x200" id="img">
	<h2></h2>

</body>
</html>
