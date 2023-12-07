import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();

    // Listen for errors
    this.client.on('error', (err) => console.log('Redis Client Error', err));
  }

  isAlive() {
    return this.client.connected;
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
