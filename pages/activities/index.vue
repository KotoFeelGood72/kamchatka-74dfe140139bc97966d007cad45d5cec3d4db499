<template>
    <div v-if="data" class="activities__main-body">
        <parallax :layers="layers" />
        <PageHeader class="header__padding activity__header">{{data.intro.bannerText}}</PageHeader>
        <div class="activities__wrap">
            <div class="container--middle-tour page-content text--small">
                <div v-if="data.intro && data.intro.introText" v-html="data.intro.introText" class="activity-all__info text--small vlog"/>
                <div v-for="(item, index) in data.activities" :key="'activity-' + index">
                   <nuxt-link :to="'/activities/' + item.slug + '/'">
                        <Heading tag="h1" v-if="item.name" color="gray" size="lg" class="activities__mainTitle">{{ item.name }}</Heading>
                   </nuxt-link>
                   <nuxt-link style="color:#2a2e39" :to="'/activities/' + item.slug + '/'">
                        <div class="vlog subtitling_vlog" v-if="item.text" v-html="item.text"/>
                   </nuxt-link>
                    <Heading  color="blue" tag="p" size="md" fw="600" class="activities__link_cont">
                        <nuxt-link class="border-b activities__link" :to="'/activities/' + item.slug + '/'">{{item.activityCount}} активностей</nuxt-link>
                    </Heading>
                    <videoEmbed isContainer="true" v-if="item.video" :url="item.video" :data="item.img"/>
                    <ContentImage  isBack="true" v-if="item.img && !item.video" :data="item.img"/>
                </div>
                <Heading color="blue" tag="p" size="md" fw="600" align="center"><a class="border-b activities__link application-link" @click="changeOpenFeedback">Оставить заявку</a></Heading>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '../../components/content/pageHeader';
import VideoEmbed from '../../components/srcVideo/videoEmbed';
import Heading from '../../components/content/heading';
import ContentImage from '../../components/images/contentImage';
import parallax from '../../components/parallax/index';
import seoHead from "@/mixins/seo-head";
import { fetchData } from '~/utils/fetchData';

export default {
    name: 'activityAll',
		mixins: [seoHead],
    components: {
        ContentImage,
        Heading,
        VideoEmbed,
        PageHeader,
        parallax
    },
    data() {
        return {
            data: '',
            seo: '',
            layers: [
                {
                strength: .25,
                background: {
                    image: 'url("/parallax/activities/1.png")'
                }
                },
                {
                strength: .5,
                background: {
                    image: 'url("/parallax/activities/2.png")',
                    position: 'bottom 0 center'
                }
                },
                {
                strength: .66,
                background: {
                    image: 'url("/parallax/activities/3.png")'
                }
                },
                {
                strength: .77,
                background: {
                    image: 'url("/parallax/activities/4.png")'
                }
                },
                {
                strength: .91,
                background: {
                    image: 'url("/parallax/activities/5.png")'
                }
                }
            ]
        };
    },
    methods: {
        changeOpenFeedback() {
            this.$store.dispatch('changeIsShowFeedback', !this.$store.getters['getIsShowFeedback']());
        }
    },
		async asyncData(context) {
			return fetchData('activities', context);
		},
    created() {

        let name = '';
        if (this.data && this.data.intro && this.data.intro.bannerText) {
            name = this.data.intro.bannerText;
        }
        let breadCrumbs = [
            {name}
        ];
        this.$store.dispatch('changeBreadcrumbs', breadCrumbs);
    },

};
</script>

<style lang="scss" scoped>
    @import "~@/assets/scss/mixins";
    @import "~@/assets/scss/config";
    .page-header {
        position: relative;
        min-height: calc(100vh - 100px);
        overflow: hidden;
        display: flex;
        align-items: center;
        .img__container {
            position: absolute;
            height: 100%;
            top: 0;
        }
        & > * {
            position: relative;
        }
    }

    .page-header__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center bottom;
    }
    /deep/ .activity-all__info {
        & > h2 {
            margin-top: 1.6em;
            margin-bottom: .8em;
            font-weight: 800;
            font-size: 50px;
            line-height: 1.5;
            color: #163e97;
            @include respond-to(lg) {
                font-size: 40px;
                line-height: 1.5;
            }
            @include respond-to(sm) {
                font-size: 30px;
                line-height: 1.5;
            }
            @include respond-to(xs) {
                font-size: 26px;
                line-height: 1.5;
            }
        }
        a {
            text-decoration: underline;
        }
    }
    .subtitling_vlog{
        font-family: "Montserrat";
        font-weight: 400;
        color: #2a2e39;
        line-height: 1.5;
    }
    .activities__mainTitle {
        margin-top: 1.5em;
        margin-bottom: .5em;
        text-decoration: underline;
        line-height: 1.5;
        // opacity: 0;
    }
    .activities__link {
        font-family: 'Mpluse1p';
        margin-top: 1.4em;
        line-height: 1.5;
        margin-bottom: 5px;
        font-weight: 500;
        display: inline-block;
        &_cont {
            margin-bottom: 0;
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
    .content-image, .video-embed.video-is-container {
        margin-top: 30px;
        @include respond-to(md) {
            margin-top: 20px;
        }
    }
    .activities__main-body {
        background-image: url('~assets/img/activity/gora_activity bg.svg');
        background-color: #FBFBFB;
        background-position-y: 16%;
        background-size: contain;
        background-repeat: no-repeat;
        @include respond-to(sm) {
            /deep/ #parallax .keyart_layer{
                background-position: -100px center;
            }
        }
    }
    .application-link {
        margin-top: 2.5em;
    }
    .activities__wrap {
        background: #fbfbfb;
        position: relative;
    }
    .page-header {
        position: absolute;
        top: 0;
        left: 8px;
        right: 0;
        @include respond-to(md) {
            left: 0;
            top: -50px;
        }
        @include respond-to(sm) {
            left: 25px;
            top: 0;
        }
        /deep/ .container {
            margin:  0 auto;
            padding: 0;
        }
    }
</style>
