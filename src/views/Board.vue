<template>
  <div class="container-fluid text-center">
    <board-list />
  </div>
</template>

<script>
import BoardList from '@/components/board/BoardList.vue';

export default {
  name: 'Board',
  components: {
    BoardList,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
