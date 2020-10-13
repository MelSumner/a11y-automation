import Controller from '@ember/controller';
import config from 'ember-get-config';

const { a11yAutomationTracker } = config;

export default class ApplicationController extends Controller {
  config = a11yAutomationTracker;
}
