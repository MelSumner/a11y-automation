import Model, { attr, hasMany } from '@ember-data/model';

export default class DetailModel extends Model {
  @attr author;
  @attr content;
  @attr html;
  @attr linting;
  @attr manual;
  @attr testing;
  @attr title;
  @hasMany('tag') tags;
  
  @attr('id', {
    function() { return this.id.split('-').slice(1).join('-'); }
  }) detailName;
}
