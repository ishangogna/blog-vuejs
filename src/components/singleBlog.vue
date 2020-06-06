<template>
 <div id = "single-blog">
     <h1>{{blog.title}}</h1>
     <article>{{blog.body }}</article>
 </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id, //gets the 'id' in the router parameter
            blog: {}
        }
    },

    created: function(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            console.log(data);
            this.blog = data.body;
        })
    }
    
}
</script>

<style scoped>

</style>