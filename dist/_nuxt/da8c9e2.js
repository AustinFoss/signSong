(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(e,n){},304:function(e,n,t){var content=t(462);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(63).default)("7388ab72",content,!0,{sourceMap:!1})},433:function(e,n,t){"use strict";var r=t(9),o=t(87);function c(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var f={data:function(){return{}},methods:l(l({},Object(o.b)("media",["getMediaDevices"])),Object(o.b)("libp2p",["initLibP2P"])),created:function(){this.getMediaDevices(),this.initLibP2P()}},d=t(111),m=t(159),h=t.n(m),v=t(944),w=t(946),P=t(947),x=t(945),component=Object(d.a)(f,(function(){var e=this.$createElement,n=this._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-main",[n("v-container",[n("nuxt")],1)],1),this._v(" "),n("v-footer",{attrs:{app:""}},[n("span",[this._v(this._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);n.a=component.exports;h()(component,{VApp:v.a,VContainer:w.a,VFooter:P.a,VMain:x.a})},441:function(e,n,t){t(442),e.exports=t(443)},461:function(e,n,t){"use strict";t(304)},462:function(e,n,t){(n=t(62)(!1)).push([e.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),e.exports=n},489:function(e,n,t){"use strict";t.r(n),n.default={strict:!1}},490:function(e,n,t){"use strict";t.r(n);t(73),t(491),t(271),t(29),t(91),t(76),t(493),t(496),t(498),t(499),t(500),t(501),t(502),t(503),t(504),t(505),t(506),t(507),t(508),t(509),t(511),t(512),t(513),t(514),t(515),t(516),t(517),t(518),t(519),t(520),t(521),t(77),t(90),t(78),t(97);var r,o,c,l,f,d=t(12),m=t(423),h=t(424),v=t.n(h),w=t(425),P=t.n(w),x=t(426),N=t.n(x),j=t(427),y=t(428),O=t.n(y),k=t(429),C=t.n(k),D=t(430),R=t.n(D),M=(t(880),t(431)),E=t.n(M),_=t(32),A=t.n(_),B=t(39),S=t.n(B),J=t(30),L=new(t.n(J).a),T=function(e){L.emit("received",e)};n.default={state:function(){return{p2pNode:null,channelPeers:new Map,channels:[],openChannel:null,messageBoard:[],bootstrapList:["/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN","/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb","/dnsaddr/bootstrap.libp2p.io/p2p/QmZa1sAxajnQjVM8WjWXoMbmPd7NsWhfKsPkErzpm9wGkp","/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa","/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt"]}},mutations:{syncNode:function(e,n){e.p2pNode=null,e.p2pNode=n},channels:function(e){e.channels=e.p2pNode.pubsub.getTopics()},changeChannel:function(e,n){e.openChannel=null,e.openChannel=n,null==n&&(e.channelPeers=null,e.channelPeers=new Map)},channelPeers:function(e,n){e.channelPeers.set(n,{nickName:"Test",stream:null});var t=e.channelPeers;e.channelPeers=null,e.channelPeers=t},peerStream:function(e,n){var t=e.channelPeers.get(n.peer);t.stream=n.stream,e.channelPeers.set(n.peer,t);var r=e.channelPeers;e.channelPeers=null,e.channelPeers=r},messageBoard:function(e,n){e.messageBoard.push(n)}},actions:{initLibP2P:(f=Object(d.a)(regeneratorRuntime.mark((function e(n){var t,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.commit,r=n.state,e.next=3,v.a.create({addresses:{listen:["/ip4/0.0.0.0/tcp/0","/ip4/0.0.0.0/tcp/0/ws","/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star","/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star"]},modules:{transport:[P.a,N.a],connEncryption:[j.NOISE,O.a],streamMuxer:[C.a],peerDiscovery:[R.a],pubsub:E.a},config:{peerDiscovery:{bootstrap:{enabled:!0,list:r.bootstrapList}}}});case 3:return o=e.sent,t("syncNode",o),o.on("peer:discovery",(function(e){t("syncNode",o)})),o.connectionManager.on("peer:connect",(function(e){t("syncNode",o)})),o.connectionManager.on("peer:disconnect",(function(e){t("syncNode",o)})),e.next=10,o.start();case 10:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)}),subToChannel:(l=Object(d.a)(regeneratorRuntime.mark((function e(n,t){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.state,o=n.commit,e.next=3,r.p2pNode.pubsub.subscribe(t);case 3:o("channels");case 4:case"end":return e.stop()}}),e)}))),function(e,n){return l.apply(this,arguments)}),unsubscribe:(c=Object(d.a)(regeneratorRuntime.mark((function e(n,t){var r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.state,o=n.dispatch,c=n.commit,t==r.openChannel&&o("changeChannel",null),e.next=4,r.p2pNode.pubsub.unsubscribe(t);case 4:c("channels");case 5:case"end":return e.stop()}}),e)}))),function(e,n){return c.apply(this,arguments)}),changeChannel:(o=Object(d.a)(regeneratorRuntime.mark((function e(n,t){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.state,o=n.commit,null==r.openChannel){e.next=4;break}return e.next=4,r.p2pNode.pubsub.removeListener(r.openChannel,T);case 4:if(o("changeChannel",t),null==r.openChannel){e.next=8;break}return e.next=8,r.p2pNode.pubsub.on(r.openChannel,T);case 8:case"end":return e.stop()}}),e)}))),function(e,n){return o.apply(this,arguments)}),checkChannel:function(e){var n=e.state,t=e.commit,r=setInterval((function(){n.p2pNode.pubsub.publish(n.openChannel,Uint8Array.from("Nick Name")),n.channelPeers.forEach(function(){var e=Object(d.a)(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!=n.stream&&A()(n.stream,S.a.decode(),function(){var e=Object(d.a)(regeneratorRuntime.mark((function e(source){var line,r,o,c,l,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:line="",r=!0,o=!1,e.prev=3,l=Object(m.a)(source);case 5:return e.next=7,l.next();case 7:return f=e.sent,r=f.done,e.next=11,f.value;case 11:if(d=e.sent,r){e.next=18;break}line+=d.toString();case 15:r=!0,e.next=5;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(3),o=!0,c=e.t0;case 24:if(e.prev=24,e.prev=25,r||null==l.return){e.next=29;break}return e.next=29,l.return();case 29:if(e.prev=29,!o){e.next=32;break}throw c;case 32:return e.finish(29);case 33:return e.finish(24);case 34:""!=line&&t("messageBoard",{line:line,from:n.nickName});case 35:case"end":return e.stop()}}),e,null,[[3,20,24,34],[25,,29,33]])})));return function(n){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),null==n.openChannel&&clearInterval(r)}),1e3)},dialPeer:(r=Object(d.a)(regeneratorRuntime.mark((function e(n,t){var r,o,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.state,o=n.commit,c=r.p2pNode.peerId.toB58String(),e.next=4,r.p2pNode.dialProtocol("/p2p/"+t,"/"+c);case 4:l=e.sent,f=l.stream,o("peerStream",{peer:t,stream:f});case 7:case"end":return e.stop()}}),e)}))),function(e,n){return r.apply(this,arguments)}),handlePeer:function(e,n){var t=e.state,r=e.commit;t.p2pNode.handle("/"+n,function(){var e=Object(d.a)(regeneratorRuntime.mark((function e(t){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.stream,r("peerStream",{peer:n,stream:o});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},subscribedChannel:function(e){var n=e.state,t=e.commit,r=e.dispatch;L.on("received",(function(e){0==n.channelPeers.has(e.from)?(t("channelPeers",e.from),r("handlePeer",e.from)):null==n.channelPeers.get(e.from).stream&&r("dialPeer",e.from)}))},textChannel:function(e,n){var t=e.state,r=e.commit;console.log(n),t.channelPeers.forEach(function(){var e=Object(d.a)(regeneratorRuntime.mark((function e(o,c){var l,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.p2pNode.peerId.toB58String(),e.next=3,t.p2pNode.dialProtocol("/p2p/"+c,"/"+l);case 3:f=e.sent,d=f.stream,A()(n,S.a.encode(),d),r("messageBoard",{line:n,from:l});case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())}}}},591:function(e,n){},592:function(e,n){},621:function(e,n){},634:function(e,n){},751:function(e,n){},785:function(e,n){},787:function(e,n){},817:function(e,n){},88:function(e,n,t){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(t(461),t(111)),c=t(159),l=t.n(c),f=t(944),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",{attrs:{dark:""}},[404===e.error.statusCode?t("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):t("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),t("NuxtLink",{attrs:{to:"/"}},[e._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);n.a=component.exports;l()(component,{VApp:f.a})},917:function(e,n,t){"use strict";t.r(n);t(73),t(77);n.default={state:function(){return{stream:null,audioDevices:[],audioDevice:{},videoDevices:[],videoDevice:{}}},mutations:{devices:function(e,n){e.audioDevices=n.audio,e.videoDevices=n.video,console.log(e.audioDevices),console.log(e.videoDevices)},setAudio:function(e,n){e.audioDevice=n},setVideo:function(e,n){e.videoDevice=n},stream:function(e,n){null==e.stream?(e.stream=n,document.getElementById("feed").srcObject=e.stream):(e.stream.getTracks().forEach((function(track){track.stop()})),e.stream=null)}},actions:{getMediaDevices:function(e){var n=e.commit;navigator.mediaDevices.enumerateDevices().then((function(e){for(var audio=[],video=[],t=0;t<e.length;t++){var r=e[t];"audioinput"==r.kind?audio.push(r):"videoinput"==r.kind&&video.push(r)}n("devices",{audio:audio,video:video})}))},setAudio:function(e,n){(0,e.commit)("setAudio",n)},setVideo:function(e,n){(0,e.commit)("setVideo",n)},feedStream:function(e){var n=e.state,t=e.commit;null==n.stream?navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(e){t("stream",e)})).catch((function(e){console.log(e)})):t("stream",n.stream)}}}}},[[441,3,1,4]]]);