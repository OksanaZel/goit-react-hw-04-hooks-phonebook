(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{189:function(e,t,n){"use strict";n.r(t);var r,a,o=n(1),i=n.n(o),c=n(69),s=n.n(c),u=(n(86),n(4)),b=n(11),l=n(80),d=n(29),m=n(30),x=m.a.div(r||(r=Object(d.a)(["\nwidth: 900px;\nbackground: #FFFFFF;\nbox-shadow: 0px 4px 10px #2196f3;\nmargin: 20px auto;\npadding: 25px;\n"]))),h=m.a.h2(a||(a=Object(d.a)(["\nmargin-bottom: 25px;\n"]))),p=n(2);var j=function(e){var t=e.title;return Object(p.jsx)(h,{children:t})},f=n(70),g=n(71),O=n(5);var v=Object(O.a)("ul",{target:"e1c67hyh2"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),y=Object(O.a)("li",{target:"e1c67hyh1"})({name:"rfc8ve",styles:"display:flex;justify-content:space-between;align-items:center;margin-bottom:25px;max-width:450px;& svg{width:18px;height:18px;}"}),w=Object(O.a)("button",{target:"e1c67hyh0"})({name:"7smd10",styles:"display:flex;align-items:center;justify-content:center;min-width:200px;padding:2px 32px;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.15);border-radius:4px;border-style:none;cursor:pointer;font-weight:bold;font-size:16px;line-height:1.88;letter-spacing:0.06em;color:#ffffff;background-color:#2196f3;& svg{color:#fff;height:18px;width:18px;margin-right:10px;}"});var C=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(p.jsx)(v,{children:t.map((function(e){var t=e.id,r=e.name,a=e.number;return Object(p.jsxs)(y,{children:[Object(p.jsx)(f.a,{}),r,": ",a,Object(p.jsxs)(w,{onClick:function(){return n(t)},children:[Object(p.jsx)(g.a,{}),"Delete"]})]},t)}))})},S=n(34),k=n(77),F=n(79);var z=Object(O.a)("form",{target:"e12m5uby3"})(""),A=Object(O.a)("label",{target:"e12m5uby2"})({name:"1bxhhbb",styles:"display:flex;flex-direction:column;max-width:400px;margin-bottom:25px"}),J=Object(O.a)("input",{target:"e12m5uby1"})({name:"1n2s3mw",styles:"border:1px solid lightblue;border-radius:4px;font-size:20px;&:focus{outline:none;border:1px solid #2196f3;}"}),N=Object(O.a)("button",{target:"e12m5uby0"})({name:"1vnx97q",styles:"display:flex;align-items:center;justify-content:center;margin-bottom:25px;min-width:200px;padding:2px 32px;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.15);border-radius:4px;border-style:none;cursor:pointer;font-weight:bold;font-size:16px;line-height:1.88;letter-spacing:0.06em;color:#ffffff;background-color:#2196f3;& svg{height:18px;width:18px;margin-right:10px;}"});function L(e){var t=e.onSubmit,n=Object(F.a)({initialValues:{name:"",number:""},validationSchema:S.a({name:S.b().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.").required("O\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),number:S.b().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +").required("O\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")}),onSubmit:function(e,n){var r=n.setSubmitting,a=n.resetForm;t(e),r(!1),a()}});return Object(p.jsxs)(z,{onSubmit:n.handleSubmit,children:[Object(p.jsxs)(A,{children:["Name",Object(p.jsx)(J,{name:"name",type:"text",onChange:n.handleChange,value:n.values.name}),n.touched.name&&n.errors.name?Object(p.jsx)(p.Fragment,{children:n.errors.name}):null]}),Object(p.jsxs)(A,{children:["Number",Object(p.jsx)(J,{id:"number",name:"number",type:"text",onChange:n.handleChange,value:n.values.number}),n.touched.number&&n.errors.number?Object(p.jsx)(p.Fragment,{children:n.errors.number}):null]}),Object(p.jsxs)(N,{type:"submit",disabled:n.isSubmitting,children:[Object(p.jsx)(k.a,{})," Add contact"]})]})}var q=function(e){var t=e.value,n=e.onChange;return Object(p.jsxs)(A,{children:["Find contacts by name",Object(p.jsx)(J,{type:"text",value:t,onChange:n})]})},D=n(78);function E(){var e=Object(o.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:D})),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)(""),i=Object(b.a)(a,2),c=i[0],s=i[1];Object(o.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var d=function(){var e=c.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(p.jsxs)(x,{children:[Object(p.jsx)(j,{title:"Phonebook"}),Object(p.jsx)(L,{onSubmit:function(e){var t=e.name,a=e.number;if(n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))alert("".concat(t," is already in contacts"));else{var o={id:Object(l.a)(5),name:t,number:a};r((function(e){return[o].concat(Object(u.a)(e))}))}}}),Object(p.jsx)(q,{value:c,onChange:function(e){console.log(e.currentTarget.value),s(e.currentTarget.value)}}),Object(p.jsx)(j,{title:"Contacts"}),Object(p.jsx)(C,{contacts:d,onDeleteContact:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))},78:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},86:function(e,t,n){}},[[189,1,2]]]);
//# sourceMappingURL=main.0aa773bd.chunk.js.map