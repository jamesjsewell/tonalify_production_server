(this.webpackJsonpspotify_app_frontend=this.webpackJsonpspotify_app_frontend||[]).push([[0],{47:function(e,t,a){e.exports=a.p+"static/media/tonalify.8482fd0a.svg"},52:function(e,t,a){e.exports=a(86)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),i=a.n(s),c=(a(57),a(58),a(59),a(4)),l=a(16),o=a(5),u=a(18),m=a(45),p=a(46),d=(a(64),a(3)),h=[];var f=a(19),y={isAuthenticated:!1,id:null};var E=[];var v={isLoading:!1,requests:[]};var g,b,k={trackSelection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SELECTION":return Object(d.a)(t.payload);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATE":return Object(f.a)({},e,{isAuthenticated:!0,id:t.payload});case"DEAUTHENTICATE":return Object(f.a)({},e,{isAuthenticated:!1,id:null});default:return e}},flashMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FLASH_MESSAGE":return[].concat(Object(d.a)(e),[t.payload]);case"DELETE_FLASH_MESSAGE":return Object(d.a)(e).filter((function(e){return e.id!=t.payload}));default:return e}},ajax:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PENDING_REQUEST":return Object(f.a)({},e,{requests:[].concat(Object(d.a)(e.requests),[t.payload])});case"FINISH_PENDING_REQUEST":return Object(f.a)({},e,{requests:Object(d.a)(e.requests).filter((function(e){return!!e.id===t.payload}))});case"IS_LOADING":return Object(f.a)({},e,{isLoading:t.payload});default:return e}}},N=a(7),S=a(8),O=a(10),R=a(9),w="https://yfitops.herokuapp.com",P="https://tonalify.herokuapp.com";!function(e){e[e.PROFILE=0]="PROFILE",e[e.USER_LIBRARY=1]="USER_LIBRARY"}(g||(g={})),function(e){e[e.ERROR=0]="ERROR",e[e.SUCCESS=1]="SUCCESS"}(b||(b={}));var j=function(e){Object(O.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={message:null},n}return Object(S.a)(a,[{key:"componentDidUpdate",value:function(e){var t=e.flashMessages[e.flashMessages.length-1],a=this.props.flashMessages[this.props.flashMessages.length-1];(a&&t&&a.id!==t.id||!t&&a)&&this.renderFlashMessage()}},{key:"renderFlashMessage",value:function(){var e=this,t=this.props.flashMessages[this.props.flashMessages.length-1];t&&setTimeout((function(){e.props.deleteFlashMessage(t.id)}),5e3)}},{key:"render",value:function(){var e=this.props.flashMessages,t=e[e.length-1];return r.a.createElement("div",{className:"flash-messages-wrapper"},t?r.a.createElement("div",{className:"flash-message-content"},t.type===b.SUCCESS?r.a.createElement("div",{className:"notification is-success"},t.text):null,t.type===b.ERROR?r.a.createElement("div",{className:"notification is-danger"},t.text):null):null)}}]),a}(n.Component),A=Object(o.b)((function(e){return{flashMessages:e.flashMessages}}),(function(e){return{deleteFlashMessage:function(t){return e({type:"DELETE_FLASH_MESSAGE",payload:t})}}}))(j),C=a(2),x=a.n(C),_=a(12),T=a(11),q=a.n(T),F=a(97),L=a(47),D=a.n(L),I=function(e){Object(O.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={mobile:!1},n}return Object(S.a)(a,[{key:"logout",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(F.a)(),this.props.addPendingRequest({id:t,type:g.PROFILE,message:"Logging Out"}),e.next=4,q.a.get("".concat(w,"/logout"),{withCredentials:!0});case 4:if(a=e.sent,this.props.finishPendingRequest(t),a&&a.data){e.next=8;break}return e.abrupt("return");case 8:this.props.deauthenticate();case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clickHamburger",value:function(){this.setState({mobile:!this.state.mobile})}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"navbar-wrapper navbar is-spaced"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(c.b,{className:"navbar-tonalify-link navbar-item is-family-sans-serif has-text-primary has-text-weight-bold",to:"/home"},r.a.createElement("img",{src:D.a})),r.a.createElement("a",{role:"button",className:"navbar-burger burger ".concat(this.state.mobile?"is-active":""),"aria-label":"menu","data-target":"nav-menu",onClick:function(t){return e.clickHamburger()}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"nav-menu",className:"navbar-menu ".concat(this.state.mobile?"is-active":"")},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(c.b,{className:"navbar-item",to:"/home",activeClassName:"is-active"},"Home"),r.a.createElement(c.b,{className:"navbar-item",to:"/your-playlists",activeClassName:"is-active"},"Playlists"),r.a.createElement(c.b,{className:"navbar-item",to:"/your-albums",activeClassName:"is-active"},"Albums"),r.a.createElement(c.b,{className:"navbar-item",to:"/selection",activeClassName:"is-active"},"Export")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},this.props.isAuthenticated?r.a.createElement("a",{className:"button is-light",onClick:function(){return e.logout()}},"Logout"):null)))))}}]),a}(n.Component);var U=Object(o.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{deauthenticate:function(){return e({type:"DEAUTHENTICATE"})},addPendingRequest:function(t){return e({type:"ADD_PENDING_REQUEST",payload:t})},finishPendingRequest:function(t){return e({type:"FINISH_PENDING_REQUEST",payload:t})}}}))(I),M=function(e){Object(O.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={displayName:""},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.props.isAuthenticated||this.authenticateUser()}},{key:"authenticateUser",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(F.a)(),e.prev=1,!(a=new URLSearchParams(window.location.search).get("code"))){e.next=8;break}return this.props.addPendingRequest({id:t,type:g.PROFILE,message:"Authenticating"}),e.next=7,q.a.get("".concat(w,"/authorize?code=").concat(a),{withCredentials:!0});case 7:this.getProfile();case 8:this.props.finishPendingRequest(t),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),this.props.addFlashMessage({type:b.ERROR,text:"Error Authenticating",id:Object(F.a)()}),this.props.finishPendingRequest(t);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"getProfile",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(F.a)(),e.prev=1,this.props.addPendingRequest({id:t,type:g.PROFILE,message:"Fetching Profile"}),e.next=5,q.a.post("".concat(w,"/spotify-request"),{spotify_path:"https://api.spotify.com/v1/me",spotify_payload:null,crud_operation:"get"},{withCredentials:!0,headers:{"Access-Control-Allow-Origin":P}});case 5:if(a=e.sent,this.props.finishPendingRequest(t),!a.data||!a.data.id){e.next=11;break}return this.props.authenticate(a.data.id),this.setState({displayName:a.data.display_name}),e.abrupt("return");case 11:this.props.addFlashMessage({type:b.ERROR,text:"Error Fetching Profile",id:Object(F.a)()}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),this.props.addFlashMessage({type:b.ERROR,text:"Error Fetching Profile",id:Object(F.a)()}),this.props.finishPendingRequest(t);case 18:case"end":return e.stop()}}),e,this,[[1,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(F.a)(),e.prev=1,this.props.addPendingRequest({id:t,type:g.PROFILE,message:"Logging In"}),e.next=5,q.a.get("".concat(w,"/login"));case 5:if(a=e.sent,this.props.finishPendingRequest(t),!a||!a.data){e.next=10;break}return window.location.href=a.data,e.abrupt("return");case 10:this.props.addFlashMessage({type:b.ERROR,text:"Error Fetching Login URL",id:Object(F.a)()}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),this.props.finishPendingRequest(t),this.props.addFlashMessage({type:b.ERROR,text:"Error Fetching Login URL",id:Object(F.a)()});case 17:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.isAuthenticated,a=this.state.displayName;return r.a.createElement("div",{className:"home-view-wrapper"},t?r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container is-widescreen has-text-centered"},r.a.createElement("p",{className:"title"},"Welcome, ",a)," ",r.a.createElement("p",null,"Browse your library and make track selections based on key or tempo, then export your selection as a Spotify playlist. This app won't modify your playlists, it will only add new playlists that you create"),r.a.createElement("hr",null),r.a.createElement("p",null,"Keep in mind that key and bpm come from the spotify api and accuracy can vary")),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container is-widescreen has-text-centered"},r.a.createElement("div",{className:"links"},r.a.createElement(c.b,{className:"link-card has-background-primary has-text-white is-size-4",to:"/your-albums"},r.a.createElement("p",null,"Your Albums")),r.a.createElement(c.b,{className:"link-card has-background-primary has-text-white is-size-4",to:"/your-playlists"},r.a.createElement("p",null,"Your Playlists")),r.a.createElement(c.b,{className:"link-card has-background-primary has-text-white is-size-4",to:"/selection"},r.a.createElement("p",null,"Export Selection"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"buy-me-coffee-wrapper"},r.a.createElement("a",{className:"bmc-button has-background-link",href:"https://www.buymeacoffee.com/tonalify"},r.a.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",alt:"Buy me a coffee"}),r.a.createElement("span",{style:{marginLeft:"5px",fontSize:"19px !important"}},"Buy me a coffee")))))):null,t?null:r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container is-fullwidth has-text-centered"},r.a.createElement("a",{href:"",onClick:function(t){t.preventDefault(),e.login()}},"Login")," ","using your Spotify account to continue")))}}]),a}(n.Component);var G=Object(o.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{authenticate:function(t){return e({type:"AUTHENTICATE",payload:t})},addPendingRequest:function(t){return e({type:"ADD_PENDING_REQUEST",payload:t})},finishPendingRequest:function(t){return e({type:"FINISH_PENDING_REQUEST",payload:t})},addFlashMessage:function(t){return e({type:"ADD_FLASH_MESSAGE",payload:t})}}}))(M),H=a(21),B=a.n(H),Y=function(e){Object(O.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={collection:[],showTracks:!1,tracksPath:"",showTable:!1,selectedPlaylistPath:"",selectedPlaylistTitle:"",errorFetching:!1,query:"",spotifyPath:"PLAYLISTS"===n.props.type?"https://api.spotify.com/v1/me/playlists?limit=50":"https://api.spotify.com/v1/me/albums?limit=50",fetching:!1,collectionType:"PLAYLISTS"===n.props.type?"Playlist":"Album"},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.getPlaylists()}},{key:"getPlaylists",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t,a,n,r=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(F.a)(),e.prev=1,this.setState({fetching:!0}),this.props.addPendingRequest({id:t,type:g.USER_LIBRARY,message:"PLAYLISTS"===this.props.type?"Fetching Playlists":"Fetching Albums"}),e.next=6,q.a.post("".concat(w,"/spotify-request"),{spotify_path:this.state.spotifyPath,spotify_payload:null,crud_operation:"get"},{withCredentials:!0,headers:{"Access-Control-Allow-Origin":P}});case 6:if(a=e.sent,this.props.finishPendingRequest(t),a&&a.data&&a.data.items){e.next=10;break}return e.abrupt("return");case 10:n=a.data.next,this.setState({collection:Object(d.a)(this.state.collection).concat("PLAYLISTS"===this.props.type?a.data.items:a.data.items.map((function(e){return e.album}))),spotifyPath:n,fetching:!1},(function(){n&&r.getPlaylists()})),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),this.props.finishPendingRequest(t),this.setState({errorFetching:!0,fetching:!1});case 18:case"end":return e.stop()}}),e,this,[[1,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"open",value:function(e,t){this.props.history.push("/tracks?spotify_path=https://api.spotify.com/v1/".concat("PLAYLISTS"===this.props.type?"playlists":"albums","/").concat(e,"/tracks&title=").concat(t))}},{key:"search",value:function(e){this.setState({query:e})}},{key:"filterCollection",value:function(){var e=this;return Object(d.a)(this.state.collection).filter((function(t){var a=t.description,n=t.name,r=e.state.query.toLocaleLowerCase();if(a&&a.toString().toLowerCase().includes(r)||n&&n.toString().toLowerCase().includes(r))return t}))}},{key:"render",value:function(){var e=this,t=this.state.query&&this.state.query.length?this.filterCollection():this.state.collection;return r.a.createElement("div",{className:"playlists-view-wrapper"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container has-text-centered playlists-and-albums-header"},r.a.createElement("p",{className:"title"},"Your ",this.state.collectionType,"s"),r.a.createElement("p",null,"Choose ",this.state.collectionType," to Select Tracks From"))),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container is-widescreen"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"search-input"},"Search Your ",this.state.collectionType,"s"),r.a.createElement("div",{className:"search-playlists-input-wrapper"},r.a.createElement("input",{id:"search-input",className:"search-input input",onChange:function(t){return e.search(t.target.value)},placeholder:"Search",value:this.state.query}),this.state.query.length?r.a.createElement("button",{onClick:function(){e.setState({query:""})}},r.a.createElement(B.a,{className:"has-text-link"})):null)),this.state.errorFetching?r.a.createElement("p",{className:"notification is-danger"},"Error Loading ",this.state.collectionType,"s, Refresh the Page"):r.a.createElement("div",{className:"playlists-wrapper"},t.length?t.map((function(t){return r.a.createElement("div",{className:"playlist-wrapper has-background-grey-lighter",onClick:function(){return e.open(t.id,t.name)}},t.images[0]?r.a.createElement("img",{className:"cover-image",src:t.images[0].url}):r.a.createElement("div",{className:"cover-image"}),r.a.createElement("p",null,t.name))})):this.state.fetching?null:r.a.createElement("p",null,"no results")))))}}]),a}(n.Component);var Q=Object(u.compose)(l.f,Object(o.b)((function(e){}),(function(e){return{authenticate:function(){return e({type:"AUTHENTICATE"})},addPendingRequest:function(t){return e({type:"ADD_PENDING_REQUEST",payload:t})},finishPendingRequest:function(t){return e({type:"FINISH_PENDING_REQUEST",payload:t})}}})))(Y),J=function(e,t){var a=function(a){Object(O.a)(s,a);var n=Object(R.a)(s);function s(){return Object(N.a)(this,s),n.apply(this,arguments)}return Object(S.a)(s,[{key:"componentDidMount",value:function(){this.checkAndRedirect()}},{key:"componentDidUpdate",value:function(){this.checkAndRedirect()}},{key:"checkAndRedirect",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.isAuthenticated){e.next=3;break}return e.abrupt("return");case 3:return t=Object(F.a)(),e.prev=4,this.props.addPendingRequest({id:t,message:"Fetching Profile",type:g.PROFILE}),e.next=8,q.a.post("".concat(w,"/spotify-request"),{spotify_path:"https://api.spotify.com/v1/me",spotify_payload:null,crud_operation:"get"},{withCredentials:!0,headers:{"Access-Control-Allow-Origin":P}});case 8:if(a=e.sent,this.props.finishPendingRequest(t),!a.data||!a.data.id){e.next=13;break}return this.props.authenticate(a.data.id),e.abrupt("return");case 13:this.props.history.push("/home"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),this.props.finishPendingRequest(t);case 19:case"end":return e.stop()}}),e,this,[[4,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,this.props.isAuthenticated?r.a.createElement(e,(this.props,t)):null)}}]),s}(r.a.Component);return Object(u.compose)(l.f,Object(o.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{authenticate:function(t){return e({type:"AUTHENTICATE",payload:t})},addPendingRequest:function(t){return e({type:"ADD_PENDING_REQUEST",payload:t})},finishPendingRequest:function(t){return e({type:"FINISH_PENDING_REQUEST",payload:t})}}})))(a)},K=a(50),z=a.n(K),W=a(29),$=a.n(W),V={0:"C",1:"C#",2:"D",3:"D#",4:"E",5:"F",6:"F#",7:"G",8:"G#",9:"A",10:"A#",11:"B"},X={0:"minor",1:"major"},Z=function(e,t,a,n){return e===t?r.a.createElement("th",{onClick:function(e){return n(e)}},e,0!==a&&a?null:r.a.createElement(r.a.Fragment,null,"\u2191\u2193"),1===a?r.a.createElement(r.a.Fragment,null,"\u2191"):null,2===a?r.a.createElement(r.a.Fragment,null,"\u2193"):null):r.a.createElement("th",{onClick:function(e){n(e)}},e,"\u2191\u2193")},ee=function(e){Object(O.a)(a,e);var t=Object(R.a)(a);function a(e){var n;Object(N.a)(this,a),n=t.call(this,e);var r=localStorage.getItem("tonalify_selection"),s=JSON.parse(r);return n.state={trackList:[],spotifyPath:new URLSearchParams(window.location.search).get("spotify_path"),filtered:!1,key:null,mode:null,sort:{column:null,direction:null},errorFetchingTracks:!1,disableTable:!1,query:"",trackSelection:s||[]},n.getTracks(),n}return Object(S.a)(a,[{key:"getTracks",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t,a,n,r,s,i,c,l,o,u=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(F.a)(),a=Object(F.a)(),e.prev=2,this.props.addPendingRequest({id:t,type:g.USER_LIBRARY,message:"Fetching Tracks"}),e.next=6,q.a.post("".concat(w,"/spotify-request"),{spotify_path:this.state.spotifyPath,spotify_payload:null,crud_operation:"get"},{withCredentials:!0,headers:{"Access-Control-Allow-Origin":P}});case 6:if(n=e.sent,this.props.finishPendingRequest(t),n.data&&n.data.items){e.next=10;break}return e.abrupt("return");case 10:return r=n.data,s=r.items,i=r.next,this.props.addPendingRequest({id:a,type:g.USER_LIBRARY,message:"Fetching Audio Details"}),e.next=14,q.a.post("".concat(w,"/spotify-request"),{spotify_path:"https://api.spotify.com/v1/audio-features?ids=".concat(s.map((function(e){return e.track&&(e=e.track),e.id}))),spotify_payload:null,crud_operation:"get"},{withCredentials:!0,headers:{"Access-Control-Allow-Origin":P}});case 14:c=e.sent,this.props.finishPendingRequest(a),l=[],c&&c.data&&c.data.audio_features&&(l=c.data.audio_features),o=Object(d.a)(this.state.trackList).concat(s.map((function(e){e.track&&(e=e.track);var t=l.find((function(t){return t&&e&&t.id===e.id}));return Object(f.a)({},e,{selected:!1,tempo:t?t.tempo:null,key:t?V[t.key]:null,mode:t?X[t.mode]:null,artist:e.artists&&e.artists.length?e.artists[0].name:null})}))),this.setState(Object(f.a)({},this.state,{trackList:o,spotifyPath:i,errorFetchingTracks:!1}),(function(){i&&u.getTracks()})),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(2),this.props.finishPendingRequest(t),this.props.finishPendingRequest(a),this.setState(Object(f.a)({},this.state,{errorFetchingTracks:!0}));case 27:case"end":return e.stop()}}),e,this,[[2,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"filterByKey",value:function(e){"key"!==e.target.name?"mode"===e.target.name&&this.setState({mode:e.target.value,filtered:!!e.target.value||!!this.state.key}):this.setState({key:e.target.value,filtered:!!e.target.value||!!this.state.mode})}},{key:"search",value:function(e){e.target.value&&e.target.value.length?this.setState({query:e.target.value,filtered:!0}):this.setState({query:"",filtered:!1})}},{key:"getFilteredTracks",value:function(){var e=this,t=this.state,a=t.key,n=t.mode,r=Object(d.a)(this.state.trackList).filter((function(e){return a&&n&&e.key===a&&e.mode===n||a&&!n&&e.key===a||!a&&n&&e.mode===n?e:a||n?void 0:e}));return this.state.query?r.filter((function(t){var a=t.name,n=t.artist,r=t.tempo,s=t.mode,i=t.key,c=!1;if([a,n,r,s,i].map((function(t){t&&t.toString().toLowerCase().includes(e.state.query.toLocaleLowerCase())&&(c=!0)})),c)return t})):r}},{key:"addToSelection",value:function(e){var t=localStorage.getItem("tonalify_selection"),a=JSON.parse(t)?JSON.parse(t):[],n=[].concat(Object(d.a)(a),[e]);localStorage.setItem("tonalify_selection",JSON.stringify(n)),this.setState({trackSelection:n})}},{key:"removeFromSelection",value:function(e){var t=localStorage.getItem("tonalify_selection"),a=(JSON.parse(t)?JSON.parse(t):[]).filter((function(t){return t.id!==e.id}));localStorage.setItem("tonalify_selection",JSON.stringify(a)),this.setState({trackSelection:a})}},{key:"sortColumn",value:function(e){var t=1;if(this.state.sort.column!==e)t=1;else switch(this.state.sort.direction){case 0:t=1;break;case 1:t=2;break;case 2:t=0}this.setState({sort:{column:e,direction:t}})}},{key:"getSortedTracks",value:function(e){var t=this.state.sort,a=t.direction,n=t.column;return Object(d.a)(e).sort((function(e,t){return 1===a?e[n]>t[n]?1:-1:2===a?e[n]<t[n]?1:-1:1}))}},{key:"render",value:function(){var e=this,t=this.state.filtered?this.getFilteredTracks():this.state.trackList,a=this.getSortedTracks(t),n=new URLSearchParams(window.location.search).get("title");return r.a.createElement("div",{className:"tracks-view-wrapper"},this.state.errorFetchingTracks?r.a.createElement("p",{className:"notification is-danger"},"Error Loading Tracks, Refresh the Page"):r.a.createElement("div",{className:"tracks-view-content"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container has-text-centered is-widescreen"},r.a.createElement("p",{className:"title"},n),r.a.createElement("p",null,"This won't modify ",n," or your library, selecting and deselecting tracks only modifies your selection of tracks in this app. Use the table below to select and deselect tracks."," ",r.a.createElement(c.b,{to:"/selection"},"Export")," to modify and export your full selection of tracks, or continue to"," ",r.a.createElement(c.b,{to:"/your-playlists"},"Playlists")," and"," ",r.a.createElement(c.b,{to:"/your-albums"},"Albums")," to continue adding tracks"," "))),r.a.createElement("div",{className:"table-section-wrapper"},r.a.createElement("div",{className:"table-wrapper"},this.state.disableTable?r.a.createElement("div",{className:"table-ajax-cover"},r.a.createElement("div",{className:"ajax-spinner"},r.a.createElement("div",{className:"spinner"}))):null,r.a.createElement("div",{className:"table-controls-wrapper"},r.a.createElement("div",{className:"key-and-mode-filter-wrapper"},r.a.createElement("form",{onChange:function(t){e.filterByKey(t)}},r.a.createElement("div",{className:"filter-wrapper"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:"key"},r.a.createElement("option",{selected:!this.state.key,disabled:!0,value:""},"Key"),["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].map((function(e){return r.a.createElement("option",{value:e},e)})))),this.state.key?r.a.createElement("button",{onClick:function(t){return e.setState({key:null})}},r.a.createElement(B.a,{className:"has-text-link"})):null),r.a.createElement("div",{className:"filter-wrapper"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:"mode"},r.a.createElement("option",{selected:!this.state.mode,disabled:!0,value:""},"mode"),r.a.createElement("option",{value:"major"},"major"),r.a.createElement("option",{value:"minor"},"minor"))),this.state.mode?r.a.createElement("button",{onClick:function(t){return e.setState({mode:null})}},r.a.createElement(B.a,{className:"has-text-link"})):null))),r.a.createElement("div",{className:"search-input-wrapper"},r.a.createElement("input",{className:"input is-small",onChange:function(t){return e.search(t)},placeholder:"Search",value:this.state.query}),this.state.query.length?r.a.createElement("button",{onClick:function(){e.setState({query:""})}},r.a.createElement(B.a,{className:"has-text-link"})):null)),r.a.createElement("table",{className:"table is-bordered is-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"select"),Z("name",this.state.sort.column,this.state.sort.direction,(function(t){t.preventDefault(),e.sortColumn("name")})),Z("key",this.state.sort.column,this.state.sort.direction,(function(t){t.preventDefault(),e.sortColumn("key")})),Z("mode",this.state.sort.column,this.state.sort.direction,(function(t){t.preventDefault(),e.sortColumn("mode")})),Z("tempo",this.state.sort.column,this.state.sort.direction,(function(t){t.preventDefault(),e.sortColumn("tempo")})),Z("artist",this.state.sort.column,this.state.sort.direction,(function(t){t.preventDefault(),e.sortColumn("artist")})))),r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},e.state.trackSelection.find((function(e){return e&&t&&e.id===t.id}))?r.a.createElement($.a,{className:"selection-button-icon has-text-link ".concat(e.state.disableTable?"disabled-icon":""),onClick:function(){e.removeFromSelection(t)}}):r.a.createElement(z.a,{className:"selection-button-icon has-text-link ".concat(e.state.disableTable?"disabled-icon":""),onClick:function(){e.addToSelection(t)}})),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.key),r.a.createElement("td",null,t.mode),r.a.createElement("td",null,Number(t.tempo)),r.a.createElement("td",null,t.artist))}))))))))}}]),a}(n.Component);var te=Object(o.b)((function(e){return{}}),(function(e){return{addFlashMessage:function(t){return e({type:"ADD_FLASH_MESSAGE",payload:t})},addPendingRequest:function(t){return e({type:"ADD_PENDING_REQUEST",payload:t})},finishPendingRequest:function(t){return e({type:"FINISH_PENDING_REQUEST",payload:t})}}}))(ee),ae=function(e,t,a,n){return e===t?r.a.createElement("th",{onClick:function(e){return n(e)}},e,0!==a&&a?null:r.a.createElement(r.a.Fragment,null,"\u2191\u2193"),1===a?r.a.createElement(r.a.Fragment,null,"\u2191"):null,2===a?r.a.createElement(r.a.Fragment,null,"\u2193"):null):r.a.createElement("th",{onClick:function(e){n(e)}},e,"\u2191\u2193")},ne=function(e){Object(O.a)(a,e);var t=Object(R.a)(a);function a(e){var n;Object(N.a)(this,a),n=t.call(this,e);var r=localStorage.getItem("tonalify_selection"),s=JSON.parse(r);return n.state={trackList:[],filtered:!1,key:null,mode:null,sort:{column:null,direction:null},errorFetching:!1,disableTable:!1,query:"",trackSelection:s||[]},n}return Object(S.a)(a,[{key:"filterByKey",value:function(e){"key"!==e.target.name?"mode"===e.target.name&&this.setState({mode:e.target.value,filtered:!!e.target.value||!!this.state.key}):this.setState({key:e.target.value,filtered:!!e.target.value||!!this.state.mode})}},{key:"getFilteredTracks",value:function(){var e=this,t=this.state,a=t.key,n=t.mode,r=Object(d.a)(this.state.trackSelection).filter((function(e){return a&&n&&e.key===a&&e.mode===n||a&&!n&&e.key===a||!a&&n&&e.mode===n?e:a||n?void 0:e}));return this.state.query?r.filter((function(t){var a=t.name,n=t.artist,r=t.tempo,s=t.mode,i=t.key,c=!1;if([a,n,r,s,i].map((function(t){t&&t.toString().toLowerCase().includes(e.state.query.toLocaleLowerCase())&&(c=!0)})),c)return t})):r}},{key:"search",value:function(e){e.target.value&&e.target.value.length?this.setState({query:e.target.value,filtered:!0}):this.setState({query:"",filtered:!1})}},{key:"removeFromSelection",value:function(e){var t=localStorage.getItem("tonalify_selection"),a=(JSON.parse(t)?JSON.parse(t):[]).filter((function(t){return t.id!==e.id}));localStorage.setItem("tonalify_selection",JSON.stringify(a)),this.setState({trackSelection:a})}},{key:"exportSelection",value:function(){var e=Object(_.a)(x.a.mark((function e(t){var a,n,r,s,i,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=Object(F.a)(),n=Object(F.a)(),r=t.target.playlist_name.value,s=t.target.playlist_description.value,e.prev=5,this.props.addPendingRequest({id:a,type:g.USER_LIBRARY,message:"Creating New Playlist"}),e.next=9,q.a.post("".concat(w,"/spotify-request"),{spotify_path:"https://api.spotify.com/v1/users/".concat(this.props.userId,"/playlists"),spotify_payload:{name:r,description:s},crud_operation:"post"},{withCredentials:!0,headers:{"Access-Control-Allow-Origin":P}});case 9:if(i=e.sent,this.props.finishPendingRequest(a),i&&i.data&&i.data.id){e.next=13;break}return e.abrupt("return");case 13:return this.props.addPendingRequest({id:n,type:g.USER_LIBRARY,message:"Adding Tracks To Playlist"}),e.next=16,q.a.post("".concat(w,"/spotify-request"),{spotify_path:"https://api.spotify.com/v1/playlists/".concat(i.data.id,"/tracks"),spotify_payload:{uris:this.state.trackSelection.map((function(e){return e.uri}))},crud_operation:"post"},{withCredentials:!0,headers:{"Access-Control-Allow-Origin":P}});case 16:if((c=e.sent)&&c.data&&c.data.snapshot_id){e.next=19;break}return e.abrupt("return");case 19:this.props.finishPendingRequest(n),this.props.addFlashMessage({type:b.SUCCESS,text:"Created ".concat(r),id:Object(F.a)()}),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(5),this.props.finishPendingRequest(n),this.props.finishPendingRequest(a),this.props.addFlashMessage({type:b.ERROR,text:"Error Creating Playlist",id:Object(F.a)()});case 28:case"end":return e.stop()}}),e,this,[[5,23]])})));return function(t){return e.apply(this,arguments)}}()},{key:"sortColumn",value:function(e){var t=1;if(this.state.sort.column!==e)t=1;else switch(this.state.sort.direction){case 0:t=1;break;case 1:t=2;break;case 2:t=0}this.setState({sort:{column:e,direction:t}})}},{key:"getSortedTracks",value:function(e){var t=this.state.sort,a=t.direction,n=t.column;return Object(d.a)(e).sort((function(e,t){return 1===a?e[n]>t[n]?1:-1:2===a?e[n]<t[n]?1:-1:1}))}},{key:"render",value:function(){var e=this,t=this.state.filtered?this.getFilteredTracks():this.state.trackSelection,a=this.getSortedTracks(t);return r.a.createElement("div",{className:"user-selection-wrapper"},this.state.errorFetching?r.a.createElement("p",{className:"notification is-danger"},"Error Loading Track Selection, Refresh the Page"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container has-text-centered is-widescreen"},r.a.createElement("p",{className:"title"},"Export To Spotify"),r.a.createElement("p",null,"Modify and export your current selection or return to your"," ",r.a.createElement(c.b,{to:"/your-playlists"},"Playlists")," and"," ",r.a.createElement(c.b,{to:"/your-albums"},"Albums")," to continue adding tracks"))),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"form-wrapper box column is-half"},r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("p",null,"Export Playlist")),r.a.createElement("form",{id:"playlist-form",className:"create-playlist-form",onSubmit:function(t){return e.exportSelection(t)}},r.a.createElement("div",{className:"playlist-inputs"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name",className:"label"},"Name"),r.a.createElement("input",{id:"name",className:"input",name:"playlist_name",placeholder:"Playlist Name"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"description",className:"label"},"Description"),r.a.createElement("textarea",{id:"description",rows:2,className:"playlist-description textarea",name:"playlist_description",placeholder:"Playlist Description"}))),r.a.createElement("div",{className:"export-button-wrapper"},r.a.createElement("button",{className:"export-button button is-primary"},"Create")))))),r.a.createElement("div",{className:"table-section-wrapper"},r.a.createElement("div",{className:"table-wrapper"},this.state.disableTable?r.a.createElement("div",{className:"table-ajax-cover"},r.a.createElement("div",{className:"ajax-spinner"},r.a.createElement("div",{className:"spinner"}))):null,r.a.createElement("div",{className:"table-controls-wrapper"},r.a.createElement("div",{className:"key-and-mode-filter-wrapper"},r.a.createElement("form",{onChange:function(t){e.filterByKey(t)}},r.a.createElement("div",{className:"filter-wrapper"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:"key"},r.a.createElement("option",{selected:!this.state.key,disabled:!0,value:""},"Key"),["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].map((function(e){return r.a.createElement("option",{value:e},e)})))),this.state.key?r.a.createElement("button",{onClick:function(t){return e.setState({key:null})}},r.a.createElement(B.a,{className:"has-text-link"})):null),r.a.createElement("div",{className:"filter-wrapper"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:"mode"},r.a.createElement("option",{selected:!this.state.mode,disabled:!0,value:""},"mode"),r.a.createElement("option",{value:"major"},"major"),r.a.createElement("option",{value:"minor"},"minor"))),this.state.mode?r.a.createElement("button",{onClick:function(t){return e.setState({mode:null})}},r.a.createElement(B.a,{className:"has-text-link"})):null))),r.a.createElement("div",{className:"search-input-wrapper field"},r.a.createElement("input",{className:"input is-small",onChange:function(t){return e.search(t)},placeholder:"Search",value:this.state.query}),this.state.query.length?r.a.createElement("button",{onClick:function(){e.setState({query:""})}},r.a.createElement(B.a,{className:"has-text-link"})):null," ")),r.a.createElement("table",{className:"table is-bordered is-striped "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"deselect"),ae("name",this.state.sort.column,this.state.sort.direction,(function(t){t.preventDefault(),e.sortColumn("name")})),ae("key",this.state.sort.column,this.state.sort.direction,(function(t){t.preventDefault(),e.sortColumn("key")})),ae("mode",this.state.sort.column,this.state.sort.direction,(function(t){t.preventDefault(),e.sortColumn("mode")})),ae("tempo",this.state.sort.column,this.state.sort.direction,(function(t){t.preventDefault(),e.sortColumn("tempo")})),ae("artist",this.state.sort.column,this.state.sort.direction,(function(t){t.preventDefault(),e.sortColumn("artist")})))),r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},r.a.createElement($.a,{className:"selection-button-icon has-text-link ".concat(e.state.disableTable?"disabled-icon":""),onClick:function(){e.removeFromSelection(t)}})),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.key),r.a.createElement("td",null,t.mode),r.a.createElement("td",null,Number(t.tempo)),r.a.createElement("td",null,t.artist))}))))))))}}]),a}(n.Component);var re=Object(o.b)((function(e){return{userId:e.auth.id}}),(function(e){return{addFlashMessage:function(t){return e({type:"ADD_FLASH_MESSAGE",payload:t})},addPendingRequest:function(t){return e({type:"ADD_PENDING_REQUEST",payload:t})},finishPendingRequest:function(t){return e({type:"FINISH_PENDING_REQUEST",payload:t})}}}))(ne),se=function(e){Object(O.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={},n}return Object(S.a)(a,[{key:"render",value:function(){var e=this.props.requests,t=e[e.length-1];return t?r.a.createElement("div",{className:"spinner-wrapper"},r.a.createElement("div",{className:"spinner-content"},r.a.createElement("div",null,r.a.createElement("div",{className:"spinner"})),t?r.a.createElement("p",null,t.message):null)):null}}]),a}(n.Component),ie=Object(o.b)((function(e){return{requests:e.ajax.requests}}),(function(e){return{}}))(se),ce=Object(u.createStore)(Object(u.combineReducers)(k),Object(p.composeWithDevTools)(Object(u.applyMiddleware)(m.a))),le=function(){return r.a.createElement(o.a,{store:ce},r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(ie,null),r.a.createElement(A,null),r.a.createElement(U,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/search"}),r.a.createElement(l.a,{path:"/your-playlists",component:J(Q,{type:"PLAYLISTS"})}),r.a.createElement(l.a,{path:"/your-albums",component:J(Q,{type:"ALBUMS"})}),r.a.createElement(l.a,{path:"/tracks",component:J(te)}),r.a.createElement(l.a,{path:"/selection",component:J(re)}),r.a.createElement(l.a,{path:"/"},r.a.createElement(G,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.958cabc7.chunk.js.map