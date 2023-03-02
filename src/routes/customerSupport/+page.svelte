<script>
	import { Heading, Listgroup } from 'flowbite-svelte'
  let links = [
    { name: "I would like to contact SalaryMatch", href: "./contact"},
    { name: "Question2", href: "/" },
    { name: "Question3", href: "/"  },
    { name: "Question4", href: "/" },
  ];
</script>
<div class="header">
	<Heading tag="h1" class="mb-4" customSize="text-xl font-bold  md:text-xl lg:text-xl">FAQ</Heading>
</div>
<div class="questions">
	<Listgroup active items={links} let:item>{item.name}</Listgroup>
</div>
<style>
	.questions {
		width: 100%;  
	}
	.header {
		top: 300px
	}
</style>