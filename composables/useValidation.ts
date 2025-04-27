import { object, string } from 'yup'

export function useValidation(fields: string[], _num: number = 6) {
  interface Schema {
    [key: string]: any
  }
  const { t } = useI18n()
  const schema: Schema = {}

  const validation: Schema = {
    email: string().email(t('contacts.validation-1')).required(t('contacts.validation-1')),
    name: string().min(2, t('contacts.validation-2')).required(t('contacts.validation-2')),
    phone: string()
      .matches(/^\+?\d{1,3}?[-\s]?\(?\d{1,4}?\)?[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,9}$/, t('contacts.validation-3'))
      .required(t('contacts.validation-3')),
  }

  fields.forEach((field) => {
    schema[field] = validation[field]
  })

  const validationSchema = object(schema)

  return validationSchema
}
