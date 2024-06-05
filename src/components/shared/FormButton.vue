<template>
  <div class="form-button">
    <button class="form-button__btn common__button" @click="addNewField">
      <span class="form-button__text">Add new Field</span>
      <img
        src="@/assets/icons/plus-icon.svg"
        alt="Plus icon"
        class="form-button__icon common__icon"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/main.ts';
const mainStore = useMainStore();

const addNewField = (): void => {
  mainStore.addField();
};
</script>

<style lang="scss">
.form {
  &-button {
    margin-top: 20px;

    &__btn {
      padding: 15px 20px;
      font-size: 16px;
      border: none;
      background-color: $button-bg-color;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      transition:
        background-color 0.15s,
        box-shadow 0.15s;

      &:hover {
        background-color: $button-hover-color;
        box-shadow: 0 4px 12px rgba(0, 91, 179, 0.3);
      }

      &:active {
        background-color: $button-active-color;
        box-shadow: 0 2px 6px rgba(0, 64, 133, 0.3);
      }
    }

    &__text {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
    }
  }
}
</style>
