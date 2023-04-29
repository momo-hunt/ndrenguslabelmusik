<script>
	import { createEventDispatcher } from 'svelte';
	import { Icon, XCircle } from 'svelte-hero-icons';

	const dispatch = createEventDispatcher();
</script>

<main>
	<button class="backdrop" on:click={() => dispatch('close', null)}>&nbsp;</button>
	<section>
		<button type="button" class="close" on:click={() => dispatch('close', null)}>
			<Icon src={XCircle} size="32" />
		</button>
		<slot />
	</section>
</main>

<style>
	/* * {
		border: var(--border);
	} */

	main {
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: start;
		padding: 4rem 2rem;
		background-color: rgba(0, 0, 0, 0.5);
	}

	main > button.backdrop {
		cursor: default;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 0;
	}

	main section > button.close {
		position: absolute;
		top: 0;
		right: 0;
		padding: 0.5rem;
		color: rgb(240, 6, 6);
	}

	main section {
		position: relative;
		background-color: var(--bg-2);
		color: var(--bg-1);
		width: 100%;
		border-radius: 1rem;
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>
