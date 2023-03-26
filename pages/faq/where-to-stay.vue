<template>
    <div class="faq-content">
        <FaqMenu/>
        <div v-if="data" class="container--middle page-content text--small">

            <Heading
                tag="p"
                color="granite"
                v-if="data.intro && data.intro.title"
                size="sm"
                fw="600"
                underline="bottom" v-html="data.intro.title"/>

            <Heading tag="p" size="sm" color="blue" fw="600" v-if="data.intro && data.intro.text" v-html="data.intro.text"/>
            <div v-for="(place, index) in data.places" :key="'place' + index">
                <Heading v-if="place.title" color="blue" size="md" v-html="place.title"/>
                <p v-if="place.topText" v-html="place.topText"/>

                <div v-if="place.statisticTop && place.statisticTop.length" class="row">
                    <div v-for="(statisticTop, index) in place.statisticTop" :key="'statisticTop-' + index" class="col-sm-6">
                        <Heading v-if="statisticTop.value" color="bluekm" size="xl" margin="sm"><span class="animate-counter">{{ statisticTop.value }}</span><small>{{ statisticTop.small }}</small></Heading>
                        <Heading v-if="statisticTop.text" size="xs" fw="600" v-html="statisticTop.text"/>
                    </div>
                </div>

                <contentImage v-if="place.img" :data="place.img" isBack="true"/>

                <Heading v-if="place.statisticBottom && place.statisticBottom.value" color="bluekm" size="xl" margin="md"><span class="animate-counter">{{ place.statisticBottom.value }}</span><small>{{ place.statisticBottom.small }}</small></Heading>
                <Heading v-if="place.statisticBottom && place.statisticBottom.text" size="xs" fw="600" v-html="place.statisticBottom.text"/>

                <Heading v-if="place.showplaces" size="md">{{place.showplacesTitle}}</Heading>
                <div class="text-controllerfaq" v-if="place.showplaces" v-html="place.showplaces"/>

                <Heading v-if="place.infrastructure" size="md">{{place.infrastructureTitle}}</Heading>
                <div class="text-controllerfaq" v-if="place.infrastructure" v-html="place.infrastructure"/>

                <Divider v-if="place.divider" type="lightblue"/>
            </div>
        </div>
    </div>
</template>

<script>
import FaqMenu from '../../components/faqMenu/faqMenu';
import Heading from '../../components/content/heading';
import ContentImage from '../../components/content/contentImage';
import Divider from '../../components/content/divider';
import { fetchData } from '~/utils/fetchData';
import $ from 'jquery';

export default {
    name: 'howToGet',
    components: {
        FaqMenu,
        ContentImage,
        Divider,
        Heading
    },
    head () {
        return {
            title: this.seo ? this.seo.title : '',
            meta: [
                { hid: 'description', name: 'description', content: this.seo ? this.seo.description : '' },
                { hid: 'image', name: 'image', content: 'https://new.enjoykamchatka.ru/contacts-header.png'},
                { hid: 'og:title', name: 'og:title', content: this.seo ? this.seo.title : '' },
                { hid: 'og:description', name: 'og:description', content: this.seo ? this.seo.description : '' },
                { hid: 'og:image', name: 'og:image', content: 'https://new.enjoykamchatka.ru/contacts-header.png' }
            ]
        }
    },
    data() {
        return {
            data: '',
            seo: ''
        };
    },
		async asyncData(context) {
			return fetchData('where-to-stay', context);
		},
    created() {
        let breadCrumbs = [
            {name: 'breadCrumbs.faqStay'}
        ];
        this.$store.dispatch('changeBreadcrumbs', breadCrumbs);
    },
};
</script>

