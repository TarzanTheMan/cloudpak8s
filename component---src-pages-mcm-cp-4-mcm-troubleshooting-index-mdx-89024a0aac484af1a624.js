(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"86GP":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return b}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var l=n("7ljp"),r=n("013z");n("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var o={},i={_frontmatter:o},c=r.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(l.b)(c,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"CAM Installation"),Object(l.b)("h3",null,"509: certificate signed by unknown authority"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If doing an offline install, make sure to use OCP host install box"),Object(l.b)("li",{parentName:"ul"},"Confirm your ",Object(l.b)("strong",{parentName:"li"},"Image Repository URL")," is set correctly under ",Object(l.b)("strong",{parentName:"li"},"Install Configurations"))),Object(l.b)("h3",null,"ErrImagePull fail build"),Object(l.b)("p",null,"Check to make sure docker registry secret was created and accessible."),Object(l.b)("h3",null,"Uninstall CAM"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Go to MCM UI"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"helm init")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"helm delete cam --purge --debug")),Object(l.b)("li",{parentName:"ol"},"Delete the provisioned pvcs with ",Object(l.b)("inlineCode",{parentName:"li"},"oc delete pvc <cam_pvc_name>"))),Object(l.b)("img",{src:"/assets/img/cp4mcm/cam_troubleshoot.png",alt:"CAM PVC Policy"}),Object(l.b)("p",null,"Alternatively,\nRun ",Object(l.b)("inlineCode",{parentName:"p"},"oc get all")," to get the CAM job name, then run ",Object(l.b)("inlineCode",{parentName:"p"},"oc delete JOB_NAME")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-troubleshooting-index-mdx-89024a0aac484af1a624.js.map