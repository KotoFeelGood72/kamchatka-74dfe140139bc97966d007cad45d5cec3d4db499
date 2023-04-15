<template>
    <div class="social-icons" :class="classPage">
        <a v-for="(item, index) in social.socials" :key="'social-' + index"
           class="social-icons__item"
           target="_blank"
           rel="nofollow"
           :href="item.url"
           :title="item.titleKey"
           :class="'icon-' + item.icon"/>
    </div>
</template>
<script>
import social from '../components/navigation/social';
export default {
    name: 'Socials',
    props: ['classPage'],
    data() {
        return {
					social,
        };
    },
};
</script>

<style lang="scss">
    @import "~@/assets/scss/config";
    @import "~@/assets/scss/mixins";

    .social-icons {
        font-size: 60px;
        margin: 42px 0 20px;
        display: flex;
        justify-content: space-between;
        max-width: 436px;
        @include respond-to(lg) {
            max-width: 354px;
        }
        @include respond-to(md) {
            max-width: 285px;
        }


        /*.icon-youtube {
            display: inline-block;
            background-image: url('~assets/img/menu/icons/youtube.svg');
            vertical-align: text-top;
            background-repeat: no-repeat;
            background-size: cover;
            width: 60px;
            height: 60px;
            &:before {
                content: '';
            }

            &:hover {
                background-image: url('~assets/img/menu/icons/hover_svg/youtube.svg');
            }
        }*/
        .icon-new-york-times {
            display: inline-block;
            background-image: url('~assets/img/menu/icons/new-york-times.svg');
            background-repeat: no-repeat;
            background-size: cover;
            width: 60px;
            height: 60px;
            &:before {
                content: '';
            }
            &:hover {
                background-image: url('~assets/img/menu/icons/hover_svg/new-york-times.svg');
            }
        }
    }
    .social-icons__item {
        text-decoration: none;
        color: #fff;
        vertical-align: middle;
        margin: 0;
        position: relative;

       /* &.icon-youtube {
            background-image: url('~assets/img/menu/icons/youtube.svg');
            &:hover {
                background-image: url('~assets/img/menu/icons/hover_svg/youtube.svg');
            }
        }*/
    }
    /*.home-footer__row {
        .social-icons__item {
            &.icon-youtube {
                background-image: url('~assets/img/menu/icons/youtube-white.svg');
            }
        }
    }*/

    @include respond-to(lg) {
        .social-icons {
            font-size: 45px;

            .icon-youtube,
            .icon-new-york-times {
                 width: 45px;
                 height: 45px;
             }
        }

    }

    @include respond-to(md) {
        .social-icons {
            font-size: 35px;

            .icon-youtube,
            .icon-new-york-times {
                width: 35px;
                height: 35px;
            }
        }
    }

    .header__menu-socials {
        margin-top: 50px;
        .social-icons__item {
            color: #43495C;
            &:hover {
                color: #1DCFFF;
            }
        }
    }

</style>
