<script>
    import { page } from "$app/stores"

    const { productid,reviewid } = $page.params
    console.log($page.params)
    // Initializing multiple variables using object destructuring
    // const { name, age, city } = { name: 'John', age: 30, city: 'New York' };
</script>

<h2>Review {reviewid} for product {productid} </h2>
