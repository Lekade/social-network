(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={profileinfo:"Profileinfo_profileinfo__1VN0L",intro:"Profileinfo_intro__13cE5",content:"Profileinfo_content__3hY09",photoUser:"Profileinfo_photoUser__19aW1",topInformation:"Profileinfo_topInformation__39gl7",btnElement:"Profileinfo_btnElement__3KKgc",infoSettings:"Profileinfo_infoSettings__1rW0p",btnback:"Profileinfo_btnback__LpsTu",statusBlock:"Profileinfo_statusBlock__2mm1G",statusBlockDisabled:"Profileinfo_statusBlockDisabled__1gRx5",status:"Profileinfo_status__1JpVu",statusInput:"Profileinfo_statusInput__3d0nJ",bottomInformation:"Profileinfo_bottomInformation__3YZQS",fileInput:"Profileinfo_fileInput__2HNLY",lookingForAJob:"Profileinfo_lookingForAJob__eXei_",commonError:"Profileinfo_commonError__18hoQ"}},104:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(0),r=a.n(n),o=a(1),i=a(14),s=function(e){return{authUser:e.auth.authUser}},c=function(e){return Object(i.b)(s)(function(t){return t.authUser?r.a.createElement(e,t):r.a.createElement(o.a,{to:"/login"})})}},111:function(e,t,a){e.exports={preloader:"Preloader_preloader__2tEy0",preloaderImg:"Preloader_preloaderImg__1vRPQ"}},115:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"c",function(){return c});var n=a(30),r=a(53),o=a(9),i={dialogs:[{id:0,name:"Vladislav"},{id:1,name:"Igor"},{id:2,name:"Marina"},{id:3,name:"Ksenia"},{id:4,name:"Tatiana"},{id:5,name:"Dima"}],messages:{dialog_0:[{id:1,message:"hi"},{id:2,message:"How a you?"},{id:3,message:"My name is Denis"},{id:4,message:"Yo"}],dialog_1:[{id:1,message:"Yo"},{id:2,message:"My name is Denis"},{id:3,message:"And I understand your name is Igor"}],dialog_2:[{id:1,message:"Hellow!"},{id:2,message:"How a you?"}],dialog_3:[{id:1,message:"hellow, my name is Denis"},{id:2,message:"And I understand your name is Ksenia"}],dialog_4:[{id:1,message:"And I understand your name is Tatiana"},{id:2,message:"How a you?"}],dialog_5:[{id:1,message:"Yo"},{id:2,message:"How a you?"}]},dialogId:0},s=function(e){return{type:"network/dialogs/ADD-MESSAGE",newMessage:e}},c=function(e){return{type:"network/dialogs/SET_DIALOG_ID",dialogId:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"network/dialogs/ADD-MESSAGE":var a=t.newMessage,s="dialog_"+e.dialogId;return Object(o.a)({},e,{messages:Object(o.a)({},e.messages,Object(n.a)({},s,[].concat(Object(r.a)(e.messages[s]),[{id:5,message:a}])))});case"network/dialogs/SET_DIALOG_ID":return Object(o.a)({},e,{dialogId:t.dialogId});default:return e}}},116:function(e,t,a){"use strict";a.d(t,"c",function(){return p}),a.d(t,"g",function(){return d}),a.d(t,"e",function(){return g}),a.d(t,"d",function(){return E}),a.d(t,"b",function(){return h}),a.d(t,"f",function(){return b});var n=a(11),r=a.n(n),o=a(18),i=a(53),s=a(9),c=a(15),l=a(54),u="network/users/FOLLOW",m={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,expectationFollowedUsersId:[]},A=function(){var e=Object(o.a)(r.a.mark(function e(t,a,n,o){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(g(!0,t)),e.next=3,a(t);case 3:0===e.sent.resultCode&&o(n(t)),o(g(!1,t));case 6:case"end":return e.stop()}},e)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),p=function(e){return{type:u,userId:e}},d=function(e){return{type:"network/users/UNFOLLOW",userId:e}},f=function(e){return{type:"network/users/SET_TOTAL_USERS_COUNT",fetchingCount:e}},g=function(e,t){return{type:"network/users/EXPECTATION_FOLLOWED",expectation:e,userId:t}},E=function(e,t){return function(){var a=Object(o.a)(r.a.mark(function a(n){var o;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"network/users/SET_PAGE_NUMBER",pageNumber:e}),n(f(!0)),a.next=4,c.d.getUsers(e,t);case 4:o=a.sent,n(f(!1)),n({type:"network/users/SET_USERS",users:o.items}),n({type:"network/users/SET_USER_COUNT",quantityUsers:o.totalCount});case 8:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},h=function(e){return function(t){A(e,c.d.follow.bind(c.d),p,t)}},b=function(e){return function(t){A(e,c.d.unFollow.bind(c.d),d,t)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)({},e,{users:Object(l.a)(e.users,t.userId,"id",{followed:!0})});case"network/users/UNFOLLOW":return Object(s.a)({},e,{users:Object(l.a)(e.users,t.userId,"id",{followed:!1})});case"network/users/SET_USERS":return Object(s.a)({},e,{users:t.users});case"network/users/SET_PAGE_NUMBER":return Object(s.a)({},e,{currentPage:t.pageNumber});case"network/users/SET_USER_COUNT":return Object(s.a)({},e,{totalUsersCount:t.quantityUsers});case"network/users/SET_TOTAL_USERS_COUNT":return Object(s.a)({},e,{isFetching:t.fetchingCount});case"network/users/EXPECTATION_FOLLOWED":return Object(s.a)({},e,{expectationFollowedUsersId:t.expectation?[].concat(Object(i.a)(e.expectationFollowedUsersId),[t.userId]):e.expectationFollowedUsersId.filter(function(e){return e!==t.userId})});default:return e}}},13:function(e,t,a){"use strict";a.d(t,"b",function(){return p}),a.d(t,"a",function(){return d}),a.d(t,"c",function(){return f});var n=a(30),r=a(77),o=a(0),i=a.n(o),s=a(40),c=a.n(s),l=a(105),u=a(45),m=a.n(u),A=function(e){var t=e.input,a=e.meta,o=a.touched,s=a.error,l=(e.child,Object(r.a)(e,["input","meta","child"])),u=o&&s;return i.a.createElement("div",{className:m()(Object(n.a)({},c.a.error,u),Object(n.a)({},c.a.placeholderTop,0!==t.value.length),c.a.formControl)},i.a.createElement("div",{className:c.a.inputBlock},i.a.createElement("div",{className:c.a.placeholder},l.placeholder),i.a.createElement("div",{className:c.a.inputElement},l.children)),u&&i.a.createElement("span",null,s))},p=function(e){var t=e.input,a=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return i.a.createElement(A,e,i.a.createElement("textarea",Object.assign({},t,a)))},d=function(e){var t=e.input,a=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return i.a.createElement(A,e,i.a.createElement("input",Object.assign({},t,a)))},f=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,Object.assign({placeholder:e,name:t,component:a,validate:n},r)))}},139:function(e,t,a){e.exports={nav:"Nav_nav__2H8Z0"}},140:function(e,t){e.exports="data:image/png;base64,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"},141:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAXwSURBVHic7ZpZjBVFFIa/mrkyTBgFBFQWETfQMAQEIko0PGhcIuAWNBEEjQaJS+KCGpX4RHgwaowvQgCDwagPiERNUHzAoCaCcdgEERGRgAub6MCIA1I+VLXWPbfv7erb3beHzPxJJbdunzrn1F/bOdWttNZ0ZtTl7UDe6CIgbwfyRhcBeTuQN1InQClVSFtnllBJj0Gl1DBgPHA5MA4YAewD1gLrbPlCa/13Mlczgta6qgI0AK8AJwEdUTYDzdXaCrE9FLgRGJRYV5UODAc2enTcLX8BDyfo9H3AB8ABofdX4ENgSk0IAG6xnQnr5J/Ap8COCkQsxy49T3t9bcd9SH4T6JkZAdaZ/cLoP8ALmLVf58j2A24HdoU4+oCnvauAvTFn2k/A6KwIeEMY+wW4JqJNbzvqbrvDQP+Idr3s9JYd3AosAmZbf7aHyGwDuqdKAHCtMHIEGBKj/TLRflmE/IIQe9PKyD4CHBPy89Im4Cth4LGYs6e/HXlXx5gKU989XY4ScYoAVwDHnTbHgVGpEIA58lzlG4D6OARYPQ8JAh4sI/eWkJvjqf8l0e7ltAgYKxTPjdt5q2eQ0LOojNwWR2Yf0OCpv4niE2pNVBvfUPgyUd/k2a4IWus9wKEKelFKNQLDnL++1p5RpNb6CCY+CTBaKVWxj74EjBb1jaFSfnDJa1ZKnSaeNwP1CWy1OL97AJdUEu6I2aAkRMdsL/tUcfb4EtAi6iO93SmF2/YbrfVx8XwT5gQIIGdfFJqd363AzkrCvgSsF/VRcTwKoJQajAmMyukN1vEO568xSqkGT/1NmIg0wCZtd8dy8CVgM3DCqU+qMu+/VdTlzArgEtMHeMZT//PAGU59Q2SLGEeYDIRmxzwCBwB/CB3lAqEJFAdCx4AREfrHAe1Om3ZgeCpxgDWQNBR+V7SvJhSeWUZ2FlmHwtZQLZOhnoRngluB14EngSXA9yEyPwCNWRBwKqTDP5JVOmydqvWFSJ+Q5VOuvEOWFyKOU3lciU0HPgIOCr2/ASuAqVXpTeBQnpeiFwITgQuS6ur01+KJCShRqFRBa30iWjKWzkbgOuBSYDBwLmaT3Y/ZJPdi4pTVsYlOa1paIuuBc4DTU9BVB9yMuRxpxW+facVcvU2uxR7QG5gGvI2Z7nsw4XLgTBvmSFqFCWXH4XmLhFlSLZ6dLlc+B65MlQA7wtOBTyi+IvMt+4G5lAmCMMHPEvw21jZPmwuAbokJACZTfFWVpLQDi4G+jv5+mCQoTP4QsBC4CbMPNNk2PYCLMbHJQuDnMu0/A/pVRQAwBFgT0aFW4DtgNSYYWWOdjiJiH3An5q5wW8jzPcDUSiMofC0Az2EuQaSuXcCAWAQAV1Ma+gZlCzAPs7ZDIztgIHA98ASwsgIRR0T9JPBiMNJV7E/DMcevtLMO8cKkkpL7KU4v3Y5PrNKxCZSm1bKcAGZUoz9kv3qK0r1qaSQBwD0hjrVh0s7Y7wOEbgXcRXiSpIG7k3Ze2JsTYuO/YzKswfiQNbSbGBmWp2MNmI1QOrc4ZTv1mCPRtfFtMJBSeDAmuXCFW4Cz0nRKzIbXQki4LWU752MyVdfGzDACPhZCe4GBWXRe2H1V2D1AyI6d0MYMYWN9EQGUXnm1AWOz7rxjf5WwvzIDGzKOGeJORRl6Pl2rzlsfzqM05h+Zso1nhf5HgwdTxIOdeL6QTNnBx4Uf81PWP1ToXx48kFdOd9S689aPHhRHkK2kkFk6+usoPuG+rFNKdcdEawEOWkJqDq31UWC+81cTJhROS/9JTIYaoL8CJgHvO38u0Vrfm5bRuLA3TNucvw5jPnxKCxdhZhpAe4Hi0Qd4L0Vj1WA78Dv/v0PsZUsW6FaHCX5crM3ImBe0Waw186GA+XgpwDFMipo31gI3OPU2TFKTOiQBu+0I5A255mdprZdmYagAnO3U+yqlVmRhKCYGiXpjVoYKtgQ4E3MT29GQ2ac8HfEboZqi0xNQoPibnY6KtqwUp/5q7FRDp18CXQTk7UDe6CIgbwfyxr8NcOQ46SFOuwAAAABJRU5ErkJggg=="},142:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALySURBVHic7ZuxaxRBFMZ/by9otNBYSLQxKYJdlMSApaLBUgJiG4hgIdjnL7BII6ltgthYKIIWFkaxsDMqHlaiYMBCsTBEoxc5fRa74tzk7nLZ7M27y80PptjZ3dnv+/bm5vZ4K6pKL5NYC7Cmr9EOEdkLjAETwDAggTQVhQIfgCXglar+qH+Uak0DRoDHQDUbZCe0auZpZINfx7gAV4G1DhDcrraWeZR6Acx3gMBQbf6fb1FVROQMsEjtPP8F3AdekM6lbmQYOAGcB3Y5/QpMquoTgH3AMrUJvQZG/fnSrQ0YzTy5Hpcz78x4O74Ag9ai2xDCYObN9TqTkC5zLrOq+rmoz2CnkHma9bon6gWwGEaSCb63CQF+Av1Zx4qqHgirKSwi8hUYyDYrCf/NA6yHlxQc12N/zz8LxACsBVgTA7AWYE0MwFqANTEAawHWxACsBVgTA7AWYE0MwFqANTEAawHWxACsBVgTA7AWYE0MwFqANTEAawHWxACsBVgTA7AWYE0CVJzt3VZCAuJ6rCRA2ekYEJEjgQUFI/M24HSVE9JKSpfJcJKC43tbqhfAnIgMBhIUjMzTnNe9BD1eJredQsl14JGqfm/xDvQBp4CDrRxfEMNsVijppJSnVHYVONrCHRgH3ucYv+2lsq7IvMXS1zYxf5m0Es3atNKsWNoRvNVy+RsNjO8BFjrAtNKkXH7DCxOq+g442+SFiSFgyjml5I8hIiPAHeC4t+s3cBP45p/TBpQ8L0y0MJ/PUZvugrd/Clhh4134BJy2XhH8ludZ4I+3XQIQkZKIzAH3gP3eMc+AMVV9muN6baXhO0NN8ANIROQQcJt0mfO5TlqAXc1xrbZTRACjwEvgsNe/ClxS1bt5hIWiiACO1TnmDXBBVd/mGD8oRXwH+NwCTnaDeSg2gHXgiqpON1xyOpA8U6BSp28ZuKiqz7epJzh5PgFl4KOz/RAY70bzkP0m3vJJIkPANOkj5gPNM0iHkCuAnUTP/yv8FyeM9cYnOUhLAAAAAElFTkSuQmCC"},144:function(e,t,a){e.exports={content:"Profile_content__UAU9-",profile_image:"Profile_profile_image__3suxp",photo:"Profile_photo__2F8Qs",like:"Profile_like__3XffW"}},145:function(e,t,a){e.exports=a.p+"static/media/loading.d2cc95d0.gif"},147:function(e,t,a){e.exports=a.p+"static/media/iconPhoto.37bd521b.png"},148:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEoSURBVFhH7ZdbbsIwEEVDEY9Cq1YgtdthA6x2NjDbKVIrKtoCRQKumUkxYBsn5PHRHIl5fNg5diySJP+elmabbjKdrLW+hNg15sh0stPqEuIe4q80wulkocE2xEPEH2n+GGD8t9ZhrEUcBWIvbpNOdMPY/BMUASRatV1cudNcG41AI9AI1C5Q+z+h7ABx+5CrRJ8F6S3Yaq4G4q5W1hlIn2zVsNHseCEp+zycLdS96rIkHLvs3/aiJTy32C9gKEoicL7CAsILRN60zgbxK+JMGjcxAoYRJN61joN4jPghjZ9YAcMTJOZahyF+RvyUJkwWAcMDJBZauyF+RPyS5jpZBQz3kDj/JhCIB4hLaeLII2DoQWKltUDcR/R/UZVABxK7w8/UDblIkj29KkqlvLhoCAAAAABJRU5ErkJggg=="},149:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFCSURBVFhH7ZZbDoIwEEXBGH/BHbEBVusG3JG4AuxlpmlLH7TDSxNPoiA6cw8DVquzqXnr03cv3vN5PO+85yKo8QWoSUsvogxeQ2GdK+A3GXg7B5/Be7q+4S0I1bg9LQkjYMKpQWzMIH62/mQ0VAMogz9HAnZ4KtjGlZDUvVVNe0mcTRoKxLTyw10aZNdzo+mtvek7iOO+GS7qSYeOvD0CnaUuASEdowxz+SotcBp/ga8QwM2Ab8INBw7iqh7IpFVXfS9HXg+OAVnIVOhLQFM4QsIsfNPZh3+M9loTAhmxn+PtJSK9XQGwh0Sipy8AtpRY6BUWAFtIZPSIC4A1Epm1aQEgkSioWRYAJRKFwnkCIKexYFr5AiAVwEurIjsclAmAkIQ5hn87RT3LBYAdCJHCsdvIBIAZORCFrweToGn8KlX1AeNWsrFhSP4MAAAAAElFTkSuQmCC"},15:function(e,t,a){"use strict";a.d(t,"d",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return i}),a.d(t,"c",function(){return s});var n=a(152).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"api-key":"98f6098b-b910-4444-a3a8-66303bd614e3"}}),r={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return n.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return n.post("follow/"+e).then(function(e){return e.data})},unFollow:function(e){return n.delete("follow/"+e).then(function(e){return e.data})}},o={getProfile:function(e){return n.get("profile/"+e)},getStatus:function(e){return n.get("profile/status/"+e)},updateStatus:function(e){return n.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),n.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfileData:function(e){return n.put("profile",e)}},i={me:function(){return n.get("auth/me").then(function(e){return e.data})},loginMe:function(e,t,a,r){return n.post("auth/login",{email:e,password:t,rememberMe:a,captcha:r}).then(function(e){return e.data})},logout:function(){return n.delete("auth/login").then(function(e){return e.data})}},s={getCaptchaUrl:function(){return n.get("security/get-captcha-url")}}},150:function(e,t,a){e.exports=a.p+"static/media/logo.6cf139a3.png"},151:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHvSURBVHhe7ZrRcgIhDEVdnbH9of7/Z7UPbW3Qy8wOBYSQBFY4L2FrF3IvkPjgdjLgRmBYxUZgqIbqAlzhIZpGqEwsJTxEwwjxCbXEe6RNOCNKcNEW78AaYnlLTXSlvL4xVofW+qFwfTy1IXGczkjIHLoNFwq/jycezQbgSHajtSY0vdxbvKfFBPaLreLDpKXnK8XUgNIkNecOYb1UmyDl5rpNraiNlqkqcBwTJL8HREFSnON94wiqRdUAyr95fprDtTo1qhOsPP6cnQ8pvga1V9OhdgIkj6/kXCHqNWB0lgGIomgcWa1rUGUAp8hYU5vjugKI07IMQJyWZQCiGNStPjAUR2Pu6t4aazNaPfoZI+VyWMTdiu2KJNI7zJ5MW2gtXGOKXxpN8DNKDcn+09FEp8iZkfzgVcR7UiasL0KI07IMQJyWLkUwVZB6rGl+AlKJOHKfaWFqQCjQ7bgDj3esTehWA/bCQxMs6WJATHAvE6bvAssARFNihc66+HmsDXhDvAvegz873hFNMDWA6twXhZxA94PLT4xNSB477aoc7Lr5ep5uRXAvWFt8jtUFEKdlGYA4LdMb0K0NWjNcGxyFZQDitCwDEKcl2QUcr9IJUh3AkTXAc1QjcsI9RQaEjGpIieAQlgExrE3hiP3P6fQHk7vC8EPv528AAAAASUVORK5CYII="},178:function(e,t,a){e.exports=a(311)},250:function(e,t,a){},253:function(e,t,a){},31:function(e,t,a){e.exports={post:"Post_post__2DOpy",photo:"Post_photo__2eJNk",text:"Post_text__242z4",likeElement:"Post_likeElement__vrItS",like:"Post_like__yRL1l",likeBtn:"Post_likeBtn__10fK2"}},311:function(e,t,a){"use strict";a.r(t);var n=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,322)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)})},r=a(12),o=a(30),i=a(11),s=a.n(i),c=a(18),l=a(53),u=a(9),m=a(15),A=a(29),p=a(54),d={posts:[{id:1,message:"Hi. how are you?",likesCount:1,myLike:!1},{id:2,message:"It's my first post",likesCount:5,myLike:!1},{id:3,message:"ok",likesCount:12,myLike:!1}],newPostText:"it-camasutra.com",profileData:null,myProfileData:null,status:"mi status"},f=function(e){return{type:"network/profile/SET_STATUS",status:e}},g=function(e){return function(){var t=Object(c.a)(s.a.mark(function t(a,n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.b.getProfile(e);case 2:r=t.sent,a({type:"network/profile/SET_USER_PROFILE",profileData:r.data}),e===n().auth.id&&a({type:"network/profile/SET_MY_PROFILE",myProfileData:r.data});case 5:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"network/profile/ADD-POST":var a={id:e.posts[e.posts.length-1].id+1,message:t.newPost,likesCount:0,myLike:!1};return Object(u.a)({},e,{posts:[].concat(Object(l.a)(e.posts),[a])});case"network/profile/ADD_LIKE_POST":return Object(u.a)({},e,{posts:Object(p.a)(e.posts,t.postId,"id",{likesCount:e.posts[t.postId-1].likesCount+1,myLike:!0})});case"network/profile/REMOVE_LIKE_POST":return Object(u.a)({},e,{posts:Object(p.a)(e.posts,t.postId,"id",{likesCount:e.posts[t.postId-1].likesCount-1,myLike:!1})});case"network/profile/SET_USER_PROFILE":return Object(u.a)({},e,{profileData:t.profileData});case"network/profile/SET_MY_PROFILE":return Object(u.a)({},e,{myProfileData:t.myProfileData});case"network/profile/SET_STATUS":return Object(u.a)({},e,{status:t.status});case"network/profile/SAVE_PHOTO_SUCCESS":return Object(u.a)({},e,{profileData:Object(u.a)({},e.profileData,{photos:t.photos})});default:return e}},h=a(115),b=a(116),v={id:null,email:null,login:null,authUser:!1,captchaUrl:null},O=function(e,t,a,n){return{type:"network/auth/SET_USER_AUTH",authData:{id:e,email:t,login:a,authUser:n}}},w=function(e){return{type:"network/auth/SET_CAPTHA_SUCCESS",authData:{captchaUrl:e}}},k=function(){return function(){var e=Object(c.a)(s.a.mark(function e(t){var a,n,r,o,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.me();case 2:a=e.sent,n=a.data,r=n.id,o=n.email,i=n.login,0===a.resultCode&&t(O(r,o,i,!0));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(c.a)(s.a.mark(function e(t){var a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.c.getCaptchaUrl();case 2:a=e.sent,n=a.data.url,t(w(n));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"network/auth/SET_USER_AUTH":case"network/auth/SET_CAPTHA_SUCCESS":return Object(u.a)({},e,t.authData);default:return e}},P=a(138),S=a(107),_={initialized:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;switch((arguments.length>1?arguments[1]:void 0).type){case"network/app/INITIALIZED_SUCCESS":return Object(u.a)({},e,{initialized:!0});default:return e}},j=Object(r.c)({profilePage:E,dialogsPage:h.a,usersPage:b.a,auth:I,app:N,form:S.a}),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,B=Object(r.e)(j,U(Object(r.a)(P.a)));window.store=B;var T=B,y=a(0),D=a.n(y),L=a(74),F=a.n(L),x=(a(250),a(23)),R=a(24),M=a(46),V=a(44),H=a(47),Q=a(139),J=a.n(Q),Y=a(22),K=a(140),G=a.n(K),z=a(141),W=a.n(z),X=a(142),q=a.n(X),Z=function(){return D.a.createElement("nav",{className:J.a.nav},D.a.createElement("ul",null,D.a.createElement("li",null,D.a.createElement(Y.b,{to:"/profile"},D.a.createElement("img",{src:G.a})," Profile")),D.a.createElement("li",null,D.a.createElement(Y.b,{to:"/dialogs"},D.a.createElement("img",{src:q.a})," Messages")),D.a.createElement("li",null,D.a.createElement(Y.b,{to:"/users"},D.a.createElement("img",{src:W.a})," Find users"))))},$=(a(253),a(1)),ee=a(14),te=a(144),ae=a.n(te),ne=a(19),re=a(10),oe=a.n(re),ie=a(75),se=function(e){var t=Object(y.useState)(!1),a=Object(ne.a)(t,2),n=a[0],r=a[1],o=Object(y.useState)(e.status),i=Object(ne.a)(o,2),s=i[0],c=i[1];Object(y.useEffect)(function(){c(e.status)},[e.status]);return D.a.createElement("div",{className:oe.a.statusBlock,onClick:function(){r(!0)}},!n&&D.a.createElement("div",{className:oe.a.status},s||"The status is missing"),n&&D.a.createElement("input",{className:oe.a.statusInput,autoFocus:!0,value:s,onChange:function(e){c(e.target.value)},onBlur:function(){r(!1),e.updateStatus(s)},type:"text"}))},ce=a(45),le=a.n(ce),ue=a(65),me=a.n(ue),Ae=function(e){var t=e.contactTitle,a=e.contactValue;return D.a.createElement("div",null,t," : ",a)},pe=function(e){var t=e.profileData,a=e.status,n=e.updateStatus,r=e.idOwner,o=e.setEditeMode;return D.a.createElement("div",{className:oe.a.textInfo},D.a.createElement("div",{className:oe.a.topInformation},t.photos.large?D.a.createElement("img",{className:oe.a.photoUser,src:t.photos.large,alt:"userPhoto"}):D.a.createElement("img",{className:oe.a.photoUser,src:me.a,alt:"notPhoto"}),D.a.createElement("div",null,t.fullName),r&&D.a.createElement("button",{onClick:function(){return o(!0)},className:oe.a.btnElement},"EDIT PROFILE")),r?D.a.createElement(se,{status:a,updateStatus:n}):D.a.createElement("div",{className:le()(oe.a.statusBlock,oe.a.statusBlockDisabled)},D.a.createElement("div",{className:oe.a.status},a)),D.a.createElement("div",{className:oe.a.bottomInformation},D.a.createElement("div",null,"Looking for a job : ",t.lookingForAJob?"Yes":"No"),D.a.createElement("div",null,"Description : ",t.lookingForAJobDescription),D.a.createElement("div",null,"About me : ",t.aboutMe),D.a.createElement("b",null,"Contacts :"),"  ",Object.keys(t.contacts).map(function(e){return D.a.createElement(Ae,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},de=a(106),fe=a(13),ge=a(147),Ee=a.n(ge),he=Object(de.a)({form:"profile-data"})(function(e){var t=e.handleSubmit,a=e.profileData,n=e.error,r=e.savePhoto,o=e.setEditeMode;return D.a.createElement("div",null,D.a.createElement("form",{className:oe.a.infoSettings,onSubmit:t},D.a.createElement("div",null,D.a.createElement("img",{className:oe.a.photoUser,src:a.photos.large,alt:"userPhoto"}),D.a.createElement("label",{className:oe.a.fileInput},D.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])}}),D.a.createElement("div",null,D.a.createElement("img",{src:Ee.a,alt:"iconPhoto"}))),Object(fe.c)("Full name","fullName",fe.a,[]),D.a.createElement("label",null,D.a.createElement("div",{className:oe.a.lookingForAJob},Object(fe.c)("","lookingForAJob",fe.a,[],{type:"checkbox"})," Looking for a job ")),Object(fe.c)("Description","lookingForAJobDescription",fe.b,[]),Object(fe.c)("About me","aboutMe",fe.b,[])),D.a.createElement("b",null,"Contacts :"),"  ",Object.keys(a.contacts).map(function(e){return D.a.createElement("div",{key:e},Object(fe.c)("Write your contacts on ".concat(e),"contacts."+e,fe.a,[]))}),n&&D.a.createElement("div",{className:oe.a.commonError},n),D.a.createElement("div",null,D.a.createElement("button",{className:oe.a.btnElement},"SUBMITE"))),D.a.createElement("button",{onClick:function(){return o(!1)},className:le()(oe.a.btnElement,oe.a.btnback)},"BACK"))}),be=function(e){var t=e.profileData,a=e.status,n=e.updateStatus,r=e.idOwner,o=e.savePhoto,i=e.saveProfileData,s=Object(y.useState)(!1),c=Object(ne.a)(s,2),l=c[0],u=c[1];return t?D.a.createElement("div",{className:oe.a.profileinfo},D.a.createElement("div",{className:oe.a.intro}),D.a.createElement("div",{className:oe.a.content},D.a.createElement("div",null,l?D.a.createElement(he,{initialValues:t,profileData:t,onSubmit:function(e){i(e).then(function(){u(!1)})},savePhoto:o,setEditeMode:u}):D.a.createElement(pe,{profileData:t,editeMode:l,status:a,updateStatus:n,idOwner:r,setEditeMode:u})))):D.a.createElement(ie.a,null)},ve=a(64),Oe=a.n(ve),we=a(31),ke=a.n(we),Ce=a(148),Ie=a.n(Ce),Pe=a(149),Se=a.n(Pe),_e=function(e){return D.a.createElement("div",{className:ke.a.post},D.a.createElement("img",{className:ke.a.photo,src:e.photo,alt:"photo"}),D.a.createElement("div",{className:ke.a.text}," ",e.message," "),D.a.createElement("div",{className:ke.a.likeElement},e.myLike?D.a.createElement("button",{className:ke.a.likeBtn,onClick:function(){return e.removeLikePost(e.postId)}},D.a.createElement("img",{className:ke.a.like,src:Ie.a}),e.likesCount):D.a.createElement("button",{className:ke.a.likeBtn,onClick:function(){return e.addLikePost(e.postId)}},D.a.createElement("img",{className:ke.a.like,src:Se.a}),e.likesCount)))},Ne=a(105),je=a(52),Ue=Object(de.a)({form:"myPost"})(function(e){return D.a.createElement("form",{onSubmit:e.handleSubmit},D.a.createElement("div",null,D.a.createElement(Ne.a,{placeholder:"Anything new?",name:"newPost",component:fe.b,validate:[je.b]})),D.a.createElement("div",null,D.a.createElement("button",{className:Oe.a.btnElement},"Send")))}),Be=function(e){var t=e.posts,a=e.photo,n=e.addPost,r=e.idOwner,o=e.addLikePost,i=e.removeLikePost,s=t.map(function(e){return D.a.createElement(_e,{key:e.id,postId:e.id,message:e.message,likesCount:e.likesCount,myLike:e.myLike,photo:a,addLikePost:o,removeLikePost:i})});return D.a.createElement("div",{className:Oe.a.myPosts},D.a.createElement("h2",{className:Oe.a.h2},"My posts"),r?D.a.createElement("div",null,D.a.createElement(Ue,{onSubmit:function(e){n(e.newPost),e.newPost=""}}),s):D.a.createElement("div",{className:Oe.a.noPosts},"The user has no posts yet"))},Te=function(e){var t=e.profilePage.myProfileData;if(null!==t)return t.photos.small},ye=function(e){return e.profilePage.posts},De=function(e){return e.profilePage.profileData},Le=function(e){return e.profilePage.status},Fe=function(e){return e.auth.id},xe=Object(ee.b)(function(e){return{posts:ye(e),photo:Te(e)}},{addPost:function(e){return{type:"network/profile/ADD-POST",newPost:e}},addLikePost:function(e){return{type:"network/profile/ADD_LIKE_POST",postId:e}},removeLikePost:function(e){return{type:"network/profile/REMOVE_LIKE_POST",postId:e}}})(Be),Re=function(e){return D.a.createElement("div",{className:ae.a.profile},D.a.createElement(be,{profileData:e.profileData,status:e.status,updateStatus:e.updateStatus,idOwner:e.idOwner,savePhoto:e.savePhoto,saveProfileData:e.saveProfileData}),D.a.createElement(xe,{idOwner:e.idOwner}))},Me=a(104),Ve=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(M.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(r)))).userInitialization=function(){var e=a.props.router.params.userId;e||(e=a.props.id),a.props.getUserProfile(e),a.props.getStatus(e)},a}return Object(H.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.userInitialization()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.router.params.userId!==e.router.params.userId&&this.userInitialization()}},{key:"render",value:function(){return D.a.createElement(Re,Object.assign({},this.props,{profileData:this.props.profileData,status:this.props.status,updateStatus:this.props.updateStatus,idOwner:!this.props.router.params.userId,savePhoto:this.props.savePhoto,saveProfileData:this.props.saveProfileData}))}}]),t}(D.a.Component),He=Object(r.d)(Object(ee.b)(function(e){return{profileData:De(e),status:Le(e),id:Fe(e)}},{getUserProfile:g,getStatus:function(e){return function(){var t=Object(c.a)(s.a.mark(function t(a){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.b.getStatus(e);case 2:n=t.sent,a(f(n.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(c.a)(s.a.mark(function t(a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(f(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(c.a)(s.a.mark(function t(a){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.b.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a({type:"network/profile/SAVE_PHOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},saveProfileData:function(e){return function(){var t=Object(c.a)(s.a.mark(function t(a,n){var r,i,c,l,u;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.id,t.next=3,m.b.saveProfileData(e);case 3:if(0!==(i=t.sent).data.resultCode){t.next=8;break}a(g(r)),t.next=13;break;case 8:return c=i.data.messages[0],l=c.slice(c.indexOf(">")+1,c.indexOf(")")),u=l[0].toLowerCase()+l.substring(1),a(Object(A.a)("profile-data",{contacts:Object(o.a)({},u,c)})),t.abrupt("return",Promise.reject(c));case 13:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}}),Me.a,function(e){return function(t){var a=Object($.f)(),n=Object($.g)(),r=Object($.h)();return D.a.createElement(e,Object.assign({},t,{router:{location:a,navigate:n,params:r}}))}})(Ve),Qe=a(41),Je=a.n(Qe),Ye=a(150),Ke=a.n(Ye),Ge=a(84),ze=a.n(Ge),We=function(e){var t=e.logout,a=e.opened,n=e.onClose,r=Object(y.useRef)(null);return Object(y.useEffect)(function(){if(a){var e=function(e){r.current&&(r.current.contains(e.target)||n())};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}},[a,n]),a?D.a.createElement("div",{ref:r,className:Je.a.listItom},D.a.createElement("button",{onClick:t},"LOGOUT")):null},Xe=function(e){var t=e.authUser,a=e.photoSmall,n=e.logout,r=Object(y.useState)(!1),o=Object(ne.a)(r,2),i=o[0],s=o[1];return D.a.createElement("header",{className:Je.a.header},D.a.createElement("div",{className:ze.a.container},D.a.createElement(Y.b,{className:Je.a.logo,to:"/profile"},D.a.createElement("img",{src:Ke.a,alt:"logo"}),D.a.createElement("span",null,"Social-Network")),D.a.createElement("div",{className:Je.a.login},t?D.a.createElement("div",{className:Je.a.list,onClick:function(){return s(function(e){return!e})}},D.a.createElement(We,{logout:n,opened:i,onClose:function(){s(!1)}}),a?D.a.createElement("img",{src:a,alt:"myPhoto"}):D.a.createElement("img",{src:me.a,alt:"notPhoto"})):D.a.createElement(Y.b,{className:Je.a.loginLink,to:"/login"},"Login"))))},qe=function(e){function t(){return Object(x.a)(this,t),Object(M.a)(this,Object(V.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return D.a.createElement(Xe,Object.assign({},this.props,{authUser:this.props.authUser,logout:this.props.logout,photoSmall:this.props.photoSmall}))}}]),t}(D.a.Component),Ze=Object(ee.b)(function(e){return{authUser:e.auth.authUser,photoSmall:Te(e)}},{logout:function(){return function(){var e=Object(c.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.logout();case 2:0===e.sent.resultCode&&t(O(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(qe),$e=a(42),et=a.n($e),tt=a(151),at=a.n(tt),nt=Object(de.a)({form:"login"})(function(e){var t=e.handleSubmit,a=e.error,n=e.captchaUrl;return D.a.createElement("form",{onSubmit:t},Object(fe.c)("Email","email",fe.a,[je.b]),Object(fe.c)("Password","password",fe.a,[je.b],{type:"password"}),D.a.createElement("label",{className:et.a.labelCheckbox},Object(fe.c)(null,"rememberMe",fe.a,[],{type:"checkbox"})," remember me"),n&&D.a.createElement("img",{src:n,alt:"captcha"}),n&&Object(fe.c)("Captcha","captcha",fe.a,[je.b]),a&&D.a.createElement("div",{className:et.a.commonError},a),D.a.createElement("button",{className:et.a.submiteButton},"LOGIN"))}),rt=function(e){var t=e.authUser,a=e.onSubmit,n=e.captchaUrl;return D.a.createElement("div",{className:et.a.loginForm},D.a.createElement("div",{className:et.a.inputGrup},D.a.createElement("div",{className:et.a.lockImage},D.a.createElement("img",{src:at.a,alt:"lock"})),D.a.createElement("h1",null,"LOGIN"),t?D.a.createElement($.a,{to:"/profile/"}):D.a.createElement(nt,{onSubmit:a,captchaUrl:n})))},ot=Object(r.d)(Object(ee.b)(function(e){return{authUser:e.auth.authUser,captchaUrl:e.auth.captchaUrl}},{userLogin:function(e){return function(){var t=Object(c.a)(s.a.mark(function t(a){var n,r,o,i,c,l,u,p;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.email,r=e.password,o=e.rememberMe,i=void 0!==o&&o,c=e.captcha,l=void 0===c?null:c,t.next=3,m.a.loginMe(n,r,i,l);case 3:0===(u=t.sent).resultCode?a(k()):(10===u.resultCode&&a(C()),p=u.messages.length>0?u.messages[0]:"Some error",a(Object(A.a)("login",{_error:p})));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}}))(function(e){return D.a.createElement(rt,{onSubmit:function(t){e.userLogin(t)},authUser:e.authUser,captchaUrl:e.captchaUrl})}),it=function(e){return e.app.initialized},st=D.a.lazy(function(){return a.e(2).then(a.bind(null,324))}),ct=D.a.lazy(function(){return a.e(3).then(a.bind(null,323))}),lt=function(e){function t(){return Object(x.a)(this,t),Object(M.a)(this,Object(V.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?D.a.createElement("div",{className:"app_wrapper"},D.a.createElement(Ze,null),D.a.createElement("div",{className:ze.a.container},D.a.createElement(Z,null),D.a.createElement("main",{className:"main"},D.a.createElement(y.Suspense,{fallback:D.a.createElement("div",null,"Loading...")},D.a.createElement($.d,null,D.a.createElement($.b,{path:"/dialogs/*",element:D.a.createElement(st,null)}),D.a.createElement($.b,{path:"/profile/:userId/*",element:D.a.createElement(He,null)}),D.a.createElement($.b,{path:"/profile/",element:D.a.createElement(He,null)}),D.a.createElement($.b,{path:"/users/*",element:D.a.createElement(ct,null)}),D.a.createElement($.b,{path:"/login/*",element:D.a.createElement(ot,null)}),D.a.createElement($.b,{path:"/",element:D.a.createElement(He,null)}),D.a.createElement($.b,{path:"*",element:D.a.createElement("div",null,"404 NOT FOUND")})))))):D.a.createElement(ie.a,null)}}]),t}(D.a.Component),ut=Object(r.d)(Object(ee.b)(function(e){return{initialized:it(e)}},{initializeApp:function(){return function(e){var t=e(k());Promise.all([t]).then(function(){e({type:"network/app/INITIALIZED_SUCCESS"})})}}}))(lt);F.a.render(D.a.createElement(Y.a,null,D.a.createElement(ee.a,{store:T},D.a.createElement(ut,null))),document.getElementById("root")),n()},40:function(e,t,a){e.exports={formControl:"FormsControl_formControl__376Je",error:"FormsControl_error__3RstS",inputBlock:"FormsControl_inputBlock__w1uyH",inputElement:"FormsControl_inputElement__21nGd",placeholder:"FormsControl_placeholder__1iE7X",placeholderTop:"FormsControl_placeholderTop__1l3lI"}},41:function(e,t,a){e.exports={header:"Header_header__cwg7x",logo:"Header_logo__32OgP",login:"Header_login__3MuCf",loginLink:"Header_loginLink__m3kP2",list:"Header_list__3A0Rq",listItom:"Header_listItom__3-QR4"}},42:function(e,t,a){e.exports={commonError:"Login_commonError__34YD0",loginForm:"Login_loginForm__3DHvE",inputGrup:"Login_inputGrup__1MKga",lockImage:"Login_lockImage__PfTeZ",labelCheckbox:"Login_labelCheckbox__15KEe",submiteButton:"Login_submiteButton__24aFh"}},52:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},54:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(9),r=function(e,t,a,r){return e.map(function(e){return e[a]===t?Object(n.a)({},e,r):e})}},64:function(e,t,a){e.exports={myPosts:"MyPosts_myPosts__FQkm-",h2:"MyPosts_h2__34xy3",button:"MyPosts_button__3umXz",btnElement:"MyPosts_btnElement__2r3yu",noPosts:"MyPosts_noPosts__5ss_7"}},65:function(e,t,a){e.exports=a.p+"static/media/user.8aba6cb9.png"},75:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(145),i=a.n(o),s=a(111),c=a.n(s);t.a=function(e){return r.a.createElement("div",{className:c.a.preloader},!0===e.isFetching?r.a.createElement("img",{className:c.a.preloaderImg,alt:"preloader",src:i.a}):null)}},84:function(e,t,a){e.exports={container:"StyleContainer_container__vENQc"}}},[[178,5,4]]]);
//# sourceMappingURL=main.1e83aabe.chunk.js.map