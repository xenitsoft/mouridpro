module.exports = {
    apps: [{
        script: 'index.js',
        watch: '.'
    }, {
        script: './service-worker/',
        watch: ['./service-worker']
    }],

    deploy: {
        production: {
            user: 'ubuntu',
            host: 'app.mouridpro.com',
            ref: 'origin/master',
            repo: 'https://github.com/xenitsoft/mouridpro.git',
            path: '/var/WWW',
            'pre-deploy-local': '',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': ''
        }
    }
};