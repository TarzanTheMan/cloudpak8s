(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{YY97:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},l=o("InlineNotification"),c=o("AnchorLinks"),b=o("AnchorLink"),p={_frontmatter:s},m=r.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(m,i({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l,{mdxType:"InlineNotification"},Object(a.b)("p",null,"Version 2020.2 is out for Cloud Pak for Ingegration.  This version is the first to feature Operators and has significant changes to the deployment and operations.  Please refer to the ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSGT7J_20.2/overview.html"}),"Knowledge Center")," while we update this playbook.  Thanks!")),Object(a.b)(c,{mdxType:"AnchorLinks"},Object(a.b)(b,{mdxType:"AnchorLink"},"Introduction"),Object(a.b)(b,{mdxType:"AnchorLink"},"Prepare Installation"),Object(a.b)(b,{mdxType:"AnchorLink"},"Begin Installation"),Object(a.b)(b,{mdxType:"AnchorLink"},"Validate installation")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Introduction")),Object(a.b)("p",null,"This page contains guidance on how to configure the Aspera release for\nboth on-prem and IBM Cloud."),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Prepare Installation")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Change project to aspera")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"oc project aspera\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Use Node Labels:")),Object(a.b)("p",{parentName:"li"},"In order to ensure high availability, the Aspera Swarm services will\nattempt to create a configurable number of pods on each node in the\nKubernetes cluster. The nodes on which the receiver pods are running\ncan be restricted via the nodeLabels values."),Object(a.b)("p",{parentName:"li"},"For example, the following would restrict pods to nodes with\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"node-role.kubernetes.io/ascp=true")," label or\n",Object(a.b)("inlineCode",{parentName:"p"},"node-role.kubernetes.io/noded=true")," label."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),'ascpSwarm:\nconfig:\n    nodeLabels:\n    node-role.kubernetes.io/ascp: "true"\n\nnodedSwarm:\nconfig:\n    nodeLabels:\n    node-role.kubernetes.io/noded: "true"\n')),Object(a.b)("p",{parentName:"li"},"Label Nodes using the command"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"oc label node &lt;node-name&gt; node-role.kubernetes.io/&lt;role&gt;=true\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Additional RBAC Requirements:")),Object(a.b)("p",{parentName:"li"},"The following RBAC resources are also required before you deploy the\nchart. Use the command ",Object(a.b)("inlineCode",{parentName:"p"},"oc create -f &lt;filename.yaml&gt;")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Cluster Admin"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"/assets/img/integration/aspera/files/cluster-admin-clusterrole.yaml"}),"ClusterRole")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Namespace User"),"\nSubstitute {{ NAMESPACE }} with the namespace the chart will be deployed in.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"/assets/img/integration/aspera/files/namespace-user-clusterrole.yaml"}),"ClusterRoleBinding")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"/assets/img/integration/aspera/files/namespace-user-role.yaml"}),"Role")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"/assets/img/integration/aspera/files/namespace-user-rolebinding.yaml"}),"RoleBinding")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"/assets/img/integration/aspera/files/hsts-prod-rolebinding.yaml"}),"RoleBinding")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"/assets/img/integration/aspera/files/apsera-sa-role.yaml"}),"ServiceAccount")," - Set to ",Object(a.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," if using entitled registry or if offline use the ",Object(a.b)("inlineCode",{parentName:"li"},"deployer-dockercfg-XX")," secret in your namespace.  Use ",Object(a.b)("inlineCode",{parentName:"li"},"oc get secrets")," to get the value."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"/assets/img/integration/aspera/files/secret-gen-role.yaml"}),"Secret Generation Role")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"/assets/img/integration/aspera/files/secret-gen-rolebinding.yaml"}),"Secret Generation RoleBinding")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"/assets/img/integration/aspera/files/secret-gen-sa.yaml"}),"Secret Generation ServiceAccount")))))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Create the secrets")),Object(a.b)("p",{parentName:"li"},"Make sure you have copied your aspera license key to the location\nwhere you will be creating the secrets.  The following command assumes\nit is named ",Object(a.b)("inlineCode",{parentName:"p"},"aspera-license"),"."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),'oc create secret generic aspera-server --from -file=ASPERA_LICENSE="./aspera-license" --from-literal=TOKEN_ENCRYPTION_KEY="my_encryption_key"\n\nkubectl create secret generic asperanode-nodeadmin --from-literal=NODE_USER="myuser" --from-literal=NODE_PASS="mypassword"\n\nkubectl create secret generic asperanode-accesskey --from-literal=ACCESS_KEY_ID="my_access_key" --from-literal=ACCESS_KEY_SECRET="my_access_key_secret"\n')))),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Begin Installation")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to CP4I Platform Home. Click ",Object(a.b)("strong",{parentName:"li"},"Create instance")," inside\nthe ",Object(a.b)("strong",{parentName:"li"},"Aspera")," tile."),Object(a.b)("li",{parentName:"ol"},"A window will pop up with a description of the requirements for\ninstalling. Click ",Object(a.b)("strong",{parentName:"li"},"Continue")," to the helm chart deployment configuration."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("strong",{parentName:"li"},"Overview")," to view the chart information and pre-reqs that\nwere covered in ",Object(a.b)("a",i({parentName:"li"},{href:"#prepare-installation"}),"Prepare Installation"),"."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("strong",{parentName:"li"},"Configure")),Object(a.b)("li",{parentName:"ol"},"Enter the Helm release name. In our example, ",Object(a.b)("strong",{parentName:"li"},"Aspera-1")),Object(a.b)("li",{parentName:"ol"},"Enter Target Namespace - ",Object(a.b)("strong",{parentName:"li"},"Aspera")),Object(a.b)("li",{parentName:"ol"},"Select a Cluster - ",Object(a.b)("strong",{parentName:"li"},"local-cluster"),"."),Object(a.b)("li",{parentName:"ol"},"Tick the license agreement checkbox."),Object(a.b)("li",{parentName:"ol"},"Under Parameters -> Quick start",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Ingress - icp-proxy address defined during icp / common-services installation - icp-proxy.\\","<","openshift-router-domain",">"),Object(a.b)("li",{parentName:"ol"},"Aspera Node - Server Secret - the secret created using the license - ",Object(a.b)("inlineCode",{parentName:"li"},"aspera-server")),Object(a.b)("li",{parentName:"ol"},"Aspera Event Journal - Kafka Host - use hostname of bootstrap server of existing eventstreams installation. Get this value from the Eventstreams web ui."),Object(a.b)("li",{parentName:"ol"},"Aspera Rproxy - address of cluster proxy.  This can be configured later if need be."))),Object(a.b)("li",{parentName:"ol"},"Click All Parameters"),Object(a.b)("li",{parentName:"ol"},"Uncheck production usage"),Object(a.b)("li",{parentName:"ol"},"Image Pull Secret - the secret used to pull images for install from\nthe docker registry. Set to ",Object(a.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," if using entitled\nregistry or if offline use the ",Object(a.b)("inlineCode",{parentName:"li"},"deployer-dockercfg-XX")," secret in your\nnamespace."),Object(a.b)("li",{parentName:"ol"},"Scroll down to the Redis section."),Object(a.b)("li",{parentName:"ol"},"Check Persistence Enabled."),Object(a.b)("li",{parentName:"ol"},"Check Use dynamic provisioning."),Object(a.b)("li",{parentName:"ol"},"Storage Class Name - enter storage class for file storage"),Object(a.b)("li",{parentName:"ol"},"Image Pull Secret - same as step 11."),Object(a.b)("li",{parentName:"ol"},"Scroll down to Persistence"),Object(a.b)("li",{parentName:"ol"},"Enter the same Storage Class Name as step 15"),Object(a.b)("li",{parentName:"ol"},"Proceed to the section Aspera Node"),Object(a.b)("li",{parentName:"ol"},"Node Admin Secret - enter the nodeadmin secret created in the preious\nsection - ",Object(a.b)("inlineCode",{parentName:"li"},"asperanode-nodeadmin")),Object(a.b)("li",{parentName:"ol"},"Access Key Secret - enter the access key secret created in the previous\nsection - ",Object(a.b)("inlineCode",{parentName:"li"},"asperanode-accesskey")),Object(a.b)("li",{parentName:"ol"},"Proceed to the section - Aspera Event Journal"),Object(a.b)("li",{parentName:"ol"},"Kafka Port - change to Kafka port found in Eventstreams bootstrapi\nserver."),Object(a.b)("li",{parentName:"ol"},"Proceed to section Ascp Swarm"),Object(a.b)("li",{parentName:"ol"},"Node Labels - enter the node labels created in the previous section\nfor identifying ascp swarm nodes -",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"{-node-role.kubernetes.io/ascp: true}\n"))),Object(a.b)("li",{parentName:"ol"},"Proceed to section - Noded Swarm"),Object(a.b)("li",{parentName:"ol"},"Node Labels - set to the node label created for noded from the previous section",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),'{-node-role.kubernetes.io/noded: "true"}\n'))),Object(a.b)("li",{parentName:"ol"},"Scroll to section - Sch"),Object(a.b)("li",{parentName:"ol"},"Image Pull Secret - the secret used to pull images for install from\nthe docker registry. Set to ",Object(a.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," if using entitled\nregistry or if offline use the ",Object(a.b)("inlineCode",{parentName:"li"},"deployer-dockercfg-XX")," secret in your\nnamespace.")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Validate installation")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"View all pods running",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"NAME                                                       READY     STATUS      RESTARTS   AGE\naspera-1-aspera-hsts-aej-d8c5b5569-24vh8                   1/1       Running     0          3m\naspera-1-aspera-hsts-aej-d8c5b5569-68nvj                   1/1       Running     0          3m\naspera-1-aspera-hsts-aej-d8c5b5569-v5xgb                   1/1       Running     0          3m\naspera-1-aspera-hsts-ascp-loadbalancer-75849464b-lq8lz     1/1       Running     0          3m\naspera-1-aspera-hsts-ascp-swarm-54c98cb6bb-hznw5           2/2       Running     0          3m\naspera-1-aspera-hsts-create-access-key-v1-24hdg            0/1       Completed   0          3m\naspera-1-aspera-hsts-http-proxy-8b86df4f-8hd6d             1/1       Running     0          3m\naspera-1-aspera-hsts-node-api-796f5c8ccc-r9xs2             2/2       Running     0          3m\naspera-1-aspera-hsts-node-master-788774bbc7-8sl2s          2/2       Running     0          3m\naspera-1-aspera-hsts-noded-loadbalancer-844977799b-f4gd6   1/1       Running     0          3m\naspera-1-aspera-hsts-noded-swarm-6b8498fd-slj8g            2/2       Running     0          3m\naspera-1-aspera-hsts-prometheus-endpoint-bc5974d79-4fv4t   2/2       Running     0          3m\naspera-1-aspera-hsts-prometheus-endpoint-bc5974d79-d426s   2/2       Running     0          3m\naspera-1-aspera-hsts-prometheus-endpoint-bc5974d79-t7f8l   2/2       Running     0          3m\naspera-1-aspera-hsts-stats-5c5c8cc8fc-c2gbr                2/2       Running     0          3m\naspera-1-aspera-hsts-stats-5c5c8cc8fc-lcbxr                2/2       Running     0          3m\naspera-1-aspera-hsts-stats-5c5c8cc8fc-qpj5l                2/2       Running     0          3m\naspera-1-aspera-hsts-tcp-proxy-748b6bb64-j478m             1/1       Running     0          3m\naspera-1-redis-ha-sentinel-0                               1/1       Running     0          3m\naspera-1-redis-ha-sentinel-1                               1/1       Running     0          2m\naspera-1-redis-ha-sentinel-2                               1/1       Running     0          1m\naspera-1-redis-ha-server-0                                 1/1       Running     0          3m\naspera-1-redis-ha-server-1                                 1/1       Running     0          2m\naspera-1-redis-ha-server-2                                 1/1       Running     0          2m\n")))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-deploy-fast-file-transfer-2020-1-x-index-mdx-578f037e4ae1b746b32a.js.map