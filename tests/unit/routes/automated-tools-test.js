import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | automated-tools', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:automated-tools');
    assert.ok(route);
  });
});
