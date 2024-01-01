import mongoose, { Connection, Mongoose, Schema, Document, Model } from 'mongoose';
class MongoDBConnection {
  private mongoose: Mongoose;
  constructor() {
    this.mongoose = mongoose;
  }

  async connect(databaseUrl: string, dbName?: string): Promise<Connection> {
    try {
      if (dbName){
        await this.mongoose.connect(`${databaseUrl}/${dbName}`);
      } else {
        await this.mongoose.connect(databaseUrl);
      }
      console.log('Connected to MongoDB');
      return this.mongoose.connection;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  async listDatabases(): Promise<string[]> {
    try {
      const adminDb = this.mongoose.connection.db.admin();
      const databases = await adminDb.listDatabases();
      const databaseNames = databases.databases.map((db: any) => db.name);
      return databaseNames;
    } catch (error) {
      console.error('Error listing databases:', error);
      throw error;
    }
  }

  async listCollections(): Promise<string[]> {
    try {
      // Get the names of all collections in the connected database
      const collections = await this.mongoose.connection.db.listCollections().toArray();
      const collectionNames = collections.map((collection: any) => collection.name);
      return collectionNames;
    } catch (error) {
      console.error('Error listing collections:', error);
      throw error;
    }
  }

  async getCollectionSize(dbName: string, collectionName: string): Promise<number> {
    try {
      // Switch to the specified database
      const db = this.mongoose.connection.useDb(dbName);

      // Get the size of the collection in bytes
      const collectionSizeInBytes = await db.collection(collectionName).estimatedDocumentCount();

      // Convert bytes to megabytes
      const collectionSizeInMB = collectionSizeInBytes / (1024 * 1024);

      return collectionSizeInMB;
    } catch (error) {
      console.error(`Error getting size of collection ${collectionName}:`, error);
      throw error;
    }
  }

  disconnect(): void {
    this.mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

export { MongoDBConnection }

