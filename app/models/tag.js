import Model, { attr, hasMany } from '@ember-data/model';

export default class TagModel extends Model {
  @attr title;
  @attr url;
  @hasMany('violation') violations;
}
