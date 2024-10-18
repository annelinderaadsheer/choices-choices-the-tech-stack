// pages/api/data.js
export default function handler(req, res) {
    
    const data = {
        posts: [
            // Voorbeeldgegevens
            {
                slug: 'voorbeeld-post',
                title: { rendered: 'Voorbeeld Post' },
                excerpt: { rendered: 'Dit is een voorbeeld excerpt.' },
                date: '2024-10-17T00:00:00Z',
                yoast_head_json: {
                    og_image: [{ url: '/path/to/image.jpg' }],
                    twitter_misc: { 'Geschatte leestijd': '5 minuten' },
                    author: 'Auteur Naam',
                },
            },
        ],
        searchterm: '',
    };

    res.status(200).json(data);
}