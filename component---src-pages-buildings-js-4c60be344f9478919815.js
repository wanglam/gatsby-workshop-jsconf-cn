(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{232:function(A,e,a){"use strict";a.r(e);a(235),a(34);var t=a(0),r=a.n(t),n=a(61),i=a(238),s=a.n(i);function o(A,e){if(null==A)return{};var a,t,r=function(A,e){if(null==A)return{};var a,t,r={},n=Object.keys(A);for(t=0;t<n.length;t++)a=n[t],e.indexOf(a)>=0||(r[a]=A[a]);return r}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(t=0;t<n.length;t++)a=n[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(A,a)&&(r[a]=A[a])}return r}a(15);function c(A){var e,a,t="";if(A)if("object"==typeof A)if(A.push)for(e=0;e<A.length;e++)A[e]&&(a=c(A[e]))&&(t&&(t+=" "),t+=a);else for(e in A)A[e]&&(a=c(e))&&(t&&(t+=" "),t+=a);else"boolean"==typeof A||A.call||(t&&(t+=" "),t+=A);return t}var d=function(){for(var A,e=0,a="";e<arguments.length;)(A=c(arguments[e++]))&&(a&&(a+=" "),a+=A);return a},l=a(45),f=a.n(l);function g(){return(g=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(A[t]=a[t])}return A}).apply(this,arguments)}var E=r.a.forwardRef((function(A,e){var a=A.Tag,t=A.children,n=A.type,i=A.compact,s=A.danger,c=A.disabled,l=A.className,f=o(A,["Tag","children","type","compact","danger","disabled","className"]);return r.a.createElement(a,g({},f,{className:d("ray-button","ray-button--".concat(n),{"ray-button--compact":i,"ray-button--danger":s},l),disabled:c,ref:e}),t)}));E.propTypes={type:f.a.oneOf(["primary","secondary","tertiary"]),compact:f.a.bool,danger:f.a.bool,children:f.a.node,Tag:f.a.oneOf(["button","a"]),disabled:f.a.bool,className:f.a.string},E.defaultProps={Tag:"button",type:"primary",compact:!1,danger:!1},E.displayName="Button";function u(A){var e=A.heading,a=A.body,t=A.img,n=A.row,i=A.className;return r.a.createElement("div",{className:d("ray-card",{"ray-card--row":n},i)},r.a.createElement("div",{className:"ray-card__image ray-image ray-image--16by9"},t),r.a.createElement("div",{className:"ray-card__content"},r.a.createElement("div",{className:"ray-card__heading"},e),r.a.createElement("div",null,a)))}u.propTypes={heading:f.a.node,body:f.a.node,img:f.a.node,row:f.a.bool,className:f.a.string},f.a.string,f.a.string,f.a.string,f.a.node;var p=function(A){var e=A.prepend,a=A.icon;return e?r.a.createElement("div",{className:"ray-select__prepend"},a):r.a.createElement("div",null,a)},h=p;p.propTypes={prepend:f.a.bool,icon:f.a.node};a(38),a(246),a(52),a(23),a(60),a(14);a(6),a(5),a(2),a(10);function B(A){return"".concat(100/A,"%")}var b={"16by9":B(16/9),"1by1":B(1),"3by4":B(.75),"4by3":B(4/3),cinema:B(2.4)},j=Object.keys(b);function Q(A,e){return function(A){if(Array.isArray(A))return A}(A)||function(A,e){if(Symbol.iterator in Object(A)||"[object Arguments]"===Object.prototype.toString.call(A)){var a=[],t=!0,r=!1,n=void 0;try{for(var i,s=A[Symbol.iterator]();!(t=(i=s.next()).done)&&(a.push(i.value),!e||a.length!==e);t=!0);}catch(o){r=!0,n=o}finally{try{t||null==s.return||s.return()}finally{if(r)throw n}}return a}}(A,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(){return(m=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(A[t]=a[t])}return A}).apply(this,arguments)}function y(A){var e,a,t=A.className,n=A.id,i=A.name,s=A.compact,c=A.disabled,l=A.placeholder,f=A.label,g=A.active,E=void 0!==g&&g,u=A.error,p=void 0!==u&&u,B=A.prepend,b=void 0!==B&&B,j=A.iconPosition,y=A.icon,N=A.value,Y=void 0===N?"":N,w=A.children,x=A.onChange,C=A.onFocus,R=A.onBlur,D=o(A,["className","id","name","compact","disabled","placeholder","label","active","error","prepend","iconPosition","icon","value","children","onChange","onFocus","onBlur"]),S=Q(r.a.useState(E),2),v=S[0],I=S[1],P=Q(r.a.useState(Y),2),G=P[0],M=P[1];return r.a.useEffect((function(){Y&&M(Y)}),[]),j?(e="iconstart"===j,a="iconend"===j):(e=!1,a=!1),r.a.createElement("div",{dir:a?"rtl":""},r.a.createElement("div",{className:d("ray-select",{"ray-select--active":v,"ray-select--has-value":l||G,"ray-select--compact":s,"ray-select--disabled":c,"ray-select--error":p,"ray-select--with-prepend":b,"ray-select--with-icon-start":e||a},t)},r.a.createElement(h,{icon:y,prepend:b}),r.a.createElement("div",{className:"ray-select__wrapper"},r.a.createElement("select",m({className:"ray-select__input",name:i,disabled:c,onChange:function(A){M(A.target.value),x&&x(A)},onBlur:function(){I(!1),R&&R()},onFocus:function(){I(!0),C&&C()},value:G||""},D),r.a.createElement("option",{value:"",disabled:!0,"data-ray-placeholder":!0},l),w),r.a.createElement("label",{className:"ray-select__label",htmlFor:n},f))))}function N(){return(N=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(A[t]=a[t])}return A}).apply(this,arguments)}function Y(A){var e,a,t=A.id,n=A.type,i=A.placeholder,s=A.disabled,c=A.required,l=A.value,f=A.error,g=A.success,E=A.compact,u=A.label,p=A.active,B=A.onFocus,b=A.onBlur,j=A.onKeyUp,m=A.onChange,y=A.hint,Y=A.hintSuccess,w=A.hintError,x=A.className,C=A.iconPosition,R=A.icon,D=A.prepend,S=o(A,["id","type","placeholder","disabled","required","value","error","success","compact","label","active","onFocus","onBlur","onKeyUp","onChange","hint","hintSuccess","hintError","className","iconPosition","icon","prepend"]),v=Q(r.a.useState(l),2),I=v[0],P=v[1],G=Q(r.a.useState(p),2),M=(G[0],G[1]);C?(e="iconstart"===C,a="iconend"===C):(e=!1,a=!1);var O=d("ray-text-field",{"ray-text-field--has-value":i||I,"ray-text-field--error":f,"ray-text-field--success":g,"ray-text-field--disabled":s,"ray-text-field--required":c,"ray-text-field--compact":E,"ray-text-field--with-icon-start":e||a,"ray-text-field--with-prepend":D},x);return r.a.createElement("div",null,r.a.createElement("div",{dir:a?"rtl":""},r.a.createElement("div",{className:"ray-form-item"},r.a.createElement("div",{className:O},r.a.createElement(h,{icon:R,prepend:D}),r.a.createElement("div",{className:"ray-text-field__wrapper"},r.a.createElement("input",N({className:"ray-text-field__input",id:t,type:n,value:I||"",placeholder:i,disabled:s,onFocus:function(A){B&&B(),M(A)},onBlur:function(A){b&&b(),M(A)},onKeyUp:function(A){j&&j(),P(A.target.value)},onChange:function(A){P(A.target.value),m&&m(A)}},S)),u&&r.a.createElement("label",{className:"ray-text-field__label",htmlFor:t},u))))),r.a.createElement("div",{className:d("ray-form-item__hint",{"ray-form-item__hint":y},{"ray-form-item__hint--success":Y},{"ray-form-item__hint--error":w})},y||Y||w))}function w(){return(w=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(A[t]=a[t])}return A}).apply(this,arguments)}function x(A){var e=A.id,a=A.type,t=A.placeholder,n=A.disabled,i=A.required,s=A.value,c=A.error,l=A.compact,f=A.label,g=A.className,E=o(A,["id","type","placeholder","disabled","required","value","error","compact","label","className"]),u=d("ray-text-area",{"ray-text-area--has-value":s,"ray-text-area--error":c,"ray-text-area--disabled":n,"ray-text-area--required":i,"ray-text-area--compact":l},g);return r.a.createElement("div",{className:u},r.a.createElement("textarea",w({className:"ray-text-area__input",id:e,type:a,value:s,placeholder:t,disabled:n},E)),f&&r.a.createElement("label",{className:"ray-text-area__label",htmlFor:e},f))}function C(){return(C=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(A[t]=a[t])}return A}).apply(this,arguments)}function R(A){var e=A.Tag,a=A.style,t=A.className,n=o(A,["Tag","style","className"]),i=d(t,"ray-text--".concat(a));return r.a.createElement(e,C({className:i},n))}f.a.string,f.a.string,f.a.oneOf(j),f.a.bool,f.a.string,f.a.string,f.a.string,f.a.node,y.propTypes={className:f.a.string,id:f.a.string,name:f.a.string,label:f.a.node,compact:f.a.bool,disabled:f.a.bool,placeholder:f.a.string,active:f.a.bool,children:f.a.node,value:f.a.number,error:f.a.bool,prepend:f.a.bool,iconPosition:f.a.oneOf(["iconstart","iconend"]),icon:f.a.node,onChange:f.a.func,onFocus:f.a.func,onBlur:f.a.func},y.defaultProps={active:!1,compact:!1,error:!1,prepend:!1},Y.propTypes={id:f.a.string.isRequired,type:f.a.string.isRequired,placeholder:f.a.string,disabled:f.a.bool,required:f.a.bool,error:f.a.bool,success:f.a.bool,compact:f.a.bool,value:f.a.string,label:f.a.string,className:f.a.string,active:f.a.bool,onFocus:f.a.func,onKeyUp:f.a.func,onBlur:f.a.func,onChange:f.a.func,hint:f.a.string,hintSuccess:f.a.string,hintError:f.a.string,prepend:f.a.bool,iconPosition:f.a.oneOf(["iconstart","iconend"]),icon:f.a.node},Y.defaultProps={active:!1,type:"text",compact:!1,disabled:!1,error:!1,hint:"",hintError:"",hintSuccess:"",prepend:!1,success:!1},x.propTypes={id:f.a.string.isRequired,type:f.a.string.isRequired,placeholder:f.a.string,disabled:f.a.bool,required:f.a.bool,compact:f.a.bool,value:f.a.string,error:f.a.string,label:f.a.string,className:f.a.string},x.defaultProps={type:"text"},R.propTypes={Tag:f.a.oneOfType([f.a.func,f.a.string]),style:f.a.oneOf(["h1","h2","h3","h4","h5","h6","body","body-large","body-small","body-x-small","display-1","display-2"]),className:f.a.string},R.defaultProps={Tag:"div",style:"body"},f.a.string,f.a.string;a(71);f.a.string,f.a.number,f.a.number;var D=a(228),S=a(247),v=function(){return S.data.allBuildingsJson.nodes.map((function(A){return{name:A.name,slug:A.slug,image:A.localImage}}))},I=n.a.div.withConfig({displayName:"buildings__BuildingList",componentId:"sc-1opzu2t-0"})(["display:flex;flex-wrap:wrap;justify-content:space-between;"]),P=n.a.div.withConfig({displayName:"buildings__BuildingCardContainer",componentId:"sc-1opzu2t-1"})(["flex-basis:48%;margin-bottom:10px;"]);e.default=function(){var A=v();return r.a.createElement(D.a,null,r.a.createElement("h2",null,"WeWork 地点"),r.a.createElement(I,null,A.map((function(A){var e=A.slug,a=A.image,t=A.name;return r.a.createElement(P,{key:e},r.a.createElement(u,{heading:r.a.createElement("a",{href:"https://www.wework.cn/building/"+e},t),img:r.a.createElement(s.a,{style:{position:"absolute"},fixed:a.sharp.fixed,alt:t})}))}))))}},235:function(A,e,a){"use strict";a(237)("fixed",(function(A){return function(){return A(this,"tt","","")}}))},237:function(A,e,a){var t=a(1),r=a(13),n=a(47),i=/"/g,s=function(A,e,a,t){var r=String(n(A)),s="<"+e;return""!==a&&(s+=" "+a+'="'+String(t).replace(i,"&quot;")+'"'),s+">"+r+"</"+e+">"};A.exports=function(A,e){var a={};a[A]=e(s),t(t.P+t.F*r((function(){var e=""[A]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",a)}},238:function(A,e,a){"use strict";a(6),a(5),a(2),a(110),a(163),a(235);var t=a(24);e.__esModule=!0,e.default=void 0;var r,n=t(a(84)),i=t(a(83)),s=t(a(161)),o=t(a(160)),c=t(a(0)),d=t(a(45)),l=function(A){var e=(0,o.default)({},A),a=e.resolutions,t=e.sizes,r=e.critical;return a&&(e.fixed=a,delete e.resolutions),t&&(e.fluid=t,delete e.sizes),r&&(e.loading="eager"),e.fluid&&(e.fluid=j([].concat(e.fluid))),e.fixed&&(e.fixed=j([].concat(e.fixed))),e},f=function(A){var e=A.fluid,a=A.fixed;return(e&&e[0]||a&&a[0]).src},g=Object.create({}),E=function(A){var e=l(A),a=f(e);return g[a]||!1},u="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,h=p&&window.IntersectionObserver,B=new WeakMap;function b(A){return A.map((function(A){var e=A.src,a=A.srcSet,t=A.srcSetWebp,r=A.media,n=A.sizes;return c.default.createElement(c.default.Fragment,{key:e},t&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:t,sizes:n}),c.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function j(A){var e=[],a=[];return A.forEach((function(A){return(A.media?e:a).push(A)})),[].concat(e,a)}function Q(A){return A.map((function(A){var e=A.src,a=A.media,t=A.tracedSVG;return c.default.createElement("source",{key:e,media:a,srcSet:t})}))}function m(A){return A.map((function(A){var e=A.src,a=A.media,t=A.base64;return c.default.createElement("source",{key:e,media:a,srcSet:t})}))}function y(A,e){var a=A.srcSet,t=A.srcSetWebp,r=A.media,n=A.sizes;return"<source "+(e?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(e?t:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(A,e){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(A){A.forEach((function(A){if(B.has(A.target)){var e=B.get(A.target);(A.isIntersecting||A.intersectionRatio>0)&&(r.unobserve(A.target),B.delete(A.target),e())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(A),B.set(A,e)),function(){a.unobserve(A),B.delete(A)}},Y=function(A){var e=A.src?'src="'+A.src+'" ':'src="" ',a=A.sizes?'sizes="'+A.sizes+'" ':"",t=A.srcSet?'srcset="'+A.srcSet+'" ':"",r=A.title?'title="'+A.title+'" ':"",n=A.alt?'alt="'+A.alt+'" ':'alt="" ',i=A.width?'width="'+A.width+'" ':"",s=A.height?'height="'+A.height+'" ':"",o=A.crossOrigin?'crossorigin="'+A.crossOrigin+'" ':"",c=A.loading?'loading="'+A.loading+'" ':"",d=A.draggable?'draggable="'+A.draggable+'" ':"";return"<picture>"+A.imageVariants.map((function(A){return(A.srcSetWebp?y(A,!0):"")+y(A)})).join("")+"<img "+c+i+s+a+t+e+n+r+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=function(A){var e=A.src,a=A.imageVariants,t=A.generateSources,r=A.spreadProps,n=c.default.createElement(x,(0,o.default)({src:e},r));return a.length>1?c.default.createElement("picture",null,t(a),n):n},x=c.default.forwardRef((function(A,e){var a=A.sizes,t=A.srcSet,r=A.src,n=A.style,i=A.onLoad,d=A.onError,l=A.loading,f=A.draggable,g=(0,s.default)(A,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:t,src:r},g,{onLoad:i,onError:d,ref:e,loading:l,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(A){function e(e){var a;(a=A.call(this,e)||this).seenBefore=p&&E(e),a.isCritical="eager"===e.loading||e.critical,a.addNoScript=!(a.isCritical&&!e.fadeIn),a.useIOSupport=!u&&h&&!a.isCritical&&!a.seenBefore;var t=a.isCritical||p&&(u||!a.useIOSupport);return a.state={isVisible:t,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&e.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,i.default)(e,A);var a=e.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:E(this.props)}),this.isCritical){var A=this.imageRef.current;A&&A.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(A){var e=this;this.useIOSupport&&A&&(this.cleanUpListeners=N(A,(function(){var A=E(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:A}),e.setState({isVisible:!0},(function(){return e.setState({imgLoaded:A,imgCached:!!e.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var A,e,a;A=this.props,e=l(A),a=f(e),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var A=l(this.props),e=A.title,a=A.alt,t=A.className,r=A.style,n=void 0===r?{}:r,i=A.imgStyle,s=void 0===i?{}:i,d=A.placeholderStyle,f=void 0===d?{}:d,g=A.placeholderClassName,E=A.fluid,u=A.fixed,p=A.backgroundColor,h=A.durationFadeIn,B=A.Tag,j=A.itemProp,y=A.loading,N=A.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,D=(0,o.default)({opacity:C?1:0,transition:R?"opacity "+h+"ms":"none"},s),S="boolean"==typeof p?"lightgray":p,v={transitionDelay:h+"ms"},I=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&v,{},s,{},f),P={title:e,alt:this.state.isVisible?"":a,style:I,className:g};if(E){var G=E,M=G[0];return c.default.createElement(B,{className:(t||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(B,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),S&&c.default.createElement(B,{title:e,style:(0,o.default)({backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&v)}),M.base64&&c.default.createElement(w,{src:M.base64,spreadProps:P,imageVariants:G,generateSources:m}),M.tracedSVG&&c.default.createElement(w,{src:M.tracedSVG,spreadProps:P,imageVariants:G,generateSources:Q}),this.state.isVisible&&c.default.createElement("picture",null,b(G),c.default.createElement(x,{alt:a,title:e,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:D,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j,loading:y,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:Y((0,o.default)({alt:a,title:e,loading:y},M,{imageVariants:G}))}}))}if(u){var O=u,F=O[0],k=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},n);return"inherit"===n.display&&delete k.display,c.default.createElement(B,{className:(t||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},S&&c.default.createElement(B,{title:e,style:(0,o.default)({backgroundColor:S,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},R&&v)}),F.base64&&c.default.createElement(w,{src:F.base64,spreadProps:P,imageVariants:O,generateSources:m}),F.tracedSVG&&c.default.createElement(w,{src:F.tracedSVG,spreadProps:P,imageVariants:O,generateSources:Q}),this.state.isVisible&&c.default.createElement("picture",null,b(O),c.default.createElement(x,{alt:a,title:e,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:D,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j,loading:y,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:Y((0,o.default)({alt:a,title:e,loading:y},F,{imageVariants:O}))}}))}return null},e}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),D=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});C.propTypes={resolutions:R,sizes:D,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([D,d.default.arrayOf(D)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var S=C;e.default=S},246:function(A,e,a){var t=a(1);t(t.S+t.F*!a(12),"Object",{defineProperties:a(166)})},247:function(A){A.exports=JSON.parse('{"data":{"allBuildingsJson":{"nodes":[{"slug":"huarunzhidi","name":"华润置地大厦D座","localImage":{"sharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAbOpE5W40D//xAAbEAABBAMAAAAAAAAAAAAAAAACAAEDMRIhQ//aAAgBAQABBQJzEFmLp5Nz10K//8QAFhEBAQEAAAAAAAAAAAAAAAAAABIh/9oACAEDAQE/AZa//8QAGhEAAQUBAAAAAAAAAAAAAAAAAAECERITIf/aAAgBAgEBPwG0GbV6f//EABsQAAIBBQAAAAAAAAAAAAAAAAABIQIQIkGh/9oACAEBAAY/AstkIccEU2//xAAZEAEBAQEBAQAAAAAAAAAAAAABIQAREKH/2gAIAQEAAT8hXiKJpOlztpxz68qEM75//9oADAMBAAIAAwAAABCcP//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8QA62jg3//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAECAQE/EFYJfo63/8QAHBABAAICAwEAAAAAAAAAAAAAAQARIVExQXGx/9oACAEBAAE/EFZch2NZ9gtvE8mue4ZB6Au2bsYQKii/yPYEbBwzB1jyf//Z","width":288,"height":162,"src":"/gatsby-workshop-jsconf-cn/static/d0af04eabad990e5528057f7cadf3e77/b290d/456d0520-f327-11e8-a0e4-1202be33576a.jpg","srcSet":"/gatsby-workshop-jsconf-cn/static/d0af04eabad990e5528057f7cadf3e77/b290d/456d0520-f327-11e8-a0e4-1202be33576a.jpg 1x,\\n/gatsby-workshop-jsconf-cn/static/d0af04eabad990e5528057f7cadf3e77/d1744/456d0520-f327-11e8-a0e4-1202be33576a.jpg 1.5x"}}}},{"slug":"damazhan","name":"大马站商业中心","localImage":{"sharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABvsWDc5Y5f//EAB0QAQABAwUAAAAAAAAAAAAAAAIDAAEREhQhMTP/2gAIAQEAAQUCSwBKa3Wm76PjNw//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGH/8QAFREBAQAAAAAAAAAAAAAAAAAAABL/2gAIAQIBAT8BS//EABsQAAIBBQAAAAAAAAAAAAAAAAAhAQIQESKB/9oACAEBAAY/AujhGtMYJskj/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARITFhcf/aAAgBAQABPyEe5nKguKKQRtAMdnsbW6UwT//aAAwDAQACAAMAAAAQmP8A/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxA05L2//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAgEBPxBuQp6f/8QAHBABAQACAgMAAAAAAAAAAAAAAREAITFhQVGx/9oACAEBAAE/EHUTWhkKvzFKQi7i+N+tZcJoasu5gEgnOzEgDrSdQw0zlWHHWf/Z","width":288,"height":162,"src":"/gatsby-workshop-jsconf-cn/static/935c51d24220c33ff28a06b4de26cf17/b290d/3aed6f78-5a0f-11e9-b53a-0ec6db7d2a3c.jpg","srcSet":"/gatsby-workshop-jsconf-cn/static/935c51d24220c33ff28a06b4de26cf17/b290d/3aed6f78-5a0f-11e9-b53a-0ec6db7d2a3c.jpg 1x,\\n/gatsby-workshop-jsconf-cn/static/935c51d24220c33ff28a06b4de26cf17/d1744/3aed6f78-5a0f-11e9-b53a-0ec6db7d2a3c.jpg 1.5x"}}}},{"slug":"shenyeshangcheng","name":"深业上城Loft","localImage":{"sharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEEA//EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGxNzWZGD//xAAaEAABBQEAAAAAAAAAAAAAAAACAAEDERIh/9oACAEBAAEFAtDbkK0KYbRx20nC/8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAIAQMBAT8BV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAAREDFBIf/aAAgBAQAGPwJNF6bDddj/xAAZEAEBAQEBAQAAAAAAAAAAAAABESEAMVH/2gAIAQEAAT8hheh94gOxjOEsFGY9grqaz3j8BcZ1YTz53//aAAwDAQACAAMAAAAQsA//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/ELo0P//EABYRAQEBAAAAAAAAAAAAAAAAAAEAQf/aAAgBAgEBPxDIS//EABoQAQEAAwEBAAAAAAAAAAAAAAERACExcVH/2gAIAQEAAT8QtyCroTNaANWx89xYbEIJfce5tDCjsyMqoA+cc0bFC6dz/9k=","width":288,"height":162,"src":"/gatsby-workshop-jsconf-cn/static/c2179f74a3cf316b158a469d29005d70/b290d/602459a0-ae29-11e9-a057-0ec6db7d2a3c.jpg","srcSet":"/gatsby-workshop-jsconf-cn/static/c2179f74a3cf316b158a469d29005d70/b290d/602459a0-ae29-11e9-a057-0ec6db7d2a3c.jpg 1x,\\n/gatsby-workshop-jsconf-cn/static/c2179f74a3cf316b158a469d29005d70/d1744/602459a0-ae29-11e9-a057-0ec6db7d2a3c.jpg 1.5x"}}}},{"slug":"zongfulu","name":"总府路31号","localImage":{"sharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAdkUaGs5xSf/xAAaEAEAAgMBAAAAAAAAAAAAAAABABMCAxFC/9oACAEBAAEFArDirLMZsBfRP//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AYf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwEZ/8QAGhABAAEFAAAAAAAAAAAAAAAAAAECMVFxgf/aAAgBAQAGPwJaeMI0pS//xAAaEAACAwEBAAAAAAAAAAAAAAABEQAxQSFh/9oACAEBAAE/IUM6uKO3kCotOIwAkAhrmGQRgXP/2gAMAwEAAgADAAAAEEA//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxDsxm//xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAx/9oACAECAQE/EFGmLO7/xAAbEAEBAAMAAwAAAAAAAAAAAAABEQAhMUFxgf/aAAgBAQABPxCHs2EJOzmc9FEQaJ1xo0VQbH5iCxYFHIBCUEOSYdnp8es//9k=","width":288,"height":162,"src":"/gatsby-workshop-jsconf-cn/static/01d595193a799fdfa7858be25c850c89/b290d/786ab1a6-83b5-11e9-8584-0ec6db7d2a3c.jpg","srcSet":"/gatsby-workshop-jsconf-cn/static/01d595193a799fdfa7858be25c850c89/b290d/786ab1a6-83b5-11e9-8584-0ec6db7d2a3c.jpg 1x,\\n/gatsby-workshop-jsconf-cn/static/01d595193a799fdfa7858be25c850c89/d1744/786ab1a6-83b5-11e9-8584-0ec6db7d2a3c.jpg 1.5x"}}}},{"slug":"baifuguoji","name":"百富国际大厦","localImage":{"sharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAAB2KROjlAP/8QAGRAAAwADAAAAAAAAAAAAAAAAAAECIjEy/9oACAEBAAEFAqcoq5MC+no//8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oACAEDAQE/Aco//8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oACAECAQE/AdK//8QAGRAAAgMBAAAAAAAAAAAAAAAAADECICGh/9oACAEBAAY/AmZIfaf/xAAaEAADAAMBAAAAAAAAAAAAAAAAAREhMUFR/9oACAEBAAE/IY5h2QV8sJcsirlDS8P/2gAMAwEAAgADAAAAEOvf/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARMf/aAAgBAwEBPxCDqf/EABcRAAMBAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8QsYn/xAAcEAACAwEAAwAAAAAAAAAAAAABEQAhMVFBcZH/2gAIAQEAAT8Q1wXjAPtQEuYbXzsML4GggKgRbfmU1AJQUASAUME//9k=","width":288,"height":162,"src":"/gatsby-workshop-jsconf-cn/static/badab6b295674c4759f597df8f99f031/b290d/a91d816e-611b-11e9-9e81-0ec6db7d2a3c.jpg","srcSet":"/gatsby-workshop-jsconf-cn/static/badab6b295674c4759f597df8f99f031/b290d/a91d816e-611b-11e9-9e81-0ec6db7d2a3c.jpg 1x,\\n/gatsby-workshop-jsconf-cn/static/badab6b295674c4759f597df8f99f031/d1744/a91d816e-611b-11e9-9e81-0ec6db7d2a3c.jpg 1.5x"}}}},{"slug":"yananlu","name":"延安路292号","localImage":{"sharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAc2pRM6XMX//xAAfEAAAAwkAAAAAAAAAAAAAAAAAAQMCERITISIxM0L/2gAIAQEAAQUCZO6Kk9w5Uynr/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8BR//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABwQAAIBBQEAAAAAAAAAAAAAAAABAhEhQXGBkf/aAAgBAQAGPwJNQq9F0Z8OEiJ//8QAGhABAQEBAAMAAAAAAAAAAAAAAREAMSFRgf/aAAgBAQABPyGxQ/SMTzvPPcRhhUcZgAACTJ+G/9oADAMBAAIAAwAAABDPL//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EKP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8Qi6//xAAcEAEBAQEAAgMAAAAAAAAAAAABEQAhMUGR4fH/2gAIAQEAAT8QJujsj7+M3YDqhp/fWbgi2KpqJQpGYdQmASPcSClK98u//9k=","width":288,"height":162,"src":"/gatsby-workshop-jsconf-cn/static/bdca683c306fc480f153b7cc7c8d6abd/b290d/804bef0e-5d35-11e8-9d73-1202be33576a.jpg","srcSet":"/gatsby-workshop-jsconf-cn/static/bdca683c306fc480f153b7cc7c8d6abd/b290d/804bef0e-5d35-11e8-9d73-1202be33576a.jpg 1x,\\n/gatsby-workshop-jsconf-cn/static/bdca683c306fc480f153b7cc7c8d6abd/d1744/804bef0e-5d35-11e8-9d73-1202be33576a.jpg 1.5x"}}}},{"slug":"dongchanglu","name":"富汇大厦","localImage":{"sharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgMF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAekvZeb2JGf/xAAaEAACAwEBAAAAAAAAAAAAAAAAAQIDExBD/9oACAEBAAEFAtYMnakbI86ef//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AYf/xAAWEQADAAAAAAAAAAAAAAAAAAAQEiH/2gAIAQIBAT8Baj//xAAaEAACAgMAAAAAAAAAAAAAAAAAARAhEYHh/9oACAEBAAY/Aqy9FHIcf//EABsQAAIDAAMAAAAAAAAAAAAAAAABETFRIUGR/9oACAEBAAE/IdYWBpfwi1injBU+S7IWH//aAAwDAQACAAMAAAAQ1x//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EFmkP//EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAgBAgEBPxDUK//EABwQAQADAAIDAAAAAAAAAAAAAAEAESExYVGRof/aAAgBAQABPxC/TwlbIkA148fsaGWg2UiFAHSCMFBVnGToep//2Q==","width":288,"height":162,"src":"/gatsby-workshop-jsconf-cn/static/8c42eea3119c2d0923d2fc123430f177/b290d/e41b4d7c-4fce-11e9-95cd-0ec6db7d2a3c.jpg","srcSet":"/gatsby-workshop-jsconf-cn/static/8c42eea3119c2d0923d2fc123430f177/b290d/e41b4d7c-4fce-11e9-95cd-0ec6db7d2a3c.jpg 1x,\\n/gatsby-workshop-jsconf-cn/static/8c42eea3119c2d0923d2fc123430f177/d1744/e41b4d7c-4fce-11e9-95cd-0ec6db7d2a3c.jpg 1.5x"}}}},{"slug":"sanlitun","name":"三里屯路11号","localImage":{"sharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABe0lKh2xEs//EABsQAAICAwEAAAAAAAAAAAAAAAECAxIABCIy/9oACAEBAAEFAneovhmCHY5RGYvJ6//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwGMf//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AVf/xAAYEAADAQEAAAAAAAAAAAAAAAAAESEBEP/aAAgBAQAGPwKUYkyQzHq5/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARITFBUWFx/9oACAEBAAE/IbG52SNDbeHBHR+pGgu3rI428LyE6k//2gAMAwEAAgADAAAAEL8//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxCzjG+s/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPxBxCnD/xAAbEAEAAwEBAQEAAAAAAAAAAAABABEhMWFBkf/aAAgBAQABPxAaCthNHKzurNpqCwu3a8OxQG7WrXyogqo1275MDdLt/EO6DD5P/9k=","width":288,"height":162,"src":"/gatsby-workshop-jsconf-cn/static/25aa09394fc8517ff3811eff0fc457d1/b290d/d62fc15c-7ee1-11e8-b715-1202be33576a.jpg","srcSet":"/gatsby-workshop-jsconf-cn/static/25aa09394fc8517ff3811eff0fc457d1/b290d/d62fc15c-7ee1-11e8-b715-1202be33576a.jpg 1x,\\n/gatsby-workshop-jsconf-cn/static/25aa09394fc8517ff3811eff0fc457d1/d1744/d62fc15c-7ee1-11e8-b715-1202be33576a.jpg 1.5x"}}}},{"slug":"financialcenter","name":"国金中心","localImage":{"sharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAUIDU09FR//EABoQAAMAAwEAAAAAAAAAAAAAAAECAwASExH/2gAIAQEAAQUC6T8NZgdZ5Almux33bP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPwFMLL//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREx/9oACAECAQE/AY1b/8QAGxAAAgEFAAAAAAAAAAAAAAAAAAHhESExMpH/2gAIAQEABj8CIILuplmz6f/EABsQAQACAwEBAAAAAAAAAAAAAAEAESFBUWGB/9oACAEBAAE/Ia7uCuS5UvDaNqOE9ygMPczBajcfix//2gAMAwEAAgADAAAAEOAP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QIGf/xAAWEQEBAQAAAAAAAAAAAAAAAAARARD/2gAIAQIBAT8QpGP/xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhQVExYXGR/9oACAEBAAE/EPEYBUo+e3jBwekBinjZgUFESk/DHESscXveQNAYK094ZIWnLoz/2Q==","width":288,"height":162,"src":"/gatsby-workshop-jsconf-cn/static/93431299c3c251ae3656e3c25c34d0a8/b290d/d77c959c-893d-11e8-936c-1202be33576a.jpg","srcSet":"/gatsby-workshop-jsconf-cn/static/93431299c3c251ae3656e3c25c34d0a8/b290d/d77c959c-893d-11e8-936c-1202be33576a.jpg 1x,\\n/gatsby-workshop-jsconf-cn/static/93431299c3c251ae3656e3c25c34d0a8/d1744/d77c959c-893d-11e8-936c-1202be33576a.jpg 1.5x"}}}},{"slug":"weihailu","name":"威海路696号","localImage":{"sharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABkXZGMv8A/8QAGRABAAMBAQAAAAAAAAAAAAAAAQACERJB/9oACAEBAAEFAtKy12CSgZ6h1//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AVf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFH/8QAHBAAAgEFAQAAAAAAAAAAAAAAAAEhAhAyQXGh/9oACAEBAAY/Ao9MVZxop6OD/8QAHBABAAIBBQAAAAAAAAAAAAAAAQARMSFBUYHh/9oACAEBAAE/IaAgY83KmqdscqMdog3FxhDPE//aAAwDAQACAAMAAAAQ28//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QQXW3f//EABcRAAMBAAAAAAAAAAAAAAAAAAABIRH/2gAIAQIBAT8Qqhk//8QAGxABAAMBAAMAAAAAAAAAAAAAAQARQSExUaH/2gAIAQEAAT8QcNuqKF4sVi8pDsuUCq+B+DEgUQUeyA5BHEvGNFpKHHJ//9k=","width":288,"height":162,"src":"/gatsby-workshop-jsconf-cn/static/7de652ef474647eec98dd09cb556cd27/b290d/4f6fd5d6-0899-11e7-9462-0a488af3e541.jpg","srcSet":"/gatsby-workshop-jsconf-cn/static/7de652ef474647eec98dd09cb556cd27/b290d/4f6fd5d6-0899-11e7-9462-0a488af3e541.jpg 1x,\\n/gatsby-workshop-jsconf-cn/static/7de652ef474647eec98dd09cb556cd27/d1744/4f6fd5d6-0899-11e7-9462-0a488af3e541.jpg 1.5x"}}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-buildings-js-4c60be344f9478919815.js.map