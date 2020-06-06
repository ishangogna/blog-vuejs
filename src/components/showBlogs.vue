<template>
    <div id = "show-blogs">
        <h1>All Blog Articles</h1>
        <input class = "search-bar" type="text" placeholder="Search a blog" v-model="search">
        <div v-for="blog in filteredBlogs" :key='blog' class="single-blog">
            <h2>{{blog.title | to-uppercase}}</h2>
            <article>{{blog.body | snippet }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            blogs : [],
            search : '',
        }
    },

    computed:{
        filteredBlogs: function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            })
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
.search-bar{
    width:790px;
    
}
</style>