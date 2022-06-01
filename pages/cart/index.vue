<template>
  <div class="window">
    <div v-show="value">
      <div class="box">
        <p>Dome Lid Clear P92008h</p>
        <p>$2.98</p>
        <div class="b" @click="tes2">Del</div>
      </div>
      <div class="cart">
        <p>Item : Dome Lid Clear P92008h</p>
        <p>Subtotal : $2.98</p>
        <p>Postage : $0</p>
        <hr>
        <p class="plast">Total : $2.98</p>
        <p class="btn">Next</p>
      </div>
    </div>
    <div v-show="!value" class="empty">
      <p>The contents of the cart are empty.</p>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      value() {
        return this.$store.state.value
      }
    },
    methods: {
      tes2: function () {
        this.$store.commit("increment2");
      }
    }
  }

</script>

<style lang="scss" scoped>
  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 25px;

    p {
      border-bottom: 1px solid black;
    }
  }

  .btn {
    background: #000000bf;
    box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.4);
    color: #fafafa;
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin: 0 auto;
    margin-top: 50px;
  }

  .cart {
    position: absolute;
    top: 0px;
    right: 100px;
    width: 300px;
    height: 400px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    font-size: 15px;
    gap: 25px;

    .plast {
      font-size: 17px;
    }
  }

  .window {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .box {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    gap: 25px;
    font-size: 16px;
    width: 55vw;
    height: 150px;
    margin-top: 150px;
    margin-left: 100px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;

    p {
      margin-left: 50px;
    }

    .b {
      position: absolute;
      top: 50%;
      right: 50px;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all .3s ease;

      &:hover {
        transition: all .3s ease;
        color: #00000044;
      }
    }
  }

</style>
