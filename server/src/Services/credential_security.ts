import crypto, { Cipher } from 'crypto';
import { PasswordData } from './../types/passwordDataInterface';
const secret = 'pppppppppppppppppppppppppppppppp'

export const encrypt = (password:string)=>{
   
    const key = Buffer.from(secret, 'utf8'); // Convert the secret key to a Buffer
    const iv = crypto.randomBytes(16); // Generate a random IV (16 bytes)
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

    const encryptedPassword = Buffer.concat([cipher.update(Buffer.from(password, 'utf8')), cipher.final()]);
    
    // Combine IV and encrypted password into a single Buffer
    const encryptedData = Buffer.concat([iv, encryptedPassword]);

    return {
        iv: iv.toString('hex'),
       password: encryptedData.toString('hex')
    }; // Convert the result to a hex string
    
}







