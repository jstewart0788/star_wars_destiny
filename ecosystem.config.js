module.exports = {
  apps : [{
    name        : "starwars",
    script      : "./bin/www",
    watch       : true,
    env: {
      "NODE_ENV": "development",
      "PORT": "3000"      
    },
    env_production : {
       "NODE_ENV": "production",
       "PORT": "8080"
    }
  }]
}

