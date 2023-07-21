"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[407],{9407:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var t,o,a,i,c,x,p,l,u,d,s,b,f,g=r(9439),m=r(2791),h=r(168),j=r(6444),v=j.ZP.ul(t||(t=(0,h.Z)(["\nmargin-left: auto;\n    margin-right: auto;\n    width: 500px;\n    padding: 20px;\n    background-color: #5c100a;\n    border: 1px solid #050000;\n    border-radius: 10px;\n    overflow: hidden;\n    box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),\n        0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n"]))),Z=j.ZP.li(o||(o=(0,h.Z)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    font-size: 16px;\n    button {\n        width: fit-content;\n        border-radius: 10px;\n        border-color: #050000;\n        text-align: center;\n        font-size: 12px;\n        margin-left: 10px;\n        cursor: pointer;\n        background-color: #f28a8a;\n        outline: none;\n        &:hover {\n            background-color: #5c100a ;\n            color: #fcf7f7;\n            border-color: #fff;\n        }\n    }\n"]))),k=r(9434),w=r(1538),y=r(6771),C=j.ZP.form(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  width: 300px;\n  background-color: #5c100a ;\n  padding: 20px;\n  border: 1px solid #050000;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n"]))),P=j.ZP.label(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  span {\n    color: #030bfc;\n  }\n"]))),z=j.ZP.input(c||(c=(0,h.Z)(["\n  padding: 5px;\n  font-size: 16px;\n  color: black;\n  text-align: center;\n  font-weight: 500;\n  border-color: #050000;\n  border-radius: 10px;\n  background-color: #f28a8a;\n  box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  outline: none;\n"]))),I=j.ZP.button(x||(x=(0,h.Z)(["\n  width: fit-content;\n  border-radius: 10px;\n  border-color: #050000;\n  text-align: center;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #f28a8a;\n  outline: none;\n  &:hover {\n    background-color: #5c100a;\n    color: #fcf7f7;\n  }\n"]))),S=j.ZP.div(p||(p=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),D=r(184),U=function(n){var e=n.dataUser,r=n.setData,t=(0,k.I0)(),o=(0,m.useState)(""),a=(0,g.Z)(o,2),i=a[0],c=a[1],x=(0,m.useState)(""),p=(0,g.Z)(x,2),l=p[0],u=p[1],d=function(n){var e=n.currentTarget,r=e.name,t=e.value;switch(r){case"name":c(t);break;case"number":u(t);break;default:return}},s=(0,k.v9)(y.Af),b=function(){c(""),u("")};return(0,D.jsxs)(C,{onSubmit:function(n){n.preventDefault(),-1===s.findIndex((function(n){return n.name===i}))?(t((0,w.Tk)({id:e.id,name:i,number:l})),r(null)):alert("".concat(i," is already in contacts.")),b()},children:[(0,D.jsxs)(P,{children:[(0,D.jsxs)("p",{children:["Current name: ",(0,D.jsx)("span",{children:e.name.toUpperCase()})]}),(0,D.jsx)(z,{type:"text",name:"name",value:i,placeholder:"new name",required:!0,onChange:d})]}),(0,D.jsxs)(P,{children:[(0,D.jsxs)("p",{children:["Current number: ",(0,D.jsx)("span",{children:e.number})]}),(0,D.jsx)(z,{type:"tel",name:"number",value:l,placeholder:"new number",required:!0,onChange:d})]}),(0,D.jsxs)(S,{children:[(0,D.jsx)(I,{type:"button",onClick:function(){r(null)},children:"Cancel"}),(0,D.jsx)(I,{type:"submit",children:"Update contact"})]})]})},q=function(){var n=(0,k.I0)(),e=(0,m.useState)(null),r=(0,g.Z)(e,2),t=r[0],o=r[1],a=(0,k.v9)(y.f6),i=(0,k.v9)(y.NH);return(0,m.useEffect)((function(){n((0,w.yF)())}),[t,n]),(0,D.jsxs)(v,{children:[t&&(0,D.jsx)(U,{dataUser:t,setData:o}),!t&&a.map((function(e){return(0,D.jsxs)(Z,{children:[e.name,": ",e.number,!i&&(0,D.jsxs)("div",{children:[(0,D.jsx)("button",{type:"button",onClick:function(){return o({id:e.id,name:e.name,number:e.number})},children:"Update"}),(0,D.jsx)("button",{type:"button",onClick:function(){return n((0,w.GK)(e.id))},children:"Delete"})]})]},e.id)}))]})},A=j.ZP.form(l||(l=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    width: 300px;\n    background-color: #5c100a ;\n    padding: 20px;\n    border: 1px solid #050000 ;\n    margin-bottom: 20px;\n    border-radius: 10px;\n    box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),\n        0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n"]))),N=j.ZP.label(u||(u=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin-bottom: 20px;\n    font-size: 24px;\n    text-align: center;\n    font-weight: 700;\n"]))),T=j.ZP.input(d||(d=(0,h.Z)(["\n    padding: 5px;\n    font-size: 24px;\n    color: black;\n    text-align: center;\n    font-weight: 500;\n    border-color: #050000 ;\n    border-radius: 5px;\n    background-color: #f28a8a;\n    box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),\n        0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n    outline: none;\n"]))),_=j.ZP.button(s||(s=(0,h.Z)(["\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    border-radius: 10px;\n    border-color: #050000 ;\n    text-align: center;\n    font-size: 20px;\n    cursor: pointer;\n    background-color: #f28a8a;\n    outline: none;\n    &:hover {\n        background-color: #5c100a;\n        color: #fcf7f7;\n        border-color: #fff;\n    }\n"]))),F=function(){var n=(0,k.I0)(),e=(0,m.useState)(""),r=(0,g.Z)(e,2),t=r[0],o=r[1],a=(0,m.useState)(""),i=(0,g.Z)(a,2),c=i[0],x=i[1],p=function(n){var e=n.currentTarget,r=e.name,t=e.value;switch(r){case"name":o(t);break;case"number":x(t);break;default:return}},l=(0,k.v9)(y.Af),u=function(){o(""),x("")};return(0,D.jsxs)(A,{onSubmit:function(e){e.preventDefault(),-1===l.findIndex((function(n){return n.name===t}))?n((0,w.uK)({name:t,number:c})):alert("".concat(t," is already in contacts.")),u()},children:[(0,D.jsxs)(N,{children:["Name",(0,D.jsx)(T,{type:"text",name:"name",value:t,required:!0,onChange:p})]}),(0,D.jsxs)(N,{children:["Number",(0,D.jsx)(T,{type:"tel",name:"number",value:c,required:!0,onChange:p})]}),(0,D.jsx)(_,{type:"submit",children:"Add contact"})]})},E=j.ZP.label(b||(b=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n    margin-right: auto;\n    width: 540px;\n  margin-bottom: 20px;\n  gap: 5px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),G=j.ZP.input(f||(f=(0,h.Z)(["\n  padding: 5px;\n  font-size: 20px;\n  color: black;\n  text-align: center;\n  font-weight: 500;\n  border-color: #050000;\n  border-radius: 10px;\n  background-color: #f28a8a;\n  box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  outline: none;\n"]))),H=r(1634),K=function(){var n=(0,k.I0)(),e=(0,k.v9)(y.Gd);return(0,D.jsxs)(E,{children:["Find contacts by name",(0,D.jsx)(G,{type:"text",value:e,onChange:function(e){n((0,H.m)(e.currentTarget.value))}})]})},L=function(){var n=(0,k.I0)(),e=(0,k.v9)(y.Af),r=(0,k.v9)(y.NH),t=(0,k.v9)(y.zh);return(0,m.useEffect)((function(){n((0,w.yF)())}),[n]),(0,D.jsxs)("div",{children:[(0,D.jsx)("h1",{children:"Phonebook"}),(0,D.jsx)(F,{}),(0,D.jsx)("h2",{children:"Contacts:"}),(0,D.jsx)(K,{}),r&&(0,D.jsx)("p",{children:"Loading..."}),t&&(0,D.jsx)("p",{children:t}),0!==e.length&&(0,D.jsx)(q,{})]})}}}]);
//# sourceMappingURL=407.cf8af811.chunk.js.map