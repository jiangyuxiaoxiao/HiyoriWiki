import{_ as l,r as t,o as i,c as p,b as e,w as o,a as r,d as n,e as s}from"./app-4b0bc845.js";const u={},d=r('<h2 id="多bot连接支持" tabindex="-1"><a class="header-anchor" href="#多bot连接支持" aria-hidden="true">#</a> 多Bot连接支持</h2><ul><li><p><strong>插件路径</strong> <code>/Basic_plugins/MultiBot_Support</code></p></li><li><p><strong>插件介绍：</strong><br> 支持多个<code>go-cqhttp</code>与<code>妃爱</code>连接。以下将<code>go-cqhttp</code>简称为<code>bot</code>。当有多个<code>bot</code>处于同一群聊时，会根据配置或者默认的优先规则，选择其中一个<code>bot</code>对事件进行响应处理。</p></li><li><p><strong>插件功能详细说明：</strong><br> 当有多个<code>bot</code>连接时，处理群聊事件时会按照如下逻辑来寻找匹配的<code>bot</code>：</p><ul><li>当对应群聊无配置时，按默认的优先顺序进行匹配，否则按群聊配置进行匹配。</li><li>若<code>bot</code>不在群聊中，则跳过对应的<code>群聊匹配规则</code>与<code>默认匹配规则</code>。</li><li>若<code>bot</code>未连接，则跳过对应的<code>群聊匹配规则</code>与<code>默认匹配规则</code>。</li><li>当对应群聊存在配置的<code>bot</code>，且该<code>bot</code>已连接时，对应<code>bot</code>响应，其余<code>bot</code>全部不响应。</li><li>当对应群聊存在配置的<code>bot</code>，且该<code>bot</code>未连接时，则按默认优先顺序进行响应检查。</li></ul></li><li><p><strong>插件配置说明：</strong><br> 配置文件路径<code>/Data/MultiBot_Support/config.json</code><br> 配置文件格式：</p></li></ul>',2),k=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"默认优先顺序"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},'"填入"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"QQ号"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"注意"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"打引号"'),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"群组规则"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"填入"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"QQ号"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"群聊号"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"QQ号"'),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"默认优先顺序"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},'"123111111"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"456111111"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"789111111"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"159111111"'),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"群组规则"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"111111111"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"123111111"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"222222222"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"456111111"'),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("p",null,[s("当新的"),n("code",null,"bot"),s("连接时，若其不在"),n("code",null,"默认优先顺序"),s("列表中，会将其填入列表。")],-1);function g(v,_){const a=t("CodeGroupItem"),c=t("CodeGroup");return i(),p("div",null,[d,e(c,null,{default:o(()=>[e(a,{title:"示例1"},{default:o(()=>[k]),_:1}),e(a,{title:"示例2"},{default:o(()=>[b]),_:1})]),_:1}),m])}const f=l(u,[["render",g],["__file","SuperUserPlugins.html.vue"]]);export{f as default};
