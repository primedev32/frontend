<template>
  <section class="contacts" id="contacts">
    <div class="container contacts__wrapper" style="position: relative">
      <img class="contacts__img" src="/img/home-contacts.webp" alt="img" />
      <h2 class="contacts__title">{{ title }}</h2>
      <h3 class="contacts__subtitle">
        Заполняй мини-бриф, и мы мчимся к тебе с ответом в считанные минуты
      </h3>

      <div class="contacts__wrapper-form">
        <div class="contacts__block-left">
          <span for="text" class="contacts__label"
            ><span class="contacts__label-span">01</span>Услуги</span
          >
          <div class="contacts__btn-select-wrapper">
            <button
              v-for="(item, index) in service"
              :key="index"
              @click="activeService(index)"
              class="btn-reset contacts__btn-select"
              :class="{ 'contacts__btn-active': item.active }"
            >
              <span
                class="contacts__btn-select-text"
                :class="{ 'contacts__btn-select-text-active': item.active }"
                >{{ item.services }}</span
              >
            </button>
          </div>
          <span for="text" class="contacts__label"
            ><span class="contacts__label-span">02</span>бюджет</span
          >
          <div class="contacts__btn-select-wrapper">
            <button
              v-for="(item, index) in budget"
              :key="index"
              @click="activeBudget(index)"
              class="btn-reset contacts__btn-select"
              :class="{ 'contacts__btn-active': item.active }"
            >
              <span
                class="contacts__btn-select-text"
                :class="{ 'contacts__btn-select-text-active': item.active }"
                >{{ item.services }}</span
              >
            </button>
          </div>
        </div>
        <Form
          :validation-schema="validationSchema"
          class="contacts__form"
          id="form"
          name="form"
          @submit="sendForm"
        >
          <span for="text" class="contacts__label"
            ><span class="contacts__label-span">03</span>что нужно
            сделать?</span
          >
          <textarea
            v-model="textarea"
            name="text"
            id="text"
            placeholder="Опишите задачу"
            class="contacts__textarea"
          />
          <span for="text" class="contacts__label"
            ><span class="contacts__label-span">04</span>контакты</span
          >
          <div class="contacts__input-wrapper">
            <div class="contacts__input-wrapper-2">
              <div class="contacts__input-field">
                <Field v-slot="{ field, meta, errorMessage }" name="name">
                  <input
                    v-bind="field"
                    type="text"
                    id="name"
                    :placeholder="
                      meta.touched && errorMessage ? errorMessage : 'Ваше имя'
                    "
                    class="contacts__input"
                    :class="{
                      'contacts__input--error': meta.touched && !meta.valid,
                    }"
                  />
                </Field>
              </div>
              <div class="contacts__input-field">
                <Field v-slot="{ field, meta, errorMessage }" name="phone">
                  <input
                    v-bind="field"
                    type="phone"
                    id="phone"
                    :placeholder="
                      meta.touched && errorMessage
                        ? errorMessage
                        : '+7 (___) ___-__-__'
                    "
                    class="contacts__input"
                    :class="{
                      'contacts__input--error': meta.touched && !meta.valid,
                    }"
                  />
                </Field>
              </div>
            </div>
            <div class="contacts__input-wrapper-2">
              <div class="contacts__input-field">
                <Field v-slot="{ field, meta, errorMessage }" name="email">
                  <input
                    v-bind="field"
                    type="email"
                    id="email"
                    :placeholder="
                      meta.touched && errorMessage ? errorMessage : 'E-mail'
                    "
                    class="contacts__input"
                    :class="{
                      'contacts__input--error': meta.touched && !meta.valid,
                    }"
                  />
                </Field>
              </div>
              <input
                v-model="link"
                type="text"
                placeholder="Ссылка на ТЗ"
                class="contacts__input"
              />
            </div>
          </div>
          <button form="form" type="submit" class="btn-reset contacts__btn">
            <span class="contacts__btn-text">Отправить</span>
          </button>
        </Form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useValidation } from '@/composables/useValidation'
import { Form, Field } from 'vee-validate'

const textarea = ref('')
const link = ref('')

const activeService = (index: number) => {
  service.value.forEach((item, i) => {
    item.active = i === index ? !item.active : false
  })
}

const activeBudget = (index: number) => {
  budget.value.forEach((item, i) => {
    item.active = i === index ? !item.active : false
  })
}

const { sendToTelegram } = useSendToTelegram()

const validationSchema = useValidation(['name', 'phone', 'email'])

const sendForm = async (values: any, { resetForm }: any) => {
  try {
    const formData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      task: textarea.value,
      link: link.value,
      service: service.value.find((item) => item.active)?.services || '',
      budget: budget.value.find((item) => item.active)?.services || '',
    }
    await sendToTelegram(formData)
    console.log('Message sent successfully')
  } catch (error) {
    console.error('Error sending message:', error)
  } finally {
    textarea.value = ''
    link.value = ''
    service.value.forEach((item) => (item.active = false))
    budget.value.forEach((item) => (item.active = false))
    resetForm()
  }
}

defineProps<{
  title: string
}>()
</script>

