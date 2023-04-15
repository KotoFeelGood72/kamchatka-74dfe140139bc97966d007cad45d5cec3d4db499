<template>
    <section id="faq" class="faq">
        <client-only>
            <FaqMenu/>
            <According class="faq__accordion" :data="data"/>
        </client-only>
    </section>
</template>

<script>
import FaqMenu from '../../components/faqMenu/faqMenu';
import According from '../../components/according/according';
import { fetchData } from '~/utils/fetchData';
import seoHead from '../../mixins/seo-head';

export default {
    name: 'faq',
		mixins: [seoHead],
    components: {
        According,
        FaqMenu,

    },
    watch: {
        isParallax(val) {
            // console.log(val);
        }
    },
    computed: {
        isParallax() {
            return this.$store.getters['getIsParallax']();
        }
    },
    data() {
        return {
            data: {},
            seo: ''
        };
    },
		async asyncData(context) {
			return fetchData('faq', context);
		},
    created() {
        let breadCrumbs = [
            {name: 'faq.title'}
        ];
        this.$store.dispatch('changeBreadcrumbs', breadCrumbs);
    }
};
</script>

<style lang="scss" scoped>
    @import "~assets/scss/config";
    @import "~assets/scss/mixins";

    .faq .accordion {
        margin-bottom: 150px;
        @include respond-to(customMobile) {
            margin-bottom: 50px;
        }
    }

</style>
