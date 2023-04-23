<script>
	export let data;
	console.log(data);
</script>

<p>Welcome..</p>
<h1>{data?.user || 'null'}</h1>

<a href="/login?logout">Logout</a>

<style>
	a {
		padding: 1rem 2rem;
		border-radius: 4rem;
		background-color: rgb(163, 26, 26);
		width: fit-content;
	}
</style>
