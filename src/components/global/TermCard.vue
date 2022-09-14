<template>
  <article class="termsCard">
      <article class="termsCard__container">
        <img src="@/assets/images/logoTerms.png" alt="">
        <div class="termsCard__container-text">
          <div>
            <p class="termsCard__container-text-title">PDF</p>
            <p class="termsCard__container-text-subtitle">ENGLISH</p>
          </div>
          <div>
            <p>Date</p>
            <p>August 7th 2022</p>
          </div>
        </div>
      </article>
      <button>
        Download
      </button>
    </article>
</template>

<style scoped>
  .termsCard{
    max-width: 300px;
    width: 300px;
    background: linear-gradient(180deg, rgba(22, 96, 214, 0.275) 0%, rgba(77, 237, 113, 0.33) 100%);
    padding: 25px;
    border-radius: 10px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
  
  .termsCard .termsCard__container{
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    text-align: center;
  
  }
  .termsCard .termsCard__container img {
    margin-bottom: 15px;
  }
  .termsCard .termsCard__container .termsCard__container-text{
    padding: 15px;
    border-radius: 12px;
    background: #002A4D;
  }
  .termsCard .termsCard__container .termsCard__container-text >  div{
    display: flex;
    justify-content: space-between;
  }
  .termsCard .termsCard__container .termsCard__container-text >  div:first-child{
    margin-bottom: 8px;
  }
  .termsCard .termsCard__container .termsCard__container-text >  div p{
    color: #B3BFD0;
    font-size: 10px;
    margin-bottom: 0;
  }
  .termsCard .termsCard__container .termsCard__container-text .termsCard__container-text-title{
    font-weight: 700;
    font-size: 16px;
  }
  .termsCard .termsCard__container .termsCard__container-text .termsCard__container-text-subtitle{
    font-weight: 700;
    font-size: 16px;
    color: #13DC38;
  }
  .termsCard button{
    display: block;
    width: 100%;
    padding: 15px ;
    margin-top: 10px;
    border: none;
    border-radius: 16px;
    font-weight: 500;
    background-color: #13DC38;
    color: #222222;
    text-align: center;
  }
  </style>