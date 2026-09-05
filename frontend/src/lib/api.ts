import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/x-protobuf',
    'Accept': 'application/x-protobuf'
  },
  responseType: 'arraybuffer' // Critical: Prevents Axios from corrupting binary data
});