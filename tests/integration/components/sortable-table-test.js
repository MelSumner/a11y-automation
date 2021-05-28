import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sortable-table', function(hooks) {
  setupRenderingTest(hooks);

  const mockModel = [
    {
      id: 1,
      title: 'Apples',
      linting: 'a lint',
      lintingText: 'a lint text',
      testing: 'a test',
      testingText: 'a test text',
      manual: 'a manual',
      manualText: 'a manual text'
    },
    {
      id: 2,
      title: 'Oranges',
      linting: 'o lint',
      lintingText: 'o lint text',
      testing: 'o test',
      testingText: 'o test text',
      manual: 'o manual',
      manualText: 'o manual text'
    },
    {
      id: 3,
      title: 'Bananas',
      linting: 'b lint',
      lintingText: 'b lint text',
      testing: 'b test',
      testingText: 'b test text',
      manual: 'b manual',
      manualText: 'b manual text'
    },
  ];

  hooks.beforeEach(function(assert) {
    this.set('model', mockModel);
  });

  test('it renders sortable-table elements as expected', async function(assert) {
    await render(hbs`<SortableTable @model={{this.model}}/>`);

    const table = this.element.querySelector('.sortable-table');
    const th = table.querySelectorAll('th');
    const sortButtons = table.querySelectorAll('.sort-toggle');
    const rows = table.querySelectorAll('tbody tr');
    const liveRegion = this.element.querySelector('#a11y-notification');

    assert.equal(sortButtons.length, 4);
    assert.equal(rows.length, 3);
    assert.equal(rows[0].querySelector('td').textContent.trim(), 'Apples');
    assert.equal(rows[1].querySelector('td').textContent.trim(), 'Oranges');
    assert.equal(rows[2].querySelector('td').textContent.trim(), 'Bananas');
    assert.equal(rows[0].querySelectorAll('td')[1].textContent.trim(), 'a lint text');
    assert.equal(rows[0].querySelectorAll('td')[2].textContent.trim(), 'a test text');
    assert.equal(rows[0].querySelectorAll('td')[3].textContent.trim(), 'a manual text');
    assert.dom(liveRegion).exists();
  });

  test('it sorts headings as expected', async function(assert) {
    await render(hbs`<SortableTable @model={{this.model}}/>`);

    const table = this.element.querySelector('.sortable-table');
    const th = table.querySelectorAll('th');
    const sortButtons = table.querySelectorAll('.sort-toggle');

    const failureBtn = sortButtons[0];
    await click(failureBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelector('td').textContent.trim(),
      'Apples');
    assert.dom(th[0]).hasAttribute('aria-sort', 'ascending');
    assert.dom(failureBtn.querySelector('.icon-sort-filled.icon-sort-asc')).doesNotHaveClass('hidden');
    assert.dom(failureBtn.querySelector('.icon-sort-open.icon-sort-asc')).hasClass('hidden');

    await click(failureBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelector('td').textContent.trim(),
    'Oranges');
    assert.dom(th[0]).hasAttribute('aria-sort', 'descending');
    assert.dom(failureBtn.querySelector('.icon-sort-filled.icon-sort-desc')).doesNotHaveClass('hidden');
    assert.dom(failureBtn.querySelector('.icon-sort-open.icon-sort-desc')).hasClass('hidden');

    const lintingBtn = sortButtons[1];
    await click(lintingBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelectorAll('td')[1].textContent.trim(),
    'a lint text');
    assert.dom(th[1]).hasAttribute('aria-sort', 'ascending');
    assert.dom(lintingBtn.querySelector('.icon-sort-filled.icon-sort-asc')).doesNotHaveClass('hidden');
    assert.dom(lintingBtn.querySelector('.icon-sort-open.icon-sort-asc')).hasClass('hidden');

    await click(lintingBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelectorAll('td')[1].textContent.trim(),
    'o lint text');
    assert.dom(th[1]).hasAttribute('aria-sort', 'descending');
    assert.dom(lintingBtn.querySelector('.icon-sort-filled.icon-sort-desc')).doesNotHaveClass('hidden');
    assert.dom(lintingBtn.querySelector('.icon-sort-open.icon-sort-desc')).hasClass('hidden');

    const testingBtn = sortButtons[2];
    await click(testingBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelectorAll('td')[2].textContent.trim(),
    'a test text');
    assert.dom(th[2]).hasAttribute('aria-sort', 'ascending');
    assert.dom(testingBtn.querySelector('.icon-sort-filled.icon-sort-asc')).doesNotHaveClass('hidden');
    assert.dom(testingBtn.querySelector('.icon-sort-open.icon-sort-asc')).hasClass('hidden');

    await click(testingBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelectorAll('td')[2].textContent.trim(),
    'o test text');
    assert.dom(th[2]).hasAttribute('aria-sort', 'descending');
    assert.dom(testingBtn.querySelector('.icon-sort-filled.icon-sort-desc')).doesNotHaveClass('hidden');
    assert.dom(testingBtn.querySelector('.icon-sort-open.icon-sort-desc')).hasClass('hidden');

    const manualBtn = sortButtons[3];
    await click(manualBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelectorAll('td')[3].textContent.trim(),
    'a manual text');
    assert.dom(th[3]).hasAttribute('aria-sort', 'ascending');
    assert.dom(manualBtn.querySelector('.icon-sort-filled.icon-sort-asc')).doesNotHaveClass('hidden');
    assert.dom(manualBtn.querySelector('.icon-sort-open.icon-sort-asc')).hasClass('hidden');

    await click(manualBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelectorAll('td')[3].textContent.trim(),
    'o manual text');
    assert.dom(th[3]).hasAttribute('aria-sort', 'descending');
    assert.dom(manualBtn.querySelector('.icon-sort-filled.icon-sort-desc')).doesNotHaveClass('hidden');
    assert.dom(manualBtn.querySelector('.icon-sort-open.icon-sort-desc')).hasClass('hidden');
  });

  test('it populates the live region', async function(assert) {
    await render(hbs`<SortableTable @model={{this.model}}/>`);

    const table = this.element.querySelector('.sortable-table');
    const sortButtons = table.querySelectorAll('.sort-toggle');
    const liveRegion = this.element.querySelector('#a11y-notification');

    assert.dom(liveRegion).hasText('');

    await click(sortButtons[0]);
    assert.dom(liveRegion).hasText('Sorted by FAILURE ascending');
  });
});
