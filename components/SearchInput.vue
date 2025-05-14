<template>
  <div class="search-input--violations">
    <label for="search" class="sr-only" aria-description="Table of potential violations will be automatically updated as you search">Search titles</label>
    <input
      id="search"
      type="search"
      class="search--violations"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Search titles..."
    />
  </div>
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
