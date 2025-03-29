<template>
  <section class="blog">
    <BlogsHeader />
    <div class="blog__container">
      <div class="blog__wrapper">
        <h1 class="blog__title">Принципы хорошего веб-дизайна</h1>
        <h2 class="blog__subtitle">
          Давайте разбираться, почему существуют принципы хорошего дизайна и
          почему их надо придерживаться.
        </h2>
        <p class="blog__description">
          Хороший веб-дизайн должен быть продуманным и учитывать множество
          факторов, влияющих на пользовательский опыт. Рассмотрим основные
          принципы, которые помогут создать привлекательный и удобный сайт.
        </p>
        <h2 class="blog__subtitle">Простота</h2>
        <p class="blog__description">
          Простота — это основа успешного веб-дизайна. Избегайте избыточных
          деталей, которые могут отвлекать пользователя. Четкая структура и
          лаконичный интерфейс помогут сосредоточить внимание посетителей на
          главном. Разместите на странице только ту информацию, которая
          действительно важна. Используйте белые пространства, чтобы дать
          зрителям возможность "подышать" и не перегружать их глазами лишними
          элементами.
        </p>
        <h2 class="blog__subtitle">Воздух</h2>
        <p class="blog__description">
          воздух в дизайне – это свободное пространство, которое помогает
          организовать контент. Правильно распределяя отступы и поля, вы
          создаёте «воздушное» пространство между элементами. Это позволяет
          избежать ощущения хаоса и перегруженности. Кроме того, воздух помогает
          направить внимание пользователей на важные элементы, такие как
          заголовки, кнопки и изображения. В результате сайт становится более
          аккуратным и структурированным.
        </p>
        <h2 class="blog__subtitle">Гибкость</h2>
        <p class="blog__description">
          Гибкость дизайна подразумевает адаптивность к различным устройствам и
          экранам. Сегодня пользователи заходят на сайты с различных платформ:
          от мобильных телефонов и планшетов до настольных компьютеров.
          Создавайте адаптивные макеты, которые сохраняют функциональность и
          привлекательность на любых устройствах. Такой подход улучшает
          пользовательский опыт и значительно повышает конверсии. Нельзя
          забывать и о разных браузерах, чтобы избежать проблем совместимости.
        </p>
        <h2 class="blog__subtitle">Удобство для пользователя</h2>
        <p class="blog__description">
          Наивысший приоритет в веб-дизайне — это удобство для пользователей.
          Необходимо учитывать их нужды и привычки. Упростите процесс навигации,
          сделайте кнопки и ссылки интуитивно понятными. Разработайте четкую
          структуру меню и подменю, чтобы пользователи могли легко находить
          нужную информацию. Пользовательский тестинг и обратная связь помогут
          выявить проблемные области и доработать сайт для лучшего
          взаимодействия с посетителями. Удобство не всегда на первом месте для
          бизнеса, но оно решает, вернутся ли пользователи на ваш сайт или
          покинут его в поисках более комфортного.
        </p>
        <p class="blog__description">
          Каждый элемент дизайна должен служить одной цели: улучшить
          взаимодействие пользователя с вашим ресурсом. Уделяйте внимание
          деталям и развивайте свой сайт. Ведь хорошие практики веб-дизайна
          способны существенно повысить вашу аудиторию и укрепить бренд. Помните
          о том, что веб-дизайн – это постоянно развивающаяся область, и важно
          оставаться в курсе новых тенденций и инструментов, чтобы ваш сайт
          всегда оставался актуальным и востребованным.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

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
