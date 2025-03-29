<template>
  <section class="blog">
    <BlogsHeader />
    <div class="blog__container">
      <div class="blog__wrapper">
        <h1 class="blog__title">Зачем вообще нужен веб-дизайн бизнесу?</h1>
        <h2 class="blog__subtitle">
          Рассмотрим ключевые причины, почему веб-дизайн играет важную роль в
          бизнесе и онлайн-присутствии. Обсудим влияние дизайна на восприятие
          бренда.
        </h2>
        <p class="blog__description">
          В современном мире, где интернет стал неотъемлемой частью нашей жизни,
          качественный веб-дизайн играет важную роль в успехе бизнеса. Первое
          впечатление о компании часто формируется именно по внешнему виду её
          сайта. Стильный и функциональный веб-дизайн может привлечь внимание
          потенциальных клиентов, создавая у них впечатление надёжности и
          профессионализма.
        </p>
        <p class="blog__description">
          Одной из основных функций веб-дизайна является создание удобного и
          интуитивно понятного пользовательского интерфейса. Грамотно
          спроектированный сайт позволяет пользователю легко находить
          необходимую информацию, что значительно увеличивает вероятность его
          возвращения. Если навигация неочевидна, а контент не структурирован,
          ваш посетитель может быстро покинуть ресурс, что скажется на трафике и
          выручке.
        </p>
        <p class="blog__description">
          Цветовая палитра, шрифты и общая эстетика должны быть гармоничными и
          отражать корпоративную идентичность. Это создает сильный образ,
          который запоминается. Поэтому вложения в веб-дизайн окупаются
          многократно.
        </p>
        <p class="blog__description">
          Кроме того, правильный веб-дизайн учитывает адаптивность. Сегодня все
          больше людей используют мобильные устройства для доступа в интернет.
          Сайты, которые выглядят хорошо и работают без сбоев на всех типах
          экранов, создают положительный опыт пользователей. Если ваш сайт не
          адаптирован под мобильные платформы, вы рискуете остаться в стороне от
          значительного числа потенциальных клиентов.
        </p>
        <p class="blog__description">
          Наконец, веб-дизайн влияет на SEO-оптимизацию сайта. Правильная
          структура и использование ключевых элементов помогают улучшить позиции
          в поисковых системах. Это значит, что качественный дизайн не только
          привлекает пользователей, но и помогает им находить ваш сайт среди
          миллионов других.
        </p>
        <p class="blog__description">
          Веб-дизайн – это не просто красивые картинки. Это стратегический
          инструмент, который становится основой успешного онлайн-присутствия,
          влияя на впечатление о компании, удобство использования и, в конечном
          счете, на доход, помогая выделиться на фоне конкурентов. Вкладываясь в
          веб-дизайн, вы инвестируете в будущее своего бизнеса. Ваш сайт — это
          ваше лицо в интернете, и он должен быть безупречным!
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
useHead({
  title: 'Зачем вообще нужен веб-дизайн бизнесу? | Primedev.pro',
  meta: [
    {
      name: 'description',
      content:
        'Узнайте, почему качественный веб-дизайн — это не просто эстетика, а важный инструмент для привлечения клиентов и повышения конверсии вашего бизнеса.',
    },
    {
      property: 'og:title',
      content: 'Зачем вообще нужен веб-дизайн бизнесу? | Primedev.pro',
    },
    {
      property: 'og:description',
      content:
        'Веб-дизайн — это не только внешний вид сайта. Он помогает создавать позитивное впечатление о бизнесе и улучшать пользовательский опыт. Узнайте, как.',
    },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://primedev.pro/blogs/4' },
    // { property: 'og:image', content: 'https://primedev.pro/images/blog-web-design.jpg' },
    { property: 'og:site_name', content: 'Primedev.pro' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<style lang="scss" scoped>
.blog {
  width: 100%;
  &__container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    padding: 100px 50px;
    border-bottom: 1px solid #fff;
    @media screen and (max-width: 1024px) {
      padding: 100px 40px;
    }
    @media screen and (max-width: 913px) {
      padding: 70px 40px 10px 40px;
    }
    @media screen and (max-width: 480px) {
      padding: 50px 15px 10px 15px;
    }
  }
  &__wrapper {
    width: 100%;
  }
  &__title {
    margin-bottom: 50px;
    width: 100%;
    color: #fff;
    font-family: 'Raleway';
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    @media screen and (max-width: 655px) {
      margin-bottom: 25px;
      font-size: 22px;
    }
  }
  &__subtitle-2 {
    margin-bottom: 30px;
    color: #fff;
    font-family: 'Onest';
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    @media screen and (max-width: 913px) {
      font-size: 20px;
    }
    @media screen and (max-width: 655px) {
      font-size: 16px;
    }
  }
  &__description {
    margin-bottom: 20px;
    color: #cccccc;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    @media screen and (max-width: 913px) {
      font-size: 18px;
    }
    @media screen and (max-width: 655px) {
      font-size: 16px;
    }
  }
  &__subtitle {
    margin-bottom: 30px;
    color: #fff;
    font-family: 'Onest';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    @media screen and (max-width: 913px) {
      font-size: 22px;
    }
    @media screen and (max-width: 655px) {
      font-size: 18px;
    }
  }
  &__item-text {
    color: #cccccc;
    font-family: 'Onest';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    @media screen and (max-width: 913px) {
      font-size: 16px;
    }
    @media screen and (max-width: 655px) {
      font-size: 14px;
    }
  }
  &__list {
    margin-bottom: 20px;
    padding: 0 20px;
  }
  &__item {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -20px;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #e82626;
    }
  }
}
</style>
