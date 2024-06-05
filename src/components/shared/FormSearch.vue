<template>
  <div class="form-search">
    <label class="form-search__label" for="search-input">Search</label>
    <input
      :value="searchline"
      @input="searchFields"
      class="form-search__item common__input"
      :class="{ founded: highlight }"
      type="text"
      id="search-input"
      placeholder="Search field..."
    />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

const emits = defineEmits<{ (e: 'searchFields', value: string): void }>();
const props = defineProps<{ searchline: string; highlight: boolean }>();

const searchFields = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits('searchFields', target.value);
};
</script>

<style lang="scss">
.form {
  &-search {
    background-color: $search-bg-color;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    &__label {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0px;
      color: $search-label-color;
    }

    &__item {
      width: 100%;
      padding: 10px 15px;
      font-size: 16px;
      border: 1px solid $search-border-color;
      border-radius: 4px;
      outline: none;
      transition:
        border-color 0.3s,
        box-shadow 0.3s;

      &:focus {
        border-color: $search-focus-border-color;
        box-shadow: 0 0 3px $search-focus-box-shadow;
      }

      &::placeholder {
        color: $search-placeholder-color;
      }
    }
  }
}
</style>
