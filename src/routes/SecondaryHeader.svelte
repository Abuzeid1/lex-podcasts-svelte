<script lang="ts">
	export let className: string;
</script>

<h2 class={'text-3xl text-gray-800 ' + (className || '')}><slot /></h2>
