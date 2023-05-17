<script>
    import { page } from "$app/stores"
    const slugs =  $page.params.slugs.split('/')
    console.log(slugs)
</script>

<h2>Docs page</h2>

 {#if slugs.length === 1}
    "hai"
 {/if}