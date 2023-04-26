import Story from '../api/story';

const Dashboard = {
  async init() {
    this._cardPreloader(4);
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    try {
      const responseRecords = await Story.stories();
      this._listStories = responseRecords.listStory;
      this._populateStoriesDataToCard(this._listStories);
    } catch (error) {
      console.error(error);
      this._showPleaseLogin();
    }
  },

  _initialListener() {
    const recordDetailModal = this._getSelectorModal();
    recordDetailModal.addEventListener('show.bs.modal', async () => {
      recordDetailModal.setAttribute('placeholder', true);
    });
    recordDetailModal.addEventListener('shown.bs.modal', async (event) => {
      // recordDetailModal.removeAttribute('placeholder');
      const triggerModal = event.relatedTarget;
      const detailStory = await Story.detailStory(triggerModal.dataset.recordId);
      this._populateStoryToModal(detailStory);
    });
    recordDetailModal.addEventListener('hidden.bs.modal', () => {
      this._removeStoryFromModal();
    });
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
            id="${story.id}"
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

  _getSelectorModal() {
    return document.getElementById('recordDetailModal');
  },

  _populateStoryToModal(story) {
    const modal = this._getSelectorModal();
    modal.removeAttribute('placeholder');
    modal.setAttribute('title', story.name);
    modal.setAttribute('location', story.location);
    modal.setAttribute('description', story.description);
    modal.setAttribute('imageUrl', story.photoUrl);
  },

  _removeStoryFromModal() {
    const { title, location, description, image } = this._getSelectorModal();
    title.innerHTML = 'Title';
    location.innerHTML = 'Location';
    description.innerHTML = 'Description';
    image.src = '';
  },

  _showPleaseLogin() {
    const stories = document.querySelector('#stories');
    stories.classList.remove('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-4');
    stories.classList.add('d-flex', 'justify-content-center');
    stories.innerHTML = `<div>You're not sign in! Please <a href="login.html" class="link-darkblue">login here.</a></div>`;
  },
};

export default Dashboard;
