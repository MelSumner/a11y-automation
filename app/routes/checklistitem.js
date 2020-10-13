import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ChecklistitemRoute extends Route {
  @service store;
  model(params) {
    // let checklistitem = this.store.peekRecord('checklistitem', params.id);
    // if(!checklistitem) {
    //   console.log('unable to find any of the data');
    // }
    // return checklistitem;
    console.log('this is the dynamic segment data: ' + params.id);
  }
}
