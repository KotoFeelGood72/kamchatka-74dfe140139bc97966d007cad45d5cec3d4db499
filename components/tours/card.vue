<template>
    <div class="mod-grid-3">
        <nuxt-link
            ref="tours"
            :to="$i18n.locale === 'en' ? '/tours/' + tour.slug + '/' : '/tours/' + tour.slug + '/'"
            class="tours__item"
            v-for="(tour, index) in data" :key="'tour-' + index"
            >
            <img-com :img="tour.img" classImg="tours__item-img"/>
            <img-com class="hover" :img="tour.additionalImg" classImg="tours__item-img hover"/>
            <span v-if="tour.name" class="tours__item-title" v-html="tour.name"/>
            <div v-if="tour.preview_text" class="tour_trigger__preview"><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.25909 11.6021C3.94254 8.32689 6.79437 6 10 6C13.2057 6 16.0574 8.32688 16.7409 11.6021C16.7974 11.8725 17.0622 12.0459 17.3325 11.9895C17.6029 11.933 17.7763 11.6682 17.7199 11.3979C16.9425 7.67312 13.6934 5 10 5C6.3066 5 3.05742 7.67311 2.28017 11.3979C2.22377 11.6682 2.39718 11.933 2.6675 11.9895C2.93782 12.0459 3.20268 11.8725 3.25909 11.6021Z" fill="#fff"/><path d="M10 8C8.067 8 6.5 9.567 6.5 11.5C6.5 13.433 8.067 15 10 15C11.933 15 13.5 13.433 13.5 11.5C13.5 9.567 11.933 8 10 8ZM7.5 11.5C7.5 10.1193 8.61929 9 10 9C11.3807 9 12.5 10.1193 12.5 11.5C12.5 12.8807 11.3807 14 10 14C8.61929 14 7.5 12.8807 7.5 11.5Z" fill="#fff"/></svg></div>
            <div v-if="tour.preview_text" class="tours_preview animate_preview">
                <span v-if="tour.preview_text" class="tours__item-preview animate_preview" v-html="tour.preview_text"/>
                <p>Подробнее</p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>

export default {
    name: 'ToursComponent',
    props: ['columns', 'data'],
    computed: {
        // classWrapper: function() {
        //     // Если надо что бы на главной было в 4 ряда
        //     // return this.columns === '4' ? 'home-section' : '';
        //     return this.columns === '4' ? '' : '';
        // },
        // classColumn: function() {
        //     // Если надо что бы на главной было в 4 ряда
        //     // return this.columns === '4' ? 'col-lg-3 col-md-4' : 'col-lg-4';
        //     return this.columns === '4' ? 'col-lg-4 col-md-4' : 'col-lg-4';
        // }
    },
    methods: {
        highlight() {
            const boundary = window.innerHeight / 2;
            // highlight(this.$refs.tourCreate.$el);
            this.$refs.tours.forEach(({$el}) => {
                highlight($el);
            });
            function highlight($el) {
                const rect = $el.getBoundingClientRect();
                const delta = (rect.top + rect.height / 2) / boundary
                $el.classList.remove('hover');
                if (window.matchMedia("(max-width: 1024px)").matches) {
                    if (delta < 1.2 && delta > 0.8) {
                        $el.classList.add('hover');
                    }
                }
            }
        }
    },
    created() {
        if(process.client) {
            window.addEventListener('scroll', this.highlight)
        }
    },
    destroyed() {
        window.removeEventListener('scroll', this.highlight)
    }
};


</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixins";
@import "~@/assets/scss/config";


.tour_trigger__preview {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 3;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    @include respond-to(md) {
        display: none;
    }
    svg {
        width: 40px;
        height: 40px;
        opacity: .1;
    }
    &:hover + .tours_preview {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, 0);
        pointer-events: all;
        @include respond-to(md) {
            transform: none;
        }
    }
}
.tours_preview {
    pointer-events: none;
    @include respond-to(sm) {
        pointer-events: all;
    }
    &:hover {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, 0);
        pointer-events: all;
        @include respond-to(md) {
            transform: none;
        }
    }
}
.tours_preview {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 40px);
    width: 100%;
    z-index: 11;
    background: rgb(28,30,36);
    background: linear-gradient(180deg, rgba(28,30,36,0.7455357142857143) 0%, rgba(28,30,36,1) 94%);
    padding: 40px 20px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    opacity: 0;
    visibility: visible;
    transition: all .2s ease;
    flex-direction: column;
    p {
        color: #1dcfff;
        // font-size: 14px;
        display: block;
        margin-top: 10px;
        @include respond-to(md) {
            position: absolute;
            bottom: -25px;
            margin-top: 0;
            font-size: 14px;
            //left: 50%;
            //transform: translateX(0%);
        }
        &:hover {
            color: #fff;
        }
    }
    @include respond-to(md) {
        //position: static;
        bottom: 40px;
        width: 100%;
        left: 0;
        transform: none;
        opacity: 1;
        visibility: visible;
        background: transparent;
        padding: 0 20px;
        height: auto;
        justify-content: center;

    }
}

.tours__item-preview {
    max-height: 100%;
    overflow-y: auto;
    color: rgba(255, 255, 255, 0.88);
    padding-right: 30px;
    opacity: .7;
    @include respond-to(md) {
        padding-right: 0;
        font-size: 14px;
        height: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        height: 120px;
        align-items: flex-start;
        display: flex;
    }
}
.tours__item {
    padding-left: 0;
    padding-right: 0;
    position: relative;
    overflow: hidden;
    max-height: 430px;
    height: 100%;
    @include respond-to(md) {
        height: 390px;
        //margin-bottom: 30px;
        //text-align: center;
        display: block;
    }
    .img__container {
        height: 100%;
        @include respond-to(sm) {
            //height: auto;
        }
        /deep/img {
            object-fit: contain;
            @include respond-to(md) {
                height: 200px;
            }
        }
    }
    &:nth-child(odd) {
        background-color: color(grayBlue);
    }
    &:nth-child(even) {
        background-color: color(granite);
    }
    &:hover, &.hover {
        .tours__item-title {
            @include respond-to(md) {
                opacity: 1;
            }
        }
        /deep/.img__container {
           display: none;
           &.hover {
               display: inline-flex;
           }
        }
        .tours__item-img {
           display: none;
        }
    }
}

.tours__item-preview::-webkit-scrollbar-track {
    background-color: rgba(14, 18, 26, 0.56);
}
.tours__item-preview::-webkit-scrollbar {
    width: 3px;
    background-color: rgba(14, 18, 26, 0.56);
}
.tours__item-preview::-webkit-scrollbar-thumb {
    background-color: #1dcfff;
}


.tours__item-img {
    display: block;
    width: 100%;
    height: 100%;
    transition: all .2s ease-out;
    will-change: transform;
    object-fit: contain;
}


.tours__item-title {
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    bottom: 20px;
    left: 20px;
    right: 20px;
    z-index: 2;
    color: color(marengo);
    text-align: center;
    display: block;
    text-decoration: none;
    @include respond-to(lg) {
        font-size: 18px;
        text-align: left;
    }
    @include respond-to(md) {
        font-size: 16px;
        bottom: 170px
    }
    @include respond-to(sm) {
        font-size: 22px;
        //position: static;
        opacity: .7;
        color: #fff;
        bottom: 170px;
    }
}




@include respond-to-min(md) {
    .home-section .tours__item {
        height: calc(33.33vh - 33.33px);
        @include respond-to(sm) {
            height: auto;
        }
        &:nth-child(8n-3), &:nth-child(8n-1) {
            background-color: color(granite);
        }
        &:nth-child(8n-2), &:nth-child(8n) {
            background-color: color(grayBlue);
        }
    }
}

// @media screen and (min-width:0\0) and (min-resolution: +72dpi) {
//     // IE9+ CSS
//     .tours__item-img {
//         opacity: .1;
//     }
//     .tours__item:hover {
//         .tours__item-img {
//             opacity: 1;
//         }
//     }
// }

// New style tours

.mod-grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    background-color: #21232a;

    @include respond-to(md) {
        grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    }

    @include respond-to(sm) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
}

</style>
