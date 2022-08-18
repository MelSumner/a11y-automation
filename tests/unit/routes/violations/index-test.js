import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | violations/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:violations/index');
    assert.ok(route);
  });

  test('Manual testing status is valid',async function(assert) {
    let route = this.owner.lookup('route:violations/index');

    let model = await route.model();
    model.forEach(violation => {
      assert.ok(['exists', 'shouldexist', 'mustexist', 'couldexist'].includes(violation.manual), `${violation.id} has invalid manual value: '${violation.manual}'`);
    });
  });
});
