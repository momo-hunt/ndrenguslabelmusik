<script>
	import { Icon, PencilSquare, Trash } from 'svelte-hero-icons';
	import Modal from '$lib/components/Modal.svelte';
	import FormTambahUser from './FormTambahUser.svelte';

	let isShowModalTambah = false;

	const submitTambahUser = async (e) => {
		console.log(e.detail);
	};
</script>

<section>
	<button class="tambah-user" type="button" on:click={() => (isShowModalTambah = true)}
		>Tambah User Baru</button
	>
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
					<button type="button" class="edit" title="Edit">
						<Icon src={PencilSquare} solid size="24" />
					</button>
					<button type="button" class="delete" title="Hapus">
						<Icon src={Trash} solid size="24" />
					</button>
				</td>
			</tr>
		</tbody>
		<legend> Jumlah : 1</legend>
	</table>
</article>

{#if isShowModalTambah}
	<Modal on:close={() => (isShowModalTambah = false)}>
		<h2 slot="header">Tambah User Baru</h2>
		<FormTambahUser on:submitTambah={submitTambahUser} />
	</Modal>
{/if}

<style>
	/* * {
		border: 0.1px solid red !important;
	} */

	section {
		margin: 0 1rem;
		display: flex;
		margin-top: 1rem;
		justify-content: flex-end;
	}

	section button.tambah-user {
		background-color: var(--bg-2);
		border-radius: 2rem;
	}

	article {
		margin: 1rem;
		padding: 1rem;

		overflow-x: auto;
		background-color: var(--bg-2);
	}

	article table {
		font-size: 80%;
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
		justify-content: center;
	}

	article table .action .edit {
		background-color: var(--bg-3);
	}

	article table .action .delete {
		background-color: red;
	}

	article table button {
		color: rgb(234, 232, 240);
		margin: 0.5rem;
		padding: 0.2rem 1rem;
		height: fit-content;
		border-radius: 1rem;
	}
</style>
