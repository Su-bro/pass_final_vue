<template>
  <div class="container-fluid">
      <write-form type="create"/>
  </div>
</template>

<script>
import WriteForm from "@/components/board/include/WriteForm.vue";

export default {
  name: "CreateBoard",
  components: {
    WriteForm
  }
};
</script>

<style>

</style>