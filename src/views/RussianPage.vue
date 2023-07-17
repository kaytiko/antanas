<template>
  <section>
    <MenuBig />
    <header class="page__header header">
      <div class="header__container container">
        <div class="header__wrapper wrapper">
          <Header logo="Открытая
    выставка" about="Классик советской и&nbsp;литовской фотографии" menuText="Привет! Этот проект был сделан мной для удовольствия. Мне очень хотелось рассказать о&nbsp;фотографе, работы которого я&nbsp;разглядывала в&nbsp;детстве в&nbsp;домашней библиотеке. Если ты&nbsp;хочешь поработать со&nbsp;мной в&nbsp;коллаборации и&nbsp;сделать похожий проект&nbsp;&mdash; пиши мне&nbsp;в" />
        </div>
        <Banner bannerName="banner_name--ru" bannerLastName="banner_lastname--ru"
          title="Антанас Суткус&nbsp;&mdash; классик советской и&nbsp;литовской фотографии"
          info="&laquo;Детство&nbsp;&mdash; это другая жизнь. И&nbsp;думать надо о&nbsp;детстве как о&nbsp;жизни до&nbsp;жизни&quot;" />
      </div>
    </header>
    <main class="page__main">
      <GalleryItem dt1="Новости на улице" dt2="Песенный фестиваль — день танцев" dt3="Первые байкеры" dt4="Моряк"
        dt5="Апельсины из Морокко" dt6="Зимняя геометрия" dt7="C отцовским велосипедом" dt8="Дождь" dt9="Пионер"
        dt10="Лето в Салакасе. Аукштайтия" />
    </main>
    <Footer name="Антанас Суткус" about="Документальный фотограф, основатель и&nbsp;председатель Союза фотохудожников Литвы. Главная тема Суткуса&nbsp;&mdash; жители его страны, однако самым известным его снимком до&nbsp;сих пор остаётся портрет Жан-Поля Сартра." menu_1="Биография" menu_2="Лекции" menu_3="Выставки"
      menu_4="Медиа" menu_5="Новости" button="Узнать о выставках" send="Подписаться на рассылку"
      policy="Политика конфиденциальности" toTop="К началу" />
  </section>
</template>

<script>
// @ is an alias to /src
import MenuBig from '@/components/Menu.vue'
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'
import GalleryItem from '@/components/GalleryItem.vue'

export default {
  name: 'HomeView',
  components: {
    MenuBig,
    Header,
    Banner,
    Footer,
    GalleryItem, 
  }
}
</script>