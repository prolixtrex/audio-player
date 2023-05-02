


const getSongs = name => require(`./sounds/${name}.mp3`);
const getThumbnails = name => require(`./thumbnail/${name}.jpg`);

export const tracks = [
    {
        id: 1,
        title: 'CELIN-DION-Faith',
        src: getSongs('CELIN-DION-Faith'),
        author: 'celine dion',
        thumbnail: getThumbnails('celine-dion')
    },

    {
        id: 2,
        title: "Celindion-I'll-be-waiting-for-you",
        src: getSongs("Celindion-I'll-be-waiting-for-you"),
        author: 'celine dion',
        thumbnail: getThumbnails('celine-dion')
    },

    {
        id: 3,
        title: 'CELIN-DION-Running',
        src: getSongs('CELIN-DION-Running'),
        author: 'celine dion',
        thumbnail: getThumbnails('celine-dion')
    },

    {
        id: 4,
        title: 'Celine-Dion-4rm-dis',
        src: getSongs('Celine-Dion-4rm-dis'),
        author: 'celine dion',
        thumbnail: getThumbnails('celine-dion')
    },

    {
        id: 5,
        title: 'Celine-Dion-Because-You-Loved-Me',
        src: getSongs('Celine-Dion-Because-You-Loved-Me'),
        author: 'celine dion',
        thumbnail: getThumbnails('celine-dion')
    },

    {
        id: 6,
        title: 'Celine-DION-I know-what-love-is-artist',
        src: getSongs('Celine-DION-I know-what-love-is-artist'),
        author: 'celine dion',
        thumbnail: getThumbnails('celine-dion')
    },

    {
        id: 7,
        title: 'Celine-Dion-If-Walls-Could-Talk-via-Naijafinix.com_',
        src: getSongs('Celine-Dion-If-Walls-Could-Talk-via-Naijafinix.com_'),
        author: 'celine dion',
        thumbnail: getThumbnails('celine-dion')
    },

    {
        id: 8,
        title: "CELINE-DION-I'll-be-waiting-for-you",
        src: getSongs("CELINE-DION-I'll-be-waiting-for-you"),
        author: 'celine dion',
        thumbnail: getThumbnails('celine-dion')
    },

    {
        id: 9,
        title: 'CELINE-DION-Immortality',
        src: getSongs('CELINE-DION-Immortality'),
        author: 'celine dion',
        thumbnail: getThumbnails('celine-dion')
    },

    {
        id: 10,
        title: 'Céline-Dion-Then-You-Look-at-Me',
        src: getSongs('Céline-Dion-Then-You-Look-at-Me'),
        author: 'celine dion',
        thumbnail: getThumbnails('celine-dion')
    },

    {
        id: 11,
        title: 'west-life-evergreen',
        src: getSongs('west-life-evergreen'),
        author: 'westlife',
        thumbnail: getThumbnails('westlife')
    },

    {
        id: 12,
        title: 'Westlife-Soledad',
        src: getSongs('Westlife-Soledad'),
        author: 'westlife',
        thumbnail: getThumbnails('westlife')
    },

    {
        id: 13,
        title: 'Westlife-swear-it-again',
        src: getSongs('Westlife-swear-it-again'),
        author: 'westlife',
        thumbnail: getThumbnails('westlife')
    },

    {
        id: 14,
        title: 'Westlife-When-u-re-Looking-like-that',
        src: getSongs('Westlife-When-u-re-Looking-like-that'),
        author: 'westlife',
        thumbnail: getThumbnails('westlife')
    },

    {
        id: 15,
        title: 'Westlife-Written-i',
        src: getSongs('Westlife-Written-i'),
        author: 'westlife',
        thumbnail: getThumbnails('westlife')
    },

    {
        id: 16,
        title: 'Westlife-Fragile-heart',
        src: getSongs('Westlife-Fragile-heart'),
        author: 'westlife',
        thumbnail: getThumbnails('westlife')
    },
]