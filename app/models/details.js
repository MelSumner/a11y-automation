import Model, { attr } from '@ember-data/model';

export default class DetailsModel extends Model {  
  @attr content;
  @attr html;
  @attr tags;
  @attr title;
  @attr linting;
  @attr testing;
  @attr author;
  @attr manual;

  @attr('id', {
    function() { return this.id.split('-').slice(1).join('-'); }
  }) detailName;

}
