// eslint-disable-next-line vue/valid-template-root
<template>
    <section class="gallery__row gallery__row--main">
        <div class="gallery__container container">
            <div class="gallery__wrapper wrapper">
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-1-image-1@480.avif 480w, ../assets/layout/img/row-1-image-1@768.avif 768w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-1-image-1@480.webp 480w, ../assets/layout/img/row-1-image-1@768.webp 768w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-1-image-1@768.jpg" width="1062"
                            height="1084" alt="Antanas Sutkus - girl with glasses">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-1-image-2@320.avif 320w, ../assets/layout/img/row-1-image-2@480.avif 480w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-1-image-2@320.webp 320w, ../assets/layout/img/row-1-image-2@480.webp 480w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-1-image-2@480.jpg" width="864"
                            height="1120"
                            alt="Antanas Sutkus - a young man with glasses and a suspicious policeman from behind">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-1-image-3@320.avif 320w, ../assets/layout/img/row-1-image-3@480.avif 480w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-1-image-3@320.webp 320w, ../assets/layout/img/row-1-image-3@480.webp 480w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-1-image-3@480.jpg" width="486"
                            height="752" alt="Antanas Sutkus - news on the street">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt>{{ dt1 }}</dt>
                            <dd>1960</dd>
                        </dl>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="gallery__row gallery__row--submain gallery__row--right">
        <div class="gallery__container container">
            <div class="gallery__wrapper wrapper">
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-2-image-1@480.avif 480w, ../assets/layout/img/row-2-image-1@768.avif 768w, ../assets/layout/img/row-2-image-1@1440.avif 1440w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-2-image-1@480.webp 480w, ../assets/layout/img/row-2-image-1@768.webp 768w, ../assets/layout/img/row-2-image-1@1440.webp 1440w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-2-image-1@1440.jpg" width="1003"
                            height="998" alt="Antanas Sutkus - Song festival - dance day" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt>{{ dt2 }}</dt>
                            <dd>1975 </dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-2-image-2@480.avif 480w, ../assets/layout/img/row-2-image-2@768.avif 768w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-2-image-2@480.webp 480w, ../assets/layout/img/row-2-image-2@768.webp 768w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-2-image-2@768.jpg" width="483"
                            height="651" alt="Antanas Sutkus - a stern man looking at the camera" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="gallery__row gallery__row--main">
        <div class="gallery__container container">
            <div class="gallery__wrapper wrapper">
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-3-image-1@480.avif 480w, ../assets/layout/img/row-3-image-1@768.avif 768w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-3-image-1@480.webp 480w, ../assets/layout/img/row-3-image-1@768.webp 768w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-3-image-1@768.jpg" width="1062"
                            height="1062" alt="Antanas Sutkus - The First Bikers" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt>{{ dt3 }}</dt>
                            <dd>1974</dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-3-image-2@320.avif 320w, ../assets/layout/img/row-3-image-2@768.avif 768w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-3-image-2@320.webp 320w, ../assets/layout/img/row-3-image-2@768.webp 768w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-3-image-2@768.jpg" width="432"
                            height="624" alt="Antanas Sutkus - a girl looks out from the balcony onto the road"
                            loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-3-image-3@320.avif 320w, ../assets/layout/img/row-3-image-3@480.avif 480w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-3-image-3@320.webp 320w, ../assets/layout/img/row-3-image-3@480.webp 480w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-3-image-3@480.jpg" width="486"
                            height="500" alt="Antanas Sutkus - two boys standing by a tree" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="gallery__row gallery__row--accent gallery__row--accent--small">
        <div class="gallery__container container">
            <div class="gallery__wrapper wrapper">
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-4@480.avif 480w, ../assets/layout/img/row-4@768.avif 768w, ../assets/layout/img/row-4@1200.avif 1200w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-4@480.webp 480w, ../assets/layout/img/row-4@768.webp 768w, ../assets/layout/img/row-4@1200.webp 1200w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-4@1200.jpg" width="800" height="1002"
                            alt="Antanas Sutkus - a boy carries a maple branch home" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dl>
                                <dt></dt>
                                <dd></dd>
                            </dl>
                        </dl>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="gallery__row gallery__row--main">
        <div class="gallery__container container">
            <div class="gallery__wrapper wrapper">
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-5-image-1@480.avif 480w, ../assets/layout/img/row-5-image-1@768.avif 768w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-5-image-1@480.webp 480w, ../assets/layout/img/row-5-image-1@768.webp 768w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-5-image-1@768.jpg" width="1400"
                            height="1655" alt="Antanas Sutkus - a boy in a hat with earflaps" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-5-image-2@320.avif 320w, ../assets/layout/img/row-5-image-2@480.avif 480w, ../assets/layout/img/row-5-image-2@768.avif 768w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-5-image-2@320.webp 320w, ../assets/layout/img/row-5-image-2@480.webp 480w, ../assets/layout/img/row-5-image-2@768.webp 768w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-5-image-2@768.jpg" width="870"
                            height="664" alt="Antanas Sutkus - grandmother in the basement window" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-5-image-3@320.avif 320w, ../assets/layout/img/row-5-image-3@480.avif 480w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-5-image-3@320.webp 320w, ../assets/layout/img/row-5-image-3@480.webp 480w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-5-image-3@480.jpg" width="834"
                            height="1458" alt="Antanas Sutkus - smiling girl at the table" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="gallery__row gallery__row--submain gallery__row--left">
        <div class="gallery__container container">
            <div class="gallery__wrapper wrapper">
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-6-image-1@320.avif 320w, ../assets/layout/img/row-6-image-1@480.avif 480w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-6-image-1@320.webp 320w, ../assets/layout/img/row-6-image-1@480.webp 480w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-6-image-1@480.jpg" width="784"
                            height="780" alt="Antanas Sutkus - soda machines" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-6-image-2@480.avif 480w, ../assets/layout/img/row-6-image-2@768.avif 768w, ../assets/layout/img/row-6-image-2@1400.avif 1400w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-6-image-2@480.webp 480w, ../assets/layout/img/row-6-image-2@768.webp 768w, ../assets/layout/img/row-6-image-2@1400.webp 1400w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-6-image-2@1400.jpg" width="1616"
                            height="1646" alt="Antanas Sutkus - a boy swimming in a basin" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt>{{ dt4 }}</dt>
                            <dd>1973</dd>
                        </dl>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="gallery__row gallery__row--main">
        <div class="gallery__container container">
            <div class="gallery__wrapper wrapper">
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-7-image-1@480.avif 480w, ../assets/layout/img/row-7-image-1@640.avif 640w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-7-image-1@480.webp 480w, ../assets/layout/img/row-7-image-1@640.webp 640w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-7-image-1@640.jpg" width="808"
                            height="627" alt="Antanas Sutkus - the hat of a girl riding a bicycle flies away"
                            loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-7-image-2@320.avif 320w, ../assets/layout/img/row-7-image-2@480.avif 480w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-7-image-2@320.webp 320w, ../assets/layout/img/row-7-image-2@480.webp 480w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-7-image-2@480.jpg" width="580"
                            height="572" alt="Antanas Sutkus - the guys stand by the boxes with tangerines from Morocco"
                            loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt>{{ dt5 }}</dt>
                            <dd>1975</dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-7-image-3@320.avif 320w, ../assets/layout/img/row-7-image-3@480.avif 480w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-7-image-3@320.webp 320w, ../assets/layout/img/row-7-image-3@480.webp 480w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-7-image-3@480.jpg" width="486"
                            height="500" alt="Antanas Sutkus - two boys standing by a tree" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="gallery__row gallery__row--accent gallery__row--accent--big">
        <div class="gallery__container container">
            <div class="gallery__wrapper">
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-8-image-1@480.avif 480w, ../assets/layout/img/row-8-image-1@768.avif 768w, ../assets/layout/img/row-8-image-1@1200.avif 1200w, ../assets/layout/img/row-8-image-1@1600.avif 1600w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-8-image-1@480.webp 480w, ../assets/layout/img/row-8-image-1@768.webp 768w, ../assets/layout/img/row-8-image-1@1200.webp 1200w, img/row-8-image-1@1600.webp 1600w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-8-image-1@1200.jpg" width="1350"
                            height="904" alt="Antanas Sutkus - winter geometry" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt>{{ dt6 }}</dt>
                            <dd>1962</dd>
                        </dl>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="gallery__row gallery__row--main">
        <div class="gallery__container container">
            <div class="gallery__wrapper wrapper">
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-9-image-1@480.avif 480w, ../assets/layout/img/row-9-image-1@768.avif 768w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-9-image-1@480.webp 480w, ../assets/layout/img/row-9-image-1@768.webp 768w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-9-image-1@768.jpg" width="977"
                            height="637" alt="Antanas Sutkus - young girl and child" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-9-image-2@320.avif 320w, ../assets/layout/img/row-9-image-2@480.avif 480w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-9-image-2@320.webp 320w, ../assets/layout/img/row-9-image-2@480.webp 480w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-9-image-2@480.jpg" width="535"
                            height="516" alt="Antanas Sutkus - accordionist walking down the street" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-9-image-3@320.avif 320w, ../assets/layout/img/row-9-image-3@480.avif 480w, ../assets/layout/img/row-9-image-3@768.avif 768w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-9-image-3@320.avif 320w, ../assets/layout/img/row-9-image-3@480.webp 480w, ../assets/layout/img/row-9-image-3@768.webp 768w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-9-image-3@768.jpg" width="771"
                            height="951" alt="Antanas Sutkus - smiling man and woman posing on the stairs" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="gallery__row gallery__row--submain gallery__row--right">
        <div class="gallery__container container">
            <div class="gallery__wrapper wrapper">
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-10-image-1@480.avif 480w, ../assets/layout/img/row-10-image-1@768.avif 768w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-10-image-1@480.webp 480w, ../assets/layout/img/row-10-image-1@768.webp 768w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-10-image-1@768.jpg" width="791"
                            height="829" alt="Antanas Sutkus - With father's bike" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt>{{ dt7 }}</dt>
                            <dd>1969</dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-10-image-2@320.avif 320w, ../assets/layout/img/row-10-image-2@480.avif 480w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-10-image-2@320.webp 320w, ../assets/layout/img/row-10-image-2@480.webp 480w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-10-image-2@480.jpg" width="504"
                            height="309" alt="Antanas Sutkus - man running for shelter in the rain" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt>{{ dt8 }}</dt>
                            <dd>1960</dd>
                        </dl>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="gallery__row gallery__row--main">
        <div class="gallery__container container">
            <div class="gallery__wrapper wrapper">
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-11-image-1@480.avif 480w, ../assets/layout/img/row-11-image-1@768.avif 768w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-11-image-1@480.webp 480w, ../assets/layout/img/row-11-image-1@768.webp 768w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-11-image-1@768.jpg" width="780"
                            height="843" alt="Antanas Sutkus - a pioneer looking at the camera" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt>{{ dt9 }}</dt>
                            <dd>1964</dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-11-image-2@320.avif 320w, ../assets/layout/img/row-11-image-2@480.avif 480w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-11-image-2@320.webp 320w, ../assets/layout/img/row-11-image-2@480.webp 480w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-11-image-2@480.jpg" width="514"
                            height="512" alt="Antanas Sutkus - two children huddle under an umbrella from the rain"
                            loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt></dt>
                            <dd></dd>
                        </dl>
                    </div>
                </article>
                <article class="gallery__item">
                    <picture>
                        <source
                            srcset="../assets/layout/img/row-11-image-3@320.avif 320w, ../assets/layout/img/row-11-image-3@480.avif 480w"
                            type="image/avif">
                        <source
                            srcset="../assets/layout/img/row-11-image-3@320.webp 320w, ../assets/layout/img/row-11-image-3@480.webp 480w"
                            type="image/webp">
                        <img class="gallery__image" src="../assets/layout/img/row-11-image-3@480.jpg" width="579"
                            height="585" alt="Antanas Sutkus - Summer in Salakas. Aukstaitija" loading="lazy">
                    </picture>
                    <div class="gallery__description">
                        <dl>
                            <dt>{{ dt10 }}</dt>
                            <dd>1978</dd>
                        </dl>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'GalleryItem',
    props: {
        dt1: String,
        dt2: String,
        dt3: String,
        dt4: String,
        dt5: String,
        dt6: String,
        dt7: String,
        dt8: String,
        dt9: String,
        dt10: String
    }
}
</script>