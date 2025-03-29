<template>
  <section class="blog">
    <BlogsHeader />
    <div class="blog__container">
      <div class="blog__wrapper">
        <h1 class="blog__title">
          Какой сайт лучше выбрать для вашего бизнеса?
        </h1>
        <p class="blog__description">
          Определение оптимального формата сайта зависит от целей бизнеса. Важно
          понимать, какую задачу он должен решать: привлекать клиентов,
          представлять компанию или продавать товары. Варианты могут включать
          лендинг, корпоративный сайт, интернет-магазин или каталог. Разберёмся,
          какой формат подойдёт именно вам.
        </p>
        <h2 class="blog__subtitle">1. Лендинг (Landing Page)</h2>
        <p class="blog__description">
          Лендинг — это одностраничный сайт, сфокусированный на конкретном
          предложении. Его задача — мотивировать пользователя совершить целевое
          действие, будь то покупка, подписка или заявка.
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              Ориентация на одно предложение: подходит для рекламы конкретного
              продукта или услуги.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Высокая конверсия: за счёт фокусировки на одной цели повышается
              эффективность продаж.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Простота восприятия: вся информация доступна на одной странице.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Экономичность: разработка лендинга обходится дешевле, чем
              полноценного сайта.
            </p>
          </li>
        </ul>
        <p class="blog__description">
          Идеально подойдёт для продвижения акций, запуска нового продукта или
          сбора заявок.
        </p>

        <h2 class="blog__subtitle">2. Корпоративный сайт</h2>
        <p class="blog__description">
          Этот формат представляет собой многостраничный ресурс, содержащий
          подробную информацию о компании, её услугах и деятельности.
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              Детальное представление компании: помогает выстроить доверие у
              клиентов.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Укрепление имиджа: наличие блога, кейсов и отзывов усиливает
              репутацию.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              SEO-продвижение: страницы можно оптимизировать для поисковых
              систем.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Гибкость: сайт можно масштабировать, добавляя новые разделы.
            </p>
          </li>
        </ul>
        <p class="blog__description">
          Подойдёт компаниям, стремящимся укрепить позиции на рынке и
          продемонстрировать свой опыт.
        </p>

        <h2 class="blog__subtitle">3. Интернет-магазин</h2>
        <p class="blog__description">
          Этот формат разработан для продажи товаров и включает каталог,
          корзину, систему оплаты и доставки.
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              Автоматизация продаж: позволяет пользователям совершать покупки
              без участия менеджера.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Удобство для клиентов: фильтры, категории и рекомендации упрощают
              процесс выбора.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Маркетинговые инструменты: скидки, акции и программы лояльности
              помогают привлекать клиентов.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Аналитика: возможность отслеживания поведения пользователей и
              корректировки стратегии.
            </p>
          </li>
        </ul>
        <p class="blog__description">
          Подходит для бизнеса, ориентированного на активные продажи товаров и
          услуг в интернете.
        </p>

        <h2 class="blog__subtitle">Как сделать правильный выбор?</h2>
        <p class="blog__description">Выбор зависит от ваших задач:</p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              Лендинг — для быстрого запуска рекламы и генерации заявок.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Корпоративный сайт — для создания профессионального имиджа
              компании.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Интернет-магазин — для эффективной онлайн-торговли.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
useHead({
  title: 'Какой сайт лучше выбрать для вашего бизнеса? | Primedev.pro',
  meta: [
    {
      name: 'description',
      content:
        'Разбираем, какой сайт подойдет вашему бизнесу: лендинг, корпоративный сайт, интернет-магазин или веб-приложение. Советы по выбору лучшего решения.',
    },
    {
      property: 'og:title',
      content: 'Какой сайт лучше выбрать для вашего бизнеса? | Primedev.pro',
    },
    {
      property: 'og:description',
      content:
        'Какой тип сайта выбрать для бизнеса? Сравниваем разные варианты, их преимущества и недостатки.',
    },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://primedev.pro/blogs/2' },
    // { property: 'og:image', content: 'https://primedev.pro/images/blog-site-selection.jpg' },
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
