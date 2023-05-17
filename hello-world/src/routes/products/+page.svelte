<script>
    const products = [1,2,3,4,5,6]
</script>

{#if products.length}
   {#each products as  product}
        <br>
        <a href="products/{product}">product {product}</a><br>
   {/each}
{/if}

