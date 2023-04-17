const Dashboard = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    this._listStories = responseRecords.listStory;
    this._populateStoriesDataToCard(this._listStories);
  },

  _populateStoriesDataToCard(stories = []) {
    if (!(typeof stories === 'object')) {
      throw new Error(
        `Parameter responseRecords should be an object. The value is ${transactionsHistory}`,
      );
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
};

export default Dashboard;
