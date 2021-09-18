(this["webpackJsonptodoapp-redux"]=this["webpackJsonptodoapp-redux"]||[]).push([[7],{128:function(t,e,n){"use strict";var i=n(4),o=n(73),r=n(58),a=n(0),s=(n(19),n(132)),u=n(68),c=n(86),l=n(63);function d(t){return"scale(".concat(t,", ").concat(Math.pow(t,2),")")}var f={entering:{opacity:1,transform:d(1)},entered:{opacity:1,transform:"none"}},p=a.forwardRef((function(t,e){var n=t.children,p=t.disableStrictModeCompat,m=void 0!==p&&p,E=t.in,b=t.onEnter,h=t.onEntered,v=t.onEntering,x=t.onExit,O=t.onExited,g=t.onExiting,j=t.style,y=t.timeout,C=void 0===y?"auto":y,k=t.TransitionComponent,T=void 0===k?s.a:k,S=Object(r.a)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),w=a.useRef(),L=a.useRef(),R=Object(u.a)(),N=R.unstable_strictMode&&!m,D=a.useRef(null),M=Object(l.a)(n.ref,e),P=Object(l.a)(N?D:void 0,M),A=function(t){return function(e,n){if(t){var i=N?[D.current,e]:[e,n],r=Object(o.a)(i,2),a=r[0],s=r[1];void 0===s?t(a):t(a,s)}}},H=A(v),I=A((function(t,e){Object(c.b)(t);var n,i=Object(c.a)({style:j,timeout:C},{mode:"enter"}),o=i.duration,r=i.delay;"auto"===C?(n=R.transitions.getAutoHeightDuration(t.clientHeight),L.current=n):n=o,t.style.transition=[R.transitions.create("opacity",{duration:n,delay:r}),R.transitions.create("transform",{duration:.666*n,delay:r})].join(","),b&&b(t,e)})),W=A(h),z=A(g),B=A((function(t){var e,n=Object(c.a)({style:j,timeout:C},{mode:"exit"}),i=n.duration,o=n.delay;"auto"===C?(e=R.transitions.getAutoHeightDuration(t.clientHeight),L.current=e):e=i,t.style.transition=[R.transitions.create("opacity",{duration:e,delay:o}),R.transitions.create("transform",{duration:.666*e,delay:o||.333*e})].join(","),t.style.opacity="0",t.style.transform=d(.75),x&&x(t)})),G=A(O);return a.useEffect((function(){return function(){clearTimeout(w.current)}}),[]),a.createElement(T,Object(i.a)({appear:!0,in:E,nodeRef:N?D:void 0,onEnter:I,onEntered:W,onEntering:H,onExit:B,onExited:G,onExiting:z,addEndListener:function(t,e){var n=N?t:e;"auto"===C&&(w.current=setTimeout(n,L.current||0))},timeout:"auto"===C?null:C},S),(function(t,e){return a.cloneElement(n,Object(i.a)({style:Object(i.a)({opacity:0,transform:d(.75),visibility:"exited"!==t||E?void 0:"hidden"},f[t],j,n.props.style),ref:P},e))}))}));p.muiSupportAuto=!0,e.a=p},132:function(t,e,n){"use strict";var i=n(5),o=n(82),r=(n(19),n(0)),a=n.n(r),s=n(9),u=n.n(s),c=!1,l=n(92),d="unmounted",f="exited",p="entering",m="entered",E="exiting",b=function(t){function e(e,n){var i;i=t.call(this,e,n)||this;var o,r=n&&!n.isMounting?e.enter:e.appear;return i.appearStatus=null,e.in?r?(o=f,i.appearStatus=p):o=m:o=e.unmountOnExit||e.mountOnEnter?d:f,i.state={status:o},i.nextCallback=null,i}Object(o.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===d?{status:f}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==m&&(e=p):n!==p&&n!==m||(e=E)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,i=this.props.timeout;return t=e=n=i,null!=i&&"number"!==typeof i&&(t=i.exit,e=i.enter,n=void 0!==i.appear?i.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===p?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===f&&this.setState({status:d})},n.performEnter=function(t){var e=this,n=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[u.a.findDOMNode(this),i],r=o[0],a=o[1],s=this.getTimeouts(),l=i?s.appear:s.enter;!t&&!n||c?this.safeSetState({status:m},(function(){e.props.onEntered(r)})):(this.props.onEnter(r,a),this.safeSetState({status:p},(function(){e.props.onEntering(r,a),e.onTransitionEnd(l,(function(){e.safeSetState({status:m},(function(){e.props.onEntered(r,a)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:u.a.findDOMNode(this);e&&!c?(this.props.onExit(i),this.safeSetState({status:E},(function(){t.props.onExiting(i),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(i)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,e.nextCallback=null,t(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(n&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=o[0],a=o[1];this.props.addEndListener(r,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===d)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(i.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(l.a.Provider,{value:null},"function"===typeof n?n(t,o):a.a.cloneElement(a.a.Children.only(n),o))},e}(a.a.Component);function h(){}b.contextType=l.a,b.propTypes={},b.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},b.UNMOUNTED=d,b.EXITED=f,b.ENTERING=p,b.ENTERED=m,b.EXITING=E;e.a=b},182:function(t,e,n){"use strict";var i=n(0),o=n(72);e.a=Object(o.a)(i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},194:function(t,e,n){"use strict";var i=n(58),o=n(14),r=n(4),a=n(0),s=(n(19),n(59)),u=n(60),c=n(85),l=n(9),d=n(67),f=n(63),p=n(77);function m(t){return t.substring(2).toLowerCase()}var E=function(t){var e=t.children,n=t.disableReactTree,i=void 0!==n&&n,o=t.mouseEvent,r=void 0===o?"onClick":o,s=t.onClickAway,u=t.touchEvent,c=void 0===u?"onTouchEnd":u,E=a.useRef(!1),b=a.useRef(null),h=a.useRef(!1),v=a.useRef(!1);a.useEffect((function(){return setTimeout((function(){h.current=!0}),0),function(){h.current=!1}}),[]);var x=a.useCallback((function(t){b.current=l.findDOMNode(t)}),[]),O=Object(f.a)(e.ref,x),g=Object(p.a)((function(t){var e=v.current;if(v.current=!1,h.current&&b.current&&!function(t){return document.documentElement.clientWidth<t.clientX||document.documentElement.clientHeight<t.clientY}(t))if(E.current)E.current=!1;else{var n;if(t.composedPath)n=t.composedPath().indexOf(b.current)>-1;else n=!Object(d.a)(b.current).documentElement.contains(t.target)||b.current.contains(t.target);n||!i&&e||s(t)}})),j=function(t){return function(n){v.current=!0;var i=e.props[t];i&&i(n)}},y={ref:O};return!1!==c&&(y[c]=j(c)),a.useEffect((function(){if(!1!==c){var t=m(c),e=Object(d.a)(b.current),n=function(){E.current=!0};return e.addEventListener(t,g),e.addEventListener("touchmove",n),function(){e.removeEventListener(t,g),e.removeEventListener("touchmove",n)}}}),[g,c]),!1!==r&&(y[r]=j(r)),a.useEffect((function(){if(!1!==r){var t=m(r),e=Object(d.a)(b.current);return e.addEventListener(t,g),function(){e.removeEventListener(t,g)}}}),[g,r]),a.createElement(a.Fragment,null,a.cloneElement(e,y))},b=n(62),h=n(80),v=n(128),x=n(162),O=n(76),g=a.forwardRef((function(t,e){var n=t.action,o=t.classes,u=t.className,c=t.message,l=t.role,d=void 0===l?"alert":l,f=Object(i.a)(t,["action","classes","className","message","role"]);return a.createElement(x.a,Object(r.a)({role:d,square:!0,elevation:6,className:Object(s.a)(o.root,u),ref:e},f),a.createElement("div",{className:o.message},c),n?a.createElement("div",{className:o.action},n):null)})),j=Object(u.a)((function(t){var e="light"===t.palette.type?.8:.98,n=Object(O.c)(t.palette.background.default,e);return{root:Object(r.a)({},t.typography.body2,Object(o.a)({color:t.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:t.shape.borderRadius,flexGrow:1},t.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(g),y=a.forwardRef((function(t,e){var n=t.action,o=t.anchorOrigin,u=(o=void 0===o?{vertical:"bottom",horizontal:"center"}:o).vertical,l=o.horizontal,d=t.autoHideDuration,f=void 0===d?null:d,m=t.children,x=t.classes,O=t.className,g=t.ClickAwayListenerProps,y=t.ContentProps,C=t.disableWindowBlurListener,k=void 0!==C&&C,T=t.message,S=t.onClose,w=t.onEnter,L=t.onEntered,R=t.onEntering,N=t.onExit,D=t.onExited,M=t.onExiting,P=t.onMouseEnter,A=t.onMouseLeave,H=t.open,I=t.resumeHideDuration,W=t.TransitionComponent,z=void 0===W?v.a:W,B=t.transitionDuration,G=void 0===B?{enter:c.b.enteringScreen,exit:c.b.leavingScreen}:B,U=t.TransitionProps,X=Object(i.a)(t,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),F=a.useRef(),J=a.useState(!0),q=J[0],Y=J[1],_=Object(p.a)((function(){S&&S.apply(void 0,arguments)})),K=Object(p.a)((function(t){S&&null!=t&&(clearTimeout(F.current),F.current=setTimeout((function(){_(null,"timeout")}),t))}));a.useEffect((function(){return H&&K(f),function(){clearTimeout(F.current)}}),[H,f,K]);var Q=function(){clearTimeout(F.current)},V=a.useCallback((function(){null!=f&&K(null!=I?I:.5*f)}),[f,I,K]);return a.useEffect((function(){if(!k&&H)return window.addEventListener("focus",V),window.addEventListener("blur",Q),function(){window.removeEventListener("focus",V),window.removeEventListener("blur",Q)}}),[k,V,H]),!H&&q?null:a.createElement(E,Object(r.a)({onClickAway:function(t){S&&S(t,"clickaway")}},g),a.createElement("div",Object(r.a)({className:Object(s.a)(x.root,x["anchorOrigin".concat(Object(b.a)(u)).concat(Object(b.a)(l))],O),onMouseEnter:function(t){P&&P(t),Q()},onMouseLeave:function(t){A&&A(t),V()},ref:e},X),a.createElement(z,Object(r.a)({appear:!0,in:H,onEnter:Object(h.a)((function(){Y(!1)}),w),onEntered:L,onEntering:R,onExit:N,onExited:Object(h.a)((function(){Y(!0)}),D),onExiting:M,timeout:G,direction:"top"===u?"down":"up"},U),m||a.createElement(j,Object(r.a)({message:T,action:n},y)))))}));e.a=Object(u.a)((function(t){var e={top:8},n={bottom:8},i={justifyContent:"flex-end"},a={justifyContent:"flex-start"},s={top:24},u={bottom:24},c={right:24},l={left:24},d={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:t.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(r.a)({},e,Object(o.a)({},t.breakpoints.up("sm"),Object(r.a)({},s,d))),anchorOriginBottomCenter:Object(r.a)({},n,Object(o.a)({},t.breakpoints.up("sm"),Object(r.a)({},u,d))),anchorOriginTopRight:Object(r.a)({},e,i,Object(o.a)({},t.breakpoints.up("sm"),Object(r.a)({left:"auto"},s,c))),anchorOriginBottomRight:Object(r.a)({},n,i,Object(o.a)({},t.breakpoints.up("sm"),Object(r.a)({left:"auto"},u,c))),anchorOriginTopLeft:Object(r.a)({},e,a,Object(o.a)({},t.breakpoints.up("sm"),Object(r.a)({right:"auto"},s,l))),anchorOriginBottomLeft:Object(r.a)({},n,a,Object(o.a)({},t.breakpoints.up("sm"),Object(r.a)({right:"auto"},u,l)))}}),{flip:!1,name:"MuiSnackbar"})(y)},67:function(t,e,n){"use strict";function i(t){return t&&t.ownerDocument||document}n.d(e,"a",(function(){return i}))},68:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(195),o=(n(0),n(71));function r(){return Object(i.a)()||o.a}},80:function(t,e,n){"use strict";function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return null==e?t:function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];t.apply(this,i),e.apply(this,i)}}),(function(){}))}n.d(e,"a",(function(){return i}))},86:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var i=function(t){return t.scrollTop};function o(t,e){var n=t.timeout,i=t.style,o=void 0===i?{}:i;return{duration:o.transitionDuration||"number"===typeof n?n:n[e.mode]||0,delay:o.transitionDelay}}}}]);
//# sourceMappingURL=7.a6f51320.chunk.js.map