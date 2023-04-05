<template>
  <div class="faq-content entry-rules">
    <FaqMenu />
    <div v-if="data.rules" class="container--middle page-content text--small">
      <div v-for="(entry, index) in data.rules" :key="index">
        <Heading
          v-if="entry.title && entry.underlineTitle"
          tag="p"
          color="granite"
          size="sm"
          fw="600"
          underline="bottom"
          v-html="entry.title"
        />
        <Heading
          v-if="entry.title && !entry.underlineTitle"
          tag="p"
          color="granite"
          size="sm"
          fw="600"
          v-html="entry.title"
        />
        <div v-if="entry.text" v-html="entry.text" />
        <contentImage isBack="true" v-if="entry.img" width="fullwidth" :data="entry.img" />
      </div>
      <divider type="double" align="center" />
    </div>
  </div>
</template>

<script>
import FaqMenu from "../../components/faqMenu/faqMenu";
import Heading from "../../components/content/heading";
import ContentImage from "../../components/content/contentImage";
import Divider from "../../components/content/divider";
import { fetchData } from '~/utils/fetchData';
import seoHead from "../../mixins/seo-head";

export default {
  name: "entryRules",
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
      seo: ""
    };
  },
	async asyncData(context) {
			return fetchData('entry-rules', context);
		},
  created() {
    let breadCrumbs = [{ name: "breadCrumbs.faqEntry" }];
    this.$store.dispatch("changeBreadcrumbs", breadCrumbs);
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/config";
@import "~assets/scss/mixins";
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
    padding: 0 10px;
  }
}

.faq-content {
  @include respond-to(md) {
    background-image: none;
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

/deep/ .heading {
  font-family: "Mpluse1p";
  font-weight: 800;
  font-size: 50px;
  line-height: 1.5;
  margin-top: 80px;
  margin-bottom: 24px;
  color: #43495c;

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

  &--underline-bottom {
    color: #2a2e39;
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

/deep/ .page-content > div:first-child .heading {
  font-size: 36px;
  line-height: 1.5;
  font-weight: 500;

  @include respond-to(lg) {
    font-size: 28px;
    line-height: 1.5;
    margin-top: 60px;
    margin-bottom: 0;
  }

  @include respond-to(md) {
    font-size: 22px;
    line-height: 1.5;
    margin-top: 40px;
  }

  @include respond-to(sm) {
    font-size: 18px;
    line-height: 1.5;
    margin-top: 24px;
  }

  &:after {
    margin: 20px 0;

    @include respond-to(sm) {
      margin: 16px 0;
    }
  }
}

/deep/ .page-content {
  @include respond-to(lg) {
    padding-top: 0;
  }

  @include respond-to(md) {
    padding-bottom: 0;
  }
}

/deep/ .content-divider {
  @include respond-to(md) {
    margin: 40px auto;
  }

  @include respond-to(sm) {
    margin: 20px auto;
  }
}
</style>
