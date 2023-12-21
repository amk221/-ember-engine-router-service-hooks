import EmberRouter from '@ember/routing/router';
import config from 'example/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('a');

  this.mount('my-engine');
});
