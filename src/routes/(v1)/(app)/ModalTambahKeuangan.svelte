<script>
	import { loading } from '$lib/stores/store.js';
	import { bulan } from '$lib/help/custom.js';
	import { createEventDispatcher } from 'svelte';
	import ModalNew from '$lib/components/ModalNew.svelte';
	import { enhance } from '$app/forms';

	const dispatch = createEventDispatcher();
	export let data = null;
</script>

{#if data}
	<ModalNew on:close={() => (data = null)}>
		<header>
			<h3>{data.slot}</h3>
		</header>

		<form
			action="/pendapatan?/add"
			method="post"
			use:enhance={() => {
				loading.show();
				return async ({ result }) => {
					loading.hide();
					if (result.status != 200) alert('salah');
				};
			}}
		>
			<input type="hidden" name="user_id" value={data.user_id} />
			<select name="bulan" id="bulan">
				{#each bulan as b, i}
					<option value={i + 1}>{b}</option>
				{/each}
			</select>

			<select name="tahun" id="tahun">
				<option value="2023">2023</option>
				<option value="2024">2024</option>
				<option value="2025">2025</option>
			</select>

			<div>
				<label for="pendapatan">Jumlah</label>
				<input type="number" name="pendapatan" id="pendapatan" placeholder="0.00" />
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
