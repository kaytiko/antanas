<template>
  <section>
    <header class="page__header header">
      <div class="header__container container">
        <div class="header__wrapper wrapper">
          <Header logo="Open exhibition" about="A classic of Soviet and Lithuanian photography" menuText="Hi! This project was made by me for fun. I really wanted to talk about a photographer whose work I looked at as a child in my home library. If you want to work with me in collaboration and make a similar project write to me at" />
        </div>
        <Banner bannerName="banner_name--en" bannerLastName="banner_lastname--en"
          title="Antanas Sutkus - classic of Soviet and Lithuanian photography"
          info="&laquo;Childhood;&mdash;is another life. And &nbsp;think about&nbsp;childhood what&nbsp;life before&nbsp;life&raquo;"
         />
      </div>
    </header>
    <main class="page__main">
      <GalleryItem dt1="News on the&nbsp;street" dt2="Song Festival - Dance Day" dt3="The first bikers" dt4="Sailor"
        dt5="Oranges from Morocco" dt6="Winter Geometry" dt7="With my father's bicycle" dt8="Rain" dt9="Pioneer"
        dt10="Summer in&nbsp;Salakas. Aukstaitija" />
      <!-- <CardItem :data="exampleData"/> -->
    </main>
    <Footer name="Antanas Sutkus" about="Documentary photographer, founder and chairman of the Union of Photographers
                            Lithuania. Sutkus's main subject is the people of his country, but his most famous picture is still the portrait of Jean-Paul Sartre.
                            is the portrait of Jean-Paul Sartre." menu_1="Biography" menu_2="Lectures"
      menu_3="Exhibitions" menu_4="Media" menu_5="News" button="Learn about exhibitions" send="Subscribe to Newsletter"
      policy="Privacy Policy" toTop="To Top" />
  </section>
</template>

<script>
// import { exampleData } from '@/data/data.photo' 

// @ is an alias to /src
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'
import GalleryItem from '@/components/GalleryItem.vue'

// import CardItem from '@/components/CardItem.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Banner,
    Footer,
    GalleryItem,
    // CardItem
  }
  // data() {
  //   return {
  //     exampleData: exampleData
  //   }
  // }
}
</script>
