import Service, { service } from '@ember/service';

export default class FooService extends Service {
  @service router;

  routeWillChange = [];
  routeDidChange = [];

  constructor() {
    super(...arguments);

    this.router.on('routeWillChange', (transition) => {
      const str = `from: ${transition.from?.name} to ${transition.to?.name}`;

      this.routeWillChange.push(str);

      console.log('routeWillChange', str);
    });

    this.router.on('routeDidChange', (transition) => {
      const str = `from: ${transition.from?.name} to ${transition.to?.name}`;

      this.routeDidChange.push(str);

      console.log('routeDidChange', str);
    });
  }
}
