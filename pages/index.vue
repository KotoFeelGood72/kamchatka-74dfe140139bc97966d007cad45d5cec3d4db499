<template>
	<section>
			<div class="main-top-block">
				<src-video videoName="home-timelaps" classVideo="video-main-page"/>
				<page-header class="header__padding">
						<div v-html="data.mainBanner.title"></div>
						<h3 v-html="data.mainBanner.text"/>
				</page-header>
			</div>
			<div v-if="loadedTours">
				<tours critical :data="dataPage.tours"></tours>
			</div>
			<about-us-home :critical="true"/>
			<div v-if="dataPage.loadedActivities">
				<kam-slider :data="dataPage.dataActivities"/>
			</div>
			<contact-queue :critical="true" />
			<tripSlider/>
			<home-footer/>
	</section>
</template>

<script>
import { Api } from "../api/api";
import { mapGetters } from "vuex";
import { fetchData } from '~/utils/fetchData';

// Block main page

import srcVideo from "../components/srcVideo/srcVideo";
import PageHeader from "../components/content/pageHeaderMain";
import Tours from '../components/tours/card';
import AboutUsHome from '../sections/about-us';
import ContactQueue from '../components/ContactQueue/ContactQueue';
import HomeFooter from '../sections/footer';
import kamSlider from "../components/kam-slider/kam-slider";
import tripSlider from "../components/Advisor/slider";
import seoHead from "@/mixins/seo-head";

export default {
		mixins: [seoHead],
    computed: {
        ...mapGetters(["getRouterStatus", "SCREEN"]),
        isShowFeedback() {
            return this.$store.getters["getIsShowFeedback"]();
        },
        currentRouteName() {
            return this.$store.$i18n.loadedLanguages[0];
        },
        currentRoutePath() {
            return this.$route.path;
        }
    },
    name: "home",
    components: {
				srcVideo,
        PageHeader,
        Tours,
        AboutUsHome,
        ContactQueue,
        HomeFooter,
        tripSlider,
				kamSlider
    },
    data() {
        return {
            loadedTours: false,
						seo: null,
            dataPage: {
                loadedActivities: false,
                dataActivities: null,
                tours: null,
            },
            showMenu: false,
        };
    },
    methods: {
        clickLogo() {
            window.scrollTo(0, 0);
        },
        showMenuFunc() {
            this.showMenu = !this.showMenu;
        },
        isMobile() {
            return window.innerWidth < 768;
        },
        asyncActivities() {
            const lang = this.currentRouteName === 'ru' ? 'ru' : 'en';
            Api.get(`mainActivities?lang=${lang}&router=${this.currentRoutePath}`)
                .then((response) => {
                    if(response.status === 200) {
                        this.dataPage.dataActivities = response.data.data.activities
                        this.dataPage.loadedActivities = true;
                    }
                })
        },
        asyncTours() {
            const lang = this.currentRouteName === 'ru' ? 'ru' : 'en';
            Api.get(`mainTours?lang=${lang}&router=${this.currentRoutePath}`)
                .then((response) => {
                    if(response.status === 200) {
                        this.dataPage.tours = response.data.data.tours
                        this.loadedTours = true;
                    }
                })
        },
    },
		async asyncData(context) {
			return fetchData('main', context);
		},
    mounted() {
        this.asyncActivities();
        this.asyncTours();
    },
};
</script>

<style lang="scss">
@import "~@/assets/scss/mixins";
@import "~@/assets/scss/config";

.main-top-block {
    position: relative;
}

.info-slider {
    min-height: 100vh;
}

.section-grid {
    display: grid;
    grid-template-columns: 5fr 3fr 3fr 5fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
    "block-1 block-2 block-2 block-3"
    "block-1 block-2 block-2 block-6"
    "block-1 block-4 block-5 block-6";
    height: 100%;
    &.about-us {
        @include respond-to(md) {
            grid-template-areas:
        "block-1 block-1 block-1 block-3 block-3 block-3"
        "block-6 block-6 block-6 block-6 block-6 block-6"
        "block-4 block-4 block-5 block-5 block-2 block-2";
        }
        @include respond-to(sm) {
            grid-template-areas:
        "block-1"
        "block-3"
        "block-6"
        "block-4"
        "block-5"
        "block-2";
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        }
    }
    @include respond-to(lg) {
        grid-template-columns: 7fr 4.166666666666667fr 4.166666666666667fr 6fr;
    }
    @include respond-to(md) {
        grid-template-areas:
      "block-1 block-1 block-1 block-3 block-3 block-3"
      "block-2 block-2 block-2 block-2 block-2 block-2"
      "block-4 block-4 block-5 block-5 block-6 block-6";
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1.1fr 1.5fr 1fr;
    }
    @include respond-to(sm) {
        grid-template-areas:
      "block-1"
      "block-3"
      "block-2"
      "block-4"
      "block-5"
      "block-6";
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
}

.section-grid__item {
    position: relative;
		@include flex-start;
    flex-direction: column;
    text-align: center;
    padding: 30px 15%;
    overflow: hidden;
    @include respond-to(sm) {
        min-height: 300px;
    }
    &:nth-child(1) {
        grid-area: block-1;
    }
    &:nth-child(2) {
        grid-area: block-3;
        justify-content: center;
    }
    &:nth-child(3) {
        grid-area: block-2;
    }
    &:nth-child(4) {
        grid-area: block-4;
        justify-content: center;
    }
    &:nth-child(5) {
        grid-area: block-5;
        justify-content: center;
    }
    &:nth-child(6) {
        justify-content: center;
        grid-area: block-6;
    }
    & > div {
        z-index: 2;
        & > a {
            &::before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            }
        }
    }
}

.section-grid__title {
    font-size: 50px;
    font-weight: 900;
    line-height: 1.5;
    margin-top: 0.6em;
    margin-bottom: 0.6em;
    color: #fff;
    @include respond-to(lg) {
        font-size: 40px;
    }
    @include respond-to(md) {
        font-size: 30px;
    }
    a {
        color: #fff;
        text-decoration: none;
        display: block;
    }
}

.section-grid__title--sm {
    font-size: 40px;
    @include respond-to(lg) {
        font-size: 30px;
    }
    @include respond-to(sm) {
        font-size: 40px;
    }
}

.section-grid__item--bg {
    img {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

@include respond-to(sm) {
    .section-grid {
        height: auto;
    }
}


.page-header__title {
    h1 {
        font-size: 35px;
        font-weight: 900;
        line-height: 1.5;
        color: white;
        @include respond-to(xs) {
            font-size: 24px;
            line-height: 1.5;
        }
    }
}

.page-header__title h3 {
    font-size: 23px;
    font-weight: 900;
    line-height: 1.5;
    color: white;
    margin-top: 20px;
    @include respond-to(xs) {
        font-size: 14px;
        margin-top: 10px;
        line-height: 1.5;
    }
}

</style>
