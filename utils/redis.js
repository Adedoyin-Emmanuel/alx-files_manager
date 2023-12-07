import createClient from 'redis/lib/createClient';

class RedisClient {
  constructor() {
    this.client = createClient()
      .on('error', (error) => {
        console.log(error);
      })
      .connect();
  }

  isAlive() {
    return this.client.isReady;
  }

  async get(key) {
    const value = await this.client.get(key);
    return value;
  }

  async set(key, value) {
    await this.client.set(key, value);
  }

  async del(key) {
    await this.client.del(key);
  }
}

const redisClient = new RedisClient();
module.exports = redisClient;
