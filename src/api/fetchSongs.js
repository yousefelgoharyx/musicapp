function fetchSongs() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          name: 'Believer',
          image: require('../../assets/believer.jpg'),
          artist: 'Imagine Dragons',
          id: 1
        },
        {
            name: 'Ya ana Ya ana',
            image: require('../../assets/believer.jpg'),
            artist: 'Fayrouz',
            id: 2
          },
          {
            name: 'Rap God',
            image: require('../../assets/believer.jpg'),
            artist: 'Eminem',
            id: 3
          },
          {
            name: 'I\'m Holding Out For A Hero',
            image: require('../../assets/believer.jpg'),
            artist: 'Bonie Taylor',
            id: 4
          },
      ]);
    }, 1000);
  });
}

export default fetchSongs
