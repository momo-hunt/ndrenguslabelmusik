<script>
	import { createEventDispatcher } from 'svelte';
	import { Icon, XCircle } from 'svelte-hero-icons';
	import ModalNew from '$lib/components/ModalNew.svelte';

	const dispatch = createEventDispatcher();
	export let data = null;
</script>

{#if data}
	<ModalNew on:close={() => (data = null)}>
		<header>
			<h3>{data.slot}</h3>
		</header>

		<form action="">
			<select name="bulan" id="bulan">
				<option value="1">Januari</option>
				<option value="2">Februari</option>
			</select>

			<select name="tahun" id="tahun">
				<option value="2023">2023</option>
				<option value="2024">2024</option>
			</select>

			<div>
				<label for="pendapatan">Jumlah</label>
				<input type="number" name="pendapatan" id="pendapatan" value="0" />
			</div>

			<button type="submit">Simpan</button>
		</form>
	</ModalNew>
{/if}

<style>
	* {
		/* border: var(--border); */
	}

	header {
		text-transform: uppercase;
		padding: 1rem;
		background-color: var(--bg-4);
	}

	form {
		margin: 1rem 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		padding: 0 1rem;
	}

	form select {
		width: calc(50% - 0.5rem);
	}

	form select,
	form input {
		background-color: var(--bg-4) !important;
		border-radius: 1rem;
	}

	form input[type='number'] {
		text-align: right;
	}

	form > button {
		background-color: var(--bg-1);
		color: var(--bg-3);
		border-radius: 2rem;
	}
</style>
