// lib/wp.js
import WPAPI from 'wpapi';

const PUBLIC_APIURL = process.env.NEXT_PUBLIC_APIURL;

const wp = new WPAPI({
  endpoint: PUBLIC_APIURL,
});

export default wp;

