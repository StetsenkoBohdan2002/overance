import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { notify } from '@kyvg/vue3-notification';
import type { InputField } from '@/types/index';

export const useMainStore = defineStore('main', () => {
  const inputFields = ref<InputField[]>([]);

  const getInputFields = computed(() => inputFields);

  function generateDefaultList(): void {
    const defaultObject: InputField = { id: 1, value: '', light: false, vowelsCount: 0 };
    addDefaultField(defaultObject);
  }

  function searchByFields(searchline: string): void {
    inputFields.value.forEach((field: InputField) => {
      field.light =
        field.value.toLowerCase().includes(searchline.toLowerCase()) && searchline !== '';
    });
  }

  function countVowels(value: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of value) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  function addDefaultField(field: InputField): void {
    inputFields.value.push(field);
  }

  function deleteFieldById(fieldId: number): void {
    if (inputFields.value.length === 1) {
      notify({
        title: 'Error!',
        text: 'You cannot delete last element!',
        type: 'error'
      });
      return;
    }
    inputFields.value = inputFields.value.filter((field: InputField) => field.id !== fieldId);
  }

  function changeFieldValueById(fieldId: number, value: string): void {
    inputFields.value.forEach((field: InputField) => {
      if (field.id === fieldId) {
        field.value = value;
        field.vowelsCount = countVowels(value);
      }
    });
  }

  function addField(): void {
    const maxFields: number = 10;
    const currentFieldsCount: number = inputFields.value.length;

    if (currentFieldsCount >= maxFields) {
      notify({
        title: 'Error!',
        text: `You can only add up to ${maxFields} fields.`,
        type: 'error'
      });
      return;
    }

    const lastField: InputField | undefined = inputFields.value[currentFieldsCount - 1];
    const newFieldId: number = lastField ? lastField.id + 1 : 1;

    const newField: InputField = {
      id: newFieldId,
      value: '',
      light: false,
      vowelsCount: 0
    };

    inputFields.value.push(newField);
  }

  return {
    getInputFields,
    generateDefaultList,
    addDefaultField,
    addField,
    deleteFieldById,
    searchByFields,
    changeFieldValueById
  };
});
