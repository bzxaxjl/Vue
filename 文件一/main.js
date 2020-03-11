var app = new Vue({//文本显示
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
  var app2= new Vue({//鼠标事件显示日期
      el : '#app-2',
      data:{
          message2:'页面加载中'+ new Date().toLocaleString()
          
      }
  })
  var app3 =new Vue({//可视化
    el : '#app-3',
    data:{
        seen:true
    }
    
  })
var app4 =new Vue({//列表
    el :'#app-4',
    data:{
        todos:[
            { text:'123'},
            { text:'456'},
            { text:'789'}
        ]
    }
})
var app5 = new Vue({//逆转文本
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    computed:{
      reversedMessage : function() {//相当于定义一个方法，重复使用,计算属性，减少模板使用
      return this.message.split('').reverse().join('')
      }
    }
    
    // methods: {
    //   reverseMessage: function () {
    //     this.message = this.message.split('').reverse().join('')
    //   }
    // }
  })
  var app6 = new Vue({//输入框显示更新
    el: '#app-6',
    data: {
      message: 'Hello Vue!',
      message2: '你好'
    }
  })

  var vm = new Vue({//不清楚是干什么的
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar'
    },
    computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      }
    }
  })
//侦听器的测试
  var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
      }
    },
    created: function () {
      // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
      // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
      // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
      // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
      // 请参考：https://lodash.com/docs#debounce
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)//反应时间
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {//异常？
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      }
    }
  })
  // 定义一个名为 button-counter 的新组件
  Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
  new Vue({ el: '#components-demo' })

  Vue.component('blog-post',{
    props: ['title'],
    template: '<h3>{{title}}</h3>'
  })

  new Vue({
    el: '#blog-post-event-demo',
    data: {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize : 1
    }
  })

  var example2 = new Vue({
    el:'#exam',
    data:{
      parentMessage: 'Parent',
      items: [
        {message:'Foo'},
        {message:'bar'}
      ]
    }
  })

  new Vue({
    el: '#v-for-object',
    data: {
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  })

