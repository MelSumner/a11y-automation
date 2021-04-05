import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('violations', function() {
    this.route('violations/index', { path: '/violations'})
    this.route('violation', { path: '/:id' });
  });
  this.route('tags', function() {
    this.route('tag', { path: '/:id' });
  });
});
