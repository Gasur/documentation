(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{172:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This tutorial briefly covers creating new SSL certificates for your panel and daemon using LetsEncrypt™.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("To begin, we will be installing certbot, a simple script that will automatically renew our certificates and allow much\ncleaner creation of them. The command below is for Ubuntu distributions, but you can always check "),a("a",{attrs:{href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Certbot's official\nsite"),a("OutboundLink")],1),t._v(" for installation instructions.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[t._v("After installing certbot, we need to then generate a certificate. There are a couple ways to do that, but the\neasiest is to have letsencrypt spin-up a temporary web-server to do this. In order for this to work, you will\nfirst need to stop NGINX or Apache.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Once you've generated the certificate you should start NGINX or Apache again to have the certificates applied (assuming\nthat you've already configured the webservers to use SSL).")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("You'll also probably want to configure automatic renewal by adding the command below to a cronjob that runs daily.\nYou can add the command below to that crontab. For advanced users, we suggest installing and using "),a("a",{attrs:{href:"https://acme.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("acme.sh"),a("OutboundLink")],1),t._v("\nwhich provides more options (see below), and is much more powerful than certbot.")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("Stop NGINX:")]),t._v(" "),t._m(10),a("p",[t._v("Renew the certificate:")]),t._v(" "),t._m(11),a("p",[t._v("Once the process has complete, you can restart the NGINX service:")]),t._v(" "),t._m(12)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"creating-ssl-certificates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-ssl-certificates","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating SSL Certificates")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"method-1-using-certbot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-1-using-certbot","aria-hidden":"true"}},[this._v("#")]),this._v(" Method 1: Using Certbot")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:certbot/certbot\n"),a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt update\n"),a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" certbot\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"creating-a-certificate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-certificate","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a Certificate")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Then, in the command below, you should replace "),e("code",[this._v("example.com")]),this._v(" with the domain you would like to generate a certificate\nfor. If you have multiple domains you would like certificates for, simply add more "),e("code",[this._v("-d anotherdomain.com")]),this._v(" flags to the\ncommand. You can also look into generating a wildcard certificate but that is not covered in this tutorial.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("certbot certonly -d example.com\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"auto-renewal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auto-renewal","aria-hidden":"true"}},[this._v("#")]),this._v(" Auto Renewal")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("certbot renew\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you get an "),e("code",[this._v("Insecure Connection")]),this._v(" or related error when trying to access your panel, it is likely that the SSL certificate has expired.\nThis can be easily fixed by renewing the SSL certificate, although using the command "),e("code",[this._v("certbot renew")]),this._v(" won't do the job. As it'll give a error like: "),e("code",[this._v("Error: Attempting to renew cert (domain) from /etc/letsencrypt/renew/domain.conf produced an unexpected error")]),this._v(".\nThis will happen especially if you're running NGINX instead of Apache. The solution for this is to stop NGINX, then renew the certificate, finally restart NGINX.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("systemctl stop nginx\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("certbot renew\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("systemctl start nginx\n")])])])}],!1,null,null,null);e.default=s.exports}}]);