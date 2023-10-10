import{_ as s,o as e,c as o,k as t,a as n,t as a}from"./chunks/framework.b51cef28.js";const r="/assets/wslgit_before.af027c05.png",l="/assets/wslgit_after.263546b0.png",N=JSON.parse('{"title":"在windows下使用WSL中的git","description":"","frontmatter":{"title":"在windows下使用WSL中的git","date":"2022-02-15T17:36:53.000Z","tags":["工具"]},"headers":[],"relativePath":"post/2022-02-15.md","filePath":"post/2022-02-15.md"}'),d={name:"post/2022-02-15.md"},w={id:"frontmatter-title",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),_=t("p",null,"在 windows 上安装 git 后，在安装目录会有一个 mingw64 的文件夹，这个文件夹里面放着 git 运行的依赖环境。 在维基百科上，是这样解释 mingw64 的:",-1),g=t("pre",null,[t("code",null,`MinGW-w64是自由及开放源代码软件开发环境，用于创建Microsoft Windows应用程序。从
2005–2008从MinGW(Minimalist GNU for Windows)分支出来。

MinGW-w64包括对GCC、GNU Binutils的Windows版本的移植（汇编器、链接器、库文件管理器），
一套自由可分发的Windows特定的头文件与静态导入库以使用Windows API，一个Windows本地版本
的GNU的调试器，以及其它多种工具。

MinGW-w64可运行于本地Microsoft Windows平台，"cross-native"在MSYS2或Cygwin。
MinGW-w64能生成32或64位可执行程序，运行于i686-w64-mingw32或x86_64-w64-mingw32
目标平台。
`)],-1),m=t("p",null,"windows 下的 git 运行依赖于 mingw64，而 mingw64 实际上是 GNU 项目下一些软件环境的集合。而现在有了 WSL（Windows Subsystem for Linux），则可以在 windws 下使用 不依赖于 mingw64 的原生 git",-1),p=t("p",null,"首先需要做的是安装 WSL，网上已经有很多教程，这里就不再赘述。这些教程里一般会让你配置好开发环境，包括 git 这些。",-1),f=t("p",null,[n("接下来的操作都需要在Windows这边来进行。先下载"),t("a",{href:"https://github.com/andy-5/wslgit/releases/tag/v1.2.0",target:"_blank",rel:"noreferrer"},"wslgit.zip"),n("，解压后如下图所示： "),t("img",{src:r,alt:""}),n(" 右键instal.bat，使用管理员权限运行，得到bin文件夹： "),t("img",{src:l,alt:""}),n(" 最后需要做的就是将bin目录添加到环境变量，注销或重启电脑，这样你就可以愉快的使用原生git")],-1);function h(i,W,u,b,G,M){return e(),o("div",null,[t("h1",w,[n(a(i.$frontmatter.title)+" ",1),c]),_,g,m,p,f])}const x=s(d,[["render",h]]);export{N as __pageData,x as default};
