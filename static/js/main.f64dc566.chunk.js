(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),s=(a(85),a(30)),c=a(39),l=a(40),u=a(45),d=a(14),p=a(74),m=a(44),h=(a(86),a(41)),f=a(73),w=a(19),v=a.n(w),b=(a(143),a(31)),g=Object(f.a)({accessToken:"pk.eyJ1IjoibGVlb3kiLCJhIjoiY2twcDVlbGN4MDVtMDJwbzBsM2w3aWM3NyJ9.5gY9o0M0991T6bPIkgUFfQ"}),y={style:"mapbox://styles/mapbox/streets-v11",zoom:[13],containerStyle:{height:"100vh",width:"100%"}},k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onMapLoaded=function(e){e.addControl(a.draw),a.what();var t=function(e){return a.props.onFeaturesUpdated(e)};e.on("draw.create",function(e){return t(e.features)}),e.on("draw.update",function(e){return t(e.features)}),e.on("draw.delete",function(e){return t(e.features)})},a.draw=new v.a({displayControlsDefault:!1,userProperties:!0,defaultMode:"draw_circle",clickBuffer:10,touchBuffer:10,modes:Object(s.a)({},v.a.modes,{draw_circle:b.a,direct_select:b.b,simple_select:b.d,drag_circle:b.c})}),a.what=function(){console.log(this.draw.getAll().features),setTimeout(this.what,2e3)}.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){e.mode===this.props.mode&&this.props.features.length===this.draw.getAll().features.length||(console.log(this.props.mode),this.draw.deleteAll(),this.draw.changeMode(this.props.mode))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,Object.assign({},y,{onStyleLoad:function(t){return e.onMapLoaded(t)}})))}}]),t}(r.a.Component),j=a(178),O=a(182),S=a(184),E=a(181),C=a(6),M=a(183),_=[{key:1,value:"Circle",mode:"draw_circle"},{key:2,value:"Drag Circle",mode:"drag_circle"},{key:3,value:"Polygon",mode:"draw_polygon"},{key:4,value:"Line",mode:"draw_line_string"}],x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).initialState={selectedShape:_[0],mode:_[0].mode,features:[]},a.state=Object(s.a)({},a.initialState),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setState",value:function(e,a){Object(p.a)(Object(d.a)(t.prototype),"setState",this).call(this,e,a),console.log("what")}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.features[0],n=a&&a.properties.isCircle?a.properties.center.map(function(e){return e.toFixed(3)}):[];return r.a.createElement("div",null,r.a.createElement("div",{className:t.map},r.a.createElement(k,{onFeaturesUpdated:function(t){return e.setState({features:t})},features:this.state.features,mode:this.state.mode})),r.a.createElement("div",{className:t.shapeSelectContainer},r.a.createElement(j.a,null,r.a.createElement(O.a,{value:this.state.selectedShape.key?this.state.selectedShape.key:0,onChange:function(t){var a=_.find(function(e){return e.key===t.target.value});e.setState({selectedShape:a,mode:a.mode,features:[]})},inputProps:{name:"shape",id:"shape-selector"}},_.map(function(e){return r.a.createElement(S.a,{key:e.key,value:e.key},e.value)}))),r.a.createElement(E.a,{onClick:function(){return e.setState(Object(s.a)({},e.initialState))}},r.a.createElement(M.a,null))),r.a.createElement("div",{className:t.textContainer},r.a.createElement("p",null,"Center: [".concat(n.join(", "),"]")),r.a.createElement("p",null,"Radius: ".concat(a&&a.properties.isCircle?a.properties.radiusInKm.toFixed(4):"--"," kms"))))}}]),t}(r.a.Component),I=Object(C.a)(function(e){return{map:{zIndex:-1,position:"absolute",top:0,left:0,width:"100%"},shapeSelectContainer:{position:"absolute",verticalAlign:"middle",right:16,top:16},textContainer:{position:"absolute",bottom:32,left:16,background:"#eee",paddingLeft:16,paddingRight:16}}})(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a(155)},85:function(e,t,a){},86:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.f64dc566.chunk.js.map
