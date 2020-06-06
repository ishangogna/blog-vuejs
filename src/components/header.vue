<template>
    <nav>
        <ul>
            <li><router-link to= "/" exact>Blogs</router-link></li>  <!-- exact makes the link active when the url -->
            <li><router-link to= '/add' exact>Add a blog</router-link></li> <!-- is exactly / or /add, helping with router-link-active -->
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    nav{
        background: #444;
        padding: 5px;
    }

    nav ul {
        list-style-type: none;
        text-align: center;
    }
    nav li{
        display: inline-block;
        margin: 0 20px;

    }
    a{
        text-decoration: none;
        color: #fff;
        border-radius: 10px;
        padding: 6px 8px;
    }
    .router-link-active{
        background: #eee;
        color: darkgrey;
    }

</style>