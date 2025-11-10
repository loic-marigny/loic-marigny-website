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
    { id: 'series', name: 'Série', color: '#ebb977ff' },
    { id: 'music', name: 'Musique', color: '#4ECDC4' },
    { id: 'book', name: 'Livre', color: '#45B7D1' },
    { id: 'person', name: 'Personnalité', color: '#96CEB4' },
    { id: 'quote', name: 'Citation', color: '#FFEEAD' },
    { id: 'fiction', name: 'Fiction', color: '#D4A5A5' },
    { id: 'french', name: 'Français', color: '#CBA135' },
    { id: 'channel', name: 'Chaîne Youtube', color: '#d52222ff' }
];

export const cards: Card[] = [
    {
        id: 'athena-orelsan',
        title: 'Athena',
        description: 'X.',
        tags: ['music', 'french'],
        embedUrl: 'https://open.spotify.com/embed/track/3UTuOnIjF8eSCIdOrVZISS?utm_source=generator',
        embedType: 'spotify'

        /*<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3UTuOnIjF8eSCIdOrVZISS?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>*/
    },
    {
        id:'rue-lilas',
        title: 'La Rue des Lilas',
        description: 'La Rue des Lilas mélange pacifisme et lutte des classes dans son texte, et force, résignation et dignité dans son inteprétation.'+
        ' Elle rappelle qu\'un texte simple, presque naïf, peut pourtant être éminemment politique. J\'y vois un brillant mélange du Dormeur du Val de Rimabud pour'+
        'le texte, et des interprétations du Chant des Partisans par Yves Montand. Merci à Pierre-Yves Cadalen pour la découverte !',
        tags: ['music', 'french'],
        embedUrl: "https://open.spotify.com/embed/track/6T2bx7sdlAlWzfvvyyJBVs?utm_source=generator&theme=0",
        embedType: 'spotify',

        /*<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6T2bx7sdlAlWzfvvyyJBVs?utm_source=generator&theme=0"
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media;
        fullscreen; picture-in-picture" loading="lazy"></iframe>*/
    },
    {
        id: 'bienvenue-chez-nous',
        title: 'Bienvenue chez nous',
        description: 'X.',
        tags: ['music', 'french'],
        height: 400,
        embedUrl: "https://open.spotify.com/embed/track/4xJ0ctd4RZpLMVHCb0k5gB?utm_source=generator",
        embedType: 'spotify',

        /*<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4xJ0ctd4RZpLMVHCb0k5gB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>*/
    },
    {
        id: 'numb-encore',
        title: 'Numb / Encore',
        description: 'X.',
        tags: ['music'],
        height: 400,
        embedUrl: "https://open.spotify.com/embed/track/7dyluIqv7QYVTXXZiMWPHW?utm_source=generator",
        embedType: 'spotify',
        /*<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7dyluIqv7QYVTXXZiMWPHW?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>*/
    },
    {
        id: 'what-he-wrote',
        title: 'What He Wrote',
        description: 'X.',
        tags: ['music'],
        height: 400,
        embedUrl: "https://open.spotify.com/embed/track/2CTOa3CEBts3p1NyTVLTXU?utm_source=generator",
        embedType: 'spotify',
        /*<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2CTOa3CEBts3p1NyTVLTXU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>*/
    },
    {
        id: 'wazira',
        title: 'Wazira',
        description: 'X.',
        tags: ['music', 'french'],
        height: 400,
        embedUrl: "https://open.spotify.com/embed/track/1yJCajJJJwM1UlYcOGUsP5?utm_source=generator",
        embedType: 'spotify',
        /*<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1yJCajJJJwM1UlYcOGUsP5?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>*/
    },
    {
        id: 'baby-driver',
        title: 'Baby Driver',
        description: 'X',
        tags: ['movie'],
    },
    {
        id: 'spider-verse',
        title: 'Spider-Man : Into the Spider-Verse',
        description: 'X',
        tags: ['movie'],
    },
    {
        id: 'past-lives',
        title: 'Past Lives',
        description: 'X',
        tags: ['movie'],
    },
    {
        id: 'decision-to-leave',
        title: 'Decision to Leave',
        description: 'X',
        tags: ['movie'],
    },
    {
        id: 'casa-papel',
        title: 'La Casa de Papel',
        description: 'X',
        tags: ['series'],
    },
    {
        id: 'kaamelott',
        title: 'Kaamelott',
        description: 'X',
        tags: ['series'],
    },
    {
        id: 'une-vie',
        title: "Une vie",
        description: "X",
        tags: ['books', 'french'],
    },
    {
        id: 'horde-contrevent',
        title: "La Horde du Contrevent",
        description: "X",
        tags: ['books', 'french'],
    },
    {
        id: 'h2g2',
        title: "Le Guide du Voyageur Intergalactique",
        description: "X",
        tags: ['books'],
    },
    {
        id: 'jessie',
        title: "Jessie",
        description: "X",
        tags: ['books'],
    },
    {
        id: 'candide',
        title: "Candide",
        description: "X",
        tags: ['books', 'french'],
    },
    {
        id: 'resister',
        title: "Résister",
        description: "X",
        tags: ['books', 'french'],
    },
    {
        id: 'ceux-restent',
        title: "Ceux qui restent",
        description: "X",
        tags: ['books', 'french'],
    },
    {
        id: 'sochik',
        title: 'Sophia Chikirou',
        description: 'X',
        tags: ['person', 'french'],
    },
    {
        id: 'megan-rapinoe',
        title: 'Megan Rapinoe',
        description: 'X',
        tags: ['person'],
    },
    {
        id: 'eminem',
        title: 'Eminem',
        description: 'X',
        tags: ['person'],
        quote:"Let your anger fuel you",
    },
    {
        id: 'jacques-brel',
        title: 'Jacques Brel',
        description: 'X',
        tags: ['person'],
    },
    {
        id: 'amyplant',
        title: 'IciAmyPlant',
        description: 'X',
        tags: ['channel', 'french'],
    },
    {
        id: 'monde-cartes',
        title: 'Le Monde en Cartes',
        description: 'X',
        tags: ['channel', 'french'],
    },
];