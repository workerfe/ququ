pm2 stop www
export NODE_ENV=production
pm2 start bin/www --name="ququ"