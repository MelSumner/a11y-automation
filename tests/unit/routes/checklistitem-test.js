import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | checklistitem', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:checklistitem');
    assert.ok(route);
  });
});
