<template>
  <div v-if="data" class="blog-entry">
    <PageHeader v-if="data.banner" :data="data.banner">{{ data.name }}</PageHeader>
    <div v-if="data.content" class="text--small content-block animated-blog blog__item_ullishka">
      <div class="container blog__item_ullishka" v-html="data.content"></div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../../components/content/pageHeader";
import seoHead from "../../mixins/seo-head";
import { fetchDataPost } from '~/utils/fetchDataPost';

export default {
  name: "blogEntry",
  components: {
    PageHeader
  },
  mixins: [seoHead],
  data() {
    return {
      seo: {},
      data: {},
      url: ""
    };
  },
  async asyncData({ route, store }) {
    const { seo, data } = await fetchDataPost('blog/', { route, store });
    return {
      seo,
      data,
    };
  },
  mounted() {
    let breadCrumbs = [
      { name: "breadCrumbs.blog", link: "/blog" },
      { name: this.data.name }
    ];
    this.$store.dispatch("changeBreadcrumbs", breadCrumbs);
    this.url = window.location.href;
  },
};
</script>


<style lang="scss" scoped>
@import "~assets/scss/config";
@import "~assets/scss/mixins";
// @import "wow.js/css/libs/animate.css";
/deep/ .container {
  width: 1200px;
  max-width: initial;
  padding: 0;

   @include respond-to(custom) {
    max-width: 1040px !important;
  }
  @include respond-to(lg) {
    max-width: 1040px !important;
  }
  @include respond-to(md){
    max-width: 660px!important;
  }
  @include respond-to(sm) {
    max-width: 100% !important;
   padding: 0 25px;
  }
  @include respond-to(customMobile) {
    max-width: 100% !important;
    padding-left: 25px;
    padding-right: 25px;
  }
}
ul{
  font-family: "Montserrat";
    font-weight: 400;
    margin: 10px 0;
    line-height: 1.5;
}
.blog-entry {
  padding-bottom: 30px;
    .page-header {
        position: relative;
    }
  &__content {
    padding-bottom: 50px;
  }
  /deep/.page-header__title {
    line-height: 1.5;
    font-size: 70px;
    width: 700px;
    @include respond-to(md) {
      line-height: 1.5;
      font-size: 60px;
      width: 100%;
    }
    @include respond-to(sm) {
      font-size: 35px;
      line-height: 1.5;
    }
  }
  /deep/p {
    font-family: "Montserrat";
    font-weight: 400;
    margin: 10px 0;
    line-height: 1.5;
  }
  /deep/h2 {
    position: relative;
    color: #0052d4;
    font-weight: bold;
    font-size: 50px;
    line-height:1.5;
    margin-top: 50px;
    margin-bottom: 20px;
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
    &::after {
      content: "";
      position: absolute;
      background-image: url("~assets/img/blogEntry/union.svg");
      height: 40px;
      width: 100%;
      background-repeat: no-repeat;
      left: -35%;
      top: 0;
      @include respond-to(md) {
        left: -50%;
      }
      @include respond-to(sm) {
        left: -60%;
      }
      @include respond-to(customMobile) {
        display: none;
      }
    }
  }

  &__header {
    width: 100%;
    height: 100vh;
    background: url("~assets/img/blogEntry/bg-header.png") no-repeat;
    background-size: cover;
    padding: 100px 0;
    display: flex;
    margin-top: 60px;

    @include respond-to(custom425) {
      height: 50vh;
      padding-top: 0 !important;
      padding-bottom: 190px;
    }
  }

  &__header-container {
    margin-top: auto;
    margin-bottom: auto;

    h1 {
      margin: 0 !important;
      color: color(white) !important;
    }
  }
}

.blog-entry__socials {
  div:first-child {
    margin-left: 0;
  }
  div {
    margin-left: 20px;
    img {
      max-width: 100%;
    }
  }
}

/deep/ .page-header {
  height: 100vh;

  &__title {
    line-height: 1.5;
    font-size: 70px;
    width: 700px;

    @include respond-to(md) {
      line-height: 1.5;
      font-size: 60px;
      width: 100%;
    }
  }
}
/deep/.info-slider__counter span:first-child{
    line-height: 1.5;
    @include respond-to(md) {
      line-height: 1.5;
    }
}
/deep/ .content-block {
  .info-slider {
    margin-top: 75px;
    margin-bottom: 90px;
    min-height: 900px;

    @include respond-to(lg) {
      min-height: 640px;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    @include respond-to(md) {
      min-height: initial;
      margin-top: 30px;
      margin-bottom: 30px;
      max-height: initial;
    }

    @include respond-to(sm) {
      margin-bottom: 0;
    }

    &__content-wrapper {
      padding: 195px;
      padding-bottom: 60px;

      @include respond-to(lg) {
        padding: 130px;
        padding-bottom: 60px;
      }

      @include respond-to(md) {
        padding: 60px;
        height: 384px;
      }

      @include respond-to(sm) {
        padding-left: 25px;
        padding-right: 25px;
        height: 384px;
      }
    }

    &__arrows {
      bottom: 80px;

      @include respond-to(lg) {
        bottom: 60px;
      }

      @include respond-to(md) {
        bottom: 34px;
      }
      @include respond-to(sm) {
       bottom:initial;
        top:10px;
      }

      .arrow {
        font-size: 60px;
        line-height: 1.5;
        width: 70px;
        height: 70px;

        @include respond-to(lg) {
          width: 60px;
          height: 60px;
        }

        @include respond-to(sm) {
          width: 30px;
          height: 30px;
          margin-top:30px;
        }

        &.icon-arrow-left {
          @include respond-to(lg) {
            margin-right: 100px;
          }

          @include respond-to(sm) {
            margin-right: 60px;
          }
        }
      }
    }

    &__title {
       font-size:30px;
      line-height:1.5;
      @include respond-to(lg) {
        padding-bottom: 36px;
        padding-top: 26px;
        font-size: 25px;
        line-height: 1.5;
      }
   @include respond-to(md) {
            font-size: 20px;
            line-height: 1.5;
          }
      @include respond-to(sm) {
        padding-bottom: 14px;
        padding-top: 26px;
        font-size: 17px;
        line-height: 1.5;
      }

      a {
        /*display: -webkit-box;*/
        /*-webkit-line-clamp: 4;*/
        /*-webkit-box-orient: vertical;*/
        overflow: hidden;
        border: none;
        font-size:30px;
        line-height: 1.5;
         @include respond-to(lg) {
            font-size: 25px;
            line-height: 1.5;
          }
          @include respond-to(md) {
            font-size: 20px;
            line-height: 1.5;
          }
          @include respond-to(sm) {
            font-size: 17px;
            line-height: 1.5;
          }
      }
    }

    &__content {
      font-size: 16px;
      line-height: 1.5;

      @include respond-to(sm) {
        font-size: 14px;
        line-height: 1.5;
      }
    }

    .icon-arrow-right {
      &:hover {
        background-image: url("~assets/img/menu/icons/strelki/r-b.svg");
      }
    }

    .icon-arrow-left {
      &:hover {
        background-image: url("~assets/img/menu/icons/strelki/l-b.svg");
      }
    }

    .slick-current {
      @include respond-to(sm) {
        height: initial;
      }
    }

    &__img-wrapper {
      min-height: 100px;

      @include respond-to(sm) {
        height: 100vw;
      }
    }
  }

  .container > img {
    max-width: initial;
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
    height: 800px;
    object-fit: cover;
    margin-top: 80px;
    margin-bottom: 0;

    & + * {
      margin-top: 70px;
    }

    @include respond-to(lg) {
      margin-top: 46px;
      height: 600px;

      & + * {
        margin-top: 50px;
      }
    }

    @include respond-to(md) {
      height: 400px;

      & + * {
        margin-top: 40px;
      }
    }

    @include respond-to(sm) {
      margin-top: 10px;
      height: 375px;

      & + * {
        margin-top: 40px;
      }
    }
  }
}

/deep/ .text--small {
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

/deep/ .container {
  h2 {
    padding: 0;
    margin-top: 114px;
    line-height: 1.5;
    @include respond-to(lg) {
      margin-top: 60px;
    }

    @include respond-to(md) {
      font-size: 30px;
      margin-top: 52px;
      margin-bottom: 15px;

      &:after {
        background-size: contain;
        height: 25px;
        left: -35%;
      }
    }

    @include respond-to(sm) {
      font-size: 26px;
      margin-top: 30px;
      margin-bottom: 5px;

      &:after {
        display: none;
      }
    }

    &:nth-of-type(2) {
      &:after {
        display: none;
      }
    }
  }

  .text--blue {
    color: #163e97 !important;
    font-weight: 500;
    font-family: "Montserrat";
    line-height: 1.5;

    & > p {
      color: #163e97 !important;
      font-weight: 500;
      font-family: "Montserrat";
      line-height: 1.5;
    }

    @include respond-to(lg) {
      margin: 30px 0;
      font-size: 18px;
      line-height: 1.5;

      & > p {
       font-size: 18px;
        line-height: 1.5;
      }
    }

    @include respond-to(md) {
      margin: 16px 0;
      font-size: 16px;
      line-height: 1.5;

      & > p {
        font-size: 16px;
        line-height: 1.5;
      }
    }

    @include respond-to(sm) {
      margin: 8px 0;
      font-size: 14px;
      line-height: 1.5;

      & > p {
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
}

/deep/ .page-header .container {
  width: 1530px;
  max-width: 1530px;

  @include respond-to(lg) {
    width: 1020px;
    max-width: 1020px;
  }

  @include respond-to(md) {
    width: 650px;
    max-width: 650px;
  }

  @include respond-to(sm) {
    width: 325px;
    max-width: 325px;
  }
}
</style>

<style lang="scss">
    @import "~assets/scss/config";
    @import "~assets/scss/mixins";
.blog__social {
  display: flex;
  margin-top: 120px;
  margin-bottom: 200px;

  @include respond-to(lg) {
    margin-top: 70px;
    margin-bottom: 90px;
  }
  @include respond-to(sm) {
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
  }
  @include respond-to(lg) {
    margin-top: 50px;
    margin-bottom: 75px;
  }

  @include respond-to(lg) {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  span {
    outline: none;
    margin-right: 60px;
    cursor: pointer;

    @include respond-to(lg) {
      margin-right: 20px;
    }
  }

  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    display: block;

    @include respond-to(lg) {
      width: 110px;
      height: 110px;
    }

    @include respond-to(md) {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