<style lang="scss" scoped>
    @import "~assets/scss/config";
    @import "~assets/scss/mixins";
    .text-controllerfaq{
        font-family: "Montserrat";
        font-weight: 400;
        line-height: 1.5;
    }
    .faq-content {
        @include respond-to(md) {
            background-image: none;
        }
    }

    .heading--size-lg {
        font-size: 80px;
        margin-top: 92px;
        margin-bottom: 20px;
        line-height: 1.5;
        @include respond-to(lg) {
            font-size: 60px;
            margin-top: 70px;
            margin-bottom: 10px;
        }
        @include respond-to(md) {
            font-size: 40px;
            margin-top: 35px;
            margin-bottom: 10px;
        }
        @include respond-to(sm) {
            font-size: 24px;
            margin-top: 27px;
            margin-bottom: 7px;
        }
    }

    .heading--size-sm {
        line-height: 1.5;
        @include respond-to(lg) {
            font-size: 28px;
        }
        @include respond-to(md) {
            font-size: 20px;
        }
        @include respond-to(sm) {
            font-size: 16px;
        }
    }

    .page-content > div:nth-child(6) .heading--size-lg {
        color: #1257dd;
        font-size: 50px;
        line-height: 1.5;
        @include respond-to(lg) {
            font-size: 40px;
        }
        @include respond-to(md) {
            font-size: 30px;
        }
        @include respond-to(sm) {
            font-size: 30px;
        }
    }

    .page-content {
        padding-top: 100px;
        @include respond-to(lg) {
            padding-top: 60px;
        }
        @include respond-to(md) {
            padding-top: 40px;
        }
        @include respond-to(sm) {
            padding-top: 25px;
        }
    }

    .heading--size-xl {
        line-height: 1.5;
        @include respond-to(lg) {
            font-size: 120px;
        }
        @include respond-to(md) {
            font-size: 90px;
        }
        @include respond-to(sm) {
            font-size: 50px;
        }
    }

    .heading--size-md {
        font-size: 60px;
        margin-top: 65px;
        margin-bottom: 25px;
        line-height: 1.5;
        @include respond-to(lg) {
            font-size: 40px;
            margin-top: 47px;
            margin-bottom: 14px;
        }
        @include respond-to(md) {
            font-size: 30px;
            margin-top: 27px;
            margin-bottom: 12px;
        }
        @include respond-to(sm) {
            font-size: 20px;
            margin-top: 23px;
            margin-bottom: 7px;
        }
    }

    .heading--size-xs {
        margin-top: 1em;
        margin-bottom: 2em;
        line-height: 1.5;
        @include respond-to(lg) {
            margin-top: .2em;
            margin-bottom: 1em;
        }
        @include respond-to(md) {
            font-size: 20px;
        }
        @include respond-to(sm) {
            font-size: 14px;
        }
    }

    .container--middle {
        @include respond-to(lg) {
            max-width: initial !important;
            width: 1020px;
            padding-left: 0;
            padding-right: 0;
        }

        @include respond-to(md) {
            width: 650px;
        }

        @include respond-to(sm) {
            max-width: 100% !important;
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    .heading--margin-md {
        margin-top: .5em;
    }

    .content-image {
        margin-bottom: 80px;
        margin-top: 40px;
        @include respond-to(lg) {
            margin-bottom: 70px;
            margin-top: 36px;
        }

        @include respond-to(md) {
            margin-bottom: 40px;
            margin-top: 34px;
        }

        @include respond-to(sm) {
            margin-bottom: 24px;
            margin-top: 18px;
        }
    }
    .content-image{
     /deep/.img__container {
        width: 100vw;
        margin-left: -50vw;
        left: 50%;
        position: relative;
        img {
          display: block;
        }
      }
    }
    .text--small {
        font-size: 26px;
        line-height: 1.5;
        @include respond-to(lg) {
            font-size: 18px;
            line-height: 1.5;
        }

        @include respond-to(md) {
            font-size: 16px;
            line-height: 1.5;
        }

        @include respond-to(sm) {
            font-size: 14px;
            line-height: 1.5;
        }
    }

    .content-divider {
        @include respond-to(md) {
            margin-top: 1em;
            margin-bottom: -1em;
        }
        @include respond-to(sm) {
            margin-top: .5em;
            margin-bottom: -1em;
            background-size: 50%;
        }
    }
</style>
