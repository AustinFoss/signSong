(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1004:function(e,t,n){"use strict";n.r(t);var r=n(9),c=n(87);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)("libp2p",["p2pNode","openChannel"]))},v=n(110),h=n(158),d=n.n(h),f=n(958),O=n(946),j=n(1e3),m=n(944),C=n(1001),component=Object(v.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[null!=this.p2pNode&&1==this.p2pNode.pubsub.started?t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[t("ConnectionManager")],1),this._v(" "),t("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[null!=this.openChannel?t("OpenChannel"):this._e()],1)],1):t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-col",{attrs:{cols:"15",sm:"15",md:"12"}},[t("v-card",[t("v-card-text",[this._v("\n          Loading P2P Network Node\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{ConnectionManager:n(994).default,OpenChannel:n(995).default}),d()(component,{VCard:f.a,VCardText:O.b,VCol:j.a,VContainer:m.a,VRow:C.a})},994:function(e,t,n){"use strict";n.r(t);var r=n(9),c=n(87);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={data:function(){return{chatChannel:""}},computed:l({},Object(c.c)("libp2p",["p2pNode","channels","openChannel"])),methods:l({},Object(c.b)("libp2p",["subToChannel","unsubscribe","changeChannel","subscribedChannel"])),created:function(){this.subscribedChannel()}},h=n(110),d=n(158),f=n.n(d),O=n(1005),j=n(958),m=n(946),C=n(997),_=n(998),y=n(999),w=n(1003),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("Channel Manager")]),e._v(" "),n("v-card-text",[e._v("\n        Peer Connections: "+e._s(e.p2pNode.connectionManager.size)+"\n    ")]),e._v(" "),n("v-card-actions",[n("v-text-field",{attrs:{label:"Channel Name"},model:{value:e.chatChannel,callback:function(t){e.chatChannel=t},expression:"chatChannel"}}),e._v(" "),n("v-btn",{attrs:{outlined:"",small:"",color:"primary"},on:{click:function(t){e.subToChannel(e.chatChannel),e.chatChannel=""}}},[e._v("\n            Subscribe\n        ")])],1),e._v(" "),n("v-list",{attrs:{dense:""}},e._l(e.channels,(function(t,r){return n("v-list-item",{key:r},[e._v("\n            "+e._s(t)+"\n            "),n("v-spacer"),e._v(" "),e.openChannel!=t?n("v-btn",{attrs:{color:"primary",outlined:"",small:""},on:{click:function(n){return e.changeChannel(t)}}},[e._v("\n                Open\n            ")]):n("v-btn",{attrs:{outlined:"",small:""},on:{click:function(t){return e.changeChannel(null)}}},[e._v("Close")]),e._v(" "),n("v-btn",{attrs:{color:"red",outlined:"",small:""},on:{click:function(n){return e.unsubscribe(t)}}},[e._v("Forget")])],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:O.a,VCard:j.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VList:C.a,VListItem:_.a,VSpacer:y.a,VTextField:w.a})},995:function(e,t,n){"use strict";n.r(t);var r=n(9),c=n(87);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={data:function(){return{chat:""}},computed:l({},Object(c.c)("libp2p",["channelPeers","messageBoard","openChannel"])),methods:l({},Object(c.b)("libp2p",["checkChannel","textChannel","watchTexts"])),created:function(){this.checkChannel()}},h=n(110),d=n(158),f=n.n(d),O=n(1005),j=n(958),m=n(946),C=n(1e3),_=n(997),y=n(998),w=n(1001),P=n(1002),V=n(1003),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("\n        Channel: "+e._s(e.openChannel)+"\n    ")]),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-subheader",[e._v("Peers")]),e._v(" "),n("v-list",{attrs:{dense:""}},e._l(e.channelPeers,(function(t,r){return n("v-list-item",{key:r},[e._v("\n                    "+e._s(t[1].nickName)+"\n                ")])})),1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"9",md:"9"}},[n("v-subheader",[e._v("Chat")]),e._v(" "),n("v-list",{attrs:{dense:""}},e._l(e.messageBoard,(function(t,r){return n("v-list-item",{key:r},[e._v("\n                    "+e._s(t.line)+"\n                ")])})),1),e._v(" "),n("v-card-actions",[n("v-text-field",{attrs:{label:"Send this..."},model:{value:e.chat,callback:function(t){e.chat=t},expression:"chat"}}),e._v(" "),n("v-btn",{attrs:{outlined:"",small:""},on:{click:function(t){e.textChannel(e.chat),e.chat=""}}},[e._v("Text")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:O.a,VCard:j.a,VCardActions:m.a,VCardTitle:m.c,VCol:C.a,VList:_.a,VListItem:y.a,VRow:w.a,VSubheader:P.a,VTextField:V.a})}}]);