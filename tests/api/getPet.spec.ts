
import { test , expect } from '../../fixtures/apiFixtures';


  test.describe('@smoke: API', () => {
    
    test('Test Case 1: Find pets by status "available"', async ({ request }) => {
      const response = await request.get('/v2/pet/findByStatus?status=available');
      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      responseBody.forEach((pet: { status: string }) => {
        expect(pet.status).toBe('available');
      });
    });

    test('Test Case 2: Validate response contains at least one pet', async ({ request }) => {
      const response = await request.get('/v2/pet/findByStatus?status=available');
      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      expect(responseBody.length).toBeGreaterThan(0);
    });

 });  
        
       
     
