<template>
  <section class="add-review">
    <div class="add-review__wrapper">
      <div class="container">
        <NuxtLinkLocale class="add-review__logo" to="/"
          ><span class="add-review__logo-link">PrimeDev</span></NuxtLinkLocale
        >
      </div>
    </div>
    <div class="container">
      <h1 class="add-review__title">{{ $t('reviews.add-review-title') }}</h1>
      <Form
        :validation-schema="validationSchema"
        class="add-review__form"
        @submit="handleSubmit"
      >
        <div class="add-review__form-group">
          <Field v-slot="{ field, meta, errorMessage }" name="autor">
            <input
              v-bind="field"
              type="text"
              :placeholder="
                meta.touched && errorMessage
                  ? errorMessage
                  : $t('reviews.add-review-placeholder-autor')
              "
              class="add-review__input"
              :class="{
                'add-review__input--error': meta.touched && !meta.valid,
              }"
            />
          </Field>
        </div>

        <div class="add-review__form-group">
          <Field v-slot="{ field, meta, errorMessage }" name="description">
            <textarea
              v-bind="field"
              :placeholder="
                meta.touched && errorMessage
                  ? errorMessage
                  : $t('reviews.add-review-placeholder')
              "
              class="add-review__textarea"
              :class="{
                'add-review__textarea--error': meta.touched && !meta.valid,
              }"
            ></textarea>
          </Field>
        </div>

        <button type="submit" class="add-review__submit">
          {{ $t('reviews.add-review-button') }}
        </button>

        <Transition name="fade">
          <p
            v-if="submitStatus"
            class="add-review__status"
            :class="{ 'add-review__status--success': isSuccess }"
          >
            {{ submitMessage }}
          </p>
        </Transition>
      </Form>
    </div>
  </section>
  <Footer />
</template>

<script lang="ts" setup>
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'

const { t } = useI18n()

const validationSchema = yup.object({
  autor: yup.string().required(t('reviews.add-review-placeholder-error-autor')),
  description: yup
    .string()
    .required(t('reviews.add-review-placeholder-error'))
    .min(10, t('reviews.add-review-placeholder-error-min')),
})

const submitStatus = ref(false)
const submitMessage = ref('')
const isSuccess = ref(false)

const handleSubmit = async (_values: any, { resetForm }: any) => {
  try {
    const response = await useCustomFetch(`${apiReviews}?status=draft`, {
      method: 'POST',
      body: {
        data: {
          autor: _values.autor,
          description: _values.description,
        },
      },
    })
    console.log(response)
    isSuccess.value = true
    submitMessage.value = t('reviews.add-review-success')
    resetForm()
  } catch (error) {
    console.error('Error submitting review:', error)
    isSuccess.value = false
    submitMessage.value = t('reviews.add-review-error')
  } finally {
    submitStatus.value = true
    setTimeout(() => {
      submitStatus.value = false
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.add-review {
  padding: 0 0 50px 0;
  @media screen and (max-width: 913px) {
    padding: 0 0 0 0;
  }
  &__wrapper {
    padding: 38px 0 36px 0;
    border-radius: 0px 0px 15px 15px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    @media screen and (max-width: 655px) {
      padding: 25px 0 25px 0;
    }
  }
  &__logo {
    color: #fff;
    font-family: 'Onest';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 38.4px */
    text-decoration: none;
    @media screen and (max-width: 913px) {
      font-size: 25px;
    }
  }
  &__title {
    padding-top: 100px;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 32px;
    font-family: 'Onest';
    color: #fff;
    @media screen and (max-width: 913px) {
      font-size: 24px;
      padding-top: 60px;
    }
  }

  &__form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__input,
  &__textarea {
    width: 100%;
    padding: 15px;
    border-radius: 15px;
    background: #f0f0f0;
    border: none;
    outline: none;
    font-family: 'Onest';
    font-size: 16px;
    color: #000;

    &::placeholder {
      color: #000;
      opacity: 0.5;
    }

    &--error {
      border: 1px solid #ff3e29;
      color: #ff3e29;
      &::placeholder {
        color: #ff3e29;
        opacity: 0.7;
        @media screen and (max-width: 913px) {
          font-size: 14px;
        }
      }
    }
    @media screen and (max-width: 913px) {
      font-size: 14px;
      padding: 10px;
    }
  }

  &__textarea {
    min-height: 150px;
    resize: none;
    @media screen and (max-width: 913px) {
      min-height: 100px;
    }
  }

  &__error {
    color: #ff3e29;
    font-size: 14px;
    font-family: 'Onest';
  }

  &__submit {
    padding: 15px;
    border-radius: 15px;
    background: #ffcb9b;
    border: none;
    cursor: pointer;
    font-family: 'Raleway';
    font-size: 18px;
    font-weight: 600;
    color: #000;
    transition: background-color 0.3s;

    &:hover {
      background: #d6b089;
    }
    @media screen and (max-width: 913px) {
      font-size: 16px;
      padding: 10px;
    }
  }

  &__status {
    text-align: center;
    font-family: 'Onest';
    font-size: 16px;
    color: #ff3e29;

    &--success {
      color: #4caf50;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
