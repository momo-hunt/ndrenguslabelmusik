<script>
	import { Bell, ChevronDown, ChevronUp, Icon } from 'svelte-hero-icons';
	import InfoLaporan from './InfoLaporan.svelte';

	export let username;
	let isShowInfoLapor = false;
</script>

<article>
	<h4>Selamat datang</h4>
	<h5>{username}</h5>
	<button type="button" on:click={() => (isShowInfoLapor = !isShowInfoLapor)}>
		<span><Icon src={Bell} solid size="24" /></span>
		<span>Informasi Laporan & Pembayaran</span>
		<span><Icon src={isShowInfoLapor ? ChevronUp : ChevronDown} solid size="24" /></span>
	</button>

	{#if isShowInfoLapor}
		<InfoLaporan />
	{/if}
</article>

<style>
	article {
		padding: 1rem;
		border-radius: 1rem;
		margin: 1rem 1rem 0 1rem;
		background-color: var(--bg-2);
		color: var(--bg-1);
	}
	article h5 {
		font-weight: 400;
	}

	article button {
		/* position: relative; */
		justify-content: space-between;
		margin-top: 1rem;
		padding: 2rem 1rem;
		width: 100%;
		background-color: var(--bg-4);
		gap: 0.5rem;
		border-radius: 1.6rem;
	}
</style>
