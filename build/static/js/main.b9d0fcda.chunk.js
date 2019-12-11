(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},30:function(e,t,a){e.exports=a(50)},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),s=a.n(l),i=a(52),c=a(27),o=a(2),m=a(3),u=a(5),h=a(4),p=a(6),d=a(55),g=a(28),E=a(51),b=a(54),f=a(10),O=(a(47),a(48),a(53)),j=(a(13),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"main-description"},r.a.createElement("h1",null,"OLX BG")),r.a.createElement("main",null,r.a.createElement("section",null,this.props.items.map(function(t){return r.a.createElement("div",{className:"single-item",key:t._id},r.a.createElement("img",{src:t.imageUrl,alt:"pic"}),r.a.createElement("span",{className:"boldText"},"Product"),r.a.createElement("span",{className:"item-name"},t.itemName),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"boldText"},"Price"),r.a.createElement("span",{className:"item-price"},t.price),r.a.createElement("span",{className:"boldText"},"Status"),r.a.createElement("span",{className:"item-name"},t.status?"Approved":"Rejected"),e.props.isAdmin?r.a.createElement(n.Fragment,null,r.a.createElement(O.a,{className:"editButton",to:"edit/".concat(t._id)},"Edit"),r.a.createElement("button",{className:"deleteButton",onClick:function(){!function(e){var t={_id:e};fetch("http://localhost:9999/feed/item/delete",{method:"DELETE",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(f.toast.success("Item deleted successfully",{closeButton:!1})),this.props.history.push("/Home")}("".concat(t._id))},type:"submit"},"Delete")):r.a.createElement("div",{className:"userOrdDetailsBtns"},r.a.createElement(O.a,{className:"orderBtn",to:"details/".concat(t._id)},"Details"))))}))),r.a.createElement("footer",null,r.a.createElement("span",null,"OLX")))}}]),t}(r.a.Component)),C=Object(b.a)(j),y=a(11),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={username:null,password:null,repeatPassword:null},a.handleChange=e.handleChange.bind(Object(y.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.props.isLogged?r.a.createElement(E.a,{to:"/"}):r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:function(t){return e.props.handleSubmit(t,e.state,!0)}},r.a.createElement("div",{className:"register"},r.a.createElement("h1",null,"Register"),r.a.createElement("span",{className:"reg-info"},"Create your account.It`s free and takes only a minute."),r.a.createElement("span",null,"Username"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"username",placeholder:"Enter username"}),r.a.createElement("span",null,"Password"),r.a.createElement("input",{type:"password",onChange:this.handleChange,name:"password",placeholder:"Enter e-mail"}),r.a.createElement("span",null,"Repeat Password"),r.a.createElement("input",{type:"password",onChange:this.handleChange,name:"repeatPassword",placeholder:"Repeat password"}),r.a.createElement("button",null,"Register"))))}}]),t}(n.Component),N=Object(b.a)(v),S=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",{className:"navigation"},r.a.createElement("h2",null,"OLX"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(O.a,{exact:!0,to:"/"},"Home")),this.props.isAdmin?null:r.a.createElement(n.Fragment,null,r.a.createElement("li",null,r.a.createElement(O.a,{to:"/create"},"Create"))),this.props.username?r.a.createElement(n.Fragment,null,r.a.createElement("li",null,r.a.createElement(O.a,{to:"/",onClick:this.props.logout},"Logout")),r.a.createElement("li",{className:"logged-username"},"Welcome ",this.props.username,"!")):r.a.createElement(n.Fragment,null,r.a.createElement("li",null,r.a.createElement(O.a,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(O.a,{to:"/login"},"Login")))))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={username:null,password:null},a.handleChange=e.handleChange.bind(Object(y.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.props.isLogged?r.a.createElement(E.a,{to:"/"}):r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:function(t){return e.props.handleSubmit(t,e.state,!1)}},r.a.createElement("div",{className:"login"},r.a.createElement("h1",null,"Log In"),r.a.createElement("span",null,"Username"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"username",placeholder:"Enter username"}),r.a.createElement("span",null,"Password"),r.a.createElement("input",{type:"password",onChange:this.handleChange,name:"password",placeholder:"Enter password"}),r.a.createElement("button",null,"Log In"))))}}]),t}(n.Component),k=Object(b.a)(w),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={itemName:null,description:null,imageUrl:null,price:null,author:localStorage.getItem("userId"),status:!1},a.handleChange=e.handleChange.bind(Object(y.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"create-item"},r.a.createElement("h1",null,"Create Item"),r.a.createElement("span",null,"Item name"),r.a.createElement("form",{onSubmit:function(t){return e.props.handleCreateSubmit(t,e.state)}},r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"itemName",placeholder:"Enter item name"}),r.a.createElement("span",null,"Description"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"description",placeholder:"Enter item description"}),r.a.createElement("span",null,"Image Url"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"imageUrl",placeholder:"Enter item image URL"}),r.a.createElement("span",null,"Price"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"price",placeholder:"Enter pizza price"}),r.a.createElement("button",null,"Create item"))))}}]),t}(n.Component),I=Object(b.a)(L),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={itemName:"",description:"",imageUrl:"",price:""},a.handleChange=e.handleChange.bind(Object(y.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t={};this.props.items.forEach(function(a){a._id!==e.props.match.params.id||(t=a)});return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"edit-item"},r.a.createElement("form",{onSubmit:function(a){return function(a,n){a.preventDefault(),n._id=e.props.match.params.id,n.itemName=n.itemName?n.itemName:t.itemName,n.description=n.description?n.description:t.description,n.imageUrl=n.imageUrl?n.imageUrl:t.imageUrl,n.price=n.price?n.price:t.price,fetch("http://localhost:9999/feed/item/edit",{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(function(t){t.errors?f.toast.error("Something went wrong",{closeButton:!1}):(f.toast.success("item edited successfully",{closeButton:!1}),e.props.history.push("/"))})}(a,e.state)}},r.a.createElement("h1",null,"Edit item"),r.a.createElement("span",null,"item name"),r.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"".concat(t.itemName),readOnly:!1,name:"itemName"}),r.a.createElement("span",null,"Description"),r.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"".concat(t.description),name:"description"}),r.a.createElement("span",null,"Image Url"),r.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"".concat(t.imageUrl),name:"imageUrl"}),r.a.createElement("span",null,"Price"),r.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"".concat(t.price),name:"price"}),r.a.createElement("button",null,"Edit item"))))}}]),t}(n.Component),A=Object(b.a)(U),x=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("span",null,"Item Shop 2019"))}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t={};return this.props.items.forEach(function(a){a._id!==e.props.match.params.id||(t=a)}),r.a.createElement("div",{className:"details"},r.a.createElement("h1",null,"Details"),r.a.createElement("div",{className:"details-img"},r.a.createElement("img",{src:t.imageUrl,alt:"pic"})),r.a.createElement("p",{className:"product-description"},t.description),r.a.createElement(O.a,{to:"/",className:"continue-shopping1"},"Back to menu"))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={username:null,isAdmin:!1,isLogged:!1,items:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=sessionStorage.getItem("isAdmin");t="false"!==t;var a=sessionStorage.getItem("username");sessionStorage.getItem("username")&&this.setState({username:a,isAdmin:t}),fetch("http://localhost:9999/feed/items",{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({items:t.items})})}},{key:"handleChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"handleCreateSubmit",value:function(e,t){var a=this;e.preventDefault(),this.props.history.push("/home"),t.itemName&&t.description&&t.imageUrl&&t.price?fetch("http://localhost:9999/feed/item/create",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a.props.history.push("/Home"),e.errors?f.toast.error(e.message,{closeButton:!1}):f.toast.success(e.message,{closeButton:!1})}):f.toast.success("Please enter all fields",{closeButton:!1})}},{key:"handleSubmit",value:function(e,t,a){var n=this;e.preventDefault(),console.log(t.password),fetch("http://localhost:9999/auth/sign"+(a?"up":"in"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.username?(n.setState({username:e.username,isAdmin:e.isAdmin,isLogged:!0}),sessionStorage.setItem("username",e.username),sessionStorage.setItem("isAdmin",e.isAdmin),f.toast.success("Welcome, ".concat(e.username),{closeButton:!1})):f.toast.error(e.message,{closeButton:!1})})}},{key:"logout",value:function(){this.setState({username:null,isAdmin:!1,isLogged:!1}),f.toast.success("Logout successfull",{closeButton:!0}),sessionStorage.removeItem("isAdmin"),sessionStorage.removeItem("username")}},{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(f.ToastContainer,null),r.a.createElement(S,{isAdmin:this.state.isAdmin,username:this.state.username,logout:this.logout.bind(this),isLogged:this.state.isLogged}),r.a.createElement(d.a,null,r.a.createElement(g.a,{exact:!0,path:"/"},r.a.createElement(E.a,{to:"/Home"})),r.a.createElement(g.a,{path:"/Home",render:function(t){return r.a.createElement(C,Object.assign({},t,{items:e.state.items,isAdmin:e.state.isAdmin}))}}),r.a.createElement(g.a,{path:"/register",render:function(t){return r.a.createElement(N,Object.assign({},t,{handleSubmit:e.handleSubmit.bind(e),handleChange:e.handleChange,isLogged:e.state.isLogged}))}}),r.a.createElement(g.a,{path:"/login",render:function(t){return r.a.createElement(k,Object.assign({},t,{handleSubmit:e.handleSubmit.bind(e),handleChange:e.handleChange,isLogged:e.state.isLogged}))}}),r.a.createElement(g.a,{path:"/create",render:function(){return e.state.isAdmin?r.a.createElement(E.a,{to:{pathname:"/login"}}):r.a.createElement(I,{handleCreateSubmit:e.handleCreateSubmit.bind(e),handleChange:e.handleChange})}}),r.a.createElement(g.a,{path:"/details/:id",render:function(t){return r.a.createElement(B,Object.assign({},t,{items:e.state.items}))}}),"/>",r.a.createElement(g.a,{path:"/edit/:id",render:function(t){return r.a.createElement(A,Object.assign({},t,{items:e.state.items,handleChange:e.handleChange}))}}),r.a.createElement(g.a,{render:function(){return r.a.createElement("h1",null,"Page was not found!")}})),r.a.createElement(x,null))}}]),t}(n.Component),T=Object(b.a)(P);s.a.render(r.a.createElement(i.a,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.b9d0fcda.chunk.js.map