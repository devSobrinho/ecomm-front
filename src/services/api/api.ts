import { GRAPHQL_QUERY } from '@services/graphql/queries';
import axios from 'axios';
import request from 'graphql-request';

export const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API,
  baseURL: 'http://localhost:3000/api/',
});

export const apiJsonServer = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const loadProducts = async () => {
  const data = await request(
    // String(process.env.NEXT_PUBLIC_GRAPHCMS_API),
    'https://api-sa-east-1.graphcms.com/v2/cl4k1ev7e5dcs01xo8eti7jmk/master',
    GRAPHQL_QUERY,
  );
  console.log('os dados cms', data);

  return data;
};
