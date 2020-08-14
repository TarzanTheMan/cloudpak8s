(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+oyu":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var r=n("7ljp"),o=n("013z");n("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l={},i={_frontmatter:l},a=o.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(a,c({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Install"),Object(r.b)("h3",null,"NFS"),Object(r.b)("p",null,"The persistent volumes used by the different Cloud Pak for Automation components in the following chapters are relying on NFS. Before starting the install of any component, it is thus required to set-up an NFS server. An example for how to set-up and verify an NFS server for Redhat 7 can be found ",Object(r.b)("a",c({parentName:"p"},{href:"https://linuxconfig.org/quick-nfs-server-configuration-on-redhat-7-linux"}),"here"),"."),Object(r.b)("h2",null,"Prepare"),Object(r.b)("h3",null,"Logging-in to your cluster"),Object(r.b)("h4",null,"IBM Cloud OpenShift cluster"),Object(r.b)("p",null,"Start by loging in to IBM Cloud with the ",Object(r.b)("inlineCode",{parentName:"p"},"ibmcloud login")," or ",Object(r.b)("inlineCode",{parentName:"p"},"ibmcloud login --sso")," command, then select your cluster and login to it."),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{}),"ibmcloud oc cluster-config --cluster <your-cluster-name>\noc login \n")),Object(r.b)("h4",null,"On-prem OpenShift cluster"),Object(r.b)("p",null,"Login directly to your cluster:"),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{}),"oc login -u admin -p admin https://<your-cluster-url>/\n")),Object(r.b)("h3",null,"Accessing the Docker registry"),Object(r.b)("h4",null,"IBM Cloud OpenShift cluster"),Object(r.b)("p",null,"To expose the ",Object(r.b)("inlineCode",{parentName:"p"},"docker-registry.default.svc"),", open a command window, login to OpenShift and run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{}),"kubectl -n default port-forward svc/docker-registry 5000:5000 &\n")),Object(r.b)("p",null,"This is exposing port 5000 on the boot node (wherever this is run). You need to leave the command window open or else the port-forwarding will stop. Be aware of the potential timeout of port forwarding during the images push."),Object(r.b)("h4",null,"On-prem OpenShift cluster"),Object(r.b)("p",null,"check if there is a route for the openshift-image-registry."),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{}),"oc get routes -n openshift-image-registry\n\n")),Object(r.b)("p",null,"if the command returns no results, create the route"),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{}),'oc patch configs.imageregistry.operator.openshift.io/cluster --patch \'{"spec":{"defaultRoute":true}}\' --type=merge\noc get routes -n openshift-image-registryCopy\n\n')),Object(r.b)("p",null,"The output should be similar to the following example:"),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{}),"NAME            HOST/PORT                                                              \ndefault-route   docker-registry-default.apps-cp4a-res.rtp.raleigh.ibm.com \n")),Object(r.b)("p",null,"To prepare Docker access, edit the ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," Docker daemon configuration file to include the ",Object(r.b)("inlineCode",{parentName:"p"},'"insecure-registries"')," property, as shown on the example below:"),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{}),'{\n  "insecure-registries" : ["docker-registry-default.apps-cp4a-res.rtp.raleigh.ibm.com"]\n}\n')),Object(r.b)("p",null,"Restart docker daemon:"),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{}),"systemctl restart docker\n")),Object(r.b)("h4",null,"OpenShift cluster accessing IBM Cloud image registry"),Object(r.b)("p",null,"You need to use a ",Object(r.b)("inlineCode",{parentName:"p"},"secret")," containing credentials to access IBM Cloud registry. To create this secret you need to generate a key from your IBM Cloud entitlment to access Cloud Pak for Automation docker images."),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{}),"oc create secret docker-registry cp-entitlement --docker-server=cp.icr.io --docker-username=ekey --docker-password=<GENERATED_KEY_FROM_IBM_CLOUD_ENTATLMENT> --docker-email=unused\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-automation-pre-requisites-index-mdx-7da81fee5ced9ede4b62.js.map