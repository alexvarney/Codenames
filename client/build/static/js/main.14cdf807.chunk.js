(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{52:function(n,e,t){n.exports=t(93)},57:function(n,e,t){},90:function(n,e){},93:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(44),o=t.n(i),c=(t(57),t(1)),l=t(2),u=t(26),d=t(3),p=t(51);function f(){var n=Object(c.a)(['\n  & {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  & div {\n    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    transform-origin: 40px 40px;\n  }\n  & div:after {\n    content: " ";\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: ',";\n    margin: -4px 0 0 -4px;\n  }\n  & div:nth-child(1) {\n    animation-delay: -0.036s;\n  }\n  & div:nth-child(1):after {\n    top: 63px;\n    left: 63px;\n  }\n  & div:nth-child(2) {\n    animation-delay: -0.072s;\n  }\n  & div:nth-child(2):after {\n    top: 68px;\n    left: 56px;\n  }\n  & div:nth-child(3) {\n    animation-delay: -0.108s;\n  }\n  & div:nth-child(3):after {\n    top: 71px;\n    left: 48px;\n  }\n  & div:nth-child(4) {\n    animation-delay: -0.144s;\n  }\n  & div:nth-child(4):after {\n    top: 72px;\n    left: 40px;\n  }\n  & div:nth-child(5) {\n    animation-delay: -0.18s;\n  }\n  & div:nth-child(5):after {\n    top: 71px;\n    left: 32px;\n  }\n  & div:nth-child(6) {\n    animation-delay: -0.216s;\n  }\n  & div:nth-child(6):after {\n    top: 68px;\n    left: 24px;\n  }\n  & div:nth-child(7) {\n    animation-delay: -0.252s;\n  }\n  & div:nth-child(7):after {\n    top: 63px;\n    left: 17px;\n  }\n  & div:nth-child(8) {\n    animation-delay: -0.288s;\n  }\n  & div:nth-child(8):after {\n    top: 56px;\n    left: 12px;\n  }\n  @keyframes lds-roller {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return f=function(){return n},n}var s=l.b.div(f(),(function(n){var e;return null!==(e=n.color)&&void 0!==e?e:"#fff"}));function m(n){var e=n.color,t=Object(p.a)(n,["color"]);return r.a.createElement(s,Object.assign({color:e},t),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}function b(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: grid;\n  z-index: 100;\n  align-items: center;\n  justify-items: center;\n  pointer-events: none;\n"]);return b=function(){return n},n}var x=l.b.div(b());function g(){var n=Object(d.g)().id,e=Object(a.useContext)(xn),t=e.joinGame,i=e.socket,o=e.gameState;return Object(a.useEffect)((function(){n&&i&&(console.log("joining ".concat(n)),setTimeout((function(){return t(n)}),1500))}),[i]),o?r.a.createElement(d.a,{to:"/"}):r.a.createElement(x,null,r.a.createElement(m,{color:"#000"}))}function v(){var n=Object(c.a)(["\n          border: 8px solid #3695c4;\n        "]);return v=function(){return n},n}function h(){var n=Object(c.a)(["\n          border: 8px solid #c44236;\n        "]);return h=function(){return n},n}function j(){var n=Object(c.a)(["\n          border: 8px solid #131313;\n        "]);return j=function(){return n},n}function y(){var n=Object(c.a)(["\n          border: 8px solid #f1f1d9;\n        "]);return y=function(){return n},n}function E(){var n=Object(c.a)(["\n      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);\n      color: rgba(240, 240, 240, 0.57);\n    "]);return E=function(){return n},n}function O(){var n=Object(c.a)(["\n  color: #333333;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: ",";\n  margin: 5px;\n  cursor: pointer;\n  font-family: sans-serif;\n  display: flex;\n  justify-content: center;\n  font-weight: bold;\n  background-color: #f9f9f0;\n  \n  & > span {\n    padding: 5px;\n  }\n  transition: all 0.5s ease;\n\n  ","\n\n  ","\n\n  ","\n\n\n    @media screen and (max-width: 600px) {\n      padding: 5px;\n      border-width: 4px;\n      margin: 3px;\n      font-size: 11px;\n    }\n\n    @media screen and (max-width: 350px) {\n      padding: 2px;\n      border-width: 3px;\n      margin: 2px;\n      font-size: 10px;\n    }\n"]);return O=function(){return n},n}function k(){var n=Object(c.a)(["\n    background: repeating-linear-gradient(\n      -45deg,\n      #3695c4,\n      #3695c4 10px,\n      #62afd5 10px,\n      #62afd5 20px\n    );\n  "]);return k=function(){return n},n}function w(){var n=Object(c.a)(["\n    background: repeating-linear-gradient(\n      -45deg,\n      #c44236,\n      #c44236 10px,\n      #d56a60 10px,\n      #d56a60 20px\n    );\n  "]);return w=function(){return n},n}function S(){var n=Object(c.a)(["\n    background: repeating-linear-gradient(\n      -45deg,\n      #7d7d7d,\n      #7d7d7d 10px,\n      #9c9c9c 10px,\n      #9c9c9c 20px\n    );\n  "]);return S=function(){return n},n}function C(){var n=Object(c.a)(["\n    background: repeating-linear-gradient(\n      -45deg,\n      #f1f1d9,\n      #f1f1d9 10px,\n      #f9f9f0 10px,\n      #f9f9f0 20px\n    );\n    color: rgba(102, 102, 102, 0.57);\n  "]);return C=function(){return n},n}function G(){var n=Object(c.a)(["\n    background: repeating-linear-gradient(\n      45deg,\n      #dfe5e7,\n      #dfe5e7 10px,\n      #eaede3 10px,\n      #eaede3 20px\n    );\n  "]);return G=function(){return n},n}var N={unflipped:Object(l.a)(G()),flippedNeutral:Object(l.a)(C()),flippedSuddenDeath:Object(l.a)(S()),flippedRed:Object(l.a)(w()),flippedBlue:Object(l.a)(k())},z=l.b.div(O(),(function(n){return n.isSpymaster?"7px":"14px"}),(function(n){return n.flipped&&Object(l.a)(E())}),(function(n){return 0===n.type&&n.flipped?N.flippedNeutral:1===n.type&&n.flipped?N.flippedSuddenDeath:2===n.type&&n.flipped?N.flippedRed:3===n.type&&n.flipped?N.flippedBlue:null}),(function(n){return 0===n.type&&n.isSpymaster?Object(l.a)(y()):1===n.type&&n.isSpymaster?Object(l.a)(j()):2===n.type&&n.isSpymaster?Object(l.a)(h()):3===n.type&&n.isSpymaster?Object(l.a)(v()):null}));function D(n){var e=n.data,t=Object(a.useContext)(xn),i=t.flipTile,o=t.userState;return o?r.a.createElement(z,{onClick:function(){return i(e.id)},flipped:e.flipped,type:e.type,isSpymaster:o.isSpymaster},r.a.createElement("span",null,e.name)):null}function _(){var n=Object(c.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  max-width: 750px;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 5px;\n\n  @media screen and (max-width: 600px) {\n    margin: 10px 0 10px 0;\n    padding: 0;\n    grid-gap: 0px;\n  }\n"]);return _=function(){return n},n}function T(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  user-select: none;\n  background: rgba(0, 0, 0, 0.35);\n"]);return T=function(){return n},n}var I=l.b.div(T()),B=l.b.div(_());function J(){var n=Object(a.useContext)(xn).gameState;return r.a.createElement(I,null,r.a.createElement(B,null,Array.from(n.gameState).map((function(n){return r.a.createElement(D,{key:n.id,data:n})}))))}var M=t(8);function A(){var n=Object(c.a)(["\n  flex-grow: 1;\n  background-color: #2c3035;\n  border: 2px solid #3f454b;\n  font-size: 16px;\n  color: #f4f5f5;\n  padding: 5px;\n  :focus {\n    outline: none;\n  }\n  ::placeholder {\n    color: #6b7580;\n  }\n"]);return A=function(){return n},n}function R(){var n=Object(c.a)(["\n  background-color: #1f9382;\n  border: 2px solid #4b736d;\n  border-radius: 5px;\n  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.35);\n  margin-bottom: 10px;\n  text-align: center;\n  justify-self: center;\n  flex-grow: 1;\n  max-width: 75%;\n  :hover {\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  }\n  ","\n"]);return R=function(){return n},n}function U(){var n=Object(c.a)(["\n  ",";\n  border-radius: 0px 5px 5px 0px;\n  display: inline-block;\n  flex-basis: 30%;\n  background-color: #1f7e93;\n  border: 2px solid #3f454b;\n  border-left: none;\n  color: rgba(0, 0, 0, 0.75);\n\n  :hover {\n    color: rgba(0, 0, 0, 0.5);\n    background-color: #1f7e93aa;\n  }\n"]);return U=function(){return n},n}function W(){var n=Object(c.a)(["\n  padding: 10px;\n  font-size: 16px;\n  cursor: pointer;\n  :active {\n    box-shadow: none;\n  }\n\n  :focus {\n    outline: none;\n  }\n"]);return W=function(){return n},n}function q(){var n=Object(c.a)(["\n  flex-basis: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  text-align: center;\n  & > span {\n    display: block;\n    padding: 10px;\n    font-size: 24px;\n  }\n"]);return q=function(){return n},n}function F(){var n=Object(c.a)(["\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n"]);return F=function(){return n},n}function L(){var n=Object(c.a)(["\n  width: 100%;\n  flex-basis: 100%;\n  flex-grow: 1;\n  display: flex;\n  margin-bottom: 5px;\n"]);return L=function(){return n},n}function P(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  & > div {\n    background-color: #6b7580a0;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-grow: 1;\n  }\n"]);return P=function(){return n},n}var $=l.b.div(P()),H=l.b.div(L()),K=l.b.div(F()),Q=l.b.div(q()),V=Object(l.a)(W()),X=l.b.button(U(),V),Y=l.b.button(R(),V),Z=l.b.input(A()),nn=t(49);function en(){var n=Object(c.a)(["\n  font-family: monospace;\n  transition: all 0.1s ease;\n  font-size: 14px;\n  color: ",";\n"]);return en=function(){return n},n}function tn(){var n=Object(c.a)(["\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  border-radius: 5px;\n  padding: 5px 10px 5px 10px;\n\n  & svg {\n    cursor: pointer;\n  }\n"]);return tn=function(){return n},n}var an=l.b.div(tn()),rn=l.b.span(en(),(function(n){return n.wasCopied?"grey":"white"}));function on(n){var e=Object(a.useContext)(xn),t=e.userState,i=e.gameState,o=e.setName,c=Object(a.useState)(""),l=Object(M.a)(c,2),u=l[0],d=l[1],p=Object(a.useState)(!1),f=Object(M.a)(p,2),s=f[0],m=f[1];Object(a.useEffect)((function(){var n=localStorage.getItem("nickname");t&&n&&t.nickname!==n&&o(n)}),[t]);var b=t&&t.nickname,x=i&&i.id;return r.a.createElement(an,null,r.a.createElement("p",null,"Game ID: ",r.a.createElement(rn,{wasCopied:s},x)," ",r.a.createElement(nn.a,{onClick:function(){var n;n="".concat(window.location.origin,"/#/join/").concat(x),navigator.permissions.query({name:"clipboard-write"}).then((function(e){"granted"!==e.state&&"prompt"!==e.state||navigator.clipboard.writeText(n)})),m(!0),setTimeout((function(){return m(!1)}),100)}})),r.a.createElement(H,null,r.a.createElement(Z,{value:u,onChange:function(n){return d(n.target.value)},placeholder:"Name: "+b}),r.a.createElement(X,{onClick:function(){localStorage.setItem("nickname",u),o(u),d("")}},"Set Nickname")))}function cn(n){var e=Object(a.useContext)(xn),t=e.joinGame,i=e.gameState,o=e.createGame,c=Object(a.useState)(""),l=Object(M.a)(c,2),u=l[0],d=l[1];return r.a.createElement($,null,r.a.createElement("div",null,r.a.createElement(Q,null,r.a.createElement("span",null,"CODENAMES")),r.a.createElement(K,null,r.a.createElement(Y,{onClick:function(n){n.preventDefault(),o()}},"New Game"),r.a.createElement(H,null,r.a.createElement(Z,{value:u,onChange:function(n){return d(n.target.value)},placeholder:"Game ID"}),r.a.createElement(X,{onClick:function(){return t(u)}},"Join Game")),i&&r.a.createElement(on,null))))}function ln(){var n=Object(c.a)(["\n  display: block;\n  background-color: rgba(0, 0, 0, 0.55);\n  color: rgba(255, 255, 255, 0.75);\n  margin: 3px;\n  padding: 3px;\n"]);return ln=function(){return n},n}function un(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  min-height: 300px;\n  font-family: sans-serif;\n  & > * {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 33%;\n    text-align: center;\n    justify-content: flex-start;\n    margin: 0;\n\n    & > button {\n      background-color: rgba(0, 0, 0, 0.75);\n      color: white;\n      height: 35px;\n      margin: 5px;\n      border: none;\n      transform: all 0.35s ease;\n\n      :hover {\n        background-color: rgba(0, 0, 0, 0.5);\n      }\n\n      :focus {\n        outline: none;\n      }\n    }\n\n    & > p {\n      display: block;\n      background-color: rgba(0, 0, 0, 0.75);\n      margin: 0;\n      padding: 7px;\n      color: rgba(255, 255, 255, 0.75);\n    }\n  }\n  & > div:nth-child(1) {\n    background: #f9f9f0a0;\n  }\n  & > div:nth-child(2) {\n    background: #d56a60a0;\n  }\n  & > div:nth-child(3) {\n    background: #62afd5a0;\n  }\n"]);return un=function(){return n},n}var dn=l.b.div(un()),pn=l.b.span(ln());function fn(n){var e=Object(a.useContext)(xn),t=e.gameState,i=e.userState,o=e.joinTeam,c=e.setSpymaster;if(!t||!i)return null;var l=t.players.reduce((function(n,e){return e.team?1===e.team?n.red.push(e):2===e.team&&n.blue.push(e):n.none.push(e),n}),{red:[],blue:[],none:[]});return r.a.createElement(dn,null,r.a.createElement("div",null,r.a.createElement("p",null,"UNASSIGNED"),l.none.map((function(n){return r.a.createElement(pn,{key:n.id},n.nickname+(n.isSpymaster?" (Spymaster)":""))}))),r.a.createElement("div",null,r.a.createElement("p",null,"RED"),!i.isSpymaster&&!i.team&&r.a.createElement("button",{onClick:function(){return o(1)}},"Join"),l.red.map((function(n){return r.a.createElement(pn,{key:n.id},n.nickname+(n.isSpymaster?" (Spymaster)":""))})),l.red.find((function(n){return n.id===i.id}))&&!i.isSpymaster&&r.a.createElement("button",{onClick:function(){return c(!0)}},"Make Me Spymaster")),r.a.createElement("div",null,r.a.createElement("p",null,"BLUE"),!i.isSpymaster&&!i.team&&r.a.createElement("button",{onClick:function(){return o(2)}},"Join"),l.blue.map((function(n){return r.a.createElement(pn,{key:n.id},n.nickname+(n.isSpymaster?" (Spymaster)":""))})),l.blue.find((function(n){return n.id===i.id}))&&!i.isSpymaster&&r.a.createElement("button",{onClick:function(){return c(!0)}},"Make Me Spymaster")))}var sn=t(48),mn=t.n(sn);function bn(){var n=Object(c.a)(["\n  width: 100%;\n  max-width: 750px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n"]);return bn=function(){return n},n}var xn=r.a.createContext(),gn=l.b.div(bn());var vn=function(){var n=function(n){var e=Object(a.useState)(null),t=Object(M.a)(e,2),r=t[0],i=t[1],o=Object(a.useState)(null),c=Object(M.a)(o,2),l=c[0],u=c[1],d=Object(a.useState)(null),p=Object(M.a)(d,2),f=p[0],s=p[1];Object(a.useEffect)((function(){var e=mn()(n);return i(e),function(){r.close()}}),[]),Object(a.useEffect)((function(){r&&(r.on("game_update",(function(n){u(n)})),r.on("player_update",(function(n){s(n)})))}),[r]);return{socket:r,gameState:l,setName:function(n){r&&r.emit("set_nickname",n)},createGame:function(){r&&r.emit("create_game")},userState:f,flipTile:function(n){r&&r.emit("flip_tile",n)},joinGame:function(n){r&&r.emit("join_game",n)},joinTeam:function(n){r&&r.emit("set_team",n)},setSpymaster:function(n){r&&r.emit("set_spymaster",n)}}}("/"),e=n.gameState;return r.a.createElement(u.a,null,r.a.createElement(xn.Provider,{value:n},r.a.createElement(gn,null,r.a.createElement(cn,null),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement(fn,null))),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/join/:id"},r.a.createElement(g,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(vn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.14cdf807.chunk.js.map