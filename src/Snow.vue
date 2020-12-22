<template>
  <div
    class="christmas-room"
    :class="[snowDrop ? 'drop-snow' : '']"
    @click="snowDrop = !snowDrop"
  >
    <div class="flake large f-1"></div>
    <div class="flake large f-2"></div>
    <div class="flake large f-3"></div>
    <div class="flake large f-4"></div>
    <div class="flake large f-5"></div>
    <div class="flake large f-6"></div>
    <div class="flake large f-7"></div>
    <div class="flake large f-8"></div>
    <div class="flake large f-9"></div>
    <div class="flake large f-10"></div>
    <div class="flake large f-11"></div>
    <div class="flake large f-12"></div>
    <div class="flake large f-13"></div>
    <div class="flake large f-14"></div>
    <div class="flake large f-15"></div>
    <div class="flake large f-16"></div>
    <div class="flake large f-17"></div>
    <div class="flake f-18"></div>
    <div class="flake f-19"></div>
    <div class="flake f-20"></div>
    <div class="flake f-21"></div>
    <div class="flake f-22"></div>
    <div class="flake f-23"></div>
    <div class="flake f-24"></div>
    <div class="flake f-25"></div>
    <div class="flake f-26"></div>
    <div class="flake f-27"></div>
    <div class="flake f-28"></div>
    <div class="flake f-29"></div>
    <div class="flake f-30"></div>
    <div class="flake f-31"></div>
    <div class="tree left">
      <div class="snow"></div>
    </div>
    <div class="tree right">
      <div class="snow"></div>
    </div>
    <div class="ground"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snowDrop: false,
      mask: null,
    };
  },
  watch: {
    snowDrop(val) {
      if (val) {
        this.addSnow();
      } else {
        this.removeSnow();
      }
    },
  },
  mounted() {},
  methods: {
    addSnow() {
      document.body.classList.add("christmas");
      this.mask = document.createElement("div");
      document.body.prepend(this.mask);
      this.mask.innerHTML = new Array(50)
        .fill('<div class="snow"></div>')
        .join("");
    },
    removeSnow() {
      document.body.classList.remove("christmas");
      this.mask.innerHTML = "";
    },
  },
};
</script>
