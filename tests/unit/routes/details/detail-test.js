import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | details/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:details/detail');
    assert.ok(route);
  });
});
