Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
      </div>
    `
  })
  var model = { template: "#model", } 
  var vm = new Vue({ 
    el: "#app", 
    components: { 
      "model": model } 
    })

    var app2 = new Vue({
      el :'#app-2',
      data:{
        message :'页面加载于' + new Date().toLocaleString()
      }
    })
