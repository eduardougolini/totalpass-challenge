export default {
  getRandomGif: state => () => {
    // eslint-disable-next-line consistent-return
    const waitForGifs = () => {
      if (state.gymGifs.data !== undefined) {
        const randomPosition = Math.floor(Math.random() * state.gymGifs.data.length);

        return state.gymGifs.data[randomPosition].images.fixed_height_small.url;
      }

      setTimeout(waitForGifs, 250);
    };

    return waitForGifs();
  },
};
