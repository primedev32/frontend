<template>
  <section class="blog">
    <BlogsHeader />
    <div class="blog__container">
      <div class="blog__wrapper">
        <h1 class="blog__title">
          Как привлечь новых клиентов на сайт в 2025 году
        </h1>
        <p class="blog__description">
          Привлечение клиентов — это один из ключевых факторов успеха для
          бизнеса. Этот процесс напрямую влияет на доход компании и ее
          дальнейшее развитие. В условиях высокой конкуренции важно построить
          грамотную стратегию, которая включает не только качественное
          продвижение, но и улучшение пользовательского опыта на сайте. В этой
          статье мы обсудим, какие методы привлечения клиентов актуальны в 2025
          году, и как эффективно использовать инструменты для роста бизнеса.
        </p>
        <h2 class="blog__subtitle">
          1. Исследуйте и поймите вашу целевую аудиторию
        </h2>
        <p class="blog__description">
          Чтобы привлекать клиентов, нужно точно знать, кто они и как с ними
          общаться. Понимание вашей аудитории поможет настроить маркетинг и
          рекламные кампании. Вот несколько критериев для анализа:
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              Демографические данные: возраст, пол и социальный статус.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Интересы и хобби, включая профессиональные увлечения.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Проблемы и потребности, которые ваш продукт или услуга могут
              решить.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Где ваша аудитория проводит время в интернете.
            </p>
          </li>
        </ul>
        <p class="blog__description">
          Для сбора данных используйте такие инструменты, как Google Analytics
          или Яндекс.Метрика. Это поможет создать точный профиль вашего клиента.
        </p>
        <h2 class="blog__subtitle">
          2. Разработайте уникальное предложение для клиентов (УТП)
        </h2>
        <p class="blog__description">
          УТП позволяет выделиться среди конкурентов и привлечь внимание
          аудитории. Чтобы оно было эффективным, оно должно быть:
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">Ярким и запоминающимся;</p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">Легким для восприятия;</p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Соответствующим потребностям вашей аудитории.
            </p>
          </li>
        </ul>
        <p class="blog__description">
          УТП можно использовать во всех рекламных материалах, от сайта до
          рекламы. Например, фразы типа «Доставка за 1 день» или «Возврат без
          вопросов» помогут укрепить доверие клиентов.
        </p>
        <h2 class="blog__subtitle">
          3. Создайте удобный и привлекательный веб-сайт
        </h2>
        <p class="blog__description">
          Ваш сайт — это первое, с чем сталкиваются клиенты, и он должен быть
          привлекательным и функциональным. Вот несколько важных факторов:
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              Легкая и интуитивная навигация — посетители должны быстро находить
              нужную информацию;
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Быстрая загрузка страниц — медленный сайт отпугивает посетителей;
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Адаптивность — сайт должен работать на всех устройствах, особенно
              на мобильных.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Полезный контент — разместите полезные статьи, отзывы и часто
              задаваемые вопросы.
            </p>
          </li>
        </ul>
        <p class="blog__description">
          На сайте стоит добавить формы для сбора контактов, а также раздел с
          контактными данными вашего бизнеса.
        </p>
        <h2 class="blog__subtitle">
          4. Используйте рекламу и социальные сети для привлечения аудитории
        </h2>
        <p class="blog__description">
          Платная реклама и социальные сети являются мощными инструментами для
          привлечения клиентов.
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              Контекстная реклама (например, Яндекс.Директ) помогает привлекать
              аудиторию, которая уже ищет ваш продукт.
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              Социальные сети, такие как ВКонтакте и Telegram, идеально подходят
              для общения с клиентами и продвижения товаров через акции и посты.
            </p>
          </li>
        </ul>
        <p class="blog__description">
          Важно настроить таргетинг, чтобы реклама показывалась тем, кто
          действительно заинтересован в вашем продукте. Это поможет максимально
          эффективно использовать ваш рекламный бюджет.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { BlogsHeader } from '#components'
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
