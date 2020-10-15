import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default class DetailsDetailRoute extends Route {
  @service store;
  model(params) {
    let detail = this.store.peekAll('details', params.id);
    if(!detail) {
      console.log('sorry, no detail for this one ' + params.id);
    }
    return this.store.findRecord('detail', params.id);
    
  }
}
