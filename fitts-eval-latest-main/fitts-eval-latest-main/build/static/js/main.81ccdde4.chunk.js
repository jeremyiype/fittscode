(this["webpackJsonpfitts-eval"]=this["webpackJsonpfitts-eval"]||[]).push([[0],{44:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),o=a.n(r),i=(a(44),a(36)),s=a(5),l=a(4),u=a(17),d=a(31),b=a.n(d);function j(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var p=a(2),m=b.a.mark(h),v=c.a.createContext();function g(){return Object(n.useContext)(v)}function h(e){var t;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=e.length;case 1:if(!t--){a.next=6;break}return a.next=4,e.splice(Math.floor(Math.random()*(t+1)),1)[0];case 4:a.next=1;break;case 6:case"end":return a.stop()}}),m)}function O(e){var t=e.children,a=Object(n.useState)(!1),c=Object(l.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),d=s[0],b=s[1],m=Object(n.useState)(0),g=Object(l.a)(m,2),O=g[0],f=g[1],x=Object(n.useState)(25),y=Object(l.a)(x,2),S=y[0],w=y[1],k=Object(n.useState)(70),B=Object(l.a)(k,2),N=B[0],R=B[1],C=Object(n.useState)("NT"),D=Object(l.a)(C,2),M=D[0],T=D[1],P=function(){var e=Object(n.useState)(j()),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){c(j())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}(),E=P.height,I=P.width,_=function(){return[[24,I-(24+2*S)],[85,E-(24+2*S)]]},F=function(e){var t=_(),a=Object(l.a)(t,2),n=a[0],c=a[1],r=Math.random()*(n[1]-n[0])+n[0],o=Math.random()*(c[1]-c[0])+c[0];if(void 0!=e)for(var i=40;A(e[0],e[1],r,o)<50+S&&i>0;)r=Math.random()*(n[1]-n[0])+n[0],o=Math.random()*(c[1]-c[0])+c[0],i--;return[r,o]},A=function(e,t,a,n){var c=Math.abs(e-a),r=Math.abs(t-n);return Math.sqrt(c*c+r*r)},V={scoreBoardHeight:60,scoreBoardBorderWidth:1,maxScore:15,canvasMargin:16,canvasPadding:8,username:d,age:O,targetButtonRadius:S,distanceRadius:N,fingerRadioSelection:M,getDistance:A,setLoading:o,setUsername:b,setAge:f,setTargetButtonRadius:w,setDistanceRadius:R,setFingerRadioSelection:T,RandomPoint:F,RandomPointAtDistance:function(e){var t=_(),a=Object(l.a)(t,2),n=a[0],c=a[1];if(void 0!=e){var r=h(Object(u.a)(Array(360).keys())),o=r.next().value,i=Math.cos(o*Math.PI/180)*N+e[0],s=Math.sin(o*Math.PI/180)*N+e[1],d=300;for(Math.floor(10*Math.random()+1);(i>=n[1]||i<=n[0]||s<=c[0]||s>=c[1])&&d>0;)o=r.next().value,i=Math.cos(o*Math.PI/180)*N+e[0],s=Math.sin(o*Math.PI/180)*N+e[1],d--;return console.log(Math.fround(A(i,s,e[0],e[1]))==N),[i,s]}return console.log("prevPoint Not found"),F()},copyFromLastSaved:function(){b(localStorage.username||""),f(localStorage.age||0),w(localStorage.targetButtonRadius||25),R(localStorage.distanceRadius||70),T(localStorage.fingerRadioSelection||"NT")},saveData:function(){localStorage.username=d,localStorage.age=O,localStorage.targetButtonRadius=S,localStorage.distanceRadius=N,localStorage.fingerRadioSelection=M}};return Object(p.jsx)(v.Provider,{value:V,children:!r&&t})}var f=function(){var e=Object(s.e)();return Object(p.jsxs)("div",{className:"main-menu-wrapper",children:[Object(p.jsx)("div",{className:"options-button-wrapper",onClick:function(){return e.push("/finger-calibration")},children:"finger calibration"}),Object(p.jsx)("div",{className:"options-button-wrapper",onClick:function(){return e.push("/main-task")},children:"main task"}),Object(p.jsx)("div",{className:"options-button-wrapper",onClick:function(){return e.push("/screen-calibration")},children:"screen calibration"})]})};var x=function(){return Object(p.jsx)("div",{className:"screen-calibration-wrapper",children:Object(p.jsx)("div",{className:"calibration-box"})})},y=a(73),S=a(75),w=a(76),k=a(74);var B=function(e){var t=e.nextTaskPath,a=e.inputFieldsData,n=Object(s.e)(),c=g(),r=c.setFingerRadioSelection,o=c.copyFromLastSaved,i=c.fingerRadioSelection;return Object(p.jsxs)("div",{className:"details-menu-wrapper",children:[a.map((function(e){return Object(p.jsxs)("div",{className:"input-field-wrapper",children:[Object(p.jsx)("div",{className:"field-label",children:e.label}),Object(p.jsx)("div",{className:"input-field",children:Object(p.jsx)("input",{value:e.value,onChange:function(t){return e.setValue(t.target.value)}})})]})})),Object(p.jsx)("div",{className:"radio-button-wrapper",children:Object(p.jsx)(k.a,{component:"fieldset",children:Object(p.jsxs)(S.a,{row:!0,"aria-label":"position",name:"position",defaultValue:i,onChange:function(e){return r(e.target.value)},children:[Object(p.jsx)(w.a,{value:"NT",control:Object(p.jsx)(y.a,{color:"primary"}),label:"NT",labelPlacement:"top"}),Object(p.jsx)(w.a,{value:"DT",control:Object(p.jsx)(y.a,{color:"primary"}),label:"DT",labelPlacement:"top"}),Object(p.jsx)(w.a,{value:"NF",control:Object(p.jsx)(y.a,{color:"primary"}),label:"NF",labelPlacement:"top"}),Object(p.jsx)(w.a,{value:"DF",control:Object(p.jsx)(y.a,{color:"primary"}),label:"DF",labelPlacement:"top"})]})})}),Object(p.jsx)("div",{className:"copy-button-wrapper",onClick:function(){return o()},children:"copy from last experiment"}),Object(p.jsx)("div",{className:"start-button-wrapper",onClick:function(){return n.push(t)},children:"start"})]})};var N=function(){var e=g(),t=e.username,a=e.setUsername,n=g(),c=n.age,r=n.setAge,o=g(),i=[{label:"Username",value:t,setValue:a},{label:"Age",value:c,setValue:r},{label:"Target Button Radius",value:o.targetButtonRadius,setValue:o.setTargetButtonRadius}];return Object(p.jsx)(B,{inputFieldsData:i,nextTaskPath:"/finger-calibration-activity"})};var R=function(e){var t=e.currScore,a=e.totalScore,c=e.children,r=e.handleClick,o=g(),i=o.canvasMargin,s=o.canvasPadding,l=o.scoreBoardHeight,u=o.scoreBoardBorderWidth,d=o.saveData,b=l+2*(i+s)+u;return Object(n.useEffect)((function(){return d()}),[]),Object(p.jsxs)("div",{id:"activity-wrapper",children:[Object(p.jsxs)("div",{className:"score-board",style:{borderBottom:u+"px solid black"},children:[t," / ",a," \u2003"]}),Object(p.jsx)("div",{id:"canvas",style:{padding:"8px",margin:"16px",height:"calc(100vh - "+b+"px)"},onMouseDown:r,children:c})]})};var C=function(e){var t=e.posX,a=e.posY,n=(e.radius,e.color),c=e.clickFunction,r=e.id,o=g().targetButtonRadius,i={width:2*o+"px",height:2*o+"px",left:t+"px",top:a+"px",border:"0.1px solid",backgroundColor:n};return Object(p.jsx)("div",{className:"point-wrapper",id:r,style:i,onMouseDown:c})},D=a.p+"static/media/trash.6dba31e5.svg",M=a.p+"static/media/checkSquare.5493682c.svg";var T=function(e){var t=e.taskTitle,a=e.playerScore,n=e.totalScore,c=e.averageTime,r=e.downloadData,o=e.avgWindow,i=g(),l=i.username,u=i.age,d=i.targetButtonRadius,b=i.fingerRadioSelection,j=i.distanceRadius,m=Object(s.e)();return console.log(c),Object(p.jsxs)("div",{className:"end-game-wrapper",children:[Object(p.jsx)("div",{className:"task-title",children:t}),Object(p.jsxs)("div",{className:"score-container",children:[Object(p.jsx)("div",{className:"your-score-wrapper",children:"your score"}),Object(p.jsxs)("div",{className:"score-wrapper",children:[a," / ",n]})]}),o?Object(p.jsxs)("div",{className:"average-score-container",children:[Object(p.jsx)("div",{className:"average-score-title-wrapper",children:"average time per trial"}),Object(p.jsxs)("div",{className:"average-score-wrapper",children:[c.toFixed(3)," sec"]})]}):"",Object(p.jsxs)("div",{className:"buttons-container",children:[Object(p.jsxs)("div",{className:"download-data-button",onClick:function(){console.log("Download Data");var e=function(e){var t="object"!=typeof e?JSON.parse(e):e,a=Object.keys(t[0]).join(",");a+="\r\n";for(var n=0;n<t.length;n++){var c="";for(var r in t[n])""!=c&&(c+=","),c+=t[n][r];a+=c+"\r\n"}return a}(r),a=encodeURI("data:text/csv;charset=utf-8,"+e),n=t.replace(" ","")+"_"+l+"_"+u+"_"+d;"Main Task"===t&&(n=n+"_"+j),n=n+"_"+b;var c=document.createElement("a");c.setAttribute("href",a),c.setAttribute("download",n+".csv"),document.body.appendChild(c),c.click()},children:[Object(p.jsx)("img",{src:M}),"\u2003Download"]}),Object(p.jsxs)("div",{className:"delete-data-button",onClick:function(){console.log("Delete Data"),m.push("/")},children:[Object(p.jsx)("img",{src:D}),"\u2003Delete"]})]})]})};var P=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),o=Object(l.a)(r,2),i=o[0],s=o[1],d=g(),b=d.RandomPoint,j=d.maxScore,m=d.getDistance,v=b(),h=Object(n.useState)(v[0]),O=Object(l.a)(h,2),f=O[0],x=O[1],y=Object(n.useState)(v[1]),S=Object(l.a)(y,2),w=S[0],k=S[1],B=Object(n.useState)(!1),N=Object(l.a)(B,2),D=N[0],M=N[1],P=Object(n.useState)([]),E=Object(l.a)(P,2),I=E[0],_=E[1],F=function(e,t){var a=m(f,w,e.clientX,e.clientY),n={TrialNo:i+1,target_x:f,target_y:w,touch_x:e.clientX,touch_y:e.clientY,hit:t,distance:a};_((function(e){return[].concat(Object(u.a)(e),[n])}))};return D?Object(p.jsx)(T,{taskTitle:"Finger Calibration",playerScore:a,totalScore:i,downloadData:I}):Object(p.jsx)(R,{currScore:a,totalScore:i,handleClick:function(e){if(!D){try{document.getElementById("activity-wrapper").style.backgroundColor="#FF4B4B",setTimeout((function(){try{document.getElementById("activity-wrapper").style.backgroundColor="white"}catch(e){}}),800)}catch(a){}if(i+1==j)F(e,!1),s(i+1),M(!0);else{F(e,!1);var t=b([f,w]);x(t[0]),k(t[1]),s(i+1)}}},children:Object(p.jsx)(C,{posX:f,posY:w,clickFunction:function(e){if(e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),!D){try{document.getElementById("activity-wrapper").style.backgroundColor="#4FC53C",setTimeout((function(){try{document.getElementById("activity-wrapper").style.backgroundColor="white"}catch(e){}}),800)}catch(n){}if(i+1==j)F(e,!0),c(a+1),s(i+1),M(!0);else{F(e,!0);var t=b([f,w]);x(t[0]),k(t[1]),c(a+1),s(i+1)}}}})})};var E=function(){var e=g(),t=e.username,a=e.setUsername,n=g(),c=n.age,r=n.setAge,o=g(),i=o.targetButtonRadius,s=o.setTargetButtonRadius,l=g(),u=[{label:"Username",value:t,setValue:a},{label:"Age",value:c,setValue:r},{label:"Target Button Radius",value:i,setValue:s},{label:"Distance Radius",value:l.distanceRadius,setValue:l.setDistanceRadius}];return Object(p.jsx)(B,{inputFieldsData:u,nextTaskPath:"/main-task-activity"})};var I=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),o=Object(l.a)(r,2),i=o[0],s=o[1],d=g(),b=d.RandomPoint,j=d.maxScore,m=(d.getDistance,d.RandomPointAtDistance),v=b(),h=m(v),O=Object(n.useState)(v[0]),f=Object(l.a)(O,2),x=f[0],y=f[1],S=Object(n.useState)(v[1]),w=Object(l.a)(S,2),k=w[0],B=w[1],N=Object(n.useState)(h[0]),D=Object(l.a)(N,2),M=D[0],P=D[1],E=Object(n.useState)(h[1]),I=Object(l.a)(E,2),_=I[0],F=I[1],A=Object(n.useState)([]),V=Object(l.a)(A,2),X=V[0],Y=V[1],U=Object(n.useState)(!1),L=Object(l.a)(U,2),W=L[0],H=L[1],J=Object(n.useState)([]),q=Object(l.a)(J,2),z=q[0],G=q[1],K=Object(n.useState)(0),Q=Object(l.a)(K,2),Z=Q[0],$=Q[1],ee=Object(n.useState)(0),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],ce=function(e,t,a){var n={TrialNo:i+1,start_target_x:x,start_target_y:k,start_touch_x:X[0],start_touch_y:X[1],end_target_x:M,end_target_y:_,end_touch_x:1*a.clientX,end_touch_y:1*a.clientY,hit:t,Duration:e};G((function(e){return[].concat(Object(u.a)(e),[n])}))};return W?Object(p.jsx)(T,{taskTitle:"Main Task",playerScore:a,totalScore:i,downloadData:z,avgWindow:!0,averageTime:Z/(1e3*j)}):Object(p.jsxs)(R,{currScore:a,totalScore:i,handleClick:function(e){if(!W&&"none"==document.getElementById("point1").style.display){var t=e.timeStamp-ae;$(Z+t);try{document.getElementById("activity-wrapper").style.backgroundColor="#FF4B4B",document.getElementById("point2").style.display="none",setTimeout((function(){try{document.getElementById("activity-wrapper").style.backgroundColor="white",document.getElementById("point1").style.display="block",document.getElementById("point2").style.display="block",document.getElementById("point2").style.backgroundColor="white"}catch(e){}}),800)}catch(c){}if(i+1==j)ce(t,!1,e),s(i+1),H(!0);else{ce(t,!1,e);var a=b(),n=m(a);y(a[0]),B(a[1]),P(n[0]),F(n[1]),s(i+1)}}},children:[Object(p.jsx)(C,{posX:x,posY:k,clickFunction:function(e){if(e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),!W){ne(e.timeStamp),Y([e.clientX,e.clientY]);try{document.getElementById("point1").style.display="none",document.getElementById("point2").style.backgroundColor="black"}catch(t){}}},id:"point1"}),Object(p.jsx)(C,{posX:M,posY:_,clickFunction:function(e){if(e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),!W){var t=e.timeStamp-ae;$(Z+t);try{document.getElementById("point2").style.display="none",document.getElementById("activity-wrapper").style.backgroundColor="#4FC53C",setTimeout((function(){try{document.getElementById("activity-wrapper").style.backgroundColor="white",document.getElementById("point1").style.display="block",document.getElementById("point2").style.display="block",document.getElementById("point2").style.backgroundColor="white"}catch(e){}}),500)}catch(o){}if(i+1==j)ce(t,!0,e),c(a+1),s(i+1),H(!0);else{ce(t,!0,e);var n=b(),r=m(n);y(n[0]),B(n[1]),P(r[0]),F(r[1]),c(a+1),s(i+1)}}},color:"white",id:"point2"})]})};var _=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(O,{children:Object(p.jsxs)(i.a,{history:Object(s.e)(),children:[Object(p.jsx)(s.a,{path:"/",exact:!0,component:f}),Object(p.jsx)(s.a,{path:"/screen-calibration",component:x}),Object(p.jsx)(s.a,{path:"/main-task",component:E}),Object(p.jsx)(s.a,{path:"/main-task-activity",component:I}),Object(p.jsx)(s.a,{path:"/finger-calibration",component:N}),Object(p.jsx)(s.a,{path:"/finger-calibration-activity",component:P}),Object(p.jsx)(s.a,{path:"/end-game",component:T})]})})})};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.81ccdde4.chunk.js.map