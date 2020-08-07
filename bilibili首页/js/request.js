axios.defaults.baseURL = 'https://developer.duyiedu.com/vue/bz/';

axios.interceptors.response.use(response => {
	const { status } = response;
	const { baseURL, url } = response.config;

	if(status === 200){
		return response.data;
	}
	return response;
})

