import Model, { attr } from '@ember-data/model';

export default class DetailsModel extends Model {  
  @attr author;
  @attr content;
  @attr html;
  @attr linting;
  @attr manual;
  @attr tags;
  @attr testing;
  @attr title;

  @attr('id', {
    function() { return this.id.split('-').slice(1).join('-'); }
  }) detailName;

}
