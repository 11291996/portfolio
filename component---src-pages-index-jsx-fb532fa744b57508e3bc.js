(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,t,a){"use strict";a.r(t);var n=a("mwIZ"),l=a.n(n),i=a("q1tI"),r=a.n(i),c=a("eNIv"),m=a("6uTu"),o=a("STHm"),s=function(e){var t=e.about;return r.a.createElement(o.a,{title:"About Me"},r.a.createElement("div",{className:"mb-6"},r.a.createElement("p",null,t)))},u=a("Wbzz"),d=a("hbLQ"),p=function(e){var t=e.posts;return r.a.createElement(o.a,{title:"Latest Posts"},t.map((function(e){return r.a.createElement(d.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})),t.length>=5&&r.a.createElement(u.Link,{className:"text-gray-500 text-sm hover:text-black",to:"https://11291996.github.io/portfolio/blog/"},"View all posts →"))},E=function(e){var t=e.education;return t.length?r.a.createElement(o.a,{title:"Education"},t.map((function(e){return r.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},f=function(e){var t=e.publication;return t.length?r.a.createElement(o.a,{title:"Publication"},t.map((function(e){return r.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},k=function(e){var t=e.experience;return t.length?r.a.createElement(o.a,{title:"Experience"},t.map((function(e){return r.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},g=function(e){var t=e.projects;return t.length?r.a.createElement(o.a,{title:"Projects"},t.map((function(e){return r.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},h=function(e){var t=e.skills;return r.a.createElement(o.a,{title:"Skills"},t.map((function(e){return r.a.createElement(d.a,{key:e.name,name:e.name,description:e.description})})))},v=a("ivnd");t.default=function(e){var t=e.data,a=l()(t,"site.siteMetadata.about",!1),n=l()(t,"site.siteMetadata.projects",!1),i=l()(t,"site.siteMetadata.publication",!1),o=l()(t,"site.siteMetadata.education",!1),u=t.allMarkdownRemark.edges,d=l()(t,"site.siteMetadata.experience",!1),b=l()(t,"site.siteMetadata.skills",!1),x=!u||!u.length;return r.a.createElement(m.a,null,r.a.createElement(v.a,null),r.a.createElement(c.a,{metadata:t.site.siteMetadata,noBlog:x}),a&&r.a.createElement(s,{about:a}),o&&o.length&&r.a.createElement(E,{education:o}),i&&i.length&&r.a.createElement(f,{publication:i}),n&&n.length&&r.a.createElement(g,{projects:n}),d&&d.length&&r.a.createElement(k,{experience:d}),b&&b.length&&r.a.createElement(h,{skills:b}),!x&&r.a.createElement(p,{posts:u}))}},STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i="block pt-12 md:flex",r="pb-6 md:w-full md:max-w-150 md:p-0",c="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",m="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=function(e){var t=e.title,a=e.children;return l.a.createElement("div",{className:i},l.a.createElement("div",{className:r},l.a.createElement("h2",{className:c},t)),l.a.createElement("div",{className:m},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),i=a.n(l),r="mb-6",c="font-semibold text-gray-900 pb-1",m="text-md text-gray-600 font-light";t.a=function(e){var t,a=e.name,l=e.description,o=e.link,s=void 0!==o&&o,u=e.internal;return t=void 0!==u&&u?i.a.createElement(n.Link,{to:s},a):i.a.createElement("a",{href:s},a),i.a.createElement("div",{className:r},i.a.createElement("h3",{className:c+" "+(s?"hover:underline hover:text-black":"")},s?t:a),i.a.createElement("p",{className:m},l))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-fb532fa744b57508e3bc.js.map