(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{Gjkc:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return b})),a.d(e,"default",(function(){return o}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var b={},c={_frontmatter:b},i=r.a;function o(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,["components"]);return Object(n.b)(i,l({},c,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"Prerequisites"),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"OpenShift 4 Compute Requirements:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Machine"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Operating System"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"vCPU"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"RAM"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Storage"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Bootstrap"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"RHCOS"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"4"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 GB"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"120 GB")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Control Plane"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"RHCOS"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"4"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 GB"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"120 GB")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Compute"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"RHCOS or RHEL 7.6"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8 GB"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"120 GB")))),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"OpenShift 4 Network Requirements")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"DHCP - required for VMs to obtain itinital ignition config from bootstrap host"),Object(n.b)("li",{parentName:"ol"},"DNS - The following DNS entries are required to be in place prior to deployment")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Component"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Record"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Kubernetes API"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"api.","<","cluster_name",">",".","<","base_domain",">"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"This DNS record must point to the load balancer for the control plane machines. This record must be resolvable by both clients external to the cluster and from all the nodes within the cluster.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Kubernetes API"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"api-int.","<","cluster_name",">",".","<","base_domain",">"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"This DNS record must point to the load balancer for the control plane machines. This record must be resolvable from all the nodes within the cluster.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Routes"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"*.apps.","<","cluster_name",">",".","<","base_domain",">"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"A wildcard DNS record that points to the load balancer that targets the machines that run the Ingress router pods, which are the worker nodes by default. This record must be resolvable by both clients external to the cluster and from all the nodes within the cluster.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"etcd"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"etcd-","<","index",">",".","<","cluster_name",">",".","<","base_domain",">"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"OpenShift Container Platform requires DNS records for each etcd instance to point to the control plane machines that host the instances. The etcd instances are differentiated by ","<","index",">"," values, which start with ",Object(n.b)("strong",{parentName:"td"},"0")," and end with ",Object(n.b)("strong",{parentName:"td"},"n-1"),", where ",Object(n.b)("strong",{parentName:"td"},"n")," is the number of control plane machines in the cluster. The DNS record must resolve to an unicast IPv4 address for the control plane machine, and the records must be resolvable from all the nodes in the cluster.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"etcd"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"_","etcd-server-ssl._tcp.","<","cluster_name",">",".","<","base_domain",">"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"For each control plane machine, OpenShift Container Platform also requires a SRV DNS record for etcd server on that machine with priority ",Object(n.b)("inlineCode",{parentName:"td"},"0"),", weight ",Object(n.b)("inlineCode",{parentName:"td"},"10")," and port ",Object(n.b)("inlineCode",{parentName:"td"},"2380"),". A cluster that uses three control plane machines requires the following records:")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"_","etcd-server-ssl._tcp.","<","cluster_name",">",".","<","base_domain",">","  86400 IN    SRV 0        10     2380 etcd-0.","<","cluster_name",">",".","<","base_domain",">",".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"_","etcd-server-ssl._tcp.","<","cluster_name",">",".","<","base_domain",">","  86400 IN    SRV 0        10     2380 etcd-1.","<","cluster_name",">",".","<","base_domain",">",".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"_","etcd-server-ssl._tcp.","<","cluster_name",">",".","<","base_domain",">","  86400 IN    SRV 0        10     2380 etcd-2.","<","cluster_name",">",".","<","base_domain",">",".")))),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Firewall (From all machines to all machines)")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"th"},"Protocol")),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Port"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"TCP"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"2379-2380")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"etcd server, peer, and metrics ports")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"TCP"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"6443")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Kubernetes API")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"TCP"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"9000-9999")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Host level services, including the node exporter on ports ",Object(n.b)("inlineCode",{parentName:"td"},"9100"),"-",Object(n.b)("inlineCode",{parentName:"td"},"9101")," and the Cluster Version Operator on port ",Object(n.b)("inlineCode",{parentName:"td"},"9099"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"TCP"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"10249-10259")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The default ports that Kubernetes reserves")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"TCP"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"10256")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"openshift-sdn")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"UDP"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"4789")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"VXLAN and GENEVE")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"UDP"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"6081")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"VXLAN and GENEVE")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"UDP"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"9000-9999")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Host level services, including the node exporter on ports ",Object(n.b)("inlineCode",{parentName:"td"},"9100"),"-",Object(n.b)("inlineCode",{parentName:"td"},"9101"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"UDP"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"30000-32767")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Kubernetes NodePort")))),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"Firewall (LoadBalancer)")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Port"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Machines"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Internal"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"External"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"6443")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Bootstrap and control plane. You remove the bootstrap machine from the load balancer after the bootstrap machine initializes the cluster control plane."),Object(n.b)("td",l({parentName:"tr"},{align:null}),"x"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"x"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Kubernetes API server")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"22623")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Bootstrap and control plane. You remove the bootstrap machine from the load balancer after the bootstrap machine initializes the cluster control plane."),Object(n.b)("td",l({parentName:"tr"},{align:null}),"x"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Machine Config server")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"443")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The machines that run the Ingress router pods, compute, or worker, by default."),Object(n.b)("td",l({parentName:"tr"},{align:null}),"x"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"x"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"HTTPS traffic")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"80")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The machines that run the Ingress router pods, compute, or worker by default."),Object(n.b)("td",l({parentName:"tr"},{align:null}),"x"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"x"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"HTTP traffic")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ocp-prereqs-openshift-4-index-mdx-6a4bdd6151b06dedba3b.js.map