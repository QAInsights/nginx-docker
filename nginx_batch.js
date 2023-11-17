import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1,
  duration: '300s',
  noConnectionReuse: false,
  batchPerHost: 20,
};

export default function () {
  // Define the number of parallel connections
  const numConnections = 20;
  
  const requests = [];
  for (let i = 0; i < numConnections; i++) {
    requests.push({ method: 'GET', url: 'http://18.191.133.116' });
  }

  const responses = http.batch(requests);

  // Process the responses and perform checks as needed
  responses.forEach((res) => {
    check(res, {
      'Status is 200': (r) => r.status === 200,
      // Add more checks as needed
    });
  });
}
