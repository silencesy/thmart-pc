new Vue({
	el: '#signUp',
	data: {
		phone: null,
		code: null,
		name: null,
		email: null,
		password: null,
		time: 60,
		sendMsgDisabled: false
	},
	methods: {
		getCode: function() {
			var self = this;
			if (!(/^1[34578]\d{9}$/.test(self.phone))) {
				return;
			} else {
				self.http.ajax({
	                type: 'POST',
	                url: 'http://proj7.thatsmags.com/Api/Public/mobileCode',
	                data: {
	                	mobile: self.phone
	                },
	                success: function(data){
	                    if (data.code==1) {
	                    	self.sendMsgDisabled = true;
	                    	var interval = window.setInterval(function() {
								if ((self.time--) <= 0) {
									self.time = 60;
									self.sendMsgDisabled = false;
									window.clearInterval(interval);
								}
							}, 1000);
	                    } else {
	                    	console.log("error");
	                    }
	                },
	                error: function(xhr, type){
	                    console.log("error");
	                }
	            })
			}
		},
		login: function() {
			var self = this;
			if (!self.phone) {
				alert("Please enter your number!")
			} else if (!(/^1[34578]\d{9}$/.test(self.phone))) {
				alert("Please enter a 11-digit valid number!");
			} else if (!self.code) {
				alert("Please enter the verification code!");
			} else if (!self.name) {
				alert("Please enter your name!");
			} else if (!self.email) {
				alert("Please enter a valid email address!");
			} else if (!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(self.email))) {
				alert("Please enter a valid email address!")
			}
			 else if (!self.password) {
				alert("Please enter your password!");
			} else if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(self.password))) {
				alert("Please enter your password with 6-16 digits (must contain numbers and letters)!");
			} else {
				self.http.ajax({
	                type: 'POST',
	                url: 'http://proj7.thatsmags.com/Api/Account/userRegister',
	                data: {
	                	mobile: self.phone,
	                	code: self.code,
	                	email: self.email,
	                	username: self.name,
	                	password: self.password
	                },
	                success: function(data){
	                    if (data.code==1) {
	                    	window.localStorage.setItem("token");
	                    } else if (data.code == 0) {
	                    	alert("Please enter a correct code!");
	                    } else if (data.code == "-102") {
	                    	alert("This phone number has been registered!");
	                    }
	                },
	                error: function(xhr, type){
	                    console.log(xhr);
	                }
	            })
			}
		}
	}
})