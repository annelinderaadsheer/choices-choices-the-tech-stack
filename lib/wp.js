// Importeer de WPAPI-bibliotheek voor WordPress API
import WPAPI from 'wpapi';

// Haal de API URL op 
const PUBLIC_APIURL = process.env.NEXT_PUBLIC_APIURL;

// Maak een nieuwe WPAPI-instantie met de API URL
const wp = new WPAPI({
  endpoint: PUBLIC_APIURL, // De URL voor de WordPress API
});

// Exporteer de wp instantie zodat deze overal in de applicatie kan worden gebruikt
export default wp;
