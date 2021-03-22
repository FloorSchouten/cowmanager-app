<template>
    <li>
    {{ submit.text }}
    <button @click="$emit('remove', submit.id)">
      X
    </button>
  </li>
</template>

<script>
export default {
  props: {
    submit: {
      type: Object,
      required: true
    }
  }
}
</script>