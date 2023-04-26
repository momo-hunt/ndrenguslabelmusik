<script>
	import { Bell, ChevronDown, Icon } from 'svelte-hero-icons';
</script>

<article class="welcome">
	<header>
		<h3>Selamat datang</h3>
		<h2>Admin</h2>
	</header>
	<footer>
		<button>
			<span><Icon src={Bell} solid size="24" /></span>
			<span>Informasi laporan dan pembayaran</span>
			<span><Icon src={ChevronDown} solid size="24" /></span>
		</button>
	</footer>
</article>

<style>
	article.welcome {
		margin: 0.5rem 1rem;
		background-color: var(--bg-light);
		color: var(--bg-dark);
		border-radius: 1rem;
	}

	article header {
		padding: 1rem 1rem 0 1rem;
	}

	article footer {
		padding: 1rem;
	}

	article footer button {
		width: 100%;
		height: 48px;
		padding: 0 1rem;
		border-radius: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--bg-semi-light);
		border: none;
		outline: none;
		font-weight: 500;
		font-size: inherit;
	}
</style>
