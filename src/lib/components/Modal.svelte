<script>
	import { Icon, XMark } from 'svelte-hero-icons';
	import { fly, fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<section transition:fade>
	<article in:fly={{ y: -100, opacity: 0.2 }} out:fade>
		{#if $$slots.header}
			<header>
				<slot name="header" />
				<button class="close" on:click={() => dispatch('close')}
					><Icon src={XMark} size="32" /></button
				>
			</header>
		{/if}

		<main><slot /></main>
		{#if $$slots.footer}
			<footer>
				<slot name="footer" />
			</footer>
		{/if}
	</article>
</section>

<style>
	* {
		/* border: 0.1px solid red !important; */
	}

	section {
		position: absolute;
		z-index: 99;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100vh;
		background-color: rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: center;
		align-items: start;
	}

	section article {
		margin-top: 4rem;
		width: 60%;
		background-color: var(--bg-2);
		color: var(--bg-1);
		border-radius: 2rem;
	}

	section article header {
		padding: 1rem 2rem 0 2rem;
		position: relative;
	}

	section article header button.close {
		padding: 0;
		position: absolute;
		top: 8px;
		right: 8px;
		color: red;
	}

	section article main {
		padding: 0.5rem 2rem;
	}
</style>
