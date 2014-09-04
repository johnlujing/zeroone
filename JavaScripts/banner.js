
var banner=function(){
	
	function id(name){return document.getElementById(name)}
	
	function each(arr,callback,thisp){
		if(arr.forEach)
			arr.forEach(callback,thisp);
		else for(var i=0,len=arr.length;len>i;i++)
			callback.call(thisp,arr[i],i,arr)
	}
	
	function fadeIn(elem){
		setOpacity(elem,0);
		for(var i=0;20>i;i++)
			!function(){
				var pos=5*i;
				setTimeout(function(){setOpacity(elem,pos)},25*i)
			}(i)
	}
	
	function fadeOut(elem){
		for(var i=0;20>=i;i++)
			!function(){
				var pos=100-5*i;
				setTimeout(function(){setOpacity(elem,pos)},25*i)
			}(i)
	}
	
	function setOpacity(elem,level){
		elem.style.display=0==level?"none":"inline-block",elem.filters?elem.style.filter="alpha(opacity="+level+")":elem.style.opacity=level/100
	}
	
	return{
		scroll:function(count,wrapId,ulId){
					var self=this,targetIdx=0,curIndex=0,frag=document.createDocumentFragment();
					this.num=[];
					for(var i=0;count>i;i++)
						this.num[i]=frag.appendChild(document.createElement("li"));
					
					id(ulId).appendChild(frag),this.img=id(wrapId).getElementsByTagName("li"),
					this.num[0].className="on",
					each(this.img,function(elem,idx){0!=idx&&setOpacity(elem,0)}),
					each(this.num,function(elem,idx){
									elem.onclick=function(){
													self.fade(idx,curIndex),
													curIndex=idx,
													targetIdx=idx
												}
								}
						);
					
					var itv=setInterval(function(){targetIdx<self.num.length-1?targetIdx++:targetIdx=0,self.fade(targetIdx,curIndex),curIndex=targetIdx},5e3);
					
					id(ulId).onmouseover=function(){clearInterval(itv)},id(wrapId).onmouseover=function(){clearInterval(itv)},id(wrapId).onmouseout=function(){clearInterval(itv),itv=setInterval(function(){targetIdx<self.num.length-1?targetIdx++:targetIdx=0,self.fade(targetIdx,curIndex),curIndex=targetIdx},5e3)}
				},
		
		fade:function(idx,lastIdx){
					if(idx!=lastIdx){
						var self=this;
						fadeOut(self.img[lastIdx]),fadeIn(self.img[idx]),each(self.num,function(elem,elemidx){elemidx!=idx?self.num[elemidx].className="":(id("spots").style.background="",self.num[elemidx].className="on")})
					}
			}
	}
		
}();

window.onload=function(){
	var Days=7,exp=new Date;
	exp.setTime(exp.getTime()+24*Days*60*60*1e3);
	var query={};
	if(window.location.search.length>1)
		for(var keys,keyID=0,search=window.location.search.substr(1).split("&");keyID<search.length;keyID++)
			keys=search[keyID].split("="),query[decodeURIComponent(keys[0])]=keys.length>1?decodeURIComponent(keys[1]):"";
	query.md&&(document.cookie="md="+escape(query.md)+";expires="+exp.toGMTString()+";domain=.zeroone.cn;path=/"),document.referrer&&(document.cookie="rf="+escape(document.referrer)+";expires="+exp.toGMTString()+";domain=.zeroone.cn;path=/");
	var _path=window.location.pathname;
	(_path.indexOf("index")>0||"/"==_path)&&(banner.scroll(3,"banner","spots"))
}