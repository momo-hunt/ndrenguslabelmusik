<script>
	import { enhance } from '$app/forms';
</script>

<section>
	<header><h4>Penarikan isi terlebih dahulu formulir dibawah ini!</h4></header>

	<form
		method="post"
		use:enhance={() => {
			return ({ result }) => {
				let res = result.data;
				alert(JSON.stringify(res));
			};
		}}
	>
		<div class="grup">
			<label for="artis">Nama Artis</label>
			<input type="text" name="artis" id="artis" required />
		</div>
		<div class="grup">
			<label for="jumlah">Jumlah Penarikan</label>
			<input type="number" name="jumlah" id="jumlah" required />
		</div>
		<div class="grup">
			<label for="metode">Metode Penarikan</label>
			<input type="text" name="metode" id="metode" required />
		</div>
		<div class="grup">
			<label for="rekening_wallet">Nomor Rekening / E-Wallet</label>
			<input type="text" name="rekening_wallet" id="rekening_wallet" required />
		</div>
		<div class="grup">
			<label for="nama_rekening_wallet">Atas Nama Rekening / E-Wallet</label>
			<input type="text" name="nama_rekening_wallet" id="nama_rekening_wallet" required />
		</div>

		<label for="">
			<input type="checkbox" name="telah_isi" id="telah_isi" required />
			<span>Saya telah mengisi <strong>formulir</strong> dengan benar.</span>
		</label>
		<label for="">
			<input type="checkbox" name="peraturan" id="peraturan" required />
			<span>Saya telah membaca <strong>peraturan</strong> yang ada.</span>
		</label>

		<button type="submit">TARIK</button>
	</form>
</section>

<style>
	/* * {
		border: 0.1px solid red !important;
	} */

	section {
		margin: 1rem;
		background-color: var(--bg-2);
		color: var(--bg-1);
		padding: 1rem;
		border-radius: 1rem;
	}

	section header {
		padding: 1rem 2rem;
		border-radius: 1rem;
		background-color: var(--bg-4);
		text-align: center;
	}

	section form {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}

	section form .grup {
		width: 100%;
	}

	section form input {
		background-color: var(--bg-4) !important;
	}

	section form input:focus {
		filter: brightness(90%);
	}

	section form > label {
		width: 100%;
		display: flex;
		justify-content: start;
		align-items: start;
		font-size: 14px;
	}

	section form > label > input {
		margin-top: 0.2rem;
	}

	section form button {
		width: 50%;
		background-color: var(--bg-1);
		color: var(--bg-3);
		border-radius: 2rem;
	}
</style>
