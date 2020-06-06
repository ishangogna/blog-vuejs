<template>
 <div id = "single-blog">
     <h1>{{blog.title}}</h1>
     <article>{{blog.content }}</article>
     <p><span style="font-weight:bold;">Authored by : </span>{{blog.author}}</p>
     <p style="font-weight:bold;">Categories:</p>
     <ul>
         <li v-for="category in blog.categories" v-bind:key="category">{{category}}</li>
     </ul>
     
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
        this.$http.get('https://blog-vuejs-7f931.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        })
    }
    
}
</script>

<style scoped>

</style>