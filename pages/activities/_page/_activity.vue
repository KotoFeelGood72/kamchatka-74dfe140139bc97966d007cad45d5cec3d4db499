<template>
    <div v-if="data" class="activity-location">
        <PageHeader class="activity-location__header" v-if="data.bannerImage" :data="data.bannerImage">{{ data.name }}</PageHeader>
        <dynamic v-if="data.content" :template="`<div class='text--small activity-location__content content-block'><div class='container--middle-tour '>` + activity.content + `</div></div>`"/>
        <div class="container activity-location__bottom">
            <Heading v-if="data.locations && data.locations.length" class="location-title" tag="h2">Локации</Heading>
            <grid v-if="data && data.locations && data.locations.length" :data="data.locations" urlParent="/locations/"/>
        </div>
    </div>
</template>

<script>
import PageHeader from '../../../components/content/pageHeader';
import Heading from "../../../components/content/heading";
import Dynamic from "../../../components/dynamic";
import Grid from "../../../components/grid/grid";
import seoHead from "@/mixins/seo-head";
import { fetchData } from '~/utils/fetchData';
import $ from 'jquery';
export default {
    name: 'activitySlug',
		mixins: [seoHead],
    components: {
        Grid,
        Dynamic,
        Heading,
        PageHeader,
    },
    data() {
        return {
            data: {},
            seo: '',

        };
    },
		async asyncData(context) {
			return fetchData('activity', context);
		},
    methods: {
        init() {
            Api.get(`activity/${this.$route.params.activity}?lang=${this.$i18n.locale}&router=${this.$route.path}`).then((response) => {
                this.seo = response.data.seo;
                this.activity = response.data.data;
                let breadCrumbs = [
                    {name: 'breadCrumbs.activities', link: '/activities'},
                    {name:this.activity.category.name, link: `/activities/${this.activity.category.slug}`},
                    {name: this.activity.name}
                ];
                this.$store.dispatch('changeBreadcrumbs', breadCrumbs);
            });
        },
        formatToPrice(value) {
            return `<h3> ${Number(value).toFixed(0)}</h1>`;
        }
    },
    watch: {
        '$route'() {
            this.init();
        }
    },
    created() {
        this.$store.commit('TRANSPARENT', true);
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/config";
@import "~assets/scss/mixins";

.activity-location {
    background-image: url('~assets/img/activity/gora_activity bg.svg');
    background-color: #FBFBFB;
    background-position-y: 56%;
    background-size: contain;
    background-repeat: no-repeat;
    padding-bottom: 100px;
    /*color: color(white);*/
    .location-title {
        /*color: #FBFBFB;*/
    }
    .lil_peep_Rip_prESS_F{
        color:red
    }
    .activity-location__header{
        /deep/ h1{
            color: color(white);
            font-size: 80px;
            line-height: 1.5;
            max-width: 950px;
            @include respond-to(lg) {
                font-size: 60px;
                line-height: 1.5;
                max-width: 450px;
            }
            @include respond-to(sm) {
                font-size: 40px;
                line-height: 1.5;
            }
        }
    }
    .page-header {
        position: relative;
    }
    /deep/.page-header {
        height: 100vh;
        &__title {
            @include respond-to(lg) {
                font-size: 80px;
                line-height: 1.5;
            }
            @include respond-to(md) {
                font-size: 60px;
                line-height: 1.5;
            }
            @include respond-to(sm) {
                font-size: 40px;
                line-height: 1.5;
            }
        }
    }
    /deep/.display-flex-number {
        max-width: 1460px;
        margin-top: 75px;
        @include respond-to(lg) {
            max-width: 950px;
        }
        @include respond-to(md) {
            margin-top: 32px;
        }
        &__item {
            min-width: 50%;
            padding-right: 25px;
            .heading--size-xl {
                margin-top: 25px;
                color: color(blueKM);
                @include respond-to(lg) {
                    font-size: 96px;
                    line-height: 1.5
                }
                @include respond-to(md) {
                    font-size: 72px;
                }
                @include respond-to(sm) {
                    font-size: 35px;
                    margin-top: 10px;
                }
            }
            .how-to-get__flight-types-desc {
                color: color(marengo);
                font-size: 34px;
                line-height: 1.5;
                margin-top: 15px;
                @include respond-to(lg) {
                    font-size: 34px;
                    line-height: 1.5;
                }
                @include respond-to(md) {
                    font-size: 24px;
                    margin-bottom: 1.3em;
                }
                @include respond-to(sm) {
                    font-size: 18px;
                }
            }
        }
    }
    .content-block {
        margin-top: 35px;
        @include respond-to(lg) {
            margin-top: 12px;
        }
        @include respond-to(md) {
            font-size: 16px;
            line-height: 1.5;
            margin-top: 22px;
        }
        @include respond-to(sm) {
            font-size: 14px;
            line-height: 1.5;
            margin-top: 44px;
        }
        /deep/p {
            font-family: 'Montserrat';
            font-weight: 400;
            font-size: 26px;
            line-height: 1.5;
            max-width: 1460px;
            @include respond-to(lg) {
                font-size: 18px;
                line-height: 1.5;
            }
            @include respond-to(md) {
                font-size: 16px;
                line-height: 1.5;
                margin: 0;
            }
            @include respond-to(sm) {
                font-size: 14px;
                line-height: 1.5;
            }
        }
        /deep/h1 {
            max-width: 1200px;
            line-height: 1.5;
            @include respond-to(lg) {
                padding-bottom: 12px;
            }
            @include respond-to(md) {
                font-size: 30px;
                line-height: 1.5;
                padding-top: 15px;
            }
            @include respond-to(sm) {
                font-size: 22px;
                line-height: 1.5;
                padding-bottom: 16px;
            }
        }
    }
    .activity-location__bottom {
        margin-top: 110px;
        @include respond-to(lg) {
            margin-top: 48px;
        }
        @include respond-to(sm) {
            padding: 0;
        }
        .location-title {
            font-size: 70px;
            line-height: 1.5;
            margin-bottom: 36px;
            @include respond-to(lg) {
                font-size: 40px;
                line-height: 1.5;
            }
            @include respond-to(md) {
                font-size: 30px;
                line-height: 1.5;
                margin-bottom: 25px;
            }
            @include respond-to(sm) {
                font-size: 22px;
                line-height: 1.5;
                padding-left: 25px;
            }
        }
    }
}
</style>
