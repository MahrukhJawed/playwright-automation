import fs from 'fs';
import { test } from '@playwright/test';
import { authFile } from '../../playwright.config';


test('cleanup', async ( {  }) => {
    if (typeof authFile === 'string' && authFile) {
      if (fs.existsSync(authFile)) {
        fs.unlinkSync(authFile); // Delete session file after all tests
        console.log('Session storage file deleted.');
      } else {
        console.log('Session storage file does not exist.');
      }
    } else {
      console.error('invalid authFile');
    }
  });

