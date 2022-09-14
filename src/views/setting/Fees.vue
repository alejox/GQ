<template>
  <h2>Fees</h2>
  <div class="card">
    <div class="card__content">
      <img class="card__logo" src="../../assets/images/logo.svg" alt="" />
      <div class="card__box">
        <div class="card__text">
          <div class="card__title">
            <h3>USDT Exchange</h3>
          </div>
          <p class="text">USDT/QTA</p>
          <p class="text">USDT/GQ</p>
          <p class="text">USDT/GQUSD</p>
          <p class="text">USDT/MXP</p>
          <p class="text">USTD/VUSD</p>
          <p class="text">USTD/TURC</p>
        </div>
        <div class="card__img">
          <img src="../../assets/icons/tether.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
h2 {
  font-size: 26px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 32px;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #222222;
}

.text{
font-size: 14px;
font-weight: 300;
line-height: 24px;
letter-spacing: 0px;
text-align: left;
color: #222222;

}
.card {
  background: linear-gradient(
    180deg,
    rgba(22, 96, 214, 0.5) 0%,
    rgba(77, 237, 113, 0.165) 100%
  );
  border-radius: 16px;
  padding: 16px;
  width: 266px;
}

.card__content {
  background-color: white;
  border-radius: 16px;
  padding: 16px;
}

.card__box {
  display: flex;
  justify-content: space-between;
}

.card__logo {
  display: block;
  width: 86px;
  margin: 0 auto;
  margin-bottom: 26px;
}
</style>