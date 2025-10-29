interface Tag {
    id: string;
    name: string;
    color: string;
}

interface Card {
    id: string;
    title: string;
    description: string;
    height?: number;
    width?: number;
    color?: string;
    image?: string;
    embedUrl?: string; // Pour YouTube ou Spotify
    embedType?: 'youtube' | 'spotify';
    quote?: string; // Pour les citations
    tags: string[]; // IDs des tags
}

export const tags: Tag[] = [
    { id: 'movie', name: 'Film', color: '#FF6B6B' },
    { id: 'music', name: 'Musique', color: '#4ECDC4' },
    { id: 'book', name: 'Livre', color: '#45B7D1' },
    { id: 'person', name: 'Personnalité', color: '#96CEB4' },
    { id: 'quote', name: 'Citation', color: '#FFEEAD' },
];

export const cards: Card[] = [
    {
        id: 'inception',
        title: 'Inception',
        description: 'Un film de Christopher Nolan qui explore les profondeurs du rêve. Une réflexion fascinante sur la nature de la réalité et des rêves.',
        image: '/interesting/inception.jpg',
        tags: ['movie'],
        embedUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
        embedType: 'youtube'
    },
    {
        id: 'bohemian-rhapsody',
        title: 'Bohemian Rhapsody',
        description: 'Le chef-d\'œuvre de Queen qui transcende les genres musicaux.',
        tags: ['music'],
        embedUrl: 'https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb',
        embedType: 'spotify'
    },
    {
        id: 'sapiens',
        title: 'Sapiens',
        description: 'Une brève histoire de l\'humanité par Yuval Noah Harari. Un livre qui change notre perspective sur l\'histoire humaine.',
        image: '/interesting/sapiens.jpg',
        tags: ['book'],
        height: 400
    },
    {
        id: 'feynman',
        title: 'Richard Feynman',
        description: 'Physicien brillant et pédagogue extraordinaire. Sa façon d\'expliquer la physique rend la science accessible et passionnante.',
        image: '/interesting/feynman.jpg',
        tags: ['person', 'quote'],
        quote: 'Science is the belief in the ignorance of experts.'
    },
    {
        id: 'interstellar-theme',
        title: 'Interstellar - Main Theme',
        description: 'La composition magistrale de Hans Zimmer pour Interstellar. L\'orgue apporte une dimension épique et émotionnelle unique.',
        tags: ['music', 'movie'],
        embedUrl: 'https://open.spotify.com/embed/track/2RVvqRBon9NgaGXKfywDSs',
        embedType: 'spotify'
    },
    {
        id: 'pale-blue-dot',
        title: 'Pale Blue Dot',
        description: 'La célèbre citation de Carl Sagan sur la photo de la Terre prise par Voyager 1.',
        image: '/interesting/pale-blue-dot.jpg',
        tags: ['quote', 'person'],
        quote: 'Look again at that dot. That\'s here. That\'s home. That\'s us.',
        height: 300
    },
    {
        id: '1984',
        title: '1984',
        description: 'Le chef-d\'œuvre dystopique de George Orwell. Un avertissement toujours d\'actualité sur la surveillance et le contrôle.',
        image: '/interesting/1984.jpg',
        tags: ['book', 'quote'],
        quote: 'Big Brother is watching you.'
    },
    {
        id: 'blade-runner',
        title: 'Blade Runner 2049',
        description: 'La suite magistrale du film culte, réalisée par Denis Villeneuve. Une expérience visuelle et narrative exceptionnelle.',
        tags: ['movie'],
        embedUrl: 'https://www.youtube.com/embed/gCcx85zbxz4',
        embedType: 'youtube'
    }
];