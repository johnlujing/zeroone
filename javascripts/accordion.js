function accordion(){
	var i,h4Node,acc=document.getElementById("js_accordion"),h4El=acc.getElementsByTagName("h4"),size=h4El.length;
	for(window._IE=function(){for(var v=3,div=document.createElement("div"),all=div.getElementsByTagName("i");div.innerHTML="<!--[if gt IE "+ ++v+"]><i></i><![endif]-->",all[0];);return v>4?v:!1}(),i=0;size>i;i++)h4Node=h4El[i],h4Node.setAttribute("class","toggle"),1==!!h4Node.nextElementSibling?h4Node.nextElementSibling.setAttribute("class","closed"):h4Node.nextSibling.setAttribute("class","closed"),h4Node.onclick=function(){var h4=this;"toggle"==h4.getAttribute("class")?(h4.setAttribute("class","toggle-active"),1==!!h4.nextElementSibling?h4.nextElementSibling.setAttribute("class",""):h4.nextSibling.setAttribute("class","")):(h4.setAttribute("class","toggle"),1==!!h4.nextElementSibling?h4.nextElementSibling.setAttribute("class","closed"):h4.nextSibling.setAttribute("class","closed"))}}
	

window.onload=function(){
	var Days=7,exp=new Date;
	exp.setTime(exp.getTime()+24*Days*60*60*1e3);
	var query={};
	if(window.location.search.length>1)
		for(var keys,keyID=0,search=window.location.search.substr(1).split("&");keyID<search.length;keyID++)
			keys=search[keyID].split("="),query[decodeURIComponent(keys[0])]=keys.length>1?decodeURIComponent(keys[1]):"";
	query.md&&(document.cookie="md="+escape(query.md)+";expires="+exp.toGMTString()+";domain=.zeroone.cn;path=/"),document.referrer&&(document.cookie="rf="+escape(document.referrer)+";expires="+exp.toGMTString()+";domain=.zeroone.cn;path=/");
	var _path=window.location.pathname;
	(_path.indexOf("faq")>0)&&accordion();
};