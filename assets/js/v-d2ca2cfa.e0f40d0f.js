"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[59101],{87810:(e,t,n)=>{n.r(t),n.d(t,{data:()=>l});const l={key:"v-d2ca2cfa",path:"/devices/InstaRemote.html",title:"Insta InstaRemote control via MQTT",lang:"en-US",frontmatter:{title:"Insta InstaRemote control via MQTT",description:"Integrate your Insta InstaRemote via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-04-08T17:49:06.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Transmitters Loosing Connection in ZigBee 3 Networks",slug:"transmitters-loosing-connection-in-zigbee-3-networks",children:[]},{level:3,title:"Factory Reset (8-Button Devices)",slug:"factory-reset-8-button-devices",children:[]},{level:3,title:"Join Network (8-Button Devices)",slug:"join-network-8-button-devices",children:[]},{level:3,title:"OTA",slug:"ota",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/InstaRemote.md",git:{updatedTime:1643731176e3}}},79959:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var l=n(66252),a=n(20283),i=n(56390);const o=(0,l._)("h1",{id:"insta-instaremote",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#insta-instaremote","aria-hidden":"true"},"#"),(0,l.Uk)(" Insta InstaRemote")],-1),s=(0,l._)("table",null,[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th"),(0,l._)("th")])]),(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",null,"Model"),(0,l._)("td",null,"InstaRemote")]),(0,l._)("tr",null,[(0,l._)("td",null,"Vendor"),(0,l._)("td",null,"Insta")]),(0,l._)("tr",null,[(0,l._)("td",null,"Description"),(0,l._)("td",null,"ZigBee Light Link wall/handheld transmitter")]),(0,l._)("tr",null,[(0,l._)("td",null,"Exposes"),(0,l._)("td",null,"action, linkquality")]),(0,l._)("tr",null,[(0,l._)("td",null,"Picture"),(0,l._)("td",null,[(0,l._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/InstaRemote.jpg",alt:"Insta InstaRemote"})])]),(0,l._)("tr",null,[(0,l._)("td",null,"White-label"),(0,l._)("td",null,"Gira 2430-100, Gira 2435-10, Jung ZLLCD5004M, Jung ZLLLS5004M, Jung ZLLA5004M, Jung ZLLHS4")])])],-1),r=(0,l._)("h2",{id:"notes",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,l.Uk)(" Notes")],-1),d=(0,l._)("h3",{id:"transmitters-loosing-connection-in-zigbee-3-networks",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#transmitters-loosing-connection-in-zigbee-3-networks","aria-hidden":"true"},"#"),(0,l.Uk)(" Transmitters Loosing Connection in ZigBee 3 Networks")],-1),u=(0,l._)("p",null,[(0,l.Uk)("With their factory firmware, the transmitters loose network connection after a few hours when ZigBee 3 devices are present in the network (which is a pretty much standard nowadays). For the Jung wall and handheld transmitters there is a firmware update available that fixes this problem (see "),(0,l._)("a",{href:"#ota-updates"},"OTA updates"),(0,l.Uk)(" below), but in turn decreases battery lifetime down to a few months.")],-1),c=(0,l._)("p",null,"Unfortunately Gira seems to have dropped support for their ZigBee transmitters completely and does not offer any firmware updates at all. For the Gira handheld transmitter the Jung update seems to work (and to fix the problem), but for the Gira wall transmitter this is not the case (it only has 6 buttons instead of 8 on the Jung wall transmitter and would therefore need a different firmware). There does not seem to be real solution for this problem rendering the Gira wall transmitters pretty much useless nowadays.",-1),h=(0,l._)("h3",{id:"factory-reset-8-button-devices",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#factory-reset-8-button-devices","aria-hidden":"true"},"#"),(0,l.Uk)(" Factory Reset (8-Button Devices)")],-1),_=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("Press and hold buttons "),(0,l._)("code",null,"3"),(0,l.Uk)(" and "),(0,l._)("code",null,"4"),(0,l.Uk)(" simultaneously for about 10 seconds until the green LEDs start to flash.")]),(0,l._)("li",null,[(0,l.Uk)("Release buttons "),(0,l._)("code",null,"3"),(0,l.Uk)(" and "),(0,l._)("code",null,"4"),(0,l.Uk)(" and then briefly press button "),(0,l._)("code",null,"O"),(0,l.Uk)(" within 10 seconds.")]),(0,l._)("li",null,[(0,l.Uk)("The LEDs should light up green for 3 seconds and the transmitter has been reset. "),(0,l._)("img",{src:a,alt:"Reset"})])],-1),m=(0,l._)("h3",{id:"join-network-8-button-devices",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#join-network-8-button-devices","aria-hidden":"true"},"#"),(0,l.Uk)(" Join Network (8-Button Devices)")],-1),p=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("Press and hold buttons "),(0,l._)("code",null,"5"),(0,l.Uk)(" and "),(0,l._)("code",null,"I"),(0,l.Uk)(" simultaneously until the green LEDs start to flash. Then release the buttons again.")]),(0,l._)("li",null,"After 10 more seconds the transmitter will start to search for an open network in order to join it."),(0,l._)("li",null,[(0,l.Uk)("If the transmitter was able to join a network, the LEDs will light up green for 3 seconds (otherwise the LEDs will flash red quickly for 3 seconds). "),(0,l._)("img",{src:i,alt:"Join Network"})])],-1),k=(0,l._)("h3",{id:"ota",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#ota","aria-hidden":"true"},"#"),(0,l.Uk)(" OTA")],-1),g=(0,l._)("p",null,'For the device to ask for/accept OTA updates, it needs to be in "programming mode" (same mode as for joining a network, see above). In case the device does still not accept updates or seems to be stuck somehow, it may help to do a factory reset, join the network again and then again enter programming mode before starting the OTA update again.',-1),f=(0,l._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,l.Uk)(" OTA updates")],-1),b=(0,l.Uk)("This device supports OTA updates, for more information see "),w=(0,l.Uk)("OTA updates"),U=(0,l.Uk)("."),v=(0,l._)("h2",{id:"options",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,l.Uk)(" Options")],-1),y=(0,l.Uk)("How to use device type specific configuration"),T=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("code",null,"legacy"),(0,l.Uk)(": Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be "),(0,l._)("code",null,"true"),(0,l.Uk)(" or "),(0,l._)("code",null,"false")])],-1),x=(0,l._)("h2",{id:"exposes",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#exposes","aria-hidden":"true"},"#"),(0,l.Uk)(" Exposes")],-1),I=(0,l._)("h3",{id:"action-enum",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#action-enum","aria-hidden":"true"},"#"),(0,l.Uk)(" Action (enum)")],-1),L=(0,l._)("p",null,[(0,l.Uk)("Triggered action (e.g. a button click). Value can be found in the published state on the "),(0,l._)("code",null,"action"),(0,l.Uk)(" property. It's not possible to read ("),(0,l._)("code",null,"/get"),(0,l.Uk)(") or write ("),(0,l._)("code",null,"/set"),(0,l.Uk)(") this value. The possible values are: "),(0,l._)("code",null,"select_0"),(0,l.Uk)(", "),(0,l._)("code",null,"select_1"),(0,l.Uk)(", "),(0,l._)("code",null,"select_2"),(0,l.Uk)(", "),(0,l._)("code",null,"select_3"),(0,l.Uk)(", "),(0,l._)("code",null,"select_4"),(0,l.Uk)(", "),(0,l._)("code",null,"select_5"),(0,l.Uk)(", "),(0,l._)("code",null,"on"),(0,l.Uk)(", "),(0,l._)("code",null,"off"),(0,l.Uk)(", "),(0,l._)("code",null,"down"),(0,l.Uk)(", "),(0,l._)("code",null,"up"),(0,l.Uk)(", "),(0,l._)("code",null,"stop"),(0,l.Uk)(".")],-1),R=(0,l._)("h3",{id:"linkquality-numeric",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#linkquality-numeric","aria-hidden":"true"},"#"),(0,l.Uk)(" Linkquality (numeric)")],-1),A=(0,l._)("p",null,[(0,l.Uk)("Link quality (signal strength). Value can be found in the published state on the "),(0,l._)("code",null,"linkquality"),(0,l.Uk)(" property. It's not possible to read ("),(0,l._)("code",null,"/get"),(0,l.Uk)(") or write ("),(0,l._)("code",null,"/set"),(0,l.Uk)(") this value. The minimal value is "),(0,l._)("code",null,"0"),(0,l.Uk)(" and the maximum value is "),(0,l._)("code",null,"255"),(0,l.Uk)(". The unit of this value is "),(0,l._)("code",null,"lqi"),(0,l.Uk)(".")],-1),Z={},D=(0,n(83744).Z)(Z,[["render",function(e,t){const n=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[o,s,r,d,u,c,h,_,m,p,k,g,f,(0,l._)("p",null,[b,(0,l.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,l.w5)((()=>[w])),_:1}),U]),v,(0,l._)("p",null,[(0,l._)("em",null,[(0,l.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,l.w5)((()=>[y])),_:1})])]),T,x,I,L,R,A],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[n,l]of t)e[n]=l;return e}},56390:(e,t,n)=>{e.exports=n.p+"assets/img/InstaRemote-join-network.10877cc8.jpg"},20283:(e,t,n)=>{e.exports=n.p+"assets/img/InstaRemote-reset.3ef593ac.jpg"}}]);