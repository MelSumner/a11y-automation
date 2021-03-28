import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('details', function() {
    this.route('details/index', { path: '/details'})
    this.route('detail', { path: '/:id' });
  });
  this.route('tags', function() {
    this.route('tag', { path: '/:id' });
  });
  this.route('about');
});
