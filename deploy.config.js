module.exports = {
	app: [
    {
    	name: 'yoee',
    	script: 'server/index.js',
    	env: {
    		COMMON_VARIABLE: 'true'
    	},
    	env_production: {
    		NODE_ENV: 'production'
    	}
    }
	],

	deploy: {
		production: {
			user: 'root',
			host: '47.114.87.244',
			ref: 'origin/master',
			repo: 'https://github.com/yoee2Git/yoeeblogreconsition.git',
			path: '/var/www/yoee',
			'pre-deploy': 'git fetch --all',
			'post-deploy': 'cnpm install && cnpm run build && cnpm start && pm2 startOrRestart deploy.config.js --env production'
		}
	}
}