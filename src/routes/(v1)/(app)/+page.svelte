<script>
	import InfoPenarikan from './InfoPenarikan.svelte';
	import Welcome from './Welcome.svelte';

	export let data;
</script>

<Welcome username={data?.user || 'null'} />

<InfoPenarikan />
