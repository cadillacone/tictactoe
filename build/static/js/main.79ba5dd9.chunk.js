(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{10:function(e,t,a){},4:function(e,t,a){e.exports=a(5)},5:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),u=a(3),l=a.n(u);a(10);function s(e){return c.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}function i(e){return c.a.createElement("div",{className:"board"},e.squares.map((function(t,a){return c.a.createElement(s,{key:a,value:t,onClick:function(){return e.onClick(a)}})})))}function o(e){var t=c.a.useState([{squares:Array(9).fill(null)}]),a=Object(n.a)(t,2),r=a[0],u=a[1],l=c.a.useState(!0),s=Object(n.a)(l,2),o=s[0],f=s[1],v=c.a.useState(0),E=Object(n.a)(v,2),p=E[0],b=E[1];var d,k=r[p],g=m(k.squares);d=g?"Winner: "+g:"Next player: "+(o?"X":"O");var q=r.map((function(e,t){var a=t?"Move # "+t:"Start";return c.a.createElement("button",{key:t,onClick:function(){return function(e){b(e),f(e%2===0)}(t)}},a)}));return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(i,{squares:k.squares,onClick:function(e){return function(e){var t=r.slice(0,p+1),a=t[t.length-1].squares.slice();m(a)||a[e]||(a[e]=o?"X":"O",u(t.concat([{squares:a}])),b(t.length),f(!o))}(e)}})),c.a.createElement("div",{className:"game-info"},c.a.createElement("p",null,d),c.a.createElement("div",{className:"game-history"},c.a.createElement("p",null,"History:"),q)))}function m(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(n.a)(t[a],3),c=r[0],u=r[1],l=r[2];if(e[c]&&e[c]===e[u]&&e[c]===e[l])return e[c]}return null}l.a.render(c.a.createElement(o,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.79ba5dd9.chunk.js.map