<template>
  <div class="card">
    <div class="card__content">
      <img class="card__logo" src="../assets/images/logo.svg" alt="" />
      <div class="card__box">
        <div class="card__title">
          <h3>USDT Exchange</h3>
          <img src="../assets/icons/tether.svg" alt="" />
        </div>

        <div class="card__text">
          <div class="text-box">
            <p class="text">USDT/QTA</p>
            <p class="text">USDT/GQ</p>
            <p class="text">USDT/GQUSD</p>
            <p class="text">USDT/MXP</p>
            <p class="text">USTD/VUSD</p>
            <p class="text">USTD/TURC</p>
          </div>
          <div class="card__price">
            <p class="price">0.03%</p>
            <p class="price">0.03%</p>
            <p class="price">0.03%</p>
            <p class="price">0.03%</p>
            <p class="price">0.03%</p>
            <p class="price">0.03%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #222222;
}

.text {
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  text-align: left;
  color: #222222;
  margin: 0;
  padding: 0;
}
.card {
  background: linear-gradient(
    180deg,
    rgba(22, 96, 214, 0.5) 0%,
    rgba(77, 237, 113, 0.165) 100%
  ) !important;
  border-radius: 16px;
  padding: 16px;
  width: 266px;
  margin: 0 15px 15px 0;
}

.card__content {
  background-color: white;
  border-radius: 10px;
  padding: 16px;
}

.card__text {
  display: flex;
  justify-content: space-between;
}

.card__logo {
  display: block;
  width: 86px;
  margin: 0 auto;
  margin-bottom: 26px;
}

.card__title {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.price {
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: right;
  color: #222222;
  margin: 0;
  padding: 0;
}
</style>