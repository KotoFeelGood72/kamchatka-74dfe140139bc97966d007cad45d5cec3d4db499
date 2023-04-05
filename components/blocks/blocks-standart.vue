<template>
	<div v-if="data" v-html="data">
	</div>
</template>

<script>
	export default {
		props: ['data']
	}
</script>

<style lang="scss" scoped>

</style>
