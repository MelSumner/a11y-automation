import Route from '@ember/routing/route';

export default class CriteriaRoute extends Route {
  model(params) {
    let criteria = this.store.peekRecord('criteria', params.id);
    if(!criteria) {
      console.log('oops, criteria not found');
    }
    return criteria;
  }
}
