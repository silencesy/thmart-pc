
Vue.prototype.getUrlParameter = function (name){
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
        return null;
}
Vue.prototype.http = $; 
/**
 * 统一处理请求函数，参数
 */
Vue.prototype.login = function(afterloginfun,must){
	if(islogin && !must) return;
	// 弹出框
	afterloginfun();
}
Vue.prototype.request = function (path,para,backfun,failedfun,mustlogin){
	var self =this;
	var url = 'http://proj7.thatsmags.com/'; 
	// 添加token信息到para 
	var token = window.localStorage.getItem("token"); 
	if(token){
		para['token'] = token; 
	}
	else if(mustlogin) {
		self.login(function(){
			self.request(path,para,backfun,failedfun);
		});
		return;
	}
	self.http.ajax({
        type: 'get',
        url: url + path ,
        data: para,
        success: function(response){
            if(response.code =0 ){
            	// 错误处理 
            	if(response.code==-102)
            	{
            		self.login(); 
            		return;
            	}
            	 
            	// console.log('error:'+path);
            	// console.log(para);
            	// console.log(response);

            }else{	
            	// 用户token处理
	           	if(response.data && response.data.token)
	           	{ 
	           		window.localStorage.setItem("token",response.data.token);           		       		
	           	}
	            if(backfun){
	               	backfun(response);
	            } 
        	}
        },
        error: function(xhr, type){
        	if(failedfun)
        	{
        		failedfun(xhr, type);
        	}
        	else
        	{ 
        		console.log(xhr);  
        	} 
        }
    });  
}
