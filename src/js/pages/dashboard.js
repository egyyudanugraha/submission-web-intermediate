const Dashboard = {
  async init() {
    this._cardPreloader(4);
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('./data/DATA.json');
    const responseRecords = await fetchRecords.json();
    this._listStories = responseRecords.listStory;
    this._populateStoriesDataToCard(this._listStories);
  },

  _populateStoriesDataToCard(stories = []) {
    if (!(typeof stories === 'object')) {
      throw new Error(`Parameter responseRecords should be an object. The value is ${stories}`);
    }

    if (!Array.isArray(stories)) {
      throw new Error('Parameter transactionsHistory should be an array.');
    }

    const listStories = stories
      .map(
        (story) => `
        <div class="col my-2">
          <card-story
            name="${story.name}"
            description="${story.description}"
            date="${story.createdAt}"
            image="${story.photoUrl}"
          ></card-story>
        </div>
    `,
      )
      .join('');

    document.querySelector('#stories').innerHTML = listStories;
  },

  _cardPreloader(manyCard) {
    let placeholderCards = '';

    for (let i = 0; i < manyCard; i += 1) {
      placeholderCards += `
      <div class="col my-2">
        <card-story placeholder></card-story>
      </div>
      `;
    }

    document.querySelector('#stories').innerHTML = placeholderCards;
  },
};

export default Dashboard;
