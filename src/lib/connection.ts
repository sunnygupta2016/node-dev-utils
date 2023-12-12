import mongoose, { Connection, Mongoose } from 'mongoose';

class MongoDBConnection {
  private mongoose: Mongoose;

  constructor() {
    this.mongoose = mongoose;
  }

  async connect(databaseUrl: string): Promise<Connection> {
    try {
      await this.mongoose.connect(databaseUrl);

      console.log('Connected to MongoDB');
      return this.mongoose.connection;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  disconnect(): void {
    this.mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

export { MongoDBConnection }
