import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class violationsIndexRoute extends Route {
  @service store;
  async model() {
    await this.store.findAll("tag");
    return this.store.findAll("violation");
  }
}
