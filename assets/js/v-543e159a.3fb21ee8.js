"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[13677],{87668:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-543e159a",path:"/devices/E1842.html",title:"IKEA E1842 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E1842 control via MQTT",description:"Integrate your IKEA E1842 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-01-31T22:24:43.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1842.md",git:{updatedTime:1643731176e3}}},95672:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var i=a(66252);const d=(0,i.uE)('<h1 id="ikea-e1842" tabindex="-1"><a class="header-anchor" href="#ikea-e1842" aria-hidden="true">#</a> IKEA E1842</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1842</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>KNYCKLAN receiver electronic water valve shut-off</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E1842.jpg" alt="IKEA E1842"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),o=(0,i.Uk)("This device supports OTA updates, for more information see "),s=(0,i.Uk)("OTA updates"),r=(0,i.Uk)("."),u=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),c={},h=(0,a(83744).Z)(c,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("p",null,[o,(0,i.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[s])),_:1}),r]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);