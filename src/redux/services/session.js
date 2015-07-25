import request from 'superagent';

const login = (username, password) => {
  return new Promise((resolve, reject) => {
    request
      .post('/login')
      .send({ username, password })
      .end((error, response) => {
        if (error) return reject(error);
        if (!response.ok) return reject({ body: response.body, status: response.status });

        return resolve(response.body);
      });
  });
};

export default {
  login
};
