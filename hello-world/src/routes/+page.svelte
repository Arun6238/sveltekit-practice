<script>
    import { goto,beforeNavigate,afterNavigate } from '$app/navigation'
    const handleClick = ()=> {
        goto('/products')
    }
    beforeNavigate((nav)=>{
        console.log({before:nav})
    })
    afterNavigate((nav)=>{
        console.log({after:nav})
    })
</script>


<h1>Welcome home!</h1>

<button on:click={handleClick}>PlaceOrder</button>