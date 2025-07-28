<template>
  <section class="contacts" id="contacts">
    <div class="container contacts__wrapper" style="position: relative">
      <img class="contacts__img" src="/img/hero-about.webp" alt="img" />
      <h2 class="contacts__title" ref="title1">
        {{ title }}
      </h2>
      <h3 class="contacts__subtitle" ref="subtitle">
        {{ $t('contacts.subtitle') }}
      </h3>

      <div class="contacts__wrapper-form">
        <div class="contacts__block-left">
          <span for="text" class="contacts__label"
            ><span class="contacts__label-span">01</span>
            {{ $t('contacts.span-1') }}</span
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
                >{{ $t(`contacts.${item.services}`) }}</span
              >
            </button>
          </div>
          <span for="text" class="contacts__label"
            ><span class="contacts__label-span">02</span>
            {{ $t('contacts.span-2') }}</span
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
                >{{ $t(`contacts.${item.services}`) }}</span
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
            ><span class="contacts__label-span">03</span>
            {{ $t('contacts.span-3') }}</span
          >
          <textarea
            v-model="textarea"
            name="text"
            id="text"
            :placeholder="$t('contacts.input-1')"
            class="contacts__textarea"
          />
          <span for="text" class="contacts__label"
            ><span class="contacts__label-span">04</span>
            {{ $t('contacts.span-4') }}</span
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
                      meta.touched && errorMessage
                        ? $t('contacts.validation-2')
                        : $t('contacts.input-2')
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
                        ? $t('contacts.validation-3')
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
                      meta.touched && errorMessage
                        ? $t('contacts.validation-1')
                        : 'E-mail'
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
                :placeholder="$t('contacts.input-3')"
                class="contacts__input"
              />
            </div>
          </div>
          <p class="contacts__text">
            {{ $t('contacts.policy') }}
            <a
              class="contacts__policy"
              href="/doc/policy.pdf"
              target="_blank"
              >{{ $t('contacts.policy-link') }}</a
            >
          </p>
          <button form="form" type="submit" class="btn-reset contacts__btn">
            <span class="contacts__btn-text">{{ $t('contacts.button') }}</span>
          </button>
          <Transition name="contacts__fade">
            <p v-if="messageTrue" class="contacts__message">
              Ваше сообщение успешно отправлено!
            </p>
          </Transition>
        </Form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useValidation } from '@/composables/useValidation'
import { Form, Field } from 'vee-validate'

const { $gsap } = useNuxtApp()
const title1 = ref<HTMLElement | null>(null)
const subtitle = ref<HTMLElement | null>(null)

const textarea = ref('')
const link = ref('')
const messageTrue = ref(false)

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
  setTimeout(() => {
    messageTrue.value = true
    setTimeout(() => {
      messageTrue.value = false
    }, 4000)
  })
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

onMounted(() => {
  $gsap.fromTo(
    title1.value,
    {
      x: -500,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 4,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: title1.value,
        start: 'top 50%',
        once: true,
      },
    }
  )

  $gsap.fromTo(
    subtitle.value,
    {
      x: 500,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 4,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: subtitle.value,
        start: 'top 50%',
        once: true,
      },
    }
  )
})
</script>

<style lang="scss" scoped>
.contacts {
  padding: 80px 0;
  background: #fff;
  overflow: hidden;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 913px) {
    background-repeat: no-repeat;
    background-position: right 0px;
    background-size: 250px auto;
    background-image: url('/img/home-contacts-913.webp');
  }
  &__fade-enter-active,
  &__fade-leave-active {
    transition: opacity 0.5s ease;
  }

  &__fade-enter-from,
  &__fade-leave-to {
    opacity: 0;
  }

  &__wrapper {
    z-index: 5;
  }
  &__img {
    display: block;
    position: absolute;
    top: 250px;
    right: -117px;
    width: 343px;
    height: auto;
    object-fit: cover;
    z-index: -1;
    @media screen and (max-width: 1500px) {
      top: 200px;
      right: -100px;
    }
    @media screen and (max-width: 913px) {
      display: none;
    }
  }
  &__message {
    margin: 10px 0;
    color: green;
    font-family: 'Raleway';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    @media screen and (max-width: 655px) {
      font-size: 14px;
    }
  }
  &__title {
    color: #000;
    text-align: center;
    font-family: 'Raleway';
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    z-index: 5;
    @media screen and (max-width: 1500px) {
      font-size: 40px;
    }
    @media screen and (max-width: 655px) {
      font-size: 28px;
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
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
    @media screen and (max-width: 1500px) {
      font-size: 14px;
    }
    @media screen and (max-width: 655px) {
      font-size: 12px;
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
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 43.2px */
    letter-spacing: -0.72px;
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 18px;
      margin-bottom: 36px;
    }
    @media screen and (max-width: 913px) {
      margin-bottom: 21px;
    }
    @media screen and (max-width: 655px) {
      font-size: 16px;
    }
    &-span {
      color: #000;
      font-family: 'Onest';
      font-size: 30px;
      letter-spacing: -0.88px;
      opacity: 0.2;
      @media screen and (max-width: 1500px) {
        font-size: 20px;
      }
      @media screen and (max-width: 655px) {
        font-size: 16px;
      }
    }
  }
  &__textarea {
    margin-bottom: 42px;
    padding: 15px;
    border-radius: 15px;
    background: #f0f0f0;
    width: 100%;
    overflow-x: hidden;

    height: 21px;
    min-height: 51px;
    outline: none;
    overflow-y: hidden;
    resize: none;
    &::placeholder {
      color: #000;
      font-family: 'Onest';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      opacity: 0.5;
      @media screen and (max-width: 1500px) {
        font-size: 14px;
      }
      @media screen and (max-width: 655px) {
        font-size: 12px;
      }
    }
    @media screen and (max-width: 1500px) {
      padding: 15px;

      height: 53px;
      min-height: 53px;
    }
    @media screen and (max-width: 655px) {
      margin-bottom: 45px;
      padding: 12px;

      height: 41px;
      min-height: 40px;
    }
    @media screen and (max-width: 463px) {
      font-size: 14px;
    }
  }
  &__input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (max-width: 655px) {
      gap: 20px;
    }
  }
  &__input-wrapper-2 {
    display: flex;
    gap: 20px;
    width: 100%;
    @media screen and (max-width: 655px) {
      flex-direction: column;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
  &__input {
    border-radius: 15px;
    background: #f0f0f0;
    padding: 20px;
    width: 100%;
    height: 21px;
    min-height: 51px;
    outline: none;
    @media screen and (max-width: 1500px) {
      padding: 15px;
      max-width: 497px;
      height: 53px;
      min-height: 53px;
    }
    @media screen and (max-width: 655px) {
      padding: 12px;
      max-width: 497px;
      height: 41px;
      min-height: 40px;
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
      @media screen and (max-width: 1500px) {
        font-size: 14px;
      }
      @media screen and (max-width: 655px) {
        font-size: 12px;
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
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 655px) {
      font-size: 14px;
    }
  }
  &__input-field {
    width: 100%;
  }
  &__btn-select {
    padding: 11px 18px;
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
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 14px;
    }
    @media screen and (max-width: 655px) {
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
  &__text {
    margin-bottom: 15px;
    color: #000;
    font-family: 'Onest';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
    @media screen and (max-width: 655px) {
      font-size: 12px;
    }
  }
  &__policy {
    color: #000;
  }
}
</style>
