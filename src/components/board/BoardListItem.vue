<template>
  <tr>
    <td>{{ no }}</td>
    <td>
      <router-link :to="`Board/${no}`">{{ title }}</router-link>
    </td>
    <td>
      {{ writer }}
    </td>
    <td>{{ date | moment('YYYY-MM-DD') }}</td>
  </tr>
</template>

<script>
export default {
  name: 'BoardListItem',
  props: {
    no: Number,
    title: String,
    writer: String,
    date: Number,
    board: Object,
  },
  data() {
    return {};
  },

  methods: {
    colorChange(flag) {
      this.isColor = flag;
    },
  },
};
</script>

<style>
.img-list {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>
