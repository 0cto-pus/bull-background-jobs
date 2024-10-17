import Queue from 'bull';

// Create a new queue for handling email jobs
const emailQueue = new Queue('emailQueue', {
   redis: {
      host: '127.0.0.1',
      port: 6379,
      password: 'mypassredis',
   },
});

export default emailQueue;
