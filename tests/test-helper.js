import Application from 'a11y-automation/app';
import config from 'a11y-automation/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
