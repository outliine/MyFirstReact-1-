(this.webpackJsonpMyFirstReact=this.webpackJsonpMyFirstReact||[]).push([[0],{11:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(20),s=n.n(o),r=(n(30),n(11),n.p+"static/media/zdrive1.0db289fd.png"),l=n(0),i=n(21),d=n(22),j=n(25),b=n(24),h=n.p+"static/media/Abutton.b0b20384.png",m=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).addCount=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:this.addCount,children:Object(l.jsx)("img",{src:h})}),Object(l.jsxs)("p",{children:["HEXTECH POINTS:  = ",this.state.count]})]})}}]),n}(a.a.Component),u=n(3),p=n(23),O=n.n(p).a.create({baseURL:"http://localhost:8080/api/v1/",headers:{"Content-Type":"application/json"}});var x=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(l.jsx)("p",{children:"Welcome to Runterra!"}),Object(l.jsx)("p",{children:"Are you ready to experience Hextech magic?"}),Object(l.jsx)(m,{}),Object(l.jsx)("a",{className:"App-link",href:"https://arcane.com/en-sg/",target:"_blank",rel:"noopener noreferrer",children:"LEARN MORE ABOUT ARCANE"})]})})},f=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",children:"ARCANE"}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{className:"navbar-nav",children:[Object(l.jsx)("a",{className:"nav-link active",href:"/",children:"Home"}),Object(l.jsx)("a",{className:"nav-link",href:"/employees",children:"Champions"}),Object(l.jsx)("a",{className:"nav-link",href:"/add",children:"Add Champions"}),Object(l.jsx)("a",{className:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},v=n(8),g=n(2),y=function(){return O.get("/employee/employees")},N=function(e){return O.post("/employee/employees",e)},C=function(e){return O.get("/employee/employees/".concat(e))},k=function(e){return O.put("/employee/employees",e)},A=function(e){return O.delete("/employee/employees/".concat(e))},I=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),s=Object(u.a)(o,2),r=s[0],i=s[1],d=Object(c.useState)(""),j=Object(u.a)(d,2),b=j[0],h=j[1],m=Object(g.f)(),p=Object(g.g)().employeeId;Object(c.useEffect)((function(){p&&C(p).then((function(e){a(e.data.name),i(e.data.location),h(e.data.department)})).catch((function(e){console.error("error, you're a failure",e)}))}),[]);return Object(c.useEffect)((function(){p&&C(p).then((function(e){a(e.data.name),i(e.data.location),h(e.data.department),console.log(e.data),console.log(e.location),console.log(e.department)})).catch((function(e){console.error("Error, like you're decision making!",e)}))}),[]),Object(l.jsxs)("div",{className:"container ",children:[Object(l.jsx)("h3",{children:"Add Champions"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"name",className:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Input Champion Name",onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"location",class:"form-label",children:"Location"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"location",placeholder:"Input Champion Location",onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"department",class:"form-label",children:"Department"}),Object(l.jsx)("input",{type:"text",class:"form-control",id:"department",placeholder:"Input Champion Department",onChange:function(e){return h(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault();var t={employeeId:p,name:n,location:r,department:b};p?k(t).then((function(e){console.log("Champion updated!"),m("/employees")})).catch((function(e){console.log("Ooooooo it went wrong!",e)})):N(t).then((function(e){console.log("Champion added!"),m("/employees")})).catch((function(e){console.log("Ooooooo it went wrong!",e)}))}(e)},children:"Save"})]})]})},w=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){o()}));var o=function(){y().then((function(e){a(e.data)})).catch((function(e){console.log("something went wrong, awts oks lang yan mag move on ka nalang")}))};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"List of Champions"}),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"table table-hover table-success",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"table-info table-dark",children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Department"}),Object(l.jsx)("td",{children:"Location"}),Object(l.jsx)("td",{children:"Actions"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.department}),Object(l.jsx)("td",{children:e.location}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"d-grid gap-4 d-md-flex",children:[Object(l.jsx)(v.b,{className:"btn btn-primary",to:"/edit/".concat(e.employeeId),children:"Update"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(t){return n=e.employeeId,void A(n).then((function(e){console.log("successfully deleted na siya sa buhay mo!"),o()})).catch((function(e){console.error("something went wrong, kaya kayo nagbebreak eh",e)}));var n},children:"Delete"})]})})]},e.employeeId)}))})]})})]})},E=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Page Not Found!"}),Object(l.jsx)("p",{children:"Parang siya di mo na makita"})]})},S=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(v.a,{children:Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{exact:!0,path:"/",element:Object(l.jsx)(x,{})}),Object(l.jsx)(g.a,{exact:!0,path:"/employees",element:Object(l.jsx)(w,{})}),Object(l.jsx)(g.a,{exact:!0,path:"/add",element:Object(l.jsx)(I,{})}),Object(l.jsx)(g.a,{exact:!0,path:"/edit/:employeeId",element:Object(l.jsx)(I,{})}),Object(l.jsx)(g.a,{exact:!0,path:"*",element:Object(l.jsx)(E,{})})]})})})};var L=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{}),Object(l.jsx)(S,{})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};n(50);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),R()}},[[51,1,2]]]);
//# sourceMappingURL=main.4d966081.chunk.js.map