<template>
    <div id = "add-blog">
        <h2>Add a blog.</h2>
        <form class="blog-form">
            <label> Blog Title : </label>
            <input class="text-field" type="text" name = 'title' v-model="blog.title">
            <label> Content : </label>
            <textarea class="text-field" v-model="blog.content"> </textarea>
            <div id = 'checkboxes'>
                <label>Music</label>
                <input type="checkbox" value="Music" v-model="blog.categories">
                <label>Coding</label>
                <input type="checkbox" value="Coding" v-model="blog.categories">
                <label>Sports</label>
                <input type="checkbox" value="Sports" v-model="blog.categories">
                <label>Entertainment</label>
                <input type="checkbox" value = "Entertainment" v-model="blog.categories">
            </div>
            <div id = 'selectbox'>
                <p>Author:</p>
            <select v-model="blog.author">
                <option>Ishan</option>
                <option>Author 2</option>
                
            </select>
            </div>
            
        </form>
        <div class="preview">
            <h2>Preview</h2>
            <p>Blog Title : {{blog.title}} </p>
            <p>Blog Content :</p>
            <p>{{blog.content}}</p>
            <p>Category:</p>
            <ul v-for="category in blog.categories" v-bind:key="category">
                <li>{{category}}</li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>
        



    </div>
</template>


<script>
export default {
    data: function(){
        return {
            blog:{
                title:'',
                content: '',
                categories: [],
                author: '',
            }
        }
    }
}
</script>

<style scoped>
#add-blog h2{
    max-width: 750px;
    margin: 25px auto;
}
.blog-form{
    max-width: 750px;
    margin: 0 auto;
}
.blog-form label{
    display: block;
    margin: 10px auto;
}
.text-field{
    width: 750px;
}

.preview{
    max-width: 750px;
    margin: 25px auto;
    border: 1px solid grey;
    padding: 5px;
}

#checkboxes label,input{
    display: inline-block;
}
</style>