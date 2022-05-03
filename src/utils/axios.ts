import axios from 'axios';

export function initAxios() {
  axios.defaults.headers.common.Accept = 'application/json';

  axios.interceptors.response.use(
    (r) => r.data,
    (err) => {
      const r = err.response;
      if (r.status >= 400 && r.status < 500) {
        console.error(r);
      }

      if (r.status >= 500) {
        console.error(r);
      }

      return Promise.reject(err);
    },
  );
}

export default initAxios;
