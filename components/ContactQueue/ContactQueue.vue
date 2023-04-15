<template>
  <div class="landing-clients-container">
    <h3 :class="[{ 'landign_scape_textAbout': isAboutPage }, 'landign_scape_text', 'section-grid__title']">Нам доверяют</h3>
    <div class="landing-clients-list">
      <div class="circle-list circle-list--looped">
        <ul class="circle-list__list">
					<li class="circle-list-item" v-for="idx in 16" :key="'circle-' + idx">
						<circle-item :img="(idx - 1) % 8 + 1" />
					</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>

export default {
	components: {
		circleItem: () => import('./circle')
	},
  props: [
        'isAboutPage'
    ],
};
</script>


<style lang="scss" scoped>
@import "~@/assets/scss/mixins";
@import "~@/assets/scss/config";


.landing-clients-container {
	padding: 145px 0 160px 0;
  background: #1c1e24;
}

.landing-clients-container .circle-list__list {
  -webkit-animation: landing-clients-animation-xxl 15s linear infinite;
  animation: landing-clients-animation-xxl 15s linear infinite;
}
.landign_scape_text{
  padding-left:65px;
  font-family: 'Mpluse1p';
  color:#fff;
  margin-bottom:90px;
  font-weight: bold;
}
@-webkit-keyframes landing-clients-animation {
  0% {
    transform: translateX(-51%);
  }
  to {
    transform: translateX(-352.8%);
  }
}
@keyframes landing-clients-animation {
  0% {
    transform: translateX(-54%);
  }
  to {
    transform: translateX(-352.8%);
  }
}
@-webkit-keyframes landing-clients-animation-sm {
  0% {
    transform: translateX(-28%);
  }
  to {
    transform: translateX(-188%);
  }
}
@keyframes landing-clients-animation-sm {
  0% {
    transform: translateX(-28%);
  }
  to {
    transform: translateX(-188%);
  }
}
@-webkit-keyframes landing-clients-animation-xxl {
  0% {
    transform: translateX(-7%);
  }
  to {
    transform: translateX(-186%);
  }
}
@keyframes landing-clients-animation-xxl {
  0% {
    transform: translateX(-7%);
  }
  to {
    transform: translateX(-187%);
  }
}



.circle-list__list {
	@include flex-start;
	flex-direction: row;
	list-style: none;
	width: 100%;
}
</style>
