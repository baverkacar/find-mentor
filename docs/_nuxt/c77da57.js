(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{282:function(t,e,n){var content=n(286);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("c82b4100",content,!0,{sourceMap:!1})},283:function(t,e,n){var content=n(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("0accbfe0",content,!0,{sourceMap:!1})},285:function(t,e,n){"use strict";n(282)},286:function(t,e,n){(e=n(67)(!1)).push([t.i,".item{width:248px;height:320px;background-color:#32475b;border-radius:20px;transition:box-shadow .3s;overflow:hidden}.item:hover{box-shadow:16px 16px 16px rgba(11,11,11,.2)}.social-media{display:flex;justify-content:center;margin:0 0 15px 20px}.github,.linkedin,.twitter{width:30px;height:36px;margin-right:20px}.twitter{background-color:#22acf3}.social-media-icon{width:20px;height:20px;margin-top:8px}.github{background-color:#282e36}.linkedin{background-color:#f6f6f6}.profile-photo{margin:0 10px 10px 0}.profile-photo img{border-radius:100%;width:120px;height:120px;border:2px solid #fff}.name{color:#fff}.interests{color:#a4a4a4}.interests,.name,.profile-photo{display:flex;justify-content:center;align-items:center}@media (max-width:626px){.item{width:300px;height:350px}.github,.linkedin,.twitter{width:40px;height:46px;margin-right:20px}.social-media-icon{width:30px;height:30px;margin-top:8px;font-size:25px}}",""]),t.exports=e},287:function(t,e,n){"use strict";n(283)},288:function(t,e,n){(e=n(67)(!1)).push([t.i,".mentor-item{width:248px;height:320px;background-color:#17aa90;border-radius:20px;transition:box-shadow .3s;overflow:hidden}.mentor-item:hover{box-shadow:16px 16px 16px rgba(11,11,11,.2)}.social-media{display:flex;justify-content:center;margin:0 0 15px 20px}.github,.linkedin,.twitter{width:30px;height:36px;margin-right:20px}.twitter{background-color:#22acf3}.social-media-icon{width:20px;height:20px;margin-top:8px}.github{background-color:#282e36}.linkedin{background-color:#f6f6f6}.profile-photo{margin:0 10px 10px 0}.profile-photo img{border-radius:100%;width:120px;height:120px;border:2px solid #fff}.name{color:#fff}.mentor-interests{color:#d6d5d5}.mentor-interests,.name,.profile-photo{display:flex;justify-content:center;align-items:center}@media (max-width:626px){.mentor-item{width:300px;height:350px}.github,.linkedin,.twitter{width:40px;height:46px;margin-right:20px}.social-media-icon{width:30px;height:30px;margin-top:8px;font-size:25px}}",""]),t.exports=e},291:function(t,e,n){"use strict";n.r(e);n(6),n(153);var r={name:"mente-card",props:["mentee"],methods:{getProfilePicture:function(t){var e=t.match(/github.com\/([\w\d-]+)(.+)?/);if(!e)return"https://raw.githubusercontent.com/cagataycali/find-mentor/master/assets/images/dummy.png";var n="https://avatars.githubusercontent.com/".concat(e[1]);return console.log(n),n}}},o=(n(285),n(51)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"social-media"},[t.mentee.twitter_handle.length?n("div",{staticClass:"twitter"},[n("a",{attrs:{href:t.mentee.twitter_handle}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","twitter"],color:"white"}})],1)]):t._e(),t._v(" "),t.mentee.github.length?n("div",{staticClass:"github"},[n("a",{attrs:{href:t.mentee.github}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","github"],color:"white"}})],1)]):t._e(),t._v(" "),t.mentee.linkedin.length?n("div",{staticClass:"linkedin"},[n("a",{attrs:{href:t.mentee.linkedin}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","linkedin"],color:"white"}})],1)]):t._e()]),t._v(" "),n("NuxtLink",{attrs:{to:"/mentee/"+t.mentee.slug}},[n("div",{staticClass:"profile-photo"},[n("img",{attrs:{src:t.getProfilePicture(t.mentee.github),alt:"mentee-profile-picture"}})]),t._v(" "),n("div",{staticClass:"name"},[t._v("\n      "+t._s(t.mentee.name)+"\n    ")])]),t._v(" "),n("div",{staticClass:"interests"},[t._v("\n    "+t._s(t.mentee.interests)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);n(6),n(153);var r={name:"mentor-card",props:["mentor"],methods:{getProfilePicture:function(t){var e=t.match(/github.com\/([\w\d-]+)(.+)?/);if(!e)return"https://raw.githubusercontent.com/cagataycali/find-mentor/master/assets/images/dummy.png";var n="https://avatars.githubusercontent.com/".concat(e[1]);return console.log(n),n}}},o=(n(287),n(51)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mentor-item"},[n("div",{staticClass:"social-media"},[t.mentor.twitter_handle.length?n("div",{staticClass:"twitter"},[n("a",{attrs:{href:t.mentor.twitter_handle}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","twitter"],color:"white"}})],1)]):t._e(),t._v(" "),t.mentor.github.length?n("div",{staticClass:"github"},[n("a",{attrs:{href:t.mentor.github}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","github"],color:"white"}})],1)]):t._e(),t._v(" "),t.mentor.linkedin.length?n("div",{staticClass:"linkedin"},[n("a",{attrs:{href:t.mentor.linkedin}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","linkedin"],color:"white"}})],1)]):t._e()]),t._v(" "),n("NuxtLink",{attrs:{to:"/mentor/"+t.mentor.slug}},[n("div",{staticClass:"profile-photo"},[n("img",{attrs:{src:t.getProfilePicture(t.mentor.github),alt:"mentor-profile-picture"}})]),t._v(" "),n("div",{staticClass:"name"},[t._v("\n      "+t._s(t.mentor.name)+"\n    ")])]),t._v(" "),n("div",{staticClass:"mentor-interests"},[t._v("\n    "+t._s(t.mentor.interests)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,n){var content=n(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("1b7833da",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n(296)},302:function(t,e,n){(e=n(67)(!1)).push([t.i,"*{box-sizing:border-box}header{display:flex;flex-direction:column;align-items:center;text-align:center;padding:80px 0}.contrib{text-decoration:underline;-webkit-text-decoration-color:#1e90ff;text-decoration-color:#1e90ff}.information{padding:10px;font-size:16px}.persons{list-style-type:none;width:100%;display:flex;justify-content:center;flex-wrap:wrap;padding-left:0}.person{width:250px;height:250px;text-align:center;margin:30px 7.5px 0}.name{font-size:26px}.interestContent{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}",""]),t.exports=e},315:function(t,e,n){"use strict";n.r(e);n(52);var r=n(20),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("mentees").fetch();case 3:return r=e.sent,e.next=6,n("mentors").fetch();case 6:return o=e.sent,e.abrupt("return",{mentees:r,mentors:o});case 8:case"end":return e.stop()}}),e)})))()}},c=(n(301),n(51)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("hr"),t._v(" "),n("h2",{staticClass:"title"},[t._v("Mentors")]),t._v(" "),n("ul",{staticClass:"persons"},t._l(t.mentors,(function(t){return n("MentorCard",{key:t.slug,staticClass:"person",attrs:{mentor:t}})})),1),t._v(" "),n("hr"),t._v(" "),n("h2",{staticClass:"title"},[t._v("Mentees")]),t._v(" "),n("ul",{staticClass:"persons"},t._l(t.mentees,(function(t){return n("MenteeCard",{key:t.slug,staticClass:"person",attrs:{mentee:t}})})),1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",{staticClass:"contrib"},[e("a",{attrs:{href:"https://github.com/cagataycali/find-mentor",target:"_blank"}},[this._v("\n          Feel free to contribute!\n        ")])]),this._v(" "),e("p",{staticClass:"information"},[this._v("\n        Every night & every deploy, the spread sheet will be parsed by GitHub\n        actions, then generate this beauty.\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MentorCard:n(292).default,MenteeCard:n(291).default})}}]);