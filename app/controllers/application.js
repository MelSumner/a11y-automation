import Controller from '@ember/controller';
import config from 'ember-get-config';

const { criteriaTracker } = config;

export default class ApplicationController extends Controller {
  config = criteriaTracker;
}
