import{_ as n,o as l,c as o,x as s,a as p,t as e,N as t}from"./chunks/framework.48f2030e.js";const r="/assets/1644201744305.5eb80403.png",A=JSON.parse('{"title":"winget 使用","description":"","frontmatter":{"title":"winget 使用","date":"2021-09-07T09:22:50.000Z","tags":["Tools"]},"headers":[],"relativePath":"post/12.md"}'),i={name:"post/12.md"},c={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),F=t(`<h2 id="什么是-winget" tabindex="-1">什么是 winget <a class="header-anchor" href="#什么是-winget" aria-label="Permalink to &quot;什么是 winget&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">用户可以在 Windows 10 和 Windows 11 计算机上使用 winget 命令行工具来发现、安装、升级、删除和配置应用程序。 此工具是 Windows 程序包管理器服务的客户端接口。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>windows 下的包管理工具,类似于 Ubuntu 下的 apt.windows 上之前也有一些其他的包管理工具,像 Chocolatey Scoop. winget 是微软为 win10 开发的一款开源的软件包管理器,至少 需要 windows 10 1709(版本 16299)及以上版本</p><h2 id="为什么要用包管理器" tabindex="-1">为什么要用包管理器 <a class="header-anchor" href="#为什么要用包管理器" aria-label="Permalink to &quot;为什么要用包管理器&quot;">​</a></h2><ul><li>降低安装维护软件的成本</li><li>避免安装大量软件造成的路径污染</li><li>不必查找和安装软件的其他依赖项</li><li>避免捆绑和垃圾软件</li><li>彻底地卸载</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>打开 Microsoft Store,更新&quot;应用安装程式&quot;即可,安装完成后,打开 CMD 或者 powershell,输入 winget 查看命令</p><p><img src="`+r+`" alt=""></p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><p>winget 提供了常用的命令,如果不清楚的话,可以使用 winget [&lt;命令&gt;] -?查看帮助文档</p><ul><li>install 安装给定的程序包</li><li>show 显示包的相关信息</li><li>source 管理程序包的来源</li><li>search 查找并显示程序包的基本信息</li><li>list 显示已安装的程序包</li><li>upgrade 升级给定的程序包</li><li>uninstall 卸载给定的程序包</li><li>hash 哈希安装程序的帮助程序</li><li>validate 验证清单文件</li><li>settings 打开设置或设置管理员设置</li><li>features 显示实验性功能的状态</li><li>export 导出已安装程序包的列表</li><li>import 安装文件中的所有程序包</li></ul><p>有了 winget 之后,便不用从官网下载软件包,双击安装软件了.结合 powershell 可以实现一定程度的自动化操作</p><div class="language-ps1 line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ps1</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Google.Chrome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mozilla.Firefox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Discord.Discord</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Microsoft.WindowsTerminal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CPUID.CPU-Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hiyohiyo.CrystalDiskInfo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Git.Git</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Microsoft.PowerToys</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Valve.Steam</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Spotify.Spotify</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Microsoft.Teams</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ubisoft.Uplay</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Microsoft.VisualStudioCode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">WiresharkFoundation.Wireshark</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">foreach</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">winget install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">id </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>或者也可以使用 winget 自带的 import/export 命令,在一台已经装好软件的电脑上使用 export 命令,在另一台电脑上使用 import 命令, 便可以克隆一台电脑的软件环境</p>`,14);function y(a,u,C,d,b,m){return l(),o("div",null,[s("h1",c,[p(e(a.$frontmatter.title)+" ",1),D]),F])}const q=n(i,[["render",y]]);export{A as __pageData,q as default};