(this["webpackJsonptodoapp-redux"]=this["webpackJsonptodoapp-redux"]||[]).push([[1],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),o=n(9),a=!0,i=!1,c=null,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(a=!0)}function s(){a=!1}function d(){"hidden"===this.visibilityState&&i&&(a=!0)}function p(e){var t=e.target;try{return t.matches(":focus-visible")}catch(n){}return a||function(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!u[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function f(){i=!0,window.clearTimeout(c),c=window.setTimeout((function(){i=!1}),100)}function b(){return{isFocusVisible:p,onBlurVisible:f,ref:r.useCallback((function(e){var t,n=o.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",s,!0),t.addEventListener("pointerdown",s,!0),t.addEventListener("touchstart",s,!0),t.addEventListener("visibilitychange",d,!0))}),[])}}},162:function(e,t,n){"use strict";var r=n(58),o=n(4),a=n(0),i=(n(19),n(59)),c=n(60),u=a.forwardRef((function(e,t){var n=e.classes,c=e.className,u=e.component,l=void 0===u?"div":u,s=e.square,d=void 0!==s&&s,p=e.elevation,f=void 0===p?1:p,b=e.variant,h=void 0===b?"elevation":b,m=Object(r.a)(e,["classes","className","component","square","elevation","variant"]);return a.createElement(l,Object(o.a)({className:Object(i.a)(n.root,c,"outlined"===h?n.outlined:n["elevation".concat(f)],!d&&n.rounded),ref:t},m))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(o.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(u)},165:function(e,t,n){"use strict";var r=n(4),o=n(58),a=n(0),i=(n(19),n(59)),c=n(60),u=n(76),l=n(188),s=n(62),d=a.forwardRef((function(e,t){var n=e.edge,c=void 0!==n&&n,u=e.children,d=e.classes,p=e.className,f=e.color,b=void 0===f?"default":f,h=e.disabled,m=void 0!==h&&h,v=e.disableFocusRipple,y=void 0!==v&&v,g=e.size,O=void 0===g?"medium":g,E=Object(o.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return a.createElement(l.a,Object(r.a)({className:Object(i.a)(d.root,p,"default"!==b&&d["color".concat(Object(s.a)(b))],m&&d.disabled,"small"===O&&d["size".concat(Object(s.a)(O))],{start:d.edgeStart,end:d.edgeEnd}[c]),centerRipple:!0,focusRipple:!y,disabled:m,ref:t},E),a.createElement("span",{className:d.label},u))}));t.a=Object(c.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(u.a)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},188:function(e,t,n){"use strict";var r=n(4),o=n(58),a=n(0),i=n.n(a),c=(n(19),n(9)),u=n(59),l=n(63),s=n(77),d=n(60),p=n(108),f=n(81),b=n(5),h=n(102),m=n(82),v=n(92);function y(e,t){var n=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(a.isValidElement)(e)?t(e):e}(e)})),n}function g(e,t,n){return null!=n[t]?n[t]:e.props[t]}function O(e,t,n){var r=y(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),a=[];for(var i in e)i in t?a.length&&(o[i]=a,a=[]):a.push(i);var c={};for(var u in t){if(o[u])for(r=0;r<o[u].length;r++){var l=o[u][r];c[o[u][r]]=n(l)}c[u]=n(u)}for(r=0;r<a.length;r++)c[a[r]]=n(a[r]);return c}(t,r);return Object.keys(o).forEach((function(i){var c=o[i];if(Object(a.isValidElement)(c)){var u=i in t,l=i in r,s=t[i],d=Object(a.isValidElement)(s)&&!s.props.in;!l||u&&!d?l||!u||d?l&&u&&Object(a.isValidElement)(s)&&(o[i]=Object(a.cloneElement)(c,{onExited:n.bind(null,c),in:s.props.in,exit:g(c,"exit",e),enter:g(c,"enter",e)})):o[i]=Object(a.cloneElement)(c,{in:!1}):o[i]=Object(a.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:g(c,"exit",e),enter:g(c,"enter",e)})}})),o}var E=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},j=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(Object(h.a)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}Object(m.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,y(n.children,(function(e){return Object(a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:g(e,"appear",n),enter:g(e,"enter",n),exit:g(e,"exit",n)})}))):O(e,o,i),firstRender:!1}},n.handleExited=function(e,t){var n=y(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(r.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=Object(b.a)(e,["component","childFactory"]),o=this.state.contextValue,a=E(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.a.createElement(v.a.Provider,{value:o},a):i.a.createElement(v.a.Provider,{value:o},i.a.createElement(t,r,a))},t}(i.a.Component);j.propTypes={},j.defaultProps={component:"div",childFactory:function(e){return e}};var R=j,x="undefined"===typeof window?a.useEffect:a.useLayoutEffect;var k=function(e){var t=e.classes,n=e.pulsate,r=void 0!==n&&n,o=e.rippleX,i=e.rippleY,c=e.rippleSize,l=e.in,d=e.onExited,p=void 0===d?function(){}:d,f=e.timeout,b=a.useState(!1),h=b[0],m=b[1],v=Object(u.a)(t.ripple,t.rippleVisible,r&&t.ripplePulsate),y={width:c,height:c,top:-c/2+i,left:-c/2+o},g=Object(u.a)(t.child,h&&t.childLeaving,r&&t.childPulsate),O=Object(s.a)(p);return x((function(){if(!l){m(!0);var e=setTimeout(O,f);return function(){clearTimeout(e)}}}),[O,l,f]),a.createElement("span",{className:v,style:y},a.createElement("span",{className:g}))},w=a.forwardRef((function(e,t){var n=e.center,i=void 0!==n&&n,c=e.classes,l=e.className,s=Object(o.a)(e,["center","classes","className"]),d=a.useState([]),p=d[0],b=d[1],h=a.useRef(0),m=a.useRef(null);a.useEffect((function(){m.current&&(m.current(),m.current=null)}),[p]);var v=a.useRef(!1),y=a.useRef(null),g=a.useRef(null),O=a.useRef(null);a.useEffect((function(){return function(){clearTimeout(y.current)}}),[]);var E=a.useCallback((function(e){var t=e.pulsate,n=e.rippleX,r=e.rippleY,o=e.rippleSize,i=e.cb;b((function(e){return[].concat(Object(f.a)(e),[a.createElement(k,{key:h.current,classes:c,timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o})])})),h.current+=1,m.current=i}),[c]),j=a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.pulsate,o=void 0!==r&&r,a=t.center,c=void 0===a?i||t.pulsate:a,u=t.fakeElement,l=void 0!==u&&u;if("mousedown"===e.type&&v.current)v.current=!1;else{"touchstart"===e.type&&(v.current=!0);var s,d,p,f=l?null:O.current,b=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(b.width/2),d=Math.round(b.height/2);else{var h=e.touches?e.touches[0]:e,m=h.clientX,j=h.clientY;s=Math.round(m-b.left),d=Math.round(j-b.top)}if(c)(p=Math.sqrt((2*Math.pow(b.width,2)+Math.pow(b.height,2))/3))%2===0&&(p+=1);else{var R=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,x=2*Math.max(Math.abs((f?f.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(R,2)+Math.pow(x,2))}e.touches?null===g.current&&(g.current=function(){E({pulsate:o,rippleX:s,rippleY:d,rippleSize:p,cb:n})},y.current=setTimeout((function(){g.current&&(g.current(),g.current=null)}),80)):E({pulsate:o,rippleX:s,rippleY:d,rippleSize:p,cb:n})}}),[i,E]),x=a.useCallback((function(){j({},{pulsate:!0})}),[j]),w=a.useCallback((function(e,t){if(clearTimeout(y.current),"touchend"===e.type&&g.current)return e.persist(),g.current(),g.current=null,void(y.current=setTimeout((function(){w(e,t)})));g.current=null,b((function(e){return e.length>0?e.slice(1):e})),m.current=t}),[]);return a.useImperativeHandle(t,(function(){return{pulsate:x,start:j,stop:w}}),[x,j,w]),a.createElement("span",Object(r.a)({className:Object(u.a)(c.root,l),ref:O},s),a.createElement(R,{component:null,exit:!0},p))})),M=Object(d.a)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(a.memo(w)),T=a.forwardRef((function(e,t){var n=e.action,i=e.buttonRef,d=e.centerRipple,f=void 0!==d&&d,b=e.children,h=e.classes,m=e.className,v=e.component,y=void 0===v?"button":v,g=e.disabled,O=void 0!==g&&g,E=e.disableRipple,j=void 0!==E&&E,R=e.disableTouchRipple,x=void 0!==R&&R,k=e.focusRipple,w=void 0!==k&&k,T=e.focusVisibleClassName,C=e.onBlur,S=e.onClick,N=e.onFocus,V=e.onFocusVisible,D=e.onKeyDown,L=e.onKeyUp,z=e.onMouseDown,P=e.onMouseLeave,I=e.onMouseUp,F=e.onTouchEnd,B=e.onTouchMove,K=e.onTouchStart,X=e.onDragLeave,U=e.tabIndex,Y=void 0===U?0:U,$=e.TouchRippleProps,A=e.type,q=void 0===A?"button":A,H=Object(o.a)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),W=a.useRef(null);var J=a.useRef(null),G=a.useState(!1),Q=G[0],Z=G[1];O&&Q&&Z(!1);var _=Object(p.a)(),ee=_.isFocusVisible,te=_.onBlurVisible,ne=_.ref;function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x;return Object(s.a)((function(r){return t&&t(r),!n&&J.current&&J.current[e](r),!0}))}a.useImperativeHandle(n,(function(){return{focusVisible:function(){Z(!0),W.current.focus()}}}),[]),a.useEffect((function(){Q&&w&&!j&&J.current.pulsate()}),[j,w,Q]);var oe=re("start",z),ae=re("stop",X),ie=re("stop",I),ce=re("stop",(function(e){Q&&e.preventDefault(),P&&P(e)})),ue=re("start",K),le=re("stop",F),se=re("stop",B),de=re("stop",(function(e){Q&&(te(e),Z(!1)),C&&C(e)}),!1),pe=Object(s.a)((function(e){W.current||(W.current=e.currentTarget),ee(e)&&(Z(!0),V&&V(e)),N&&N(e)})),fe=function(){var e=c.findDOMNode(W.current);return y&&"button"!==y&&!("A"===e.tagName&&e.href)},be=a.useRef(!1),he=Object(s.a)((function(e){w&&!be.current&&Q&&J.current&&" "===e.key&&(be.current=!0,e.persist(),J.current.stop(e,(function(){J.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),D&&D(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!O&&(e.preventDefault(),S&&S(e))})),me=Object(s.a)((function(e){w&&" "===e.key&&J.current&&Q&&!e.defaultPrevented&&(be.current=!1,e.persist(),J.current.stop(e,(function(){J.current.pulsate(e)}))),L&&L(e),S&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&S(e)})),ve=y;"button"===ve&&H.href&&(ve="a");var ye={};"button"===ve?(ye.type=q,ye.disabled=O):("a"===ve&&H.href||(ye.role="button"),ye["aria-disabled"]=O);var ge=Object(l.a)(i,t),Oe=Object(l.a)(ne,W),Ee=Object(l.a)(ge,Oe),je=a.useState(!1),Re=je[0],xe=je[1];a.useEffect((function(){xe(!0)}),[]);var ke=Re&&!j&&!O;return a.createElement(ve,Object(r.a)({className:Object(u.a)(h.root,m,Q&&[h.focusVisible,T],O&&h.disabled),onBlur:de,onClick:S,onFocus:pe,onKeyDown:he,onKeyUp:me,onMouseDown:oe,onMouseLeave:ce,onMouseUp:ie,onDragLeave:ae,onTouchEnd:le,onTouchMove:se,onTouchStart:ue,ref:Ee,tabIndex:O?-1:Y},ye,H),b,ke?a.createElement(M,Object(r.a)({ref:J,center:f},$)):null)}));t.a=Object(d.a)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(T)},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n(79);function a(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){Object(o.a)(e,n),Object(o.a)(t,n)}}),[e,t])}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;function a(e){var t=r.useRef(e);return o((function(){t.current=e})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},79:function(e,t,n){"use strict";function r(e,t){"function"===typeof e?e(t):e&&(e.current=t)}n.d(t,"a",(function(){return r}))},92:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=o.a.createContext(null)}}]);
//# sourceMappingURL=1.02c425d2.chunk.js.map