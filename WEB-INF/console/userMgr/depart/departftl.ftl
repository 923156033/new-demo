"children":[
	<#list dlist as depart>
		{
		"id": "${depart.id}",
		"name": "${depart.name!}",
		<#if departIds??&&departIds?seq_contains(depart.id)>
		"checked":true,
		</#if>
		<#if depart.child?size gt 0>
		<#assign dlist=depart.child>
		"isParent": true,
		"open": false,
		<#include "departftl.ftl">
		<#else>
		"isParent": false
		</#if>
		}<#if depart_has_next>,</#if>
	</#list>
]