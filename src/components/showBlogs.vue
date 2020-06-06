<template>
    <div id = "show-blogs">
        <h1>All Blog Articles</h1>
        <input class = "search-bar" type="text" placeholder="Search a blog" v-model="search">
        <div v-for="blog in filteredBlogs" :key='blog' class="single-blog">
            <router-link v-bind:to= "'/blog/' + blog.id"><h2>{{blog.title | to-uppercase}}</h2></router-link>
            
            <article>{{blog.content | snippet }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            blogs : [],
            search : '',
            id : '',
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
        this.$http.get('https://blog-vuejs-7f931.firebaseio.com/posts.json').then(function(data){
            return data.json(); //to parse the data to json. This returns a promise.

        }).then(function(data){
            var blogsArray = [];
            for(let key in data){
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
        })
    },
    filters:{
        'to-uppercase': function(value){
            return value.toUpperCase();
        },
        'snippet': function(value){
            return value.slice(0,100) + '...';
        }
    },

    directives:{
        'rainbow':{
            bind(el,binding,vnode){
                el.style.color = '#' + Math.random().toString().slice(2,8);
            }
        }
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
a{
    text-decoration: none;
}
</style>