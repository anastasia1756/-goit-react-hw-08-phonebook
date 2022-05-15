"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[812,629,419,686,680,673,664,172,188,589,767],{3419:function(n,e,r){r.r(e),r.d(e,{ContactsPage:function(){return K}});var t,o,i=r(885),a=r(2791),s=r(2978),c=r(6895),u=r(7748),d=r(2005),l=r(6140),p=r(2007),m=r.n(p),g=r(168),h=r(955),f=h.ZP.ul(t||(t=(0,g.Z)(["\n  margin: 0;\n  padding: ",";\n"])),(function(n){return n.theme.spacing(5)})),x=h.ZP.button(o||(o=(0,g.Z)(["\n  display: inline-block;\n  margin-left: ",";\n  width: 80px;\n  height: 24px;\n  background: repeating-linear-gradient(45deg, black, transparent 100px);\n  color: ",";\n  cursor: pointer;\n  transition: ",";\n\n  :hover {\n    color: ",";\n    background-color: ",";\n    box-shadow: 1px 1px 25px 10px rgba(34, 25, 9, 0.4);\n  }\n  :before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      120deg,\n      transparent,\n      rgba(224, 218, 206, 0.4),\n      transparent\n    );\n    transition: all 650ms;\n  }\n  :disabled {\n    border: 1px solid #999999;\n    background-color: #cccccc;\n    color: #666666;\n  }\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.colors.craftPapper}),(function(n){return n.theme.animation()}),(function(n){return n.theme.colors.newspapper}),(function(n){return n.theme.colors.metalic})),b=r(3329),Z=function(n){var e=n.contacts,r=(0,u.jn)(),t=(0,i.Z)(r,2),o=t[0],a=t[1].isLoading;return(0,b.jsx)(f,{children:e.map((function(n){var e=n.name,r=n.id,t=n.number;return(0,b.jsxs)("li",{children:[e,": ",t,(0,b.jsx)(x,{type:"button",onClick:function(){return o(r)},disabled:a,children:"Delete"})]},r)}))})};m().ContactList={contacts:m().arrayOf(m().shape({name:m().string.isRequired,id:m().string.isRequired,number:m().number.isRequired})).isRequired,onDeleteClick:m().func.isRequired};var v,j,P,w,C,k,y,B=r(9135),L=h.ZP.button(v||(v=(0,g.Z)(["\n  background-color: transparent;\n  border: none;\n  position: absolute;\n  top: 69%;\n  right: 57%;\n"]))),q=h.ZP.input(j||(j=(0,g.Z)(["\n  display: block;\n  width: 250px;\n  height: 22px;\n"]))),A=h.ZP.div(P||(P=(0,g.Z)(["\n  position: relative;\n"]))),z=function(){var n=(0,u.wY)().data,e=(0,s.v9)(c.zK),r=(0,s.I0)();return(0,b.jsx)(A,{children:n&&n.length>0&&(0,b.jsxs)("label",{children:["Find contacts by name",(0,b.jsx)(q,{type:"text",name:"filter",value:e,onChange:function(n){r((0,c.W1)(n.currentTarget.value))}}),e&&(0,b.jsx)(L,{onClick:function(){r((0,c.u5)(""))},children:(0,b.jsx)(B.asE,{})})]})})};m().Filter={filter:m().string.isRequired,contacts:m().arrayOf(m().shape({name:m().string.isRequired,id:m().string.isRequired,number:m().number.isRequired})).isRequired,onChange:m().func.isRequired,onClick:m().func};var R=h.ZP.form(w||(w=(0,g.Z)(["\n  border: ",";\n  max-width: 400px;\n  padding: ",";\n  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n  border-radius: 10px;\n"])),(function(n){return"2px solid ".concat(n.theme.colors.tin)}),(function(n){return n.theme.spacing(2)})),S=h.ZP.label(C||(C=(0,g.Z)(["\n  display: block;\n"]))),F=h.ZP.input(k||(k=(0,g.Z)(["\n  margin-left: ",";\n"])),(function(n){return n.theme.spacing(3)})),I=h.ZP.button(y||(y=(0,g.Z)(["\n  width: 150px;\n  height: 32px;\n  margin-bottom: 12px;\n  position: relative;\n  overflow: hidden;\n  color: ",";\n  background-color: ",";\n  transition: background-color ",";\n  cursor: pointer;\n\n  :hover {\n    color: ",";\n    background-color: ",';\n    box-shadow: 1px 1px 25px 10px rgba(34, 25, 9, 0.4);\n  }\n  :before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      120deg,\n      transparent,\n      rgba(224, 218, 206, 0.4),\n      transparent\n    );\n    transition: all 650ms;\n  }\n  :hover:before {\n    left: 100%;\n  }\n'])),(function(n){return n.theme.colors.newspapper}),(function(n){return n.theme.colors.tin}),(function(n){return"".concat(n.theme.animation())}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.metalic})),W=function(n){var e=n.onSubmit,r=(0,a.useState)(""),t=(0,i.Z)(r,2),o=t[0],s=t[1],c=(0,a.useState)(""),u=(0,i.Z)(c,2),d=u[0],l=u[1],p=function(n){var e=n.currentTarget,r=e.name,t=e.value;switch(r){case"name":s(t);break;case"number":l(t)}};return(0,b.jsxs)(R,{onSubmit:function(n){n.preventDefault(),e(o,d),s(""),l("")},children:[(0,b.jsxs)(S,{children:["Name",(0,b.jsx)(F,{type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p})]}),(0,b.jsxs)(S,{children:["Phone Number",(0,b.jsx)(F,{type:"tel",name:"number",value:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p})]}),(0,b.jsx)(I,{type:"submit",children:"Add contact"})]})};m().ContactForm={onSubmit:m().func.isRequired};var _,D,T,H=r(7029),N=h.ZP.div(_||(_=(0,g.Z)(["\n  background-color: ",";\n  margin: 0 auto;\n  max-width: 600px;\n  padding: ",";\n  border: 1px dashed black;\n  border-radius: 8%;\n  min-height: 650px;\n"])),(function(n){return n.theme.colors.newspapper}),(function(n){return n.theme.spacing(10)})),E=h.ZP.h1(D||(D=(0,g.Z)(["\n  margin: 0;\n  margin-left: ",";\n"])),(function(n){return n.theme.spacing()})),M=h.ZP.h2(T||(T=(0,g.Z)(["\n  margin: 0;\n  font-weight: 700;\n"]))),$=function(){var n=(0,u.wY)(),e=n.data,r=n.error,t=n.isLoading,o=(0,u.jW)(),a=(0,i.Z)(o,1)[0],p=(0,s.v9)(c.zK),m=function(){var n=p.toLowerCase();return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,b.jsxs)(N,{children:[(0,b.jsx)(E,{children:"Phonebook"}),(0,b.jsx)(W,{onSubmit:function(n,r){var t=(0,d.x0)(),o={name:n,id:t,number:r},i=null===e||void 0===e?void 0:e.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}));i?l.ZP.error("".concat(i.name," is already in contacts")):a(o),!i&&l.ZP.success("successfully added!",{style:{border:"1px solid #713200",padding:"16px",color:"#713200"},iconTheme:{primary:"#713200",secondary:"#FFFAEE"}})}}),(0,b.jsx)(l.x7,{}),(0,b.jsx)(M,{children:"Contacts"}),(0,b.jsx)(z,{}),r?(0,b.jsx)("p",{children:"No contacts yet"}):t?(0,b.jsx)(H.Nx,{color:"black"}):(0,b.jsx)(Z,{contacts:m})]})},K=function(){return(0,b.jsx)($,{})}},629:function(n,e,r){r.r(e),r.d(e,{ContactsPage:function(){return t.ContactsPage}});var t=r(3419)},680:function(n,e,r){r.r(e),r.d(e,{HomePage:function(){return i}});var t=r(8619),o=r(3329),i=function(){return(0,o.jsx)("div",{children:(0,o.jsxs)("h2",{children:["Welcome to our Phonebook!",(0,o.jsx)(t.Z,{sx:{mr:.5,fontSize:30,marginLeft:3,color:"#DAC3B3"}})]})})}},1686:function(n,e,r){r.r(e),r.d(e,{HomePage:function(){return t.HomePage}});var t=r(680)},6664:function(n,e,r){r.r(e),r.d(e,{LoginPage:function(){return h}});var t=r(1413),o=(r(2791),r(3896)),i=r(2978),a=r(5822),s=r(8096),c=r(7133),u=r(192),d=r(1889),l=r(2172),p=r(5970),m=r(6140),g=r(3329),h=function(){var n=(0,i.I0)(),e=(0,o.cI)({}),r=e.register,h=e.handleSubmit,f=e.formState.errors,x=e.resetField;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(d.ZP,{container:!0,alignItems:"center",justify:"center",direction:"column",children:(0,g.jsx)("form",{onSubmit:h((function(e){var r=e.email,t=e.password;x("email"),x("password"),n((0,a.Ib)({email:r,password:t}))})),children:(0,g.jsxs)(s.Z,{sx:{backgroundColor:"#ffffff",padding:"25px",border:"1px dashed black",borderRadius:"8%"},children:[(0,g.jsx)(c.Z,{sx:{margin:"15px auto",fontWeight:"700",fontSize:"32px"},children:"Log In"}),(0,g.jsx)(d.ZP,{item:!0,children:(0,g.jsx)(u.Z,(0,t.Z)({required:!0,id:"outlined-required",label:"Email",InputLabelProps:{style:{color:"#6C5F5B",fontWeight:700}},inputProps:{style:{width:"300px",backgroundColor:"#DAC3B3"}},sx:{marginBottom:"20px"}},r("email",{pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})))}),(0,g.jsx)(p.B,{errors:f,name:"email",render:function(n){var e=n.message;return(0,g.jsx)("p",{style:{marginTop:-15,color:"red",fontSize:12,width:200},children:e})}}),(0,g.jsx)(u.Z,(0,t.Z)({placeholder:"Password",required:!0,id:"outlined-required",label:"Password",type:"password",autoComplete:"off",InputLabelProps:{style:{color:"#DAC3B3",fontWeight:700}},inputProps:{style:{width:"300px",backgroundColor:"#6C5F5B"}},sx:{marginBottom:"20px"}},r("password",{minLength:{value:8,message:"Min length is 8 characters"}}))),(0,g.jsx)(p.B,{errors:f,name:"password",render:function(n){var e=n.message;return(0,g.jsx)("p",{style:{marginTop:-15,color:"red",fontSize:12,width:200},children:e})}}),(0,g.jsx)(l.Btn,{type:"submit",InputLabelProps:{style:{color:"#6C5F5B",fontWeight:700}},sx:{marginBottom:"20px"}}),(0,g.jsx)(m.x7,{})]})})})})}},2172:function(n,e,r){r.r(e),r.d(e,{Btn:function(){return a}});var t,o=r(168),i=r(192),a=(0,r(955).ZP)(i.Z)(t||(t=(0,o.Z)(["\n  background-color: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.newspapper}),(function(n){return n.theme.colors.tin}))},7673:function(n,e,r){r.r(e),r.d(e,{LoginPage:function(){return t.LoginPage}});var t=r(6664)},9589:function(n,e,r){r.r(e),r.d(e,{RegisterPage:function(){return h}});var t=r(1413),o=(r(2791),r(3896)),i=r(2978),a=r(5822),s=r(8096),c=r(7133),u=r(192),d=r(1889),l=r(767),p=r(5970),m=r(6140),g=r(3329),h=function(){var n=(0,i.I0)(),e=(0,o.cI)({}),r=e.register,h=e.handleSubmit,f=e.formState.errors,x=e.resetField;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(d.ZP,{container:!0,alignItems:"center",justify:"center",direction:"column",children:(0,g.jsx)("form",{onSubmit:h((function(e){console.log(e),x("name"),x("email"),x("password"),n((0,a.l9)(e))})),children:(0,g.jsxs)(s.Z,{sx:{backgroundColor:"#ffffff",padding:"25px",border:"1px dashed black",borderRadius:"8%"},children:[(0,g.jsx)(c.Z,{sx:{margin:"15px auto",fontWeight:"700",fontSize:"32px"},children:"Registration"}),(0,g.jsx)(d.ZP,{item:!0,children:(0,g.jsx)(u.Z,(0,t.Z)({required:!0,id:"outlined-required",label:"Name",InputLabelProps:{style:{color:"#6C5F5B",fontWeight:700}},inputProps:{style:{width:"300px",backgroundColor:"#DAC3B3"}},sx:{marginBottom:"20px"}},r("name",{required:!0,pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"The name must contain the characters only"}})))}),(0,g.jsx)(p.B,{errors:f,name:"name",render:function(n){var e=n.message;return(0,g.jsx)("p",{style:{marginTop:-15,color:"red",fontSize:12,width:300},children:e})}}),(0,g.jsx)(d.ZP,{item:!0,children:(0,g.jsx)(u.Z,(0,t.Z)({required:!0,id:"outlined-required",label:"Email",InputLabelProps:{style:{color:"#DAC3B3",fontWeight:700}},inputProps:{style:{width:"300px",backgroundColor:"#6C5F5B"}},sx:{marginBottom:"20px"}},r("email",{pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})))}),(0,g.jsx)(p.B,{errors:f,name:"email",render:function(n){var e=n.message;return(0,g.jsx)("p",{style:{marginTop:-15,color:"red",fontSize:12,width:200},children:e})}}),(0,g.jsx)(u.Z,(0,t.Z)({placeholder:"Password",required:!0,id:"outlined-required",label:"Password",type:"password",autoComplete:"off",InputLabelProps:{style:{color:"#6C5F5B",fontWeight:700}},inputProps:{style:{width:"300px",backgroundColor:"#DAC3B3"}},sx:{marginBottom:"20px"}},r("password",{minLength:{value:8,message:"Min length is 8 characters"}}))),(0,g.jsx)(p.B,{errors:f,name:"password",render:function(n){var e=n.message;return(0,g.jsx)("p",{style:{marginTop:-15,color:"red",fontSize:12,width:200},children:e})}}),(0,g.jsx)(l.Btn,{type:"submit",InputLabelProps:{style:{color:"#6C5F5B",fontWeight:700}},sx:{marginBottom:"20px"}}),(0,g.jsx)(m.x7,{})]})})})})}},767:function(n,e,r){r.r(e),r.d(e,{Btn:function(){return a}});var t,o=r(168),i=r(192),a=(0,r(955).ZP)(i.Z)(t||(t=(0,o.Z)(["\n  background-color: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.metalic}),(function(n){return n.theme.colors.newspapper}))},8188:function(n,e,r){r.r(e),r.d(e,{RegisterPage:function(){return t.RegisterPage}});var t=r(9589)},4812:function(n,e,r){r.r(e),r.d(e,{RegisterPage:function(){return t.RegisterPage},LoginPage:function(){return o.LoginPage},HomePage:function(){return i.HomePage},ContactsPage:function(){return a.ContactsPage}});var t=r(8188),o=r(7673),i=r(1686),a=r(629)},8619:function(n,e,r){var t=r(5318);e.Z=void 0;var o=t(r(5649)),i=r(3329),a=(0,o.default)((0,i.jsx)("path",{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"}),"ContactPhone");e.Z=a}}]);
//# sourceMappingURL=812.ef1c1933.chunk.js.map