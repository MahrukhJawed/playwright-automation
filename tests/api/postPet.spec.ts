
import { test , expect } from '../../fixtures/apiFixtures';
import  basePayload  from '../../data/basePayload.json';


  test.describe('@smoke: API', () => {
    
    test('Test Case 1: Add a new pet to the store', async ({ request }) => {
        const response = await request.post('/v2/pet', {data: basePayload});
        console.log(response.statusText());
        expect(response.status()).toBe(200);
    });

    test('Test Case 2: Add a pet with invalid id', async ({ request, apibasePage }) => {
        const overrides = {id: 'missingid'};
        const highlightedOverrides = await apibasePage.highlightOverrides(basePayload.id, overrides.id);
        console.log('Overridden JSON Data', highlightedOverrides);
          const payload = JSON.parse(JSON.stringify(basePayload));
          payload.id = overrides.id;
        const response = await request.post('/v2/pet', { data: payload});
        expect(response.statusText()).toBe('Server Error');
      });
  });  

        
       
     
