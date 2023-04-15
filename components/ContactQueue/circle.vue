<template>
	<div class="circle-list-item--large circle-list-item--lt">
		<svg class="circle-list-item__outline" aria-hidden="true" width="140" height="140" viewBox="0 0 140 140">
			<circle cx="70" cy="70" r="69" fill="none" vector-effect="non-scaling-stroke"></circle>
		</svg>
		<div class="circle-list-item__image">
			<div class="circle_item--img">
				<img :src="require(`@/assets/img/queue/${img}.svg`)" alt="">
				<img :src="require(`@/assets/img/queue/${img}-repeat.svg`)" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['img']
	}
</script>

<style lang="scss">
	@import "~@/assets/scss/mixins";
	@import "~@/assets/scss/config";


	.circle-list-item {
		position: relative;
    margin: -20px 0 0 -20px;
		height: 396px;
    flex: 0 0 calc(20% + 20px);
    width: calc(20% + 20px);
		@include flex-center;
		padding: 6%;

		svg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			stroke: hsla(0,0%,100%,.4);
			stroke-width: 1px;
			transition-property: border-color;
			pointer-events: none;
		}
	}

	.circle_item--img {
		img {
			display: block;
			&:last-child {
				display: none;
			}
		}
		&:hover {
			img {
				&:first-child {
					display: none;
				}
				&:last-child {
					display: block;
				}
			}
		}
	}

</style>
