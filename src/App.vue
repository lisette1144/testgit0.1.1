<template>
  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  <router-view/>
   <button class="resizeable-button" @click="increaseFontSize">Click Me!</button>
  <!-- <router-view/> -->
</template>


<style lang="scss">
#app {
export default {
  methods: {
    increaseFontSize() {
      // ดึงขนาดปัจจุบันของตัวอักษร
      let currentFontSize = window.getComputedStyle(document.querySelector('.resizeable-button')).fontSize;

      // แปลงขนาดตัวอักษรปัจจุบันเป็นตัวเลข
      let currentSize = parseFloat(currentFontSize);

      // เพิ่มขนาดตัวอักษรขึ้น 2px
      let newSize = currentSize + 2;

      // กำหนดขนาดตัวอักษรใหม่ใน CSS
      document.querySelector('.resizeable-button').style.fontSize = `${newSize}px`;
    }
  }
};
</script>

<style>
.resizeable-button {
  font-size: 16px; /* ขนาดตั้งต้นของตัวอักษร */
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: font-size 0.3s ease; /* เพื่อให้มีการเปลี่ยนขนาดอย่างนุ่มนวล */
}
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    // &.router-link-exact-active {
    //   // color: #42b983;
    // }
  }
}
</style>
