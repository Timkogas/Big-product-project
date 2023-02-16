import { useTranslation } from "react-i18next";

function MainPage() {
  const { t } = useTranslation('main')
  return (
    <div>
      <h1>{t('Главная страница')}</h1>
      <p>{t('Home')}</p>
    </div>
  );
}

export default MainPage;