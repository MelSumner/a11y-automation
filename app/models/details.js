import Model, { attr } from '@ember-data/model';

export default class DetailsModel extends Model {
@attr title;

@attr content;
@attr tags;
@attr id;

}
