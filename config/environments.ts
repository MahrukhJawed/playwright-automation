import * as dotenv from 'dotenv';
import * as path from 'path';


async function environmentSetup() {

    switch(process.env.NODE_ENV){
        case 
            'local': dotenv.config({path: path.resolve('.env.local'), override: true}); 
            break;
        case 
            'dev': dotenv.config({path: path.resolve('.env.dev'), override: true});  
            break;
        case 
            'qa': dotenv.config({path: path.resolve('.env.qa'), override: true}); 
            break;
        default: 
            dotenv.config({path: path.resolve('.env.uat'), override: true}); 
    }
}
export default environmentSetup;