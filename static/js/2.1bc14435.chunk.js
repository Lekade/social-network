(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{313:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__1XXDW",allChats:"Dialogs_allChats__23tRy",chat:"Dialogs_chat__1GUJm",headerChat:"Dialogs_headerChat__1Oluw",buttonBack:"Dialogs_buttonBack__37pUe",messageBlock:"Dialogs_messageBlock__b8Z4R",messagesElements:"Dialogs_messagesElements__3bAAU",btnElement:"Dialogs_btnElement__2NZ1Q"}},315:function(e,a,s){e.exports={itom:"Dialog_itom__2nHIX",nickname:"Dialog_nickname__3m0YM",imageUser:"Dialog_imageUser__1Wrm3"}},317:function(e,a,s){e.exports={message:"Message_message__Ni5FG"}},324:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),l=s(115),i=s(19),c=s(77),m=s(313),o=s.n(m),g=s(315),r=s.n(g),d=s(22),u=s(65),_=s.n(u),b=function(e){return n.a.createElement(d.b,{onClick:function(){e.setOpenMessages(!0),e.setDialog(e.id)},to:"/dialogs/"+e.id,className:r.a.itom},n.a.createElement("div",null,n.a.createElement("img",{className:r.a.imageUser,src:_.a,alt:"imageUser"})),n.a.createElement("div",{className:r.a.nickname},e.name))},E=s(317),f=s.n(E),D=function(e){var a=e.message;return n.a.createElement("div",null,n.a.createElement("p",{className:f.a.message},a))},k=s(52),N=s(13),h=s(106),p=Object(k.a)(500),v=Object(h.a)({form:"messages"})(function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},Object(N.c)("Message","newMessage",N.b,[k.b,p]),n.a.createElement("div",null,n.a.createElement("button",{className:o.a.btnElement},"Send")))}),O=function(e){var a=e.dialogsPage,s=Object(c.a)(e,["dialogsPage"]),l=Object(t.useState)(!1),m=Object(i.a)(l,2),g=m[0],r=m[1],d="dialog_"+[a.dialogId],u=a.dialogs.map(function(e){return n.a.createElement(b,{name:e.name,key:e.id,id:e.id,dialogsPage:a,setOpenMessages:r,setDialog:s.setDialog})}),E=a.messages[d].map(function(e){return n.a.createElement(D,{message:e.message,key:e.id})});return n.a.createElement("div",{className:o.a.dialogs},g?n.a.createElement("div",{className:o.a.chat},n.a.createElement("div",{className:o.a.headerChat},n.a.createElement("button",{onClick:function(){return r(!1)},className:o.a.buttonBack},"Back"),n.a.createElement("div",null,a.dialogs[a.dialogId].name),n.a.createElement("img",{src:_.a,alt:"imageUser"})),n.a.createElement("div",{className:o.a.messageBlock},n.a.createElement("div",{className:o.a.messagesElements},E),n.a.createElement(v,{onSubmit:s.addNewMessage}))):n.a.createElement("div",{className:o.a.allChats},n.a.createElement("h2",null,"DIALOGS"),u))},w=s(14),M=s(104),j=s(12);a.default=Object(j.d)(Object(w.b)(function(e){return{dialogsPage:e.dialogsPage}},{sendMessage:l.b,setDialogId:l.c}),M.a)(function(e){return n.a.createElement(O,Object.assign({},e,{addNewMessage:function(a){e.sendMessage(a.newMessage),a.newMessage=""},setDialog:function(a){e.setDialogId(a)},dialogsPage:e.dialogsPage}))})}}]);
//# sourceMappingURL=2.1bc14435.chunk.js.map