<style lang="scss" scoped>
.contacts {
  padding: 130px 0;
  background: #fff;
  overflow: hidden;
  position: relative; /* Обязательно добавляем позиционирование для использования z-index */
  z-index: 1;
  // background-image: url('/img/home-contacts.webp');
  // background-repeat: no-repeat;
  // background-position: right 0px;
  // background-size: contain;
  @media screen and (max-width: 1500px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 913px) {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right 0px;
    background-size: contain;
    background-image: url('/img/home-contacts-913.webp');
  }
  @media screen and (max-width: 655px) {
    padding: 80px 0;
  }
  &__wrapper {
    z-index: 5;
  }
  &__img {
    display: block;
    position: absolute;
    top: -140px;
    right: -17px;
    width: 343px;
    height: auto;
    object-fit: cover;
    z-index: -1;
    @media screen and (max-width: 913px) {
      display: none;
    }
  }
  &__title {
    color: #000;
    text-align: center;
    font-family: 'Raleway';
    font-size: 90px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    z-index: 5;
    @media screen and (max-width: 1500px) {
      font-size: 50px;
    }
    @media screen and (max-width: 655px) {
      font-size: 32px;
    }
  }
  &__wrapper-form {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 913px) {
      grid-template-columns: 1fr;
    }
    @media screen and (max-width: 655px) {
      gap: 45px;
    }
  }
  &__subtitle {
    margin-bottom: 60px;
    color: #000;
    text-align: center;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
    @media screen and (max-width: 1500px) {
      font-size: 18px;
    }
    @media screen and (max-width: 655px) {
      font-size: 16px;
      margin-bottom: 43px;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    z-index: 2;
  }
  &__label {
    margin-bottom: 40px;
    display: flex;
    gap: 20px;
    align-items: center;
    color: #000;
    font-family: 'Raleway';
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 43.2px */
    letter-spacing: -0.72px;
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 24px;
      margin-bottom: 36px;
    }
    @media screen and (max-width: 913px) {
      margin-bottom: 21px;
    }
    @media screen and (max-width: 655px) {
      font-size: 20px;
    }
    &-span {
      color: #000;
      font-family: 'Onest';
      font-size: 44px;
      letter-spacing: -0.88px;
      opacity: 0.2;
      @media screen and (max-width: 1500px) {
        font-size: 34px;
      }
      @media screen and (max-width: 655px) {
        font-size: 24px;
      }
    }
  }
  &__textarea {
    margin-bottom: 60px;
    padding: 20px;
    border-radius: 15px;
    background: #f0f0f0;
    width: 100%;
    max-width: 497px;
    height: 65px;
    min-height: 65px;
    outline: none;
    resize: none;
    &::placeholder {
      color: #000;
      font-family: 'Onest';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      opacity: 0.5;
      @media screen and (max-width: 463px) {
        font-size: 14px;
      }
    }
    @media screen and (max-width: 1500px) {
      padding: 15px;
      max-width: 497px;
      height: 53px;
      min-height: 53px;
    }
    @media screen and (max-width: 655px) {
      margin-bottom: 45px;
    }
    @media screen and (max-width: 463px) {
      padding: 13px;
      height: 45px;
      min-height: 45px;
      font-size: 14px;
    }
  }
  &__input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__input-wrapper-2 {
    display: flex;
    gap: 20px;
    width: 100%;
    @media screen and (max-width: 655px) {
      flex-direction: column;
    }
    &:last-child {
      margin-bottom: 40px;
    }
  }
  &__input {
    border-radius: 15px;
    background: #f0f0f0;
    padding: 20px;
    width: 100%;
    height: 65px;
    min-height: 65px;
    outline: none;
    @media screen and (max-width: 1500px) {
      padding: 15px;
      max-width: 497px;
      height: 53px;
      min-height: 53px;
    }
    @media screen and (max-width: 463px) {
      padding: 13px;
      height: 45px;
      min-height: 45px;
      font-size: 14px;
    }
    &::placeholder {
      color: #000;
      font-family: 'Onest';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      opacity: 0.5;
      @media screen and (max-width: 463px) {
        font-size: 14px;
      }
    }
    &--error {
      color: #ff3e29;
      border: 1px solid #ff3e29;
    }
  }
  &__btn {
    padding: 10px;
    border-radius: 15px;
    background: #ffcb9b;
    max-width: 497px;
    transition: background 0.3s ease-out;
    @media screen and (max-width: 463px) {
      padding: 7px;
    }
    &:hover {
      background: #d6b089;
    }
  }
  &__btn-text {
    color: #000;
    text-align: center;
    font-family: 'Raleway';
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 655px) {
      font-size: 18px;
    }
  }
  &__input-field {
    width: 100%;
  }
  &__btn-select {
    padding: 15px 24px;
    border-radius: 15px;
    background: #f0f0f0;
    transition: background 0.3s ease-in-out;
    @media screen and (max-width: 655px) {
      padding: 10px 14px;
    }
    @media screen and (max-width: 463px) {
      padding: 7px 14px;
    }
  }
  &__btn-select-text {
    color: #000;
    text-align: center;
    font-family: 'Onest';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 16px;
    }
    @media screen and (max-width: 655px) {
      font-size: 13px;
    }
    @media screen and (max-width: 463px) {
      font-size: 12px;
    }
  }
  &__btn-select-wrapper {
    margin-bottom: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media screen and (max-width: 655px) {
      margin-bottom: 45px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__btn-active {
    background: #222624;
  }
  &__btn-select-text-active {
    color: #fff;
  }
}
</style>
