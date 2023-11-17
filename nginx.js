import http from 'k6/http';

export const options = {
    vus: 1000,
    duration: '300s',
    noConnectionReuse: false, //  disable keep-alive connections - default is false 
};

export default function () {
  http.get('http://18.191.133.116/');
}
