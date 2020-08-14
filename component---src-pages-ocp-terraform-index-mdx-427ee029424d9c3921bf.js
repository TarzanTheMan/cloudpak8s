(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{"1Jw5":function(e,r,t){"use strict";t.r(r),t.d(r,"_frontmatter",(function(){return i})),t.d(r,"default",(function(){return c}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var n=t("7ljp"),a=t("013z");t("qKvR");function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i={},s={_frontmatter:i},l=a.a;function c(e){var r=e.components,t=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(n.b)(l,o({},s,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Terraform Introduction and Motivation"),Object(n.b)("p",null,"Terraform is an open source infrastructure automation tool, which can be\ninstalled from ",Object(n.b)("inlineCode",{parentName:"p"},"https://terraform.io"),". Using it, infrastructure can be\ndeclaratively specified, deployed, updated and versioned. The declarative\ndefinition of infrastructure resources is sometimes called “infrastructure as\ncode”. These declarations enable the same infrastructure setup to be reproduced\nto different instances and even different underlying infrastructure. This\ncapability allows easy and reproduceable infrastructure environment deployment. "),Object(n.b)("p",null,"As there are many terraform providers for cloud infrastructure vendors,\nterraform skills can be transferred between cloud providers to build platforms\non multiple clouds."),Object(n.b)("p",null,"Terraform is a useful tool for building ",Object(n.b)("em",{parentName:"p"},"immutable infrastructure"),", which is a\nparadigm where infrastructure is never modified after it is deployed.  This\nallows the state of the infrastructure to be completely defined by the declarative\ndefinitions, and destroyed and recreated when problems arise."),Object(n.b)("h3",null,"Terraform resources"),Object(n.b)("p",null,"In Terraform, a resource is a component of your infrastructure. It could be a\nlow level component such as a physical server, virtual machine, or container.\nIt could also be a higher level component such as an email provider, DNS record,\nor database provider. "),Object(n.b)("h3",null,"Terraform providers"),Object(n.b)("p",null,"Infrastructure resources are provisioned by providers. Providers are responsible\nin Terraform for managing the lifecycle of a resource: create, read, update,\ndelete. A provider definition includes the necessary credentials to access the\ninfrastructure. A provider translates the declarative resources specified in the\nterraform language to API calls for the specific provider. Providers generally\nare available for an IaaS (e.g. AWS, GCP, Microsoft Azure, OpenStack),\nPaaS (e.g. Heroku), or\nSaaS service (e.g. Terraform Enterprise, DNSimple, CloudFlare)."),Object(n.b)("p",null,"Terraform uses provider plugins to generate resources for different\ninfrastructure components. Plugins allow terraform capabilities to be extended\nand new resource classes to be provisioned. The providers and plugins maintained\nby Hashicorp, the creator of Terraform, reside in a set of repositories in the\n",Object(n.b)("inlineCode",{parentName:"p"},"terraform-providers")," organization in Github. Third party providers and plugins\ncan also be housed in other Github repositories."),Object(n.b)("h3",null,"Terraform project layout"),Object(n.b)("p",null,"Terraform modules and resource definitions are defined in a set of ",Object(n.b)("inlineCode",{parentName:"p"},"*.tf")," files.\nA module is a grouping of multiple resources that are used together and deployed\ntogether. The most common set of ",Object(n.b)("inlineCode",{parentName:"p"},"*.tf")," files you will see in the current\ndirectory from which you run your terraform deployment are as follows:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"variables.tf")," - This file contains the definitions for all the input\nvariables needed to deploy the resources defined in the module. Typically this\nfile contains variable declarations only, not variable values."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"outputs.tf")," - This file defines any output or return value variables that\nwill be produced. The output values can be used by another module performing\nthe next step of a deployment."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"*.tf")," - Any additional resources may be in other files with ",Object(n.b)("inlineCode",{parentName:"li"},"*.tf")," extension.\nThe provider plugins that will be used to deploy those resources, the name and\nlocation of ",Object(n.b)("em",{parentName:"li"},"modules"),", each of which contains the definitions and instructions\nto deploy a resource, and necessary variables for those plugins, resources and\nmodules. "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"terraform.tfvars")," - This file is configured with the values to apply to\nvariables declared in ",Object(n.b)("inlineCode",{parentName:"li"},"variables.tf"),". This file may contain credentials and\nshould not be committed to source control without some type of access controls.")),Object(n.b)("h3",null,"Terraform execution"),Object(n.b)("p",null,"Before execution, prepare the variables file with all required variables as\ndefined in ",Object(n.b)("inlineCode",{parentName:"p"},"variables.tf"),". Use the ",Object(n.b)("inlineCode",{parentName:"p"},"terraform init")," command to download all\nrequired terraform providers and modules to the local directory."),Object(n.b)("p",null,"Using the ",Object(n.b)("inlineCode",{parentName:"p"},"terraform plan")," command, we can check what terraform will do without\nactually making any infrastructure changes, which is helpful to examine what\nwould happen without incurring costs associated with creating or destroying\nresources."),Object(n.b)("p",null,"When run using the ",Object(n.b)("inlineCode",{parentName:"p"},"terraform apply")," command, the variable substitutions are\nread from the ",Object(n.b)("inlineCode",{parentName:"p"},".tfvars")," file.  Terraform internally generates a dependency\ngraph and will begin provisioning resources in a topological order."),Object(n.b)("h3",null,"Terraform state and drift detection"),Object(n.b)("p",null,"Terraform creates a state file with the ",Object(n.b)("inlineCode",{parentName:"p"},"*.tfstate")," extension to store the\nresults of resources it has provisioned during every ",Object(n.b)("inlineCode",{parentName:"p"},"terraform apply")," run.",Object(n.b)("br",{parentName:"p"}),"\n","It uses this file to detect drift, which are differences in the actual\ninfrastructure and terraform’s own view of the resources it has created.",Object(n.b)("br",{parentName:"p"}),"\n","For example, if someone has removed a virtual machine after deployment,\nterraform is able to compare its state file with the live state and recreate\nthe virtual machine according to the resource definitions."),Object(n.b)("h3",null,"Terraform modules"),Object(n.b)("p",null,"Terraform modules may be packaged in sub-directories or in separate\ngit repositories for code reuse.  The main\nlogic can be contained in a repo that combines one or more\nmodules to build a full end-to-end solution. Alternatively,\nthe main repo\nmay contain pointers to multiple modules, each of which\nresides in its own github repo. These modules are typically\nself-contained functions that often need to be run in a certain\nsequence. Some of the components may be shared across\ndifferent implementations. "),Object(n.b)("h3",null,"Using Terraform to install OpenShift 4"),Object(n.b)("p",null,"Where requirements dictate a network-restricted installation, or some\nother infrastructure customization outside the capabilities of an\ninstaller-provisioned infrasture (IPI) installation, terraform can\nbe used to automate some or all of the user-provisioned infrastructure (UPI)\ninstallation.\nSample terraform\nscripts are provided in the sections for ",Object(n.b)("a",o({parentName:"p"},{href:"../openshift4_aws/"}),"AWS"),",\n",Object(n.b)("a",o({parentName:"p"},{href:"../openshift4_azure/"}),"Azure"),", ",Object(n.b)("a",o({parentName:"p"},{href:"../openshift4_gcp/"}),"Google Cloud Platform"),",\nand ",Object(n.b)("a",o({parentName:"p"},{href:"../openshift4_vmware/"}),"VMware"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ocp-terraform-index-mdx-427ee029424d9c3921bf.js.map