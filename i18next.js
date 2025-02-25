import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Конфигурация языков
const resources = {
  en: {
    translation: {
      required: 'This field is required',
      invalid_url: 'Please enter a valid URL',
      url_already_exists: 'This URL has already been added',
      form_title: 'Registration Form',
      submit: 'Submit',
    },
  },
  ru: {
    translation: {
      required: 'Это поле обязательно',
      invalid_url: 'Введите корректный URL',
      url_already_exists: 'Этот URL уже добавлен',
      form_title: 'Форма регистрации',
      submit: 'Отправить',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
