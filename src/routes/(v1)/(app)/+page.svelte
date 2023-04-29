<script>
	import InfoPenarikan from './InfoPenarikan.svelte';
	import ModalTambahKeuangan from './ModalTambahKeuangan.svelte';
	import Welcome from './Welcome.svelte';
	import {
		ArrowDownCircle,
		ArrowUpCircle,
		CheckCircle,
		ChevronDown,
		Icon,
		Plus
	} from 'svelte-hero-icons';

	export let data;
	$: console.log(data);

	let dataModalTambah = null;

	function openModalTambah(user_id, slot) {
		dataModalTambah = { user_id, slot };
	}
</script>

<Welcome username={data?.user?.name || 'null'} />

{#if data?.user?.role >= 4}
	<ModalTambahKeuangan data={dataModalTambah} />

	<section>
		<header>
			<h3>Rafa</h3>
			<span><Icon src={ChevronDown} size="24" solid /></span>
		</header>
		<article>
			<header class="green">
				<span><Icon src={ArrowUpCircle} solid size="24" /></span>
				<h4>Pendapatan</h4>
				<h3>$ 2.0</h3>
			</header>
			<ul>
				{#each data.keuangan.filter((a) => a.user_id == 'abc') as k}
					<li>
						<div>{k.bulan}</div>
						<div>$ {k.pendapatan}</div>
					</li>
				{/each}
			</ul>
			<button on:click={() => openModalTambah('abc', 'pendapatan')}>
				<Icon src={Plus} size="24" solid />
				<span>Tambah</span>
			</button>
		</article>

		<article>
			<header class="red">
				<span><Icon src={ArrowDownCircle} solid size="24" /></span>
				<h4>Penarikan</h4>
				<h3>$ 1.0</h3>
			</header>
			<ul>
				<li>
					<div>Mei</div>
					<div>$ 1.0</div>
				</li>
			</ul>
		</article>
		<article>
			<header class="blue">
				<span><Icon src={CheckCircle} solid size="24" /></span>
				<h4>Saldo</h4>
				<h3>$ 1.0</h3>
			</header>
		</article>
	</section>
{/if}

{#if data?.user?.role != 'admin'}
	<InfoPenarikan />
{/if}

<style>
	* {
		/* border: var(--border); */
	}

	section {
		margin: 0.5rem 1rem;
		background-color: var(--bg-2);
		color: var(--bg-1);
		padding: 1rem;
		border-radius: 1rem;
	}

	section > header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	section > header > span {
		opacity: 0.6;
	}

	section article > button {
		gap: 0.5rem;
		background-color: var(--bg-2);
		padding: 0.5rem 1rem;
		margin-top: 0.5rem;
		border-radius: 0.5rem;
		outline: 2px dashed rgba(0, 0, 0, 0.2);
		margin-left: 50%;
		transform: translate(-50%);
	}

	section article > button:hover {
		transition: outline 0.3s ease;
		outline-color: var(--bg-1);
	}

	section article {
		background-color: var(--bg-4);
		margin: 0.5rem 0;
		padding: 1rem;
		border-radius: 1rem;
	}

	section article header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--bg-1);
		padding-bottom: 0.5rem;
		gap: 0.5rem;
	}

	section article header.blue {
		border: none;
	}

	section article header > span {
		height: 1.5rem;
		opacity: 0.6;
	}
	section article header.green > span {
		color: rgb(15, 180, 15);
	}

	section article header.red > span {
		color: rgb(205, 15, 15);
	}

	section article header.blue > span {
		color: rgb(15, 15, 205);
	}

	section article header h3 {
		color: var(--bg-3);
		margin-left: auto;
	}

	section article ul {
		margin: 0;
		padding: 0 0.5rem;
	}

	section article ul li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}

	section article ul li:last-child {
		border-bottom: none;
	}
</style>
