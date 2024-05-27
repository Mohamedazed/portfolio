import {Resend} from 'resend'; // Importing the Resend class

const resendInstance = new Resend('YOUR_RESEND_API_KEY'); // Creating an instance of Resend

export default resendInstance; // Exporting the instance instead of redeclaring Resend
