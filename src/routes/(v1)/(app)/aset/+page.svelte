<script>
	import { Icon, Photo } from 'svelte-hero-icons';
</script>

<main>
	<section>
		<article class="left">
			<!-- <img src="" alt="Picture Album" /> -->
			<div class="picture">
				<Icon src={Photo} size="48" />
			</div>
			<div class="status">
				<p>ID RILIS</p>
				<h5>123456</h5>
			</div>
			<div class="status">
				<p>STATUS</p>
				<h5>ON PROCCES</h5>
			</div>
		</article>

		<article class="right">
			<h5>Album Info</h5>
			<table>
				<tbody>
					<tr>
						<td>Title Version</td>
						<td>: DJ Mesir Trance Horay</td>
					</tr>
					<tr>
						<td>UPC</td>
						<td>:</td>
					</tr>
					<tr>
						<td>Label</td>
						<td>: Ndrengus Music</td>
					</tr>
					<tr>
						<td />
						<td>(P) 2023 Thomas Prastyo</td>
					</tr>
					<tr>
						<td />
						<td>(C) 2023 Thomas Prastyo</td>
					</tr>
					<tr>
						<td>Release Date</td>
						<td>: 19 April 2023</td>
					</tr>
					<tr>
						<td>Genre (s)</td>
						<td>: Dance, Disco</td>
					</tr>
					<tr>
						<td>Catalog #</td>
						<td>:</td>
					</tr>
					<tr>
						<td>Total Tracks</td>
						<td>: 1</td>
					</tr>
					<tr>
						<td>Language</td>
						<td>Indonesian</td>
					</tr>
				</tbody>
			</table>
		</article>
	</section>

	<section>
		<article class="left">
			<!-- <img src="" alt="Picture Album" /> -->
			<div class="picture">
				<Icon src={Photo} size="48" />
			</div>
			<div class="status">
				<p>ID RILIS</p>
				<h5>123456</h5>
			</div>
			<div class="status">
				<p>STATUS</p>
				<h5>ON PROCCES</h5>
			</div>
		</article>

		<article class="right">
			<h5>Album Info</h5>
			<table>
				<tbody>
					<tr>
						<td>Title Version</td>
						<td>: DJ Mesir Trance Horay</td>
					</tr>
					<tr>
						<td>UPC</td>
						<td>:</td>
					</tr>
					<tr>
						<td>Label</td>
						<td>: Ndrengus Music</td>
					</tr>
					<tr>
						<td />
						<td>(P) 2023 Thomas Prastyo</td>
					</tr>
					<tr>
						<td />
						<td>(C) 2023 Thomas Prastyo</td>
					</tr>
					<tr>
						<td>Release Date</td>
						<td>: 19 April 2023</td>
					</tr>
					<tr>
						<td>Genre (s)</td>
						<td>: Dance, Disco</td>
					</tr>
					<tr>
						<td>Catalog #</td>
						<td>:</td>
					</tr>
					<tr>
						<td>Total Tracks</td>
						<td>: 1</td>
					</tr>
					<tr>
						<td>Language</td>
						<td>Indonesian</td>
					</tr>
				</tbody>
			</table>
		</article>
	</section>
</main>

<style>
	/* * {
		border: 0.1px solid red;
	} */

	main {
		background-color: var(--bg-2);
		margin: 1rem;
		padding: 1rem;
		border-radius: 1rem;
	}

	main section {
		border-radius: 1rem;
		padding: 1rem;
		background-color: var(--bg-1);
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	main section:last-child {
		margin-bottom: 0;
	}

	main section article {
		flex: 1;
	}

	main section article.left .picture {
		height: 40%;
		border: 2px solid black;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	main section article.left .status {
		background-color: var(--bg-2);
		color: var(--bg-1);
		text-align: center;
		margin-top: 0.5rem;
		border-radius: 1rem;
		padding: 0.5rem;
	}

	main section article.right h5 {
		color: var(--bg-3);
	}

	main section article.right table {
		font-size: 10px;
	}

	main section article.right table tr td {
		border-bottom: 0.2px solid black;
	}
</style>
