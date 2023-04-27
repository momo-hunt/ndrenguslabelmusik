<script>
	import { Icon, PencilSquare, Trash } from 'svelte-hero-icons';
</script>

<section>
	<button class="tambah-user" type="button">Tambah User Baru</button>
</section>

<article>
	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>Username</th>
				<th>Role</th>
				<th>Login</th>
				<th>Updated</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Admin</td>
				<td>Admin</td>
				<td>-</td>
				<td>-</td>
				<td class="action">
					<button type="button" class="edit">
						<Icon src={PencilSquare} solid size="24" />
					</button>
					<button type="button" class="delete">
						<Icon src={Trash} solid size="24" />
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</article>

<style>
	* {
		/* border: 0.1px solid red !important; */
	}

	section {
		margin-top: 1rem;
		text-align: center;
	}
	section button {
		background-color: var(--bg-2);
	}

	article {
		margin: 1rem;
		padding: 1rem;

		overflow-x: auto;
		background-color: var(--bg-2);
	}

	article table {
		width: 100%;
		color: var(--bg-1);
		border-collapse: collapse;
	}

	article table tbody tr {
		background-color: var(--bg-4);
	}

	article table tr {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}

	article table .action {
		display: flex;
	}

	article table .action .edit {
		color: var(--bg-3);
	}

	article table .action .delete {
		background-color: red;
	}

	article table button {
		padding: 0.2rem 1rem;
		height: fit-content;
	}
</style>
