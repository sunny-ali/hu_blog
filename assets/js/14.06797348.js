(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{496:function(e,s,t){"use strict";t.r(s);var a=t(4),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Warning: Permanently added the RSA host key for IP address '***********'")]),e._v(" "),t("p",[e._v("解决方法：")]),e._v(" "),t("p",[e._v("1.打开git bash")]),e._v(" "),t("p",[e._v("2.输入"),t("code",[e._v("cd C:")])]),e._v(" "),t("p",[e._v("3."),t("code",[e._v("cat ~/.ssh/id_rsa.pub")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20180508200859695#pic_center",alt:""}})]),e._v(" "),t("p",[e._v("4.应该会出现上图所示一大段字符串:ssh-rsa......，这就是所谓的publickey；但是如果提示报错的话则说明没有公钥，此时你应当自己创建一个公钥，输入")]),e._v(" "),t("p",[e._v("ssh-keygen\n然后一直回车就行，最后会生成一个矩形框框一样的东西，就说明公钥已经生成了，重复步骤3，那一大段就是publickey，右键copy复制。")]),e._v(" "),t("p",[e._v("5.打开浏览器登录你的github，点击右上角带黄色的头像--\x3esettings--\x3e（personal settings中的）SSH and GPG keys--\x3enew SSH key--\x3etitle自己取名，key中粘贴publickey--\x3eAdd SSH key--\x3e成功！")]),e._v(" "),t("p",[t("strong",[e._v("6.再次连接就可以啦。")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" git push origin master\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"如果-git-push的时候报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果-git-push的时候报错"}},[e._v("#")]),e._v(" 如果 git push的时候报错：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("error: failed to push some refs to 'git@github.com:xxx/xxx.git'\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020081414542915.jpg#pic_center",alt:"在这里插入图片描述"}})]),e._v(" "),t("p",[e._v("原因是由于 github 中的 README.md文件不在本地代码目录中，这时候可以通过")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" git pull --rebase origin master     //把代码合并\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("此时再执行 git push origin master 就可以完成上传到远程仓库的操作了")])])}),[],!1,null,null,null);s.default=r.exports}}]);