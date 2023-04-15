<template>
    <div class="video-embed">
        <a class="video-embed__link" :href="url + '&autoplay=1'" data-fancybox>
            <img-com :img="data" classImg="video-embed__img"/>
        </a>
    </div>
</template>

<script>
export default {
    name: 'videoEmbed',
    props: ['url', 'data']
};
</script>

<style lang="scss" scoped>

    @import "~@/assets/scss/mixins";
    @import "~@/assets/scss/config";

    .video-embed {
        position: relative;
    }

    .video-embed.video-is-container {
        height: 100%;
        margin: 40px 0;
        img {
            height: 100%;
            object-fit: cover;
        }
    }

    .video-embed__link {
        display: block;
        position: relative;

        &::before {
            content: '\e908';
            font-family: 'icomoon';
            font-size: 35px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: .1em;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: rgba(#FBFBFB, .2);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>
