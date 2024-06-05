import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import { createPinia } from 'pinia';

import { useMainStore } from './main.ts';
const pinia = createPinia();

describe('useMainStore', () => {
  beforeAll(() => {
    pinia.use();
  });

  beforeEach(() => {
    const mainStore = useMainStore(pinia);
    mainStore.getInputFields.value = [];
  });

  it('generates default list', () => {
    const mainStore = useMainStore(pinia);

    expect(mainStore.getInputFields.value).toEqual([]);

    mainStore.generateDefaultList();

    expect(mainStore.getInputFields.value.length).toBe(1);
  });

  it('adds a new field', () => {
    const mainStore = useMainStore(pinia);
    const initialFieldsCount = mainStore.getInputFields.value.length;

    mainStore.addField();

    expect(mainStore.getInputFields.value.length).toBe(initialFieldsCount + 1);
  });

  it('deletes a field by id', () => {
    const mainStore = useMainStore(pinia);

    mainStore.generateDefaultList();
    mainStore.addField();

    const initialFieldsCount = mainStore.getInputFields.value.length;

    mainStore.deleteFieldById(1);

    expect(mainStore.getInputFields.value.length).toBe(initialFieldsCount - 1);
  });

  it('searches by fields', () => {
    const mainStore = useMainStore(pinia);

    mainStore.generateDefaultList();
    mainStore.changeFieldValueById(1, 'default');

    mainStore.searchByFields('default');

    expect(mainStore.getInputFields.value[0].light).toBe(true);
  });

  it('changes field value by id', () => {
    const mainStore = useMainStore(pinia);

    mainStore.generateDefaultList();

    mainStore.changeFieldValueById(1, 'new value');

    const firstField = mainStore.getInputFields.value[0];
    expect(firstField.value).toBe('new value');
    expect(firstField.vowelsCount).toBe(4);
  });
});
