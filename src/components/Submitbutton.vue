<template>
    <li>
    {{ submit.text }}
    <button @click="$emit('remove', submit.id)">
      Submit
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