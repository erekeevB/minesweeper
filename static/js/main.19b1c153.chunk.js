(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{1:function(e,n,t){e.exports={minesweeper:"Minesweeper_minesweeper__29p3g",popup:"Minesweeper_popup__1hKIB",popup__buttons:"Minesweeper_popup__buttons__2H8aT",rows:"Minesweeper_rows__2vRxk",element:"Minesweeper_element__2pQnD",bomb:"Minesweeper_bomb__2FvRD",zero_element:"Minesweeper_zero_element__1XU0w",open:"Minesweeper_open__3zUUy"}},14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(0),o=t(2),s=t.n(o),i=t(8),r=t.n(i),a=(t(14),t(3)),b=(t(15),t(7)),u=t(1),p=t.n(u),m=function(e){var n=e.size,t=e.num,s=e.setIsSubmit,i=Object(o.useState)(!1),r=Object(a.a)(i,2),u=r[0],m=r[1],l=Object(o.useState)(!1),j=Object(a.a)(l,2),f=j[0],O=j[1],d=Object(o.useState)(!1),h=Object(a.a)(d,2),_=h[0],v=h[1],x=Object(o.useRef)(0),w=Object(o.useState)([]),M=Object(a.a)(w,2),k=M[0],C=M[1];Object(o.useEffect)((function(){for(var e=[],c=[],o=0;o<n;o+=1){for(var s=0;s<n;s+=1)e.push({bomb:0,isOpen:!1});c.push(e),e=[]}for(var i=0;i<t;i+=1){var r=Math.floor(Math.random()*Math.floor(n)),a=Math.floor(Math.random()*Math.floor(n));"bomb"!==c[r][a].bomb?c[r][a].bomb="bomb":i-=1}for(var b=function(e,n){for(var t=0,o=0;o<3;o+=1)for(var s=0;s<3;s+=1)1===o&&1===s||c[e-1+o]&&c[e-1+o][n-1+s]&&"bomb"===c[e-1+o][n-1+s].bomb&&(t+=1);return t},u=0;u<n;u+=1)for(var p=0;p<n;p+=1)"bomb"!==c[u][p].bomb&&(c[u][p].bomb=b(u,p));C(c),m(!1),v(!1),O(!1),x.current=0}),[_]);var N=function e(n,t,c){for(var o=-1;o<2;o+=1)for(var s=-1;s<2;s+=1)c[n+o]&&c[n+o][t+s]&&!c[n+o][t+s].isOpen&&(0===c[n+o][t+s].bomb?(x.current++,c[n+o][t+s].isOpen=!0,e(n+o,t+s,c)):"bomb"!==c[n+o][t+s].bomb&&(x.current++,c[n+o][t+s].isOpen=!0))},g=function(e,c){var o=k.map((function(e){return Object(b.a)(e)}));o[e][c].isOpen=!0,x.current=x.current+1,0===o[e][c].bomb&&N(e,c,o),n*n-t===x.current&&O(!0),C(o)};return Object(c.jsxs)("div",{className:p.a.minesweeper,children:[u?Object(c.jsxs)("div",{className:p.a.popup,children:[Object(c.jsx)("p",{children:"You Lost!"}),Object(c.jsxs)("div",{className:p.a.popup__buttons,children:[Object(c.jsx)("button",{onClick:function(){v(!0)},children:"Try Again"}),Object(c.jsx)("button",{className:p.a.params,onClick:function(){s(!1)},children:"Change Difficulty"})]})]}):null,f?Object(c.jsxs)("div",{className:p.a.popup,children:[Object(c.jsx)("p",{children:"You Won!"}),Object(c.jsxs)("div",{className:p.a.popup__buttons,children:[Object(c.jsx)("button",{onClick:function(){v(!0)},children:"New Game"}),Object(c.jsx)("button",{className:p.a.params,onClick:function(){s(!1)},children:"Change Difficulty"})]})]}):null,k.map((function(e,n){return Object(c.jsx)("div",{className:p.a.rows,children:e.map((function(e,t){return"bomb"===e.bomb?Object(c.jsx)("div",{className:e.isOpen?p.a.open+" "+p.a.bomb:p.a.bomb,onClick:function(){return function(){for(var e=k.map((function(e){return Object(b.a)(e)})),n=0;n<k.length;n+=1)for(var t=0;t<k.length;t+=1)e[n][t].isOpen=!0;C(e),m(!0)}()},children:"X"},n+"_"+t):0===e.bomb?Object(c.jsx)("div",{className:e.isOpen?p.a.zero_element+" "+p.a.open:p.a.element,onClick:function(){e.isOpen||g(n,t)},children:e.bomb},n+"_"+t):Object(c.jsx)("div",{className:e.isOpen?p.a.element+" "+p.a.open:p.a.element,onClick:function(){e.isOpen||g(n,t)},children:e.bomb},n+"_"+t)}))},n)}))]})};var l=function(){var e=Object(o.useState)({}),n=Object(a.a)(e,2),t=n[0],s=n[1],i=Object(o.useState)(!1),r=Object(a.a)(i,2),b=r[0],u=r[1],p=function(e){switch(console.log(e),e){case"easy":s({size:10,num:8});break;case"medium":s({size:15,num:20});break;case"hard":s({size:20,num:25})}u(!0)};return Object(c.jsx)("div",{className:"App",children:b?Object(c.jsx)(m,{size:t.size,num:t.num,setIsSubmit:u}):Object(c.jsxs)("div",{className:"input",children:[Object(c.jsx)("p",{children:"Select Difficulty"}),Object(c.jsx)("button",{onClick:function(){p("easy")},children:"Easy"}),Object(c.jsx)("button",{onClick:function(){p("medium")},children:"Medium"}),Object(c.jsx)("button",{onClick:function(){p("hard")},children:"Hard"})]})})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),c(e),o(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.19b1c153.chunk.js.map