<!-- eslint-disable vue/no-dupe-keys -->
<template>
    <footer class="page__footer footer">
        <div class="footer__container container">
            <div class="footer__wrapper wrapper">
                <div class="footer__author">
                    <picture>
                        <source srcset="../assets/layout/img/footer-image@480.avif 480w, ../assets/layout/img/footer-image@1200.avif 1200w" type="image/avif">
                        <source srcset="../assets/layout/img/footer-image@480.webp 480w, ../assets/layout/img//footer-image@1200.webp 1200w" type="image/webp">
                        <img class="footer__author-image" src="../assets/layout/img/footer-image@1200.jpg" alt="antanas sutkus" width="720"
                            height="866" loading="lazy">
                    </picture>
                    <div class="footer__author-info">
                        <p class="footer__text">{{ name }}</p>
                        <p class="footer__text">{{ about }}</p>
                    </div>
                </div>
            </div>
            <div class="footer__wrapper wrapper">
                <div class="footer__left">
                    <nav class="footer__nav">
                        <ul class="liste-style-none footer__list">
                            <li class="footer__item">{{ menu_1 }}</li>
                            <li class="footer__item">{{ menu_2 }}</li>
                            <li class="footer__item">{{ menu_3 }}</li>
                            <li class="footer__item">{{ menu_4 }}</li>
                            <li class="footer__item">{{ menu_5 }}</li>
                        </ul>
                    </nav>
                </div>
                <a href="" class="footer__button">{{ button }}</a>
                <div class="footer__right">
                    <div class="footer__subscribe subscribe">
                        <p class="subscribe__title">{{ send }}</p>
                        <div class="subscribe__container">
                            <form action="" class="subscribe__form">
                                <input class="subscribe__input" type="email" id="email" name="email" required
                                    placeholder=" ">
                                <label for="email" class="subscribe__label">Email</label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__absolute container">
                <div class="footer__bottom">
                    <p class="footer__text footer__policy">
                        {{ policy }}
                    </p>
                    <p class="footer__top" @click="toTop">To Top</p>
                </div>
            </div>
        </div>
    </footer>
</template>
  
<script>
export default {
    name: 'HelloWorld',
    props: {
        name: String,
        about: String,
        menu_1: String,
        menu_2: String,
        menu_3: String,
        menu_4: String,
        menu_5: String,
        button: String,
        send: String,
        policy: String,
        toTop: String
    },
    data() {
        return {
            footerMenuList: [
                { name: this.menu_1 },
                { name: this.menu_2 },
                { name: this.menu_3 },
                { name: this.menu_4 },
                { name: this.menu_5 }
            ]
        }
    },
    // mounted() {
    //     this.toTop();
    // },
    methods: {
        // eslint-disable-next-line vue/no-dupe-keys
        toTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
    }
}
</script>