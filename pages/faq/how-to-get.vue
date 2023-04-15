<template>
    <div class="faq-content">
        <FaqMenu/>
        <div v-if="data.preview" class="container--middle page-content text--small">
            <Heading tag="p" color="granite" size="sm" fw="600" underline="bottom">{{data.preview.heading}}</Heading>
            <div v-if="data.preview.headingText" v-html="data.preview.headingText"/>
            <contentImage v-if="data.preview.image" width="fullwidth" :data="data.preview.image" isBack="true"/>
            <Heading v-if="data.preview.textBlue" color="blue" tag="div" size="xs" fw="600">{{data.preview.textBlue}}</Heading>
            <Heading v-if="data.preview.headingSecond">{{data.preview.headingSecond}}</Heading>
            <div v-if="data.preview.headingSecondText" v-html="data.preview.headingSecondText"/>
            <div class="display-flex-number">
                <div class="display-flex-number__item">
                    <h2 data-v-037ab6d0="" class="heading heading--color-bluekm heading--size-xl">6773<small data-v-037ab6d0="">км</small></h2>
                    <h2 data-v-037ab6d0="" class="how-to-get__flight-types-desc heading heading--color-bluekm heading--size-xs heading--fw-600">Расстояние от Москвы<br>
                    до Петропавловска-Камчатского</h2>
                </div>
            </div>
            <div class="how-to-get__flight-types" v-for="(flight,index) in data.flightTypes" :key="'flight-' + index">
                <Divider v-if="flight.name" :type="flight.imageClass" container="middle" align="right">
                    <Heading>{{flight.name}}</Heading>
                </Divider>
                <div v-for="(direction, index) in flight.flightDirections" :key="'direction-' + index">
                    <Heading  v-if="direction.name" color="bluekm" size="xl"><span class="animate-counter">{{ direction.name }}</span><small>{{ direction.unit }}</small></Heading>
                    <Heading class="how-to-get__flight-types-desc" v-if="direction.textBlue" color="bluekm" size="xs" fw="600">{{ direction.textBlue }}</Heading>
                    <Heading v-if="direction.textBlack" tag="p" size="xs" fw="600" color="granite">{{ direction.textBlack }}</Heading>
                    <p v-for="(air, index) in direction.airlines" :key="'air-' + index" v-html="air"/>

                    <Heading v-if="direction.important.length" color="bluekm">Важно!</Heading>
                    <p v-for="(important, index) in direction.important" :key="'important-' + index" v-html="important"/>

                </div>
                <Heading color="bluekm" size="sm" fw="600">{{ flight.bottomText }}</Heading>
            </div>
            <Heading>{{ data.footer.heading }}</Heading>
            <div v-html="data.footer.text"/>
        </div>
    </div>
</template>

<script>
import FaqMenu from '../../components/faqMenu/faqMenu';
import Heading from '../../components/content/heading';
import ContentImage from '../../components/images/contentImage';
import Divider from '../../components/content/divider';
import { fetchData } from '~/utils/fetchData';
import seoHead from '../../mixins/seo-head';
import $ from 'jquery';
export default {
    name: 'howToGet',
		mixins: [seoHead],
    components: {
        FaqMenu,
        ContentImage,
        Divider,
        Heading
    },
    data() {
        return {
            data: {},
            seo: ''
        };
    },
		async asyncData(context) {
			return fetchData('how-to-get', context);
		},
    created() {
        let breadCrumbs = [
            {name: 'breadCrumbs.faqHowToGet'}
        ];
        this.$store.dispatch('changeBreadcrumbs', breadCrumbs);
    },



};
</script>
<style lang="scss" scoped>
    @import '~assets/scss/_config.scss';
    @import '~assets/scss/_mixins.scss';
    .how-to-get__flight-types {
        &-desc {
            margin-top: 10px!important;
        }
    }

    .faq-content {
        @include respond-to(md) {
            background-image: none;
        }
    }

    .page-content {
        padding: 0;

        & > div {
            font-family: 'Montserrat';
            font-weight: normal;
            line-height: 1.5;
            @include respond-to(md) {
                font-size: 16px;
                line-height: 1.5;
            }

            @include respond-to(sm) {
                font-size: 14px;
                line-height: 1.5;
            }
        }
    }

    /deep/ p {
        line-height: 1.5;
        @include respond-to(md) {
            font-size: 16px;
            line-height: 1.5;
        }

        @include respond-to(sm) {
            font-size: 14px;
            line-height: 1.5;
        }
    }

    /deep/.heading {
        font-family: 'Mpluse1p';
        font-weight: 800;
        font-size: 50px;
        line-height: 1.5;
        margin-top: 80px;
        margin-bottom: 24px;

        @include respond-to(lg) {
            font-size: 40px;
            margin-top: 50px;
            margin-bottom: 15px;
        }

        @include respond-to(md) {
            font-size: 30px;
            margin-top: 30px;
            margin-bottom: 15px;
        }

        @include respond-to(sm) {
            font-size: 26px;
            margin-top: 26px;
            margin-bottom: 10px;
        }

        &--color-bluekm {
            font-weight: bold;
            font-size: 40px;
            line-height: 1.5;
            max-width: 85%;
            @include respond-to(sm) {
                font-size: 30px;
                line-height: 1.5;
            }
            &.heading--fw-600 {
                font-weight: 500;
                @include respond-to(lg) {
                    font-size: 30px;
                    line-height: 1.5;
                    max-width: 65%;
                }
                @include respond-to(sm) {
                    font-size: 16px;
                    line-height: 1.5;
                    max-width: 100%;
                }
            }
        }
    }

    /deep/ .heading--color-blue p {
        font-size: 26px;
        line-height: 1.5;
        font-weight: 500;

        @include respond-to(lg) {
            font-size: 18px;
            line-height: 1.5;
        }

        @include respond-to(sm) {
            font-size: 14px;
            line-height: 1.5;
        }
    }

    /deep/ .content-image {
        margin-bottom: 70px;

        @include respond-to(md) {
            margin: 15px 0;
        }

        @include respond-to(sm) {
            margin: 30px 0;
        }
    }

    /deep/.page-content > .heading:first-child {
        font-size: 36px;
        line-height: 1.5;
        font-weight:500;

        @include respond-to(lg) {
            font-size: 28px;
            line-height: 1.5;
            margin-top: 60px;
            margin-bottom: 0;
        }

        @include respond-to(md) {
            font-size: 24px;
            line-height: 1.5;
            margin-top: 40px;
        }

        @include respond-to(sm) {
            font-size: 18px;
            line-height: 1.5;
            margin-top: 24px;
        }

        &:after {
            margin: 30px 0;

            @include respond-to(lg) {
                margin: 20px 0;
            }

            @include respond-to(sm) {
                margin: 16px 0;
            }
        }
    }

    /deep/ .content-divider {

        @include respond-to(md) {
            margin: 40px auto;
            width: 120%;
            transform: initial;
        }

        @include respond-to(sm) {
            margin: 20px auto;
            background-size: contain;
            background-position-x: left;
            background-position-y: top;
            left: -50px;
            position: relative;
            width: 120vw;
            height: 235px;
            margin-bottom: 30px;
        }

        .container--middle {

            @include respond-to(lg) {
                padding: 0;
            }
        }

        .heading {

            @include respond-to(md) {
                margin-top: 80px;
            }

            @include respond-to(sm) {
                margin-top: 200px;
            }
        }

        .col-8 {
            flex: 0 0 65%;
            max-width: 65%;

            @include respond-to(sm) {
                width: 100%;
                max-width: 100%;
                margin-left: 0;
                flex: 1;
            }
        }
        &--double {
            @include respond-to(lg) {
                background-size: 35% 100%;
                min-height: 10em;
                .container--middle {
                    padding-top: 30px;
                }
            }

            @include respond-to(md) {
                background-size: 40% 100%;
                min-height: 8em;
                .container--middle {
                    padding-top: 0;
                    h2 {
                        margin-top: 50px;
                    }
                }
            }

            @include respond-to(sm) {
                background-size: 33% 100%;
                min-height: 3em;
                background-repeat: repeat;
                margin-top: 0;
                min-width: 100vw;
                .container--middle {
                    padding-top: 0;
                    padding-bottom: 0;
                    margin-bottom: 0;
                    margin-left: 50px;
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    flex-direction: column;
                    h2 {
                        margin-bottom: 0;
                    }
                }
            }

            @include respond-to(xs) {
                background-size: 33% 100%;
                min-height: 3em;
                background-repeat: repeat;
                margin-top: 0;
                min-width: 100vw;
                margin-left: 0;
                .container--middle {
                    padding-top: 0;
                    padding-bottom: 0;
                    margin-bottom: 0;
                    margin-left: 50px;
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    flex-direction: column;
                    h2 {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }

    /deep/ .display-flex-number {
        display: none;
    }

    .how-to-get__flight-types > div {
        & > .heading.heading--color-bluekm.heading--size-xl {
            font-size: 150px;
            line-height: 1.5;
            font-weight: 800;
            font-family: 'Mpluse1p';
            margin-bottom: -20px;

            @include respond-to(lg) {
                font-size: 120px;
                margin-top: 80px;
            }

            @include respond-to(md) {
                font-size: 90px;
                font-weight: 800;
                margin-bottom: -10px;
            }

            @include respond-to(sm) {
                font-size: 50px;
            }
        }

        & > .how-to-get__flight-types-desc.heading.heading--color-bluekm.heading--size-xs.heading--fw-600 {
            font-weight: 500;
            font-size: 26px;
            line-height: 1.5;

            @include respond-to(md) {
                font-size: 24px;
                line-height: 1.5;
            }

            @include respond-to(sm) {
                font-size: 16px;
                line-height: 1.5;
            }
        }

        & > .heading.heading--color-granite.heading--size-xs.heading--fw-600 {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
            line-height: 1.5;
            margin-top: 40px;

            @include respond-to(lg) {
                font-size: 18px;
                line-height: 1.5;
                margin-top: 20px;
            }

            @include respond-to(md) {
                font-size: 16px;
                line-height: 1.5;
                margin-top: 0;
            }

            @include respond-to(sm) {
                font-size: 14px;
                line-height: 1.5;
            }
        }
    }

    /deep/.page-content > .heading:last-child {
        margin-top:192px;
    }

    .container--middle {

        @include respond-to(lg) {
            max-width: initial !important;
            width: 1020px;
            padding: 0;
        }

        @include respond-to(md) {
            width: 650px;
        }

        @include respond-to(sm) {
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 70px;
        }
    }

    /deep/.omg__container {

        @include respond-to(sm) {
            height: 375px;
        }
    }

    /deep/ .page-content {
        padding-bottom: 200px;

        @include respond-to(lg) {
            padding-top: 0;
            padding-bottom: 110px;
        }

        @include respond-to(sm) {
            padding-top: 0;
            padding-bottom: 70px;
        }
    }
</style>
