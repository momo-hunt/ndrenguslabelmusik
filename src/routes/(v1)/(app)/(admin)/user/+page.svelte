<script>
	import { Icon, PencilSquare, Trash } from 'svelte-hero-icons';
	import Modal from '$lib/components/Modal.svelte';
	import FormTambahUser from './FormTambahUser.svelte';
	import ListView from './ListView.svelte';
	import CssLoader from '$lib/components/CssLoader.svelte';

	export let data;
	let loader = false;
	let isShowModalTambah = false;

	const submitTambahUser = async (e) => {
		loader = true;
		console.log(e.detail);
		const { username, password, confirmPassword } = e.detail;

		if (password != confirmPassword) return alert('Password dan confirm Password harus sama');

		const res = await fetch('', {
			method: 'post',
			body: JSON.stringify({ username, password })
		});

		const result = await res.json();
		console.log('result', result);
		if (result) {
			isShowModalTambah = false;
			loader = false;
		}
	};
</script>

{#if loader}
	<CssLoader />
{/if}

<section class="button-tambah">
	<button class="tambah-user" type="button" on:click={() => (isShowModalTambah = true)}
		>Tambah User Baru</button
	>
</section>

<ListView users={data?.users} />

{#if false}
	<article class="table-view">
		<table>
			<thead>
				<tr>
					<th>Username</th>
					<th>Role</th>
					<th>Login</th>
					<th>Created</th>
					<th>Updated</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{#each data?.users as u}
					<tr>
						<td>{u.username}</td>
						<td>{u.role}</td>
						<td>{u.login_at}</td>
						<td>{u.created_at}</td>
						<td>{u.updated_at}</td>
						<td class="action">
							<button type="button" class="edit" title="Edit">
								<Icon src={PencilSquare} solid size="16" />
							</button>
							<button type="button" class="delete" title="Hapus">
								<Icon src={Trash} solid size="16" />
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</article>
{/if}

{#if isShowModalTambah}
	<Modal on:close={() => (isShowModalTambah = false)}>
		<h3 slot="header">Tambah User Baru</h3>
		<FormTambahUser on:submitTambah={submitTambahUser} />
	</Modal>
{/if}

<style>
	/* * {
		border: 0.1px solid red !important;
	} */

	section.button-tambah {
		margin: 0 1rem;
		display: flex;
		margin-top: 1rem;
		justify-content: flex-end;
	}

	section.button-tambah button.tambah-user {
		background-color: var(--bg-2);
		border-radius: 2rem;
	}

	article.table-view {
		margin: 1rem;
		padding: 1rem;

		overflow-x: auto;
		background-color: var(--bg-2);
	}

	article.table-view table {
		font-size: 80%;
		width: 100%;
		color: var(--bg-1);
		border-collapse: collapse;
	}

	article.table-view table tbody tr {
		background-color: var(--bg-4);
	}

	article.table-view table tr {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}

	article.table-view table .action {
		display: flex;
		justify-content: center;
	}

	article.table-view table .action .edit {
		background-color: var(--bg-3);
	}

	article.table-view table .action .delete {
		background-color: red;
	}

	article.table-view table button {
		color: rgb(234, 232, 240);
		margin: 0.5rem;
		padding: 0.5rem 1rem;
		height: fit-content;
		border-radius: 1rem;
	}
</style>
