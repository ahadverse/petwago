import mongoose from 'mongoose';

interface MongoCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalForMongo = globalThis as unknown as { _mongo?: MongoCache };

const cached: MongoCache = globalForMongo._mongo ?? { conn: null, promise: null };
globalForMongo._mongo = cached;

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI environment variable is not set');
    }
    cached.promise = mongoose.connect(uri);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
