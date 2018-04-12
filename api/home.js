Vue.use(VueAwesomeSwiper);
new Vue({
	el: '#home',
	components: {
		LocalSwiper: VueAwesomeSwiper.swiper,
    	LocalSlide: VueAwesomeSwiper.swiperSlide
	},
	data: {
		swiperOptionA: {
     		pagination: {
	          	el: '.swiper-pagination',
	          	clickable :true,
	        },
	        navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
	        }
		},
		homeData: null,
	},
	mounted: function () {
		var self = this;
		self.$nextTick(function() {
			self.getHomeData();
		});
	},
    computed: {
		swiperA() {
			return this.$refs.awesomeSwiperA.swiper
		}
    },
    methods: {
    	getHomeData: function () {
    		var self = this;
    		axios.post('http://api.mall.thatsmags.com/Api/Public/home')
			.then(function (response) {
				self.homeData = response.data;
				if (response.data.code == 1) {
					self.homeData = response.data.data;
				}
			})
			.catch(function (error) {
				console.log(error);
			});
    	}
    }
})