(this["webpackJsonpcom.roadlesscreations.apuntesungs"]=this["webpackJsonpcom.roadlesscreations.apuntesungs"]||[]).push([[0],{106:function(e,t,a){e.exports=a(168)},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t),a.d(t,"getAllCareers",(function(){return c})),a.d(t,"getCareer",(function(){return i}));var n=a(36),r=new(a(45).a),c=function(){return fetch("".concat(n.a.serverURI,"/api/").concat(n.a.currentApiVersion,"/career")).then((function(e){return e.json()}))},i=function(e){return r.get("career",e)}},137:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t),a.d(t,"getAllNotes",(function(){return r})),a.d(t,"getNoteByAssignaure",(function(){return c}));var n=new(a(45).a),r=function(){return n.get("note")},c=function(e){return n.get("note",null,{assignatureid:e})}},168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),o=(a(111),a(16)),l=a(13),s=a(20),u=a(21),f=a(22),d=a(202),m=(a(112),function(){return r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement("img",{alt:"",src:"./logo.png"}))}),p=a(203),h=function(){return r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement(p.a,{animation:"border",variant:"primary"}))},g=a(204),b=a(205),v=a(36),E=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(m,null),r.a.createElement(b.a,null,r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement("h5",null,"Detectando ubicaci\xf3n...")),r.a.createElement(h,null)))}},{key:"componentDidMount",value:function(){var e=new FormData;e.append("lat",50),e.append("lon",60),function(e){if(!(e instanceof FormData))throw new Error("position must be a instance of FormData");var t="".concat(v.a.serverURI,"/login.php");return console.log(t),fetch(t,{method:"POST",data:e}).then((function(e){return e.json()}))}(e).then((function(e){e.isLogged&&(window.location.href="/home")}))}}]),t}(n.Component),j=a(35),y=a(3),O=a(27),w=(a(113),a(212)),C=a(52),x=a(218),k=a(220),S=a(211),I=a(114).getAllCareers,A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={careers:[],isLoading:!0},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;I().then((function(t){e.setState({careers:t.data.Careers,isLoading:!1})})).catch((function(e){}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.careers,n=t.isLoading;return r.a.createElement(k.a,{id:"career-select",className:"career-select",options:a,onChange:function(t,a){return e.props.onChange&&e.props.onChange(t,a)},getOptionLabel:function(e){return e.Name},renderInput:function(e){return r.a.createElement(x.a,Object.assign({fullWidth:!0},e,{label:"Carrera",placeholder:"Seleccione una carrera",InputProps:Object(C.a)({},e.InputProps,{endAdornment:r.a.createElement(r.a.Fragment,null,n?r.a.createElement(S.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}})}}]),t}(n.Component),N=a(76).getAssignatureByCareer,L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={assignatures:[],isLoading:!1,disabled:!0},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.careerId!==this.props.careerId&&this.props.careerId&&this.setState({disabled:!1,isLoading:!0},(function(){N(a.props.carrerId).then((function(e){a.setState({assignatures:e.data.Assignatures,isLoading:!1})})).catch((function(e){}))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.assignatures,n=t.isLoading,c=t.disabled;return r.a.createElement(k.a,{disabled:c,id:"assignature-select",className:"assignature-select",options:a,onChange:function(t,a){return e.props.onChange&&e.props.onChange(t,a)},getOptionLabel:function(e){return e.Name},renderInput:function(e){return r.a.createElement(x.a,Object.assign({fullWidth:!0},e,{label:"Materia",placeholder:"Seleccione una materia",InputProps:Object(C.a)({},e.InputProps,{endAdornment:r.a.createElement(r.a.Fragment,null,n?r.a.createElement(S.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}})}}]),t}(n.Component),F=(a(76).getAssignatureByCareer,function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).search=function(){window.location.href="/results?career=".concat(a.state.career.Id,"&assignature=").concat(a.state.assignature.Id)},a.state={career:null,assignature:null,isLoading:null},a.setCareer=a.setCareer.bind(Object(O.a)(a)),a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"setCareer",value:function(e){this.setState({career:e,isLoading:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.career,n=(t.isLoading,t.assignature);return r.a.createElement("div",{className:"search-form-container"},r.a.createElement("div",{className:"form-selects-row"},r.a.createElement(A,{onChange:function(t,a){return e.setState({career:a,isLoading:!0})}}),r.a.createElement(L,{careerId:a?a.Id:null,onChange:function(t,a){return e.setState({assignature:a})}})),r.a.createElement("div",{className:"from-action-container"},r.a.createElement("div",{className:"float-right"},r.a.createElement(w.a,{disabled:!a||!n,variant:"contained",color:"primary",onClick:function(){return e.search()}},"Buscar"))))}}]),t}(n.Component)),U=a(15),B=(a(137),a(86)),D=a.n(B),P=a(210),R=a(85),M=a.n(R),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={filesSelected:[],career:null},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"renderLabel",value:function(){var e=this,t=this.state.filesSelected;return t&&t.length?r.a.createElement(r.a.Fragment,null,t.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,t.name),r.a.createElement(P.a,{color:"primary",component:"span",onClick:function(){return e.deleteFile(t)}},r.a.createElement(D.a,null)),r.a.createElement("br",null))})),r.a.createElement("label",null,"Selecciona otro archivo")):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"real-apunte-btn"},"Seleccione archivo"),r.a.createElement("br",null))}},{key:"deleteFile",value:function(e){var t=this.state.filesSelected,a=Array.from(t).filter((function(t){return t.name!=e.name}));this.setState({filesSelected:a})}},{key:"render",value:function(){var e=this,t=this.state.career;return r.a.createElement("div",{className:"upload-form-container"},r.a.createElement("div",{className:"form-selects-row"},r.a.createElement(A,{onChange:function(t,a){return e.setState({career:a,isLoading:!0})}}),r.a.createElement(L,{careerId:t?t.Id:null,onChange:function(t,a){return e.setState({assignature:a})}})),r.a.createElement("div",{className:"from-action-container"},this.renderLabel(),r.a.createElement(M.a,{handleFiles:function(t){return e.setState((function(e){return{filesSelected:[].concat(Object(U.a)(t),Object(U.a)(e.filesSelected))}}))}},r.a.createElement(w.a,{type:"file",variant:"contained",color:"primary"},"Buscar..")),r.a.createElement("br",null),r.a.createElement("div",{className:"float-right"},r.a.createElement(w.a,{variant:"contained",color:"secondary",onClick:function(){return e.upLoad()}},"Subir"))))}}]),t}(n.Component),z=a(87),V=a.n(z),_=a(213),T=a(32),J=a(215),$=a(221),q=a(216),G=a(214),H=a(219),K=function(){var e=function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}},t=Object(_.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"}}})),a=function(e){var t=e.children,a=e.value,n=e.index,c=Object(y.a)(e,["children","value","index"]);return r.a.createElement(G.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),r.a.createElement(H.a,{p:3},t))},c=Object(n.useState)(0),i=Object(j.a)(c,2),o=i[0],l=i[1],s=Object(T.a)(),u=t();return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(m,null),r.a.createElement(J.a,{position:"static",color:"default"},r.a.createElement($.a,{value:o,onChange:function(e,t){return l(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},r.a.createElement(q.a,Object.assign({label:"Buscar Apuntes"},e(0))),r.a.createElement(q.a,Object.assign({label:"Subir Apuntes"},e(1))))),r.a.createElement(V.a,{className:u.root,axis:"rtl"===s.direction?"x-reverse":"x",index:o},r.a.createElement(a,{value:o,index:0,dir:s.direction},r.a.createElement(F,null)),r.a.createElement(a,{value:o,index:1,dir:s.direction},r.a.createElement(W,null)))))},Q=a(222),X=a(217),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={fa_extension:"fa fa-file-o"},a.extensionToFontAwesome={pdf:"fa fa-file-pdf-o"},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement(Q.a,{style:{width:"75%"}},r.a.createElement(Q.a.Body,null,r.a.createElement(g.a,null,r.a.createElement(d.a,null,r.a.createElement(X.a,{sm:"auto",className:"my-auto"},r.a.createElement("i",{className:this.state.fa_extension,style:{fontSize:"5em"}})),r.a.createElement(X.a,null,r.a.createElement(Q.a.Title,null,"".concat(this.props.filename).concat(this.props.extension)),r.a.createElement(Q.a.Text,null,this.props.description),r.a.createElement(w.a,{color:"secondary",href:this.props.url},"Descargar")))))))}},{key:"componentDidMount",value:function(){var e={word:[".doc",".docx",".odt"],excel:[".xls",".xlsx",".csv",".xps"],slide:[".ppt",".pptx",".pps",".ppsx",".odp"],text:[".txt",".md",".markdown"],video:[".mp4",".avi",".3gp",".wmv"],audio:[".mp3",".m4a",".ogg",".aac",".3gpp"],compressed:[".zip",".rar"],pdf:[".pdf"],book:[".epub"],imgs:[".jpg",".jpeg",".jfif",".png",".webp",".gif",".bmp",".dib",".tif",".tiff",".svg"],code:[".py",".java",".jar",".c",".cpp",".go",".asm",".js",".html",".css",".sass"]},t={word:"fa fa-file-word-o",excel:"fa fa-file-excel-o",slide:"fa fa-file-powerpoint-o",text:"fa fa-file-text-o",video:"fa fa-file-video-o",audio:"fa fa-file-audio-o",compressed:"fa fa-file-zip-o",pdf:"fa fa-file-pdf-o",book:"fa fa-book",imgs:"fa fa-file-picture-o",code:"fa fa-file-code-o"};for(var a in e)e[a].includes(this.props.extension)&&this.setState({fa_extension:t[a]})}}]),t}(n.Component),Z=a(158).getNoteByAssignaure,ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={results:null},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.getParams();t.assignature&&Z(t.assignature).then((function(t){e.setState({results:t.data.Notes})})).catch((function(e){}))}},{key:"getParams",value:function(){var e={},t=new URLSearchParams(window.location.search),a=!0,n=!1,r=void 0;try{for(var c,i=t[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var o=c.value;e[o[0]]=o[1]}}catch(l){n=!0,r=l}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}return e}},{key:"render",value:function(){return this.state.results?r.a.createElement(g.a,null,r.a.createElement(m,null),r.a.createElement(b.a,null,r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement("h5",null,"Apuntes encontrados")))):r.a.createElement(g.a,null,r.a.createElement(m,null),r.a.createElement(b.a,null,r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement("h5",null,"Buscando apuntes")),r.a.createElement(h,null),r.a.createElement(Y,{filename:"complejidad_computacional",extension:".java",url:"https://www.youtube.com/",description:"Soy una describicion."})))}}]),t}(n.Component),te=a(46),ae=function(){return r.a.createElement(te.b,{history:te.c},r.a.createElement(te.a,{path:"/",component:E}),r.a.createElement(te.a,{path:"/home",component:K}),r.a.createElement(te.a,{path:"/results",component:ee}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(167);document.addEventListener("deviceready",(function(){i.a.render(r.a.createElement(ae,{cordovaWork:!0}),document.getElementById("app"))}),!1),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},36:function(e,t,a){"use strict";t.a={serverURI:"https://repositorio-apuntes-ungs.000webhostapp.com",currentApiVersion:"1.0"}},45:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(16),r=a(13),c=a(36),i=a(115),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"".concat(c.a.serverURI,"/api/").concat(c.a.currentApiVersion);Object(n.a)(this,e),this.apiUri="",this.apiURI=t}return Object(r.a)(e,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t?"".concat(this.apiURI,"/").concat(e,"/").concat(t).concat(this.getFiltersUrl(a)):"".concat(this.apiURI,"/").concat(e).concat(this.getFiltersUrl(a));return i.get(n)}},{key:"parseFilterValue",value:function(e){return e._isAMomentObject?e.toISOString():e}},{key:"getFiltersUrl",value:function(e){var t=[];for(var a in e)void 0===e[a]?t.push(a):t.push("".concat(a,"=").concat(this.parseFilterValue(e[a])));return"?".concat(t.join("&"))}}]),e}()},76:function(e,t,a){"use strict";a.r(t),a.d(t,"getAllAssignatures",(function(){return r})),a.d(t,"getAssignature",(function(){return c})),a.d(t,"getAssignatureByCareer",(function(){return i}));var n=new(a(45).a),r=function(){return n.get("assignature")},c=function(e){return n.get("assignature",e)},i=function(e){return n.get("assignature",null,{careerid:e})}}},[[106,1,2]]]);
//# sourceMappingURL=main.06ec5d3f.chunk.js.map