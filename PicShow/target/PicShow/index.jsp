<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- 导入javascript文件 -->
<script src="index.js" type="text/javascript"></script>

<title>
	<s:text name="loginPage" />
</title>
</head>
<body>
	<div>
		<input type="button" id="showPic" value="显示图片" />
		<input type="button" id="demoBtn" value="页面测试" />
	</div>
	<hr/>
	<s:i18n name="mess">
	<s:form action="login">
		<s:textfield name="username" value="" key="user"  />
		<s:textfield name="password" value=""  key="pass" />
		<s:submit key="login" />
	</s:form>
	</s:i18n>
</body>
</html>