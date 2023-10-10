import{_ as a,o,c as s,k as e,a as r,t as n,Q as i}from"./chunks/framework.b51cef28.js";const k=JSON.parse('{"title":"消费跟踪工具","description":"","frontmatter":{"title":"消费跟踪工具","date":"2020-03-04T20:30:09.000Z","tags":["Vue.js","Mongodb","Express"]},"headers":[],"relativePath":"post/2020-03-04.md","filePath":"post/2020-03-04.md"}'),l={name:"post/2020-03-04.md"},c={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),p=i('<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><blockquote><p>第一次尝试做全栈应用。这个网站之前只是静态服务器,这次的这个消费跟踪工具使用node.js+mongo db作为后端， 开发过程中接口调试工具使用的postman，不过后来发现vscode有个Restful的插件，使用了一段&gt;时间感觉还不错。 对于这种个人全栈应用来说，频繁地在ide和postman之间切换还是有点麻烦的的。如果接口调试也可以在ide中的话 就太方便了吗，我想这也是REST Client这个插件的作者的初衷吧。顺便还学习了一下nginx的端口代理功能，非常 方便， 可以使用webhook的方式来触发telegram的机器人请求</p></blockquote><h2 id="功能实现" tabindex="-1">功能实现 <a class="header-anchor" href="#功能实现" aria-label="Permalink to &quot;功能实现&quot;">​</a></h2><blockquote><p>前端功能包括账单统计，消费记录添加/删除。其中账单统计包括支出统计以及收入统计。前端选用的Vue.js+Vuex 后端功能主要就是账单的添加和删除。后端使用的主要就是Express+Mongoose</p></blockquote><p><img src="https://i.loli.net/2020/03/04/c1xp6zGKv9eVr8N.png" alt="expense-tracker.png"></p>',5);function _(t,h,m,u,f,b){return o(),s("div",null,[e("h1",c,[r(n(t.$frontmatter.title)+" ",1),d]),p])}const x=a(l,[["render",_]]);export{k as __pageData,x as default};
