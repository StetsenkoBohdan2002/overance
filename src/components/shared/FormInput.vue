<template>
  <div class="form-input">
    <input
      @input="changeFieldValue"
      :class="{ founded: field.light }"
      :value="field.value"
      class="form-input__item common__input"
      type="text"
      placeholder="Enter text..."
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ field: { id: number; value: string; light: boolean } }>();
const emits = defineEmits<{ (event: 'changeFieldValue', fieldId: number, value: string): void }>();

const changeFieldValue = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  emits('changeFieldValue', props.field.id, target.value);
};
</script>

<style lang="scss">
.form {
  &-input {
    width: 80%;

    &__item {
      width: 100%;
      color: #787878;
      padding: 10px 15px;
      font-size: 16px;
      border: 1px solid $input-border-color;
      border-radius: 5px;
      outline: none;
      transition:
        border-color 0.3s,
        box-shadow 0.3s;

      &:focus {
        border-color: $input-focus-border-color;
        box-shadow: 0 0 3px $input-focus-box-shadow;
      }

      &::placeholder {
        color: $input-placeholder-color;
      }

      &_del {
        width: 10%;
        margin-left: 15px;
        border: none;
        background-color: $input-delete-bg-color;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.15s ease-in-out;

        &:hover {
          background-color: $input-delete-hover-bg-color;
          transform: scale(1.03);
        }
      }

      &_count {
        margin-right: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: #6e6e6e;
        background-color: $input-found-color;
        border-radius: 5px;
        width: 10%;
      }
    }
  }
}
</style>
