(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{Mau6:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return r}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var o=a("7ljp"),n=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var s={},l={_frontmatter:s},c=n.a;function r(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(o.b)(c,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Logging Solutions on IBM Cloud"),Object(o.b)("p",null,"The logs such as system log and application log are useful for debugging and monitoring cluster activity. Most of container platform supports a logging solution including OpenShift Container Platform.  "),Object(o.b)("p",null,"By default, logs are generated and written locally.  Several logging solutions are available to collect, forward, and view the logs in OpenShift on IBM Cloud.  "),Object(o.b)("h2",null,"Choosing a logging solution"),Object(o.b)("p",null,"You can choose your logging solution based on which cluster components you need to collect logs for. There are several logs produced in different components in OpenShift as follow:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Application log"),Object(o.b)("li",{parentName:"ul"},"OpenShift Master log"),Object(o.b)("li",{parentName:"ul"},"OpenShift Worker Nodes/Pods log  ")),Object(o.b)("p",null,"A common implementation is to choose a logging service that you prefer based on its analysis and interface capabilities, such as IBM Log Analysis with LogDNA or Built-in OpenShift Logging functions.  "),Object(o.b)("p",null,"You can then use IBM Cloud Activity Tracker with LogDNA to audit user activity in the cluster.  We will discuss it in the later section.  "),Object(o.b)("h2",null,"Application Log"),Object(o.b)("p",null,"You would generate your applications’ logs for several purposes.  If your applications encounter errors, it would log those errors and those logs may be useful for debugging.  Every application may write logs in different places with different format.  Therefore, you may need to consider how to take care of those logs.  "),Object(o.b)("p",null,"With OpenShift cluster, you would aggregate your applications logs into a central location since your applications may run on several different pods/nodes.  For example, you would forward your application logs to LogDNA and let LogDNA manage those logs.  "),Object(o.b)("h2",null,"OpenShift Master log"),Object(o.b)("p",null,"To collect, forward, and view logs for your cluster’s Kubernetes master, you can take a snapshot of the Master logs at any point in time to collect in an IBM Cloud Object Storage bucket. The snapshot includes anything that is sent through the API server, such as pod scheduling, deployments, or RBAC policies.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-health#collect_master"}),"https://cloud.ibm.com/docs/containers?topic=containers-health#collect_master"),"  "),Object(o.b)("h2",null,"OpenShift Worker Nodes/Pods log"),Object(o.b)("p",null,"There are several ways to check the Worker nodes/pods log.  You can use the CLI to check the logs of an individual OpenShift pod.  You can also use GUI with several different solutions such as OpenShift Web Console, IBM Log Analysis with LogDNA, and external servers with Fluend.  We will take a look at those solutions in the following sections.  "),Object(o.b)("h2",null,"Using the CLI for OpenShift Pod logs"),Object(o.b)("p",null,"You can run the command “oc logs ",Object(o.b)("em",{parentName:"p"},"pod_name")," ” to see the OpenShift pod logs as below."),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{}),'$ oc logs httpd-1-htzpn\n=> sourcing 10-set-mpm.sh ...\n=> sourcing 20-copy-config.sh ...\n=> sourcing 40-ssl-certs.sh ...\nAH00558: httpd: Could not reliably determine the server\'s fully qualified domain name, using 172.30.48.85. Set the \'ServerName\' directive globally to suppress this message\n[Sat Oct 12 14:18:15.760713 2019] [ssl:warn] [pid 1] AH01909: 172.30.48.85:8443:0 server certificate does NOT include an ID which matches the server name\n[Sat Oct 12 14:18:15.761653 2019] [:notice] [pid 1] ModSecurity for Apache/2.9.3 (http://www.modsecurity.org/) configured.\n[Sat Oct 12 14:18:15.761668 2019] [:notice] [pid 1] ModSecurity: APR compiled version="1.4.8"; loaded version="1.4.8"\n[Sat Oct 12 14:18:15.761673 2019] [:notice] [pid 1] ModSecurity: PCRE compiled version="8.32 "; loaded version="8.32 2012-11-30"\n[Sat Oct 12 14:18:15.761680 2019] [:notice] [pid 1] ModSecurity: LUA compiled version="Lua 5.1"\n[Sat Oct 12 14:18:15.761684 2019] [:notice] [pid 1] ModSecurity: YAJL compiled version="2.0.4"\n[Sat Oct 12 14:18:15.761688 2019] [:notice] [pid 1] ModSecurity: LIBXML compiled version="2.9.1"\n[Sat Oct 12 14:18:15.761693 2019] [:notice] [pid 1] ModSecurity: Status engine is currently disabled, enable it by set SecStatusEngine to On.\nAH00558: httpd: Could not reliably determine the server\'s fully qualified domain name, using 172.30.48.85. Set the \'ServerName\' directive globally to suppress this message\n[Sat Oct 12 14:18:15.854039 2019] [ssl:warn] [pid 1] AH01909: 172.30.48.85:8443:0 server certificate does NOT include an ID which matches the server name\n[Sat Oct 12 14:18:15.854206 2019] [http2:warn] [pid 1] AH10034: The mpm module (prefork.c) is not supported by mod_http2. The mpm determines how things are processed in your server. HTTP/2 has more demands in this regard and the currently selected mpm will just not do. This is an advisory warning. Your server will continue to work, but the HTTP/2 protocol will be inactive.\n[Sat Oct 12 14:18:15.854933 2019] [lbmethod_heartbeat:notice] [pid 1] AH02282: No slotmem from mod_heartmonitor\n[Sat Oct 12 14:18:15.859059 2019] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.34 (Red Hat) OpenSSL/1.0.2k-fips configured -- resuming normal operations\n[Sat Oct 12 14:18:15.859089 2019] [core:notice] [pid 1] AH00094: Command line: \'httpd -D FOREGROUND\'\n[Sat Oct 12 14:18:36.654769 2019] [autoindex:error] [pid 38] [client 172.30.75.75:42370] AH01276: Cannot serve directory /opt/rh/httpd24/root/var/www/html/: No matching DirectoryIndex (index.html) found, and server-generated directory index forbidden by Options directive\n172.30.75.75 - - [12/Oct/2019:14:18:36 +0000] "GET / HTTP/1.1" 403 3985 "-" "curl/7.54.0"\n$\n')),Object(o.b)("p",null,"You can use the —follow option with “oc logs” command to monitor the logs for that pod continually.  "),Object(o.b)("h2",null,"Using OpenShift Web Console for Pod logs on IBM Cloud"),Object(o.b)("p",null,"OpenShift provides a capability to see Pod’s logs on the Web Console as shown in below.  "),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",Object(o.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABcSAAAXEgFnn9JSAAACoUlEQVQoz41SSU9TURRuHJhUOtCBN7Rvat8rr0BbWgbthoWJ0kkRZFR3xpUxLly6NXGhUaYW2gT1T6iJMcaNK0yMUHDvwiFBiQiIcI7n3Sox0QUv+d53znduvnvuvcc2UyxDqfwQiqUyTBYKMDUzB5PTszAxVYS796bg/uQMocDy6UKJaROUTxfmYLY0z1AsPaA1Rbh1Zw5ssqIiL/qRF/zIEZrcXnQR7M4mbHS4GOy/0ehwVmOXGx1Ud3t8e/B6fchJJtiiieNotHZAef4RVCrLsLDwmvHy8gqsrLxjvFT5D0hfXKrA28U/WMQXr96ALdV7CqPJFDx5/hLXdhDfr67jx++7+Hljh7CLX7dxPx9Yv09ftqodBsNRePz0Gat8W9/Atc2fuLG1jZs/tnFnF/Zt+GGVDCPtCWyNdcPVa9cxm81hOpPDXP4MZnN57EtnMUNaJpvHtFX7B3lWO53OQq5/EG/cvA02kwzjnSnoHxjCY3YnPYzIHsdBF19T18BwuLa+Gtcf2dNq/9LrGo7CgYOH8GTmPHUYTWIseQKGR8fRLykYMsKoaCGUFQ0lmoCArBBrxCrpQRRpjSCp6FeCpGkoqxar4PZ4MTdwiTpsSzDDoZFxNj7WAi2kk3ELqkGd5VZsbRLUwygTi5KGvJ+MAzI2cwI6mzxQU1eP6bPjYDMicYzRkYdGLgB1CGQCetgEoyUCZES5AbphghYyqpoeBlnVwMcJ4PFxxCJwYgDsThdmzl0kQ7Md48keHB4ZpeHmUVFVlCQZBVGk3Tn0NTcjx/Ms5nmBco5intUtXRAEFP0BGnQHZvrH6MgdvdCRSsPA2GWQQjHQ23ogFOmCUGs3oQuCZicY7T0s1tu6QaNc1uOghhOgEGSD4pYk8LIJ6cEr8AsH7fWT3JJLjgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud_ocp_dashboard_pod_logs",title:"ibmcloud_ocp_dashboard_pod_logs",src:"/static/22c3289685e9e3e94c26de61f9934493/005b4/ibmcloud_ocp_dashboard_pod_logs.png",srcSet:["/static/22c3289685e9e3e94c26de61f9934493/7fc1e/ibmcloud_ocp_dashboard_pod_logs.png 288w","/static/22c3289685e9e3e94c26de61f9934493/a5df1/ibmcloud_ocp_dashboard_pod_logs.png 576w","/static/22c3289685e9e3e94c26de61f9934493/005b4/ibmcloud_ocp_dashboard_pod_logs.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",null,"You can see the same logs with the oc command as shown in the later section. Using the CLI for OpenShift Pod logs.  "),Object(o.b)("h2",null,"EFK stack in OpenShift is NOT supported on IBM Cloud"),Object(o.b)("p",null,"Unlike other environment, the EFK stack such as Elasticsearch, Fluentd, and Kibana as shown in Figure 12 is NOT supported on IBM Cloud because you cannot modify the default configuration of the Red Hat OpenShift on IBM Cloud cluster.  "),Object(o.b)("p",null,Object(o.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}}),"\n      ",Object(o.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABcSAAAXEgFnn9JSAAACTElEQVQoz22TS4+bMBSF87O7n0r9Dd10ll20mz7UdzddVGpn2jB5kIQwhBDiYMCAY0NCIPfUYTIataqlo2uurc/n+ppeuC6OwbtPtP7Zp0IfSJUH0ru2k6qaLkpVU77ddcrkQ8xkaVSRMPOyqmnkFdRLBzZtv3xG9vEDyqLAzHFgWVanycTG734fnHNorSClhFbKaIuy1NjVZGLV5Zq6xGgeUS8MOc3evgG3LFL7lliUUhRntIkFbbigJBHGdU2VWSuNWwB3IqI9/0po0vschidgsE5I7iq0JslTBVFoTJ1bZIXCMtZ4/ysA28TgicDIdmDbE8xdF/agj0dPn2ChcvwF3MQF0bHtkpEBRonEbO4jTgus4i1GvkDIIrAoQZJJKF2irveIogjfgxCLOEHbNA9AxnNq26YDJplGmmsD9JBJDc8PMRoOsfCXGA7H4LE47YNrHEabDeajMXIhcPgXeDwDTcew2hQQsgZLFIx7pEKCp9LMc5wOHJuSw9WqA9+40y4ej/R/oChKbPUOS1OKNqVFeQXLS5HlW6hyD3s6x9IPOkjTD5E9+4bzOAP5ueSmub9DYrygm9HMdFuQxyS9/uGT4wZ064eU5ooOzbHr6qvLF3T57CV1zYziDjhwjMMoyc3HsTvmVHJZ7eEvA2jzvpLUlMkZskyAsTWU0ji0d3uvAhfPVzam7hyPLy4MosZkkVDPW6Vknoj5G/YUGndukNIiNO7CjCbumq5vpjSwPbq2JuR4zFxLRVLvablk5IznFLKYnNuA5FbR1ZjRH7oCNIb3uAmHAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud_efk_not_supported",title:"ibmcloud_efk_not_supported",src:"/static/ae2d5a84fb093bd72f76cc9a77c93107/90640/ibmcloud_efk_not_supported.png",srcSet:["/static/ae2d5a84fb093bd72f76cc9a77c93107/7fc1e/ibmcloud_efk_not_supported.png 288w","/static/ae2d5a84fb093bd72f76cc9a77c93107/a5df1/ibmcloud_efk_not_supported.png 576w","/static/ae2d5a84fb093bd72f76cc9a77c93107/90640/ibmcloud_efk_not_supported.png 650w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "),Object(o.b)("p",null,"Therefore, the EFK in the OpenShift on IBM Cloud is not an option for the logging solution.  "),Object(o.b)("h2",null,"Using IBM Log Analysis with LogDNA"),Object(o.b)("p",null,"You can manage container logs by deploying LogDNA agent to OpenShift cluster. The agent collects logs with the extension .log and extensionless files that are stored in the /var/log directory of pods from all namespaces, including kube-system. The agent then forwards the logs to the IBM Log Analysis with LogDNA service as shown in below.  "),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",Object(o.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABcSAAAXEgFnn9JSAAABcklEQVQoz21QyY7bMAz1/x8H6KHfMRgUSecLAgxyCJpkknppAjteEluKtVhe+Eqp6KUogQeSTxSXF0nlSKiRnnoKEL0LaJ8Ddew915uZJNfUwlLRGvJ/rJtJ24nM8Mf7/CEdRdMlwzNNUbctmqaGMRrWGngbR4e6qlAUObTq8Wg7XIsSzo34n7mRKOq5OE+vdPh5oTjLKbtWVN8F8TsNzlH9uFOe52SMoWVZaCEE+HfPee/ND5S9pYiw4MHnfSYlTkmO3SHGrbrjdDohjRPMTQchBG63G/b7PWLm4jjFdrvF9/d3bDYbrNZr+vL1Ba9va4rmyaGTls5ZiV95g+xagjcMZ4tOwLWSZTBQSkFKCaU51jZIcTwekSQJDz/TavUNH9sdRW4wqJqODucLjucMux+fKMo6aOIbmcEGLX28LHPgp3n5Vz5/Ot8Kiuzg0OuBlHF4Kss6GM4tjB2hmfPbKD0EeI5rWfw59GBN/4KIhykz0m9HFhNVYPsOmQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud_logdna",title:"ibmcloud_logdna",src:"/static/e7468a5d0354f3df39b0312f2bda16d8/005b4/ibmcloud_logdna.png",srcSet:["/static/e7468a5d0354f3df39b0312f2bda16d8/7fc1e/ibmcloud_logdna.png 288w","/static/e7468a5d0354f3df39b0312f2bda16d8/a5df1/ibmcloud_logdna.png 576w","/static/e7468a5d0354f3df39b0312f2bda16d8/005b4/ibmcloud_logdna.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",null,"The sample output on the LogDNA dashboard is shown in below.  "),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",Object(o.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABcSAAAXEgFnn9JSAAACI0lEQVQoz22TS0/bUBCFHRGQgFKVhqTkbTt2bN+nH4kJSKjbqkVddMOGRVf9/7/gnI4NVFRicXQ019LxN3PvBM7fIrcVlGvQ3n3F0+8/+PX4BFcfkOROZLHJzBt3CBMlKhCmCmvxWM6V36G9uUcwncxwejzkURDw/PyMDw/f+fPHN3q1pckTOnGVJdxmuShjVihGm4TrKGYYRUw2ca/Z9JqjqzGC+SrG1egzx+MJLi4+IkkS1N5i5w1u2wb7yqG0GoW20NZBGdd7VyuRcxbeO6RJwsVihWAVJghXK26TFJPJhFor3uxqNl6LV9yVlt4UzJWWb4baGCrxQupCKRrTnSvEccTZfIlgNJ5iMAg4GAxwcnLSB7a1402peRA/VJZ7LyHW0/mKrqxofUnjPK2oLOVcKP8FXo6+IJD5iTAcDiVQsxWy2kmgeCOETj8TFh2ZtkJmZJa6n2dHKMKmm+P7gULYSFAXuK/ftCyUxj5LgvsfiKyMQIRN/Bp49U5g7aVNzdumZFsa1lYJmaOWttWLurojlnbpnXsT+D8hOvx236CSmz60O9Slg1EF8kJBiCBkvWcvtRE6a23f8ry75fFk+hrI4+ER83zL1uW8dynvfMY7m7A1W2bKsq58ryxLGYZrrpYLLpfz3uezKaM4QnC9SHF2cYnTD5f4NLpG2Rxg5H1VRt6YMvDawBmPzDQwvoGVjdCyVUq2ayObEsmmdFpHW8Spxl9pSjvs07vb6gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud_logdna_dashboard",title:"ibmcloud_logdna_dashboard",src:"/static/c0c094b9d83b358c396a395c8d5dd063/005b4/ibmcloud_logdna_dashboard.png",srcSet:["/static/c0c094b9d83b358c396a395c8d5dd063/7fc1e/ibmcloud_logdna_dashboard.png 288w","/static/c0c094b9d83b358c396a395c8d5dd063/a5df1/ibmcloud_logdna_dashboard.png 576w","/static/c0c094b9d83b358c396a395c8d5dd063/005b4/ibmcloud_logdna_dashboard.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("h2",null,"Using Fluentd with an external server"),Object(o.b)("p",null,"To collect, forward, and view logs for a cluster component, you can create a logging configuration by using Fluentd. When you create a logging configuration, the Fluentd cluster component collects logs from the paths for a specified source. Fluentd can then forward these logs to an external server that accepts a syslog protocol as shown in below."),Object(o.b)("p",null,Object(o.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}}),"\n      ",Object(o.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABcSAAAXEgFnn9JSAAABmElEQVQoz1VS7Y7aMBDM+z9IVfUJqPrzTuJXTwWBIMcFEyCXYJMPII6J7ex0Y3rV3Uoj726y490dR6fakHagW+eoNT6cV20DRv+Bf/m2p1p7umhH2jjq7v4/TO+5xlF0qVsyb6/QWuN2u8KYDtbaAO892lYjz084nyvOORwLCVVWeBjhs3lPFClZU5MkOBwLWid7ikVGQuxISklSSUrTI2WZoOKUEvOTtT0ZcyeiwEbDMNAHsxsJz9zhwEEuL3QsarwmKd5zyR2dUdU1Bk/IS4WDkl+60V2HqiqD76ylcULLjIGQr8FJNbTPS8Qix1bs0DRN+DlcFqeQ+xzrzQZCCGzeEjw9PWM6nWKxWGDy6yd9//EN221KUcmEfd+jUBUd3yWS3QGK9zXmwlzMKPIcs/Uadd2E6cy9570WyLKM937D75cXmkwm2B8yFoWVc86HdhlMZBkOPQswxrq7szAdF3a48qm1Qas7FmD4vIGwQ05RNEoeMg97fKUQB18phT+zGVarFZbLJeI4xnw+D6OP3Y0v4aPWuoH+Ar6tYYo43vQQAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud_external_efk",title:"ibmcloud_external_efk",src:"/static/604f4d3280ede3b4c515d5d78e80c744/005b4/ibmcloud_external_efk.png",srcSet:["/static/604f4d3280ede3b4c515d5d78e80c744/7fc1e/ibmcloud_external_efk.png 288w","/static/604f4d3280ede3b4c515d5d78e80c744/a5df1/ibmcloud_external_efk.png 576w","/static/604f4d3280ede3b4c515d5d78e80c744/005b4/ibmcloud_external_efk.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "),Object(o.b)("h2",null,"Understanding options for logging on IBM Cloud"),Object(o.b)("p",null,"To help understand when to use the built-in OpenShift tools or IBM Cloud Log Analysis with LogDNA, you can review the following table.",Object(o.b)("br",{parentName:"p"}),"\n","Note that this is for OpenShift 3.11 statement. With OpenShift 4.2, this will be updated."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",i({parentName:"tr"},{align:"left"}),"OpenShift tools:Built-in OpenShift logging tools"),Object(o.b)("th",i({parentName:"tr"},{align:"left"}),"IBM Cloud integrations:IBM Log Analysis with LogDNA"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",i({parentName:"tr"},{align:"left"}),"• Built-in view of pod logs in the OpenShift web console.• Built-in pod logs are not configured with persistent storage. You must integrate with a cloud database to back up the logging data and make it highly available and manage the logs yourself.Note: You cannot run the Ansible playbook to deploy the OpenShift Container Platform Elasticsearch, Fluentd, and Kibana (EFK) stack because you cannot modify the default configuration of the Red Hat OpenShift on IBM Cloud cluster."),Object(o.b)("td",i({parentName:"tr"},{align:"left"}),"• Customizable user interface for live streaming of log tailing, real-time troubleshooting, issue alerts, and log archiving.• Aggregated logs across clusters and cloud providers.• Historical access to logs that is based on the plan you choose.• Highly available, scalable, and compliant with industry security standards.• Integrated with IBM Cloud IAM for user access management.• Quick integration with the cluster via a script.• Flexible plans, including a free Lite option.• Log Analysis with DNA can aggregate and manage logs from multiple Kubernetes and OpenShift clusters, several Cloud Databases services, and the Certificate Manager Service.• 3rd party LogDNA agent has to be added to worker nodes to forward logs from pod containers to the IBM Log Analysis with LogDNA service.")))),Object(o.b)("h2",null,"Third-party services or configure your own logging"),Object(o.b)("p",null,"In case you have special requirements for logging, you can set up your own logging solution. Check out third-party logging services such as Splunk that you can add to OpenShift cluster.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-supported_integrations#health_services"}),"https://cloud.ibm.com/docs/containers?topic=containers-supported_integrations#health_services"),"  "),Object(o.b)("h2",null,"Solution for Audit Logging"),Object(o.b)("p",null,"You can also collect Kubernetes API audit logs from OpenShift cluster on IBM Cloud and forward them to IBM Log Analysis with LogDNA. To access OpenShift (Kubernetes) audit logs, you must create an audit webhook in the cluster.  "),Object(o.b)("p",null,"The Kubernetes audit system in OpenShift cluster consists of an audit webhook, a log collection service and Web Server app, and a logging agent. The webhook collects the Kubernetes API server events from the Master. The log collection service is a Kubernetes ClusterIP service that is created from an image from the public IBM Cloud registry. This service exposes a simple node.js HTTP webserver app that is exposed only on the private network. The webserver app parses the log data from the audit webhook and creates each log as a unique JSON line. Finally, the logging agent forwards the logs from the webserver app to IBM Log Analysis with LogDNA, where you can view the logs.  "),Object(o.b)("p",null,Object(o.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-health#webhook_logdna"}),"https://cloud.ibm.com/docs/containers?topic=containers-health#webhook_logdna")),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"939px"}},"\n      ",Object(o.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABcSAAAXEgFnn9JSAAABTElEQVQY002R226cMBCGef/7SH2BVurN3lZ5AMJFtarUpmrZckgqYLMcA7YB28BXg5qqI41+zT+/PSev7UdGu6Emyzg7dyhHjVTacebg/sd+3PMGbSyztv/QLgu3RuANvUTnGVIIhBQoKVnXlW3bGMcJ4Xil1OGDkMS/c5qu58123ZvtzXlt2VCdz2RZQRSn5MUL1tpDsH9SXK/ESUJVlhij2daFZeXQaK0P3eQKGz1TdxKvGxTGtZs8F3w+f+U5uxEEAafTiaquWd1IyZdvx8MoikiSlMuvCN/3D10YXvjw8T137+74eXnCE2piWSz5teRHGHOrWp7SlODBZ55dzhiavGB1RZWSWBcLqbiEId8fHynLGw+Bz/39J+I0wytbSef2WDU9Zf1K3Q68ivE4UtcrN8YeTwffOxTuWIPz2SxM7lDGHXT5u8aXWvAHg6/E7sdEzVAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud_audit_log_activity_tracker",title:"ibmcloud_audit_log_activity_tracker",src:"/static/2fd00751363cc13f331211767494e283/9f734/ibmcloud_audit_log_activity_tracker.png",srcSet:["/static/2fd00751363cc13f331211767494e283/7fc1e/ibmcloud_audit_log_activity_tracker.png 288w","/static/2fd00751363cc13f331211767494e283/a5df1/ibmcloud_audit_log_activity_tracker.png 576w","/static/2fd00751363cc13f331211767494e283/9f734/ibmcloud_audit_log_activity_tracker.png 939w"],sizes:"(max-width: 939px) 100vw, 939px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",null,"Sample output of audit log events on the Activity Tracker dashboard is shown in below.  "),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABcSAAAXEgFnn9JSAAACI0lEQVQoz22Sy08TURjFG0GILAobsVDaed33Y6aUAUxYoFDDIyzdGKKJJBqja//97/jNpbWFMMnJvTOT/L5z7rk9Eyak/YTen53T/bcH+vzlK8XpKdl4SI5l45RcPSXjG1I2surH1dVUmkiCVSpPxgUyJ3fU29p6g7W1V9ju93F7c42bqxlUmWE8zjAa5xhlnQrsDQ9Yo6TB/hBDXs+MQT464P0Q+4O3KMM59QbvdjHY26OdnR1SWtGhV9TInCppqODJ3fRSB6psQ9JPSbrD5MyGKf29vaN20rA7R94qhNNb6o0PhqiKknYZHIJHOwnwVYaiksgrjVx0MiikBQ9gOWT8rnTA9/MPiM5CSElKFLDtFfX4AYs2NzcfgbVDLXOUDCqkS4BSe1YEu2TVyBnsXIPfs0+oY4A2hqwR8CfXK8CNDUT+ecTAFx0mcEjwTFhYE/Hz4wU8O5RKkZblyw6PokWUDBQKeRczRWUYu+KzS9CMnVvLwItLRO85viajK/jj66dA7x3axi+BYgXIzipTs2KKbDn6r8sZ6jAHqgruObBzOPFmGZmjLkuZR2ZY51zzgB8cOTr3P7I7fhY51jGd4aKUvCslFbNSCrsseG+5lD9cSrMoRXel3CyBG1yKtQZHHPmpw/mVWXE45m/GBDzwtVmUouT82nTtrq+/pn5/G23bQksBIysIIVFJlSSSNIQyLA3jPAMtzpoGRuvkUJQ59HRG/wC8VlkBsAUCrgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud_activity_tracker_dashboard",title:"ibmcloud_activity_tracker_dashboard",src:"/static/300933b5089c0bf5f0c586fc60db7e64/3cbba/ibmcloud_activity_tracker_dashboard.png",srcSet:["/static/300933b5089c0bf5f0c586fc60db7e64/7fc1e/ibmcloud_activity_tracker_dashboard.png 288w","/static/300933b5089c0bf5f0c586fc60db7e64/a5df1/ibmcloud_activity_tracker_dashboard.png 576w","/static/300933b5089c0bf5f0c586fc60db7e64/3cbba/ibmcloud_activity_tracker_dashboard.png 1152w","/static/300933b5089c0bf5f0c586fc60db7e64/0b124/ibmcloud_activity_tracker_dashboard.png 1728w","/static/300933b5089c0bf5f0c586fc60db7e64/31cb0/ibmcloud_activity_tracker_dashboard.png 1952w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-logging-log-dna-ibm-index-mdx-abb37b72381b598d3d19.js.map