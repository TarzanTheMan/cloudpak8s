(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{pb17:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),n=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var i={},s={_frontmatter:i},c=n.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(c,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Backups Overview"),Object(r.b)("p",null,"All Kubernetes resources are described by data stored in a reliable database which is etcd. In the event of some Pods being  deleted, their supervising Deployment will re-create them from the spec held in the etcd database. In case of your worker node failure, then it will be recovered.\nSo, do we need a backup?  "),Object(r.b)("p",null,"Here are a couple of examples. It will not prevent a misconfigured application from overwriting its data, or an operator from running a command with the wrong environment variables and accidentally dropping the production database instead of the development one. Another example is that it won’t protect you from accidentally deleting the storage volume by mis-clicking in a web console.  "),Object(r.b)("p",null,"Cloud Native DevOps with Kubernetes:",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://learning.oreilly.com/library/view/cloud-native-devops/9781492040750/ch11.html#"}),"https://learning.oreilly.com/library/view/cloud-native-devops/9781492040750/ch11.html#"),"  "),Object(r.b)("p",null,"However, the major factor in running and managing a successful backup process is to understand the needs, SLOs and how services will be delivered to the platform users (i.e. the Platform Operators configure application backups, or the tools are provided and the Application teams configure backups and the platform team is only concerned with the Platform and Storage backups).  This split in responsibility is common and one of the major tenants of OpenShift - Self Service"),Object(r.b)("p",null,"As discussed below, you will find sections on “Day 1” (the installation) and “Day 2” (the daily operations) of the platform.  "),Object(r.b)("p",null,"When you consider backup in OCP there are 2 important catagories to consider: ",Object(r.b)("strong",{parentName:"p"},"system backup")," and ",Object(r.b)("strong",{parentName:"p"},"application data backup"),".   "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"System backup means backup up your etcd data.  "),Object(r.b)("li",{parentName:"ul"},"Backup of Application Data includes both your deployments and data which your applications are accessing to.  ")),Object(r.b)("p",null,"However, one additional aspect that needs to taken into account is “What is contained within the platform??“.  While we discuss within this document the use of the out-of-the-box registry for storing images, capturing build or configuration data, there are cases where this data is not hosted within the platform.  As an example, an external build tool and image repository (i.e. GitOps), where all data for the application is stored in Git and webhooks are used to orchestrate build, tests and deployments.  In those cases the Platform SRE and the DevOps Engineer would focus on how and what must be backed up from a platform perspective and what is handled via a different group/domain (i.e. the SRE team for GitHub)."),Object(r.b)("p",null,"As in any backup it is very important that you test your ability to restore on a regular basis."),Object(r.b)("p",null,"If you are using OpenShift “Managed” service from the Cloud vendor such as ",Object(r.b)("a",o({parentName:"p"},{href:"#Backups-on-IBM-Cloud"}),"IBM Cloud"),", AWS, and Azure, your cloud provider may take care of the etcd and you may not be able to maintain the etcd yourself.  You need to check with your cloud provider to make sure whether you need to take care of the etcd or not.  "),Object(r.b)("h2",null,"Day 1 Platform"),Object(r.b)("p",null,"As part of the platform installation, design decisions (Day 0), must be implemented or placed into the technical debt to be configured as part of Day 2.  As a starting point, the following Day 1 functionality/debt should be installed or captured as a set of initial tasks for Day 2.  While the common statement of “Backup all Persistent Volumes and you’re done”, would be nice, true platform and application backups require additional thought."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Selection and install of backup solutions for the platform.  This includes products, agents or agreed upon processes (i.e. if installed on VMware, how the backup functions of VMware will support the platform)  ")),Object(r.b)("h2",null,"Day 2 Platform"),Object(r.b)("p",null,"Here are the list of Infrastructure-related backup items for day 2.  We will discuss each items in the later section on this page."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#Backing-up-etcd-data"}),"Backup etcd (master hosts)"),": The etcd persists the state of all resource objects and you make a back up etcd data regularly."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#Backing-up-storage"}),"Storage backup"),": Stateful apps save data, mostly attached on storage (persistent volumes), and it contains all the information that apps need in order to run properly making it a priority to backup."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#Backing-up-images"}),"Images backup"),": You can use either internal or external Image Registry to store your images. We discuss the image backup in a separate ",Object(r.b)("a",o({parentName:"li"},{href:"../Image/"}),"document"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#Backing-up-certificate"}),"Certificate backup"),": You have several TLS certificates in your OpenShift cluster. We discuss the certificate backup in a separate ",Object(r.b)("a",o({parentName:"li"},{href:"../Security"}),"document"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#backing-up-services-data"}),"Backing up services data"),": In case you are using the advanced features which comes with OpenShift, you need to consider the persistent storage backup."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#Backing-up-users"}),"Backing up users"),": If you are using LDAP for user authentication, your LDAP server administrator makes users backup.  If you are storing users in your OpenShift cluster with htpasswod for example, then you need to make a backup those."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#backing-up-resource-state"}),"Backing up resource state"),": You need to make a back up of the resource state in case you delete the wrong deployment or others."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#Recovering-from-lost-master-hosts"}),"Recovering from lost master host(s)"),": If one or more master permanently loses, you need to recover those. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#restoring-to-a-previous-cluster-state"}),"Restore cluster state"),": In case an administrator such as SRE or DevOps Engineer deleted something critical, we need to restore your cluster to the previous state."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#recovering-from-expired-control-plane-certificates"}),"Recovering from expired control plane certificates"),": If the TLS certificates are not valid on the cluster member being replaced, then you need to recover from expired control plane certificates.  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#Restore-procedures-and-test"}),"Restore procedures and test"),": You should write a detailed, step-by-step procedure describing how to restore data from backups, and make sure all staff know where to find this document.")),Object(r.b)("h2",null,"Day 1 Application"),Object(r.b)("p",null,"As Day 1, Application backup tasks will cover the following 3 areas:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Stateless applications and/or the pod images are not normally backed up (the orchestration engine will automatically recreate a failed pod/container, or a new deployment task is initiated)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Apps can be redeployed from CI/CD"),Object(r.b)("li",{parentName:"ul"},"Config YAMLs can be restored from version control (like Git)"))),Object(r.b)("li",{parentName:"ul"},"Install, test and enable tools utilized for application backup types"),Object(r.b)("li",{parentName:"ul"},"There are needs to backup services provided for the DevOps Engineer to utilize or consume for persistent data.  This can/will include component specific agents needed for some items. You need to ensure that the data is consistent, sometimes this require locking of the application before taking the backup.")),Object(r.b)("h2",null,"Day 2 Application"),Object(r.b)("p",null,"As Day 2, Application backup tasks can be broken down into 3 distinct areas:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#backing-up-resource-state"}),"Backing up resource state"),": Ensuring that the deployment configuration is backed up (roles and rolebindings, quotas, templates, Etc.), such that the project can be recovered.  This can be split between the platform and application team in that there are some resources (i.e. an external build tool, external image repository, Etc.) that are not within the scope of the platform SRE team.  In this case, it is the responsibility of the Application team to ensure that these non-platform tools are backed up.  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#backing-up-your-application-data"}),"Backing up your application data"),": Applications that require stateful data (i.e. data stored in a No/SQL database or StatefulSets) are provided and managed by the DevOps Engineer (and SRE)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#repository-backup-images-management"}),"Repository backup/Images management"),": Any images used within the application must be backed up to ensure that the latest revision deployed is captured and backed up. A repository backup will normally satisfy this requirement. The image management including backup and build process is out of scope of this document.  ")),Object(r.b)("h2",null,"Mapping to Personas"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",o({parentName:"tr"},{align:null}),"No"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"Persona"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"task"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Backing up etcd data")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Backing up storage")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Backing up images")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"4"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Backing up certificates")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"5"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Backing up Services data")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"6"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Backing up users")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"7"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Backing up resource state")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"8"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Recovering from lost master host(s)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"9"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Restoring to a previous cluster state")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"10"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Recovering from expired control plane certificates")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"11"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE, DevOps Engineer"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Restore procedures and test")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"12"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE, DevOps Engineer"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Backing up resource state")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"13"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE, DevOps Engineer"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Backing up your application data")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"14"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"SRE, DevOps Engineer"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Repository backup/images management")))),Object(r.b)("a",{name:"Backing-up-etcd-data"}),Object(r.b)("h2",null,"Backing up etcd data: ","[ SRE ]"),Object(r.b)("p",null,"The etcd is the key-value store for OpenShift Container Platform, which persists the state of all resource objects.",Object(r.b)("br",{parentName:"p"}),"\n","Back up your cluster’s etcd data regularly and store in a secure location ideally outside the OpenShift Container Platform environment.  "),Object(r.b)("p",null,"Note that do NOT take an etcd backup before the first certificate rotation completes, which occurs 24 hours after installation, otherwise the backup will contain expired certificates.  "),Object(r.b)("p",null,"It is also recommended to take etcd backups during non-peak usage hours, as it is a blocking action.",Object(r.b)("br",{parentName:"p"}),"\n","Once you have an etcd backup, you can recover from lost master hosts and restore to a previous cluster state.",Object(r.b)("br",{parentName:"p"}),"\n","You can perform the etcd data backup process on any master host that has connectivity to the etcd cluster, where the proper certificates are provided.  "),Object(r.b)("p",null,"You can find out the procedure to back up etcd data in the official document.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/backup_and_restore/backing-up-etcd.html"}),"https://docs.openshift.com/container-platform/4.3/backup_and_restore/backing-up-etcd.html"),"  "),Object(r.b)("a",{name:"Backing-up-storage"}),Object(r.b)("h2",null,"Backing up storage: ","[ SRE ]"),Object(r.b)("p",null,"Stateful apps save data, mostly attached on storage (persistent volumes), and it contains all the information that apps need in order to run properly making it a priority to backup. While”Application Data” is the norm for what needs to be backed up for applications (see “Application Data Backups”, there are additional areas to be considered and they are lumped under the term “Storage”.  These essential items such as secrets (normally part of the etcd backup), certificates (once again, normal part of the etcd backup).  However, this can also include specific items such as application specific Software Defined Network (SDN configuration), Etc.  In summary, all configuration items needed to restore the application (from image, to platform configuration, to application data), must be included in your backup solution and plan"),Object(r.b)("a",{name:"Backing-up-images"}),Object(r.b)("h2",null,"Images backup: ","[ SRE ]"),Object(r.b)("p",null,"You can use either internal or external Image Registry to store your images. We discuss the image backup in a separate ",Object(r.b)("a",o({parentName:"p"},{href:"../Image/"}),"document"),".  "),Object(r.b)("p",null,"When utilizing the internal/Red Hat provided Registry (installed via an Operator), the Registry is configured and utilizes a standard Persistent Volume.  However, while the standard “backup all persistent volumes”, still applies, the Image Registry should have its own set of SLOs and processes for backups.  As an example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Image Registry backups will occur more frequently than other Persistent Volumes"),Object(r.b)("li",{parentName:"ul"},"Image Registry backups will be triggered whenever there is a commit (Image added), to ensure minimal/no loss of data"),Object(r.b)("li",{parentName:"ul"},"Image Registry backups will allow for the restoration of a single image (instead of a complete Persistent Volume restoration)."),Object(r.b)("li",{parentName:"ul"},"Etc.  ")),Object(r.b)("p",null,"The takeaway from the above is that the Image Registry is a shared service (versus an application level), that your platform consumers are depending upon the operations team to maintain and ensure data recovery in the case of failures."),Object(r.b)("a",{name:"Backing-up-certificate"}),Object(r.b)("h2",null,"Certificate backup: ","[ SRE ]"),Object(r.b)("p",null,"You have several TLS certificates in your OpenShift cluster. We discuss the certificate backup in a separate ",Object(r.b)("a",o({parentName:"p"},{href:"../Security/"}),"document"),".  "),Object(r.b)("a",{name:"backing-up-services-data"}),Object(r.b)("h2",null,"Backing up Services data: ","[ SRE ]"),Object(r.b)("p",null,"In case you are using the following features which comes with OpenShift, you need to consider the persistent storage backup:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Monitoring")," (Prometheus and Alertmanager)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Logging")," (Elasticsearch)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Metering")," (Hive and Presto)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Service Mesh")," (Elasticsearch)   ")),Object(r.b)("a",{name:"Backing-up-users"}),Object(r.b)("h2",null,"Backing up users: ","[ SRE ]"),Object(r.b)("p",null,"If you are using LDAP for user authentication, your LDAP server administrator makes users backup.  If you are storing users in your OpenShift cluster with htpasswod for example, then you need to make a backup those.  "),Object(r.b)("a",{name:"backing-up-resource-state"}),Object(r.b)("h2",null,"Backing up resource state: ","[ DevOps Engineer ]"),Object(r.b)("p",null,"Apart from etcd failures, there is also the question of saving the state of your individual resources. If you delete the wrong Deployment, for example, how would you re-create it?"),Object(r.b)("p",null,"You would manage your OpenShift resources declaratively, by applying YAML manifests stored in version control.",Object(r.b)("br",{parentName:"p"}),"\n","In theory, then, to re-create (restore) the state of your resource, you should be able to check out the relevant version control repository, and apply all the resources in them. "),Object(r.b)("p",null,"Note:  Some of these items (i.e. build tools, image repositories, Etc.), may not be hosted or under the control of the Platform SREs.  In those cases, it is the responsibility of the Development Engineer to ensure a backup process is in place and tested."),Object(r.b)("p",null,"Cloud Native DevOps with Kubernetes:",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://learning.oreilly.com/library/view/cloud-native-devops/9781492040750/ch11.html#"}),"https://learning.oreilly.com/library/view/cloud-native-devops/9781492040750/ch11.html#"),"   "),Object(r.b)("p",null,"When utilizing the internal/Red Hat provided Build and Pipeline tools (installed via an Operator), these tools are configured and utilize a standard set of Persistent Volumes.  However, while the standard “backup all persistent volumes”, still applies, the Build & Pipeline tools should have its own set of SLOs and processes for backups.  As an example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Backups will occur more frequently than other Persistent Volumes"),Object(r.b)("li",{parentName:"ul"},"Backups will allow for the restoration of a single Application set of data (instead of a complete Persistent Volume restoration)."),Object(r.b)("li",{parentName:"ul"},"Etc.  ")),Object(r.b)("p",null,"The takeaway from the above is that the Build and Pipeline tools are a shared service (versus an application level), that your platform consumers are depending upon the operations team to maintain and ensure data recovery in the case of failures. "),Object(r.b)("a",{name:"Recovering-from-lost-master-hosts"}),Object(r.b)("h2",null,"Recovering from lost master hosts: ","[ SRE ]"),Object(r.b)("p",null,"We talked about etcd database which we will make a backup. You need to understand a bit more detail about the etcd to prepare master hosts recovery including etcd.  "),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"etcd")," is designed to withstand machine failures. An etcd cluster automatically recovers from temporary failures (e.g., machine reboots) and tolerates up to (N-1)/2 permanent failures for a cluster of N members.",Object(r.b)("br",{parentName:"p"}),"\n","When a member permanently fails, whether due to hardware failure or disk corruption, it loses access to the cluster.",Object(r.b)("br",{parentName:"p"}),"\n","If the cluster permanently loses more than (N-1)/2 members then it disastrously fails, irrevocably losing quorum. Once quorum is lost, the cluster cannot reach consensus and therefore cannot continue accepting updates.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/etcd-io/etcd/blob/master/Documentation/op-guide/recovery.md"}),"https://github.com/etcd-io/etcd/blob/master/Documentation/op-guide/recovery.md"),"   "),Object(r.b)("p",null,"There are a few situations you can think of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A single etcd member is failed. It assumes that there is still an etcd quorum in the cluster."),Object(r.b)("li",{parentName:"ul"},"A majority of your masters still available and have an etcd quorum, then follow the procedure to replace a single failed master host (etcd member)."),Object(r.b)("li",{parentName:"ul"},"A majority of master hosts have been lost, leading to etcd quorum loss and the cluster going offline. It assumes that you have at least one healthy master host.")),Object(r.b)("p",null,"For the fist and second scenarios above, your recovery procedure will be the same. For the 3rd scenario, you will have different recovery procedure.  See the official manual for procedures.",Object(r.b)("br",{parentName:"p"}),"\n","Note:OpenShift 4.x requires minimum 3 master nodes where the etcd runs."),Object(r.b)("p",null,"You can find out the procedure to recover from lost master hosts in the official document.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/backup_and_restore/replacing-failed-master.html"}),"https://docs.openshift.com/container-platform/4.3/backup_and_restore/replacing-failed-master.html"),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/backup_and_restore/disaster_recovery/scenario-1-infra-recovery.html#dr-infrastructure-recovery"}),"https://docs.openshift.com/container-platform/4.3/backup_and_restore/disaster_recovery/scenario-1-infra-recovery.html#dr-infrastructure-recovery"),"  "),Object(r.b)("a",{name:"restoring-to-a-previous-cluster-state"}),Object(r.b)("h2",null,"Restoring to a previous cluster state: ","[ SRE ]"),Object(r.b)("p",null,"To restore the cluster to a previous state, you must have previously backed up etcd data by creating a snapshot.",Object(r.b)("br",{parentName:"p"}),"\n","You will use the snapshot (a saved etcd backup) to restore back to a previous cluster state.  "),Object(r.b)("p",null,"For example, if an administrator (either SRE and/or DevOps Engineer) deletes something critical. As long as you have taken an etcd backup, you can restore your cluster to a previous state."),Object(r.b)("p",null,"You can find out the procedure to restore to a previous cluster state in the official document.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state.html"}),"https://docs.openshift.com/container-platform/4.3/backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state.html")),Object(r.b)("a",{name:"recovering-from-expired-control-plane-certificates"}),Object(r.b)("h2",null,"Recovering from expired control plane certificates: ","[ SRE ]"),Object(r.b)("p",null,"If the TLS certificates are not valid on the cluster member being replaced, then you need to recover from expired control plane certificates.\nAnother scenario is that if you shut down your cluster before the first certificate rotation, which occurs 24 hours after installation, your certificates will not be rotated and will expire. Then you need to recover from expired control plane certificates to access your cluster.  "),Object(r.b)("p",null,"You can find out the procedure to recover from expired control plane certificates in the official document.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/backup_and_restore/disaster_recovery/scenario-3-expired-certs.html#dr-recovering-expired-certs"}),"https://docs.openshift.com/container-platform/4.3/backup_and_restore/disaster_recovery/scenario-3-expired-certs.html#dr-recovering-expired-certs"),"   "),Object(r.b)("a",{name:"Restore-procedures-and-test"}),Object(r.b)("h2",null,"Restore procedures and test: ","[ SRE / DevOps Engineer ]"),Object(r.b)("p",null,"It’s not very likely that you’d lose the whole cluster. What’s more likely is that you (or your newest team member) might delete a namespace by accident, shut down a Deployment without meaning to, or specify the wrong set of labels to a kubectl delete command, removing more than you intended. Whatever the cause, it does happen.  "),Object(r.b)("p",null,"You should write a detailed, step-by-step procedure describing how to restore data from backups, and make sure all staff know where to find this document. When a disaster happens, it’s usually at an inconvenient time, the key people aren’t available, everyone’s in a panic, and your procedure should be so clear and precise that it can be carried out by someone who isn’t familiar with Kubernetes.  "),Object(r.b)("p",null,"Each month, run a restore test by having a different team member execute the restore procedure against a temporary cluster. This verifies both that your backups are good and that the restore procedure is correct, and makes sure everyone is familiar with how to do it.  "),Object(r.b)("p",null,"Cloud Native DevOps with Kubernetes:",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://learning.oreilly.com/library/view/cloud-native-devops/9781492040750/ch11.html#"}),"https://learning.oreilly.com/library/view/cloud-native-devops/9781492040750/ch11.html#"),"  "),Object(r.b)("a",{name:"backing-up-your-application-data"}),Object(r.b)("h2",null,"Backing up your application data: ","[ SRE / DevOps Engineer ]"),Object(r.b)("p",null,"Backup strategy for applications running on kubernetes depends on application design (stateless vs stateful) and deployment process (CI/CD).",Object(r.b)("br",{parentName:"p"}),"\n","Stateless application does not store any state data and simple re-deployment from from CI/CD pipeline or from YAML definition files should be sufficient to restore the application.",Object(r.b)("br",{parentName:"p"}),"\n","Stateful apps on the other hand save data, mostly attached on ",Object(r.b)("a",o({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"}),"persistent volumes"),", and it is these volumes that contain all the information that apps need in order to run properly making it a priority to backup. A persistent volume (PV) is a cluster-wide resource used to store data in a way that it persists beyond the lifetime of a pod. There are many ",Object(r.b)("a",o({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.2/storage/understanding-persistent-storage.html#types-of-persistent-volumes_understanding-persistent-storage"}),"types of PVs")," and some of them are backed up by networked storage system such as EBS, NFS or Ceph and other are locally attached storage like Local Volume or HostPath. The storage space in a PV is requested via another type of kubernetes object - Persistent Volume Claim (PVC). The PVC requests a PV with desired specification (size, speed, etc.) from Kubernetes and binds it then to a pod, where it can be mounted as a volume.  "),Object(r.b)("p",null,"Kubernetes persistent volumes by example",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",o({parentName:"p"},{href:"http://kubernetesbyexample.com/pv/"}),"http://kubernetesbyexample.com/pv/")),Object(r.b)("h3",null,"Application specific backup"),Object(r.b)("p",null,"Other option for application backup is to use standard backup tools specific for the workload using persistent volumes like ",Object(r.b)("inlineCode",{parentName:"p"},"pg_dump")," for Postgresql or ",Object(r.b)("inlineCode",{parentName:"p"},"mongodump")," for MongoDB."),Object(r.b)("a",{name:"repository-backup-images-management"}),Object(r.b)("h2",null,"Repository backup/Images management: ","[ SRE / DevOps Engineer ]"),Object(r.b)("p",null,"Any images used within the application must be backed up to ensure that the latest revision deployed is captured and backed up. A repository backup will normally satisfy this requirement. The image management including backup and build process is out of scope of this document.  "),Object(r.b)("p",null,"As stated earlier, backing up the Image Registry and the Red Hat Provided Build & Pipeline tools is a key concept that should have specific SLOs and processes.  This satisfies the requirements for a platform provided set of tools and image retention.  However, if using external backup product then this comes under the scope of the team provide the backup service, to ensure Images within the registrey and backed up and restored\nFrom a restoration perspective; restoring the Image Repository would ensure any existing build or deployment scripts work as expected.  The restoration of the Red Hat provided Build and Pipeline tools data (and the tools themselves if necessary), would enable any Development team to recreate and deploy an image using the original build files."),Object(r.b)("h2",null,"Implementing backup"),Object(r.b)("h2",null,"Kubernetes out-of-the-box"),Object(r.b)("p",null,"Kubernetes is not providing any specific function for backup. However, backup can be implemented using Operator Framework.",Object(r.b)("br",{parentName:"p"}),"\n","Valero is an open source tool typically used for backup (see reference for details).    "),Object(r.b)("h2",null,"OpenShift out-of-the-box"),Object(r.b)("p",null,"OpenShift does support etcd backup and restore.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/backup_and_restore/backing-up-etcd.html"}),"https://docs.openshift.com/container-platform/4.3/backup_and_restore/backing-up-etcd.html"),"  "),Object(r.b)("p",null,"You can implement your own operator to make a back up of your application by using Operator Framework.  "),Object(r.b)("h2",null,"IBM Cloud Pak for MCM"),Object(r.b)("h2",null,"Backups on IBM or other Clouds"),Object(r.b)("p",null,"With OpenShift on IBM Cloud (and similar to the managed OCP platforms which are a managed services), you cannot access the Masters to manage it.  In other words, the vendor will maintain the etcd on Master nodes. However, these backups do not allow for single Object restoration (i.e. deleting a secret by accident).  For that reason, it is impposible to recover these items so rigid procesess must be utilized to ensure that these sort of actions are recoverable.    "),Object(r.b)("h2",null,"Others"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Velero"),Object(r.b)("br",{parentName:"p"}),"\n","Velero is an open source tool to safely backup and restore, perform disaster recovery, and migrate Kubernetes cluster resources and persistent volumes.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://velero.io/"}),"https://velero.io/"),Object(r.b)("br",{parentName:"p"}),"\n","How Velero works: ",Object(r.b)("a",o({parentName:"p"},{href:"https://velero.io/docs/v1.2.0/how-velero-works/"}),"https://velero.io/docs/v1.2.0/how-velero-works/"),"  "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Stash"),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://stash.run/"}),"Stash"),"  "),Object(r.b)("h2",null,"Other consideration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Platform backup SLOs and requirements.  This will include items such as etcd backed up weekly (since a new member can be installed and synched).  How often the repository will be backed up, how the change process will include the need to perform backups outside of schedule (i.e. Certificates updated, perform backup as part of that process such that a restoration will include the new certificates).  These requirements create the platform processes, SLOs and must meet the business continuity requirements for restoration due to a failure or data loss.  ")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Mapping of the entire platform as to the technology and monitoring of backups.  I.e. Some Operators provide “backup” services embedded in the Operator and do not need external products.  Their configuration is performed via a CRD and the resulting backup can then be captured using additional products as necessary (i.e. Operator opens destination pool, performs backup but they pool may still be part of the platform storage system which will require additional technology to backup")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-backups-index-mdx-095bae100ef81a7a340e.js.map