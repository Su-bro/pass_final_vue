<template>
  <tr>
    <td id="num">{{ no }}</td>
    <td>
      <router-link :to="`Board/${no}`" style="text-decoration: none; color: inherit">
        <div id="post">
          <span id="title">{{ title }}</span>
        </div>
      </router-link>
    </td>
    <td>
      {{ writer }}
    </td>
    <td>{{ date | moment('YYYY-MM-DD') }}</td>
  </tr>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'BoardListItem',
  computed: {
    ...mapState(['boards', 'boardPageNav', 'key', 'word', 'login', 'member']),
  },
  props: {
    no: '',
    title: '',
    writer: '',
    date: '',
    board: '',
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
td {
  font-size: 16px;
}
#post {
  text-align: left;
}
#num {
  padding: 0%;
  margin: 0%;
  width: 10px;
}
</style>
