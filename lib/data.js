// pages/api/data.js
// export default function handler(req, res) {
    
//     const data = {
//         posts: [
//             // Voorbeeldgegevens
//             {
//                 slug: 'voorbeeld-post',
//                 title: { rendered: 'Voorbeeld Post' },
//                 excerpt: { rendered: 'Dit is een voorbeeld excerpt.' },
//                 date: '2024-10-17T00:00:00Z',
//                 yoast_head_json: {
//                     og_image: [{ url: '/path/to/image.jpg' }],
//                     twitter_misc: { 'Geschatte leestijd': '5 minuten' },
//                     author: 'Auteur Naam',
//                 },
//             },
//         ],
//         searchterm: '',
//     };

//     res.status(200).json(data);
// }

// lib/data.js

export const categoriesData = [
  { id: 9, name: "Binnenland", slug: "binnenland" },
  { id: 1010, name: "Buitenland", slug: "buitenland" },
  { id: 7164, name: "Column", slug: "column" },
  { id: 6, name: "Economie", slug: "economie" },
  { id: 4, name: "Kunst & Media", slug: "kunst-media" },
  { id: 3211, name: "Podcasts", slug: "podcast" },
  { id: 63, name: "Politiek", slug: "politiek" },
  { id: 94, name: "Wetenschap", slug: "wetenschap" },
];

export const dateFormat = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  year: 'numeric',
};
