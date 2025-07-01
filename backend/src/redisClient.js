import { createClient } from 'redis';

const redisURL = process.env.REDIS_URL || 'redis://localhost:6379';

let client;

export const connectRedis = async () => {
  client = createClient({ url: redisURL });

  client.on('error', (err) => {
    console.error('❌ Redis error:', err.message);
  });

  client.on('reconnecting', () => {
    console.warn('🔄 Reconnecting to Redis...');
  });

  client.on('connect', () => {
    console.log('✅ Connected to Redis!');
  });

  client.on('end', () => {
    console.warn('⚠️ Redis connection closed. Attempting reconnect in 60s...');
    setTimeout(connectRedis, 60 * 1000); // Retry in 60 seconds
  });

  try {
    await client.connect();
  } catch (err) {
    console.error('❌ Initial Redis connection failed:', err.message);
    setTimeout(connectRedis, 60 * 1000);
  }
};

export const getRedisClient = () => client;
