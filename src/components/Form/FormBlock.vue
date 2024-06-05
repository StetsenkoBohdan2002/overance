<template>
  <div class="form">
    <div class="form-wrapper">
      <h1 class="form-title">Form</h1>
      <FormSearch
        :highlight="highlightSearch"
        :searchline="searchline"
        @searchFields="searchFields"
      />
      <div class="form-wrapper__list">
        <transition-group name="slide-fade">
          <div class="form-wrapper__list_item" v-for="field in getInputFields" :key="field.id">
            <div class="form-input__item_count">{{ field.vowelsCount }}</div>
            <FormInput @changeFieldValue="changeFieldValue" :field="field" />
            <button class="form-input__item_del" @click="deleteField(field)">
              <img
                src="@/assets/icons/remove-icon.svg"
                alt="Plus icon"
                class="icon-sm common__icon"
              />
            </button>
          </div>
        </transition-group>
      </div>
      <FormButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useMainStore } from '@/stores/main.ts';
import FormButton from '@/components/shared/FormButton.vue';
import FormInput from '@/components/shared/FormInput.vue';
import FormSearch from '@/components/shared/FormSearch.vue';
const {
  getInputFields,
  generateDefaultList,
  deleteFieldById,
  changeFieldValueById,
  searchByFields
} = useMainStore();

const searchline = ref('');

onMounted(() => {
  if (getInputFields.value.length < 1) {
    generateDefaultList();
  }
});

const changeFieldValue = (fieldId: number, newValue: string): void => {
  changeFieldValueById(fieldId, newValue);
  searchFields(searchline.value);
};

const deleteField = (field: number): void => {
  deleteFieldById(field.id);
};

const searchFields = (search: string): void => {
  searchline.value = search;
  searchByFields(searchline.value);
};

const highlightSearch = computed(() => {
  return !!getInputFields.value.find((field) => field.light);
});
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.form {
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  &-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: $form-title-color;
    text-align: center;
    margin-bottom: 20px;
    padding: 10px 0;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  &-wrapper {
    background-color: $form-bg-color;
    padding: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 500px;

    &__list {
      width: 100%;

      &_item {
        width: 100%;
        margin-bottom: 10px;
        display: flex;
      }
    }
  }
}
</style>
