<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="s" uri="/struts-tags" %>
<!-- TODO 一定要将国际化资源文件放在某一个包下才能加载吗？ -->
<s:i18n name="res.mess">
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
	<s:form action="login">
		<s:textfield name="username" key="user" />
		<s:textfield name="password"  key="pass" />
		<s:submit key="login" />
	</s:form>
</body>
</html>
</s:i18n>