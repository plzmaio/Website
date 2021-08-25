<template>
	<div>
		<info />
		<stat />
		<covid />
	</div>
</template>

<script>
	import covid from '../components/covid';
	import info from '../components/info';
	import stat from '../components/stat';

	export default {
		name: 'App',
		components: {
			covid,
			info,
			stat,
		},
		data() {
			return {};
		},
	};
</script>
