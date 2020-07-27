<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<!-- 指定当前pom的版本 -->
	<modelVersion>4.0.0</modelVersion>
	<!-- 指定编码标识 -->
	<properties>
    	<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
	</properties>
	
	<!-- 以下三项是依赖的坐标 -->
	<!-- 主项目的标识：反写的公司地址+项目名 -->
	<groupId>com.imooc.maven01</groupId>
	<!-- 模块的标识：项目名+模块名 -->
	<artifactId>maven01-model</artifactId>
	<!-- 
	版本号 	版本号前半部分：第一个0标识大版本号、第二个0标识分之版本号、第三个0标识小版本号
			版本号后半部分：SNAPSHOP快照、alpha内部测试、beta公测、release稳定、GA正式发布 -->
	<version>0.0.1-SNAPSHOT</version>
	
	<!-- 打包的类型，jar(默认)、war、zip、pom -->
	<packaging></packaging>
	<!-- 项目描述名 -->
	<name></name>
	<!-- 项目的地址 -->
	<url></url>
	<!-- 项目的描述 -->
	<description></description>
	<!-- 开发人员的列表 -->
	<developers></developers>
	<!-- 许可证信息 -->
	<licenses></licenses>
	<!-- 组织信息 -->
	<organization></organization>
	
	<!-- 
	依赖列表
	1、依赖传递：a依赖于b，b又依赖于c，则a自动依赖于c，
				若想要a只依赖于b而不依赖于c，则使用<exclusions></exclusions>消除依赖
	2、依赖冲突：	依赖路径不同时，短路有先
				依赖路径相同时，先声明先优先
	3、聚合和继承：聚合使用<modules></modules>、继承使用<parent></parent> -->
	<dependencies>
		<!-- 依赖项：要指定依赖的坐标 -->
		<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>4.10</version>
			<type></type>
			<!-- 
			指定依赖范围：控制依赖和三种classpath（编译、测试、运行）的关系
			六种取值：compile：编译、测试、运行都有效（默认）
					provided：编译、测试时有效
					runtime：测试、运行时有效
					test：只在测试时有效
					system：编译、测试时有效，可移植性差
					import：导入的范围，只使用在dependencyManagement中表示从其他的pom中导入dependecy的配置 -->
			<score>test</score>
			<!-- 依赖是否可选：TRUE/FALSE -->
			<optional></optional>
			<!-- 排除依赖传递列表 -->
			<exclusions>
				<!-- 排除依赖传递项 -->
				<exclusion></exclusion>
			</exclusions>
		</dependency>
	</dependencies>
	<!-- 依赖的管理：定义在父模块中，供子模块继承使用，一般不会被运行，即不被引用到实际的依赖中-->
	<dependencyManagement>
		<dependencies>
			<dependency></dependency>
		</dependencies>
	</dependencyManagement>
	<!-- 给构建提供支持 -->
	<build>
		<!-- 插件列表 -->
		<plugins>
			<!-- 插件项1 -->
			<plugin>
				<groupId></groupId>
				<artifactId></artifactId>
				<version></version>
			</plugin>
			<!-- 插件项2 -->
			<plugin>
				<groupId></groupId>
				<artifactId></artifactId>
				<version></version>
			</plugin>
		</plugins>
	</build>
	<!-- 用于子模块中对父模块的继承 -->
	<parent></parent>
	<!-- 用来聚合多个maven项目：可以一起编译多个模块 -->
	<modules></modules>
</project>