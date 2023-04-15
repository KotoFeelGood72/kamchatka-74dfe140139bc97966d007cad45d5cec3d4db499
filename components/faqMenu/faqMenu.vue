<template>
  <section id="faqMenu" class="faq-menu">
    <div class="faq-menu__container container">
      <div class="row">
        <div class="col-md-6 faq-menu__left">
          <h1 class="headline text--headline">FAQ</h1>
          <p class="faq-menu__description text">В этом разделе мы разместили<br> ответы на самые частые вопросы<br> от туристов.</p>
        </div>
        <div class="col-md-6 faq-menu__right text">
          <li v-for="(item, index) in nav.faqNav" :key="'topMenu-' + index">
            <nuxt-link :to="item.link" active-class="active" exact>{{item.name}}</nuxt-link>
          </li>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import nav from "../navigation/nav";
export default {
  name: "faqMenu",
  data() {
    return {
			nav
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/config";
@import "~@/assets/scss/mixins";

.faq-menu {
  overflow-x: hidden;
}
.faq-menu__container {
  @include respond-to(sm) {
    flex-direction: column;
  }
}
.faq-menu__left {
  padding-top: 100px;
  padding-right: 50px;
  padding-bottom: 150px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -999px;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: color(blueScreen);
    @include respond-to(sm) {
      right: -999px;
    }
  }
  .headline {
    margin-top: 80px;
    color: color(white);
    margin-bottom: 25px;
    position: relative;
  }
  .faq-menu__description {
    color: #fbfbfb;
    position: relative;
  }
}
.faq-menu__right {
  padding-left: 180px;
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    right: -999px;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #0052d4;
    @include respond-to(sm) {
      left: -999px;
    }
  }
  @include respond-to(lg) {
    padding-left: 120px;
  }
  @include respond-to(sm) {
    padding-left: 15px;
    font-size: 20px;
  }
  li {
    margin: 0;
    display: flex;
    align-items: center;
    position: relative;
    a {
      color: color(blue);
      border-bottom: 1px solid;
      display: block;
      margin: 22px 0;
      &.active {
        color: #fbfbfb;
      }
    }
  }
}

.row {
  height: 100vh;

  @include respond-to(md) {
    height: 700px;
  }

  @include respond-to(sm) {
    height: 944px;
  }

  .headline.text--headline {
    margin-top: 212px;
    margin-bottom: 0;
    line-height: 1.5;

    @include respond-to(lg) {
      margin-top: 140px;
      font-size: 100px;
    }

    @include respond-to(md) {
      margin-top: 100px;
      font-size: 96px;
    }

    @include respond-to(sm) {
      margin-top: 70px;
      font-size: 70px;
    }
  }

  .faq-menu__right.text {
    padding-top: 230px;
    padding-bottom: 0;

    @include respond-to(lg) {
      padding-top: 180px;
    }
    @include respond-to(md) {
      padding-left: 70px;
      padding-top: 220px;
    }
    @include respond-to(sm) {
      padding-left: 24px;
      padding-top: 46px;
    }
  }

  .faq-menu__description.text {
    font-size: 36px;
    line-height: 1.5;

    @include respond-to(lg) {
      font-size: 26px;
      line-height: 1.5;
    }

    @include respond-to(md) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  .faq-menu__right li a {
    line-height: 1.5;
    @include respond-to(lg) {
      margin: 0;
      margin-bottom: 20px;
    }

    @include respond-to(md) {
      font-size: 20px;
    }
    @include respond-to(md) {
      font-size: 18px;
    }
  }
}
</style>
