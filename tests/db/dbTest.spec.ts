
import { test, expect } from '@playwright/test';
import * as sql from 'mssql';
import {config} from '../../config/database'; 

let db: sql.ConnectionPool;

//Establish connection to the database
async function connectToDatabase() {
    try {
        const pool = await sql.connect(config);
        console.log('Connected to SQL Server');
        return pool;
    } catch (err) {
        console.error('Database connection failed:', err);
        throw err;
    }
};

// Initialize the database connection before all tests
test.beforeAll(async () => {
    db = await connectToDatabase();
})
    
test.describe('@smoke: DB', () => {
    test('Test Case 1: Connect to db', async ({  }) => {
        const result = await db.request().query('select * from dbo.TEST_TABLE');
        expect(result.recordset.length).toBeGreaterThan(0);
    });
});

// Close the database connection after all tests
test.afterAll(async () => {
    if (db) {
        await db.close();
        console.log('Database connection closed');
    }
});