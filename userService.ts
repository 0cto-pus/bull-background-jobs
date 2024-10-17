import emailQueue from './emailQueue';

export async function registerUser(userData: any) {
   //Mock scenario for registered user.
   // Add a job to the queue to send a welcome email
   await emailQueue.add('sendEmail', { email: userData.email });
}
