<template>
	<div class="tripadvisor-reviews">
			<div class="tripadvisor-reviews__container">
					<div class="tripadvisor-reviews__title section-grid__title">О нас говорят</div>
					<div class="tripslider_w">
						<div class="trip-slider swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="(item, index) in reviews.reviews" :key="'reviews-' + index">
									<slide
											:key="`review-${index}`"
											:reviewer="item.reviewer"
											:avatar="item.avatar"
											:title="item.title"
											:date="item.date"
											:text="item.text"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="trip_slideNavigation">
						<div class="trip_slideNavPrev"><Icon icon="bi:chevron-left" /></div>
						<div class="trip_slideNavNext"><Icon icon="bi:chevron-right" /></div>
					</div>

					<a href="https://www.tripadvisor.ru/Attraction_Review-g298492-d13277122-Reviews-Enjoy_Kamchatka-Petropavlovsk_Kamchatsky_Kamchatka_Krai_Far_Eastern_District.html#tab-data-WebPresentation_PoiReviewsAndQAWeb"
						 target="_blank" class="tripadvisor-reviews__link">
							Все отзывы c Tripadvisor
					</a>
			</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import slide from './slide';
import { Icon } from '@iconify/vue2';

import reviews from '../../data/reviews';
export default {
	components: {
		slide,
		Icon,
	},
	data() {
		return {
			advisorSlider: null,
			reviews,
		}
	},
	computed: {
			currentRouteName() {
					return this.$store.$i18n.loadedLanguages[0];
			},
	},
	mounted() {
		this.advisorSlider = new Swiper('.trip-slider', {
				speed: 600,
				slidesPerView: 2,
				navigation: {
					nextEl: '.trip_slideNavNext',
					prevEl: '.trip_slideNavPrev'
				},
			});
	},
	watch: {
		advisorSlider() {
			this.advisorSlider.update();
		}
	},
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixins";
@import "~@/assets/scss/config";

.tripadvisor-reviews {
	background: #21232a;
	color: #ffffff;
	min-height: calc(100vh - 100px);
	padding: 64px 65px;

}

.trip_slideNavigation {
	margin-bottom: 30px;
	@include flex-start;
	div {
		width: 70px;
		height: 70px;
		border-radius: 100%;
		border: 2px solid $white;
		color: $white;
		@include flex-center;
		cursor: pointer;
		transition: all .3s ease;

		&.swiper-button-disabled {
			pointer-events: none;
			opacity: .7;
		}
		&:hover {
			color: $light-blue;
			border-color: inherit;
		}
		svg {
			width: 25px;
			height: 25px;
		}
		&:first-child {
			margin-right: 100px;
		}
	}
}

.tripslider_w {
	margin-bottom: 50px;
}

.tripadvisor-reviews__link {
	color: $white;
	font-size: 24px;
	@include animate-link;
}
</style>
