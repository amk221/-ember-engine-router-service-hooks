import Route from '@ember/routing/route';

export default class extends Route {
  async beforeModel() {
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }
}
