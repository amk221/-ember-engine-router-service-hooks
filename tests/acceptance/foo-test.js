import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'example/tests/helpers';

module('Acceptance | foo', function (hooks) {
  setupApplicationTest(hooks);

  let foo;

  hooks.beforeEach(function () {
    foo = this.owner.lookup('service:foo');
  });

  test('visiting /foo', async function (assert) {
    await visit('/my-engine/b');
    await click('button');

    // console.log('routeWillChange', foo.routeWillChange);
    // console.log('routeDidChange', foo.routeDidChange);

    assert.deepEqual(foo.routeWillChange, [
      'from: my-engine.b.index to my-engine.b.index',
      'from: my-engine.b.index to loading',
    ]);

    assert.deepEqual(foo.routeDidChange, [
      'my-engine.b.index to my-engine.b.index',
    ]);
  });
});
