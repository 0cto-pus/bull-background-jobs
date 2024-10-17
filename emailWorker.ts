import emailQueue from './emailQueue';

emailQueue.process('sendEmail', async (job) => {
   console.log(`Processing job to send email to: ${job.data.email}`);

   // Simulate email sending
   await new Promise((resolve) => setTimeout(resolve, 1000)); // simulating delay
   console.log(`Email sent to ${job.data.email}`);
});
