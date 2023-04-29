<script>
	import { loading } from '$lib/stores/store.js';
</script>

{#if $loading}
	<section>
		<div>
			<div class="custom-loader" />
		</div>
	</section>
{/if}

<style>
	section {
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
	}

	section > div {
		padding: 1rem;
		border-radius: 50%;
		background-color: var(--bg-1);
	}
	.custom-loader {
		width: 50px;
		height: 50px;
		display: grid;
		border: 4px solid #0000;
		border-radius: 50%;
		border-color: var(--bg-4) #0000;
		animation: s6 1s infinite linear;
	}
	.custom-loader::before,
	.custom-loader::after {
		content: '';
		grid-area: 1/1;
		margin: 2px;
		border: inherit;
		border-radius: 50%;
	}
	.custom-loader::before {
		border-color: var(--bg-3) #0000;
		animation: inherit;
		animation-duration: 0.5s;
		animation-direction: reverse;
	}
	.custom-loader::after {
		margin: 8px;
	}

	@keyframes s6 {
		100% {
			transform: rotate(1turn);
		}
	}
</style>
