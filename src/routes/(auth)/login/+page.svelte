<script>
	import logo from '$lib/assets/logo.png';
</script>

<header>
	<h1>NDRENGUS LABEL MUSIK</h1>
</header>

<main>
	<img src={logo} alt="Ndrengus Label Musik" />

	<h1>BUAT KARYAMU BERHARGA</h1>

	<p>
		Distibusikan karyamu keseluruh dunia<br />
		dan dapatkan royalti dari karyamu.
	</p>

	<form action="">
		<input type="text" name="username" id="username" placeholder="Username" />
		<input type="password" name="password" id="password" placeholder="Password" />
		<button>LOGIN</button>
	</form>
</main>

<style>
	header {
		padding: 2rem;
	}
	main {
		text-align: center;
	}

	img {
		width: 40%;
	}

	h1 {
		font-size: 55px;
	}
	p {
		font-size: 30px;
	}

	form {
		background-color: var(--bg-card);
		padding: 4rem;
		margin: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	input {
		width: 100%;
		text-align: center;
		font-size: 86px;
		padding: 2rem;
		background-color: white;
		color: var(--color-input);
	}

	input::placeholder {
		color: var(--color-input);
	}

	button {
		margin-top: 2rem;
		font-size: 86px;
		background-color: #1776bd;
		width: 50%;
		padding: 2 rem;
	}
</style>
