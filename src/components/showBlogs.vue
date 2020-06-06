<template>
    <div id = "show-blogs">
        <h1>All Blog Articles</h1>
        <div v-for="blog in blogs" :key='blog' class="single-blog">
            <h2>{{blog.title}}</h2>
            <article>{{blog.body}}</article>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            blogs : [],
        }
    },

    created: function(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
            this.blogs = data.body.slice(0,10);

        })
    }
}
</script>

<style scoped>

#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}

.single-blog{
    margin: 20px 0;
    background: #eee;
    padding: 20px;
    box-sizing: border-box;

}

</style>