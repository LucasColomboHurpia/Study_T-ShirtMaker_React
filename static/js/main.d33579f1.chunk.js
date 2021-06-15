(this["webpackJsonpreact-tshirt-maker"]=this["webpackJsonpreact-tshirt-maker"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var r=c(1),l=c.n(r),i=c(3),a=c.n(i),o=(c(13),c(4)),n=c(5),s=c(8),d=c(6),j=(c(14),c(7));var b=c(0),m=function(e){var t=e.children,c=Object(r.useRef)(null);return function(e){var t=Object(r.useState)({dx:0,dy:0}),c=Object(j.a)(t,2),l=c[0],i=l.dx,a=l.dy,o=c[1];Object(r.useEffect)((function(){var t=function(e){var t=e.pageX-i,c=e.pageY-a,r=function(e){var r=e.pageX-t,l=e.pageY-c;o({dx:r,dy:l})};document.addEventListener("mousemove",r),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",r)}),{once:!0})};return e.current.addEventListener("mousedown",t),function(){e.current.removeEventListener("mousedown",t)}}),[i,a]),Object(r.useEffect)((function(){e.current.style.transform="translate3d(".concat(i,"px, ").concat(a,"px, 0)")}),[i,a])}(c),Object(b.jsx)("div",{ref:c,children:t})},h=function(e){var t=e.display,c=e.textFormat1,r=e.textFormat2,l=e.formatImageSize;return Object(b.jsxs)("div",{className:"card card-content border-0 bg-gray",children:[Object(b.jsx)("div",{className:"imgTshirt text-center nonSelectable",children:Object(b.jsx)("img",{className:"img responsive clothing",src:t.tshirtColor,alt:"TshirtImg"})}),Object(b.jsx)("div",{className:"shirtText text-center",children:Object(b.jsx)(m,{children:Object(b.jsx)("div",{className:"upperText draggable",children:Object(b.jsx)("p",{className:"nonSelectable",style:{fontSize:c,color:t.textColor1,fontFamily:t.fontFamily1},children:t.upperText})})})}),Object(b.jsx)("div",{className:"shirtPicture",children:Object(b.jsx)(m,{children:Object(b.jsx)("div",{className:"imgOnshirt draggable",children:Object(b.jsx)("img",{className:"border-0 nonSelectable",src:t.shirtImg,alt:"defaultImg",width:l})})})}),Object(b.jsx)("div",{className:"shirtText2 text-center",children:Object(b.jsx)(m,{children:Object(b.jsx)("div",{className:"lowerText draggable",children:Object(b.jsx)("p",{className:"nonSelectable",style:{fontSize:r,color:t.textColor2,fontFamily:t.fontFamily2},children:t.lowerText})})})})]})},x=c.p+"static/media/HoodieBlack.bebd8ce0.jpg",g=c.p+"static/media/grey.7a569e26.png",u=c.p+"static/media/greyPolo.3f116b31.jpg",C=c.p+"static/media/greyC.99f64644.png",O=c.p+"static/media/greyPoloC.735b654b.jpg",p=c.p+"static/media/HoodieBlackC.ada5ff6c.jpg",v=function(e){var t=e.handlecurrentClothing;return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{onClick:t,id:"tShirt",src:g,alt:C,className:"clothIcon"}),Object(b.jsx)("img",{onClick:t,id:"polo",src:u,alt:O,className:"clothIcon"}),Object(b.jsx)("img",{onClick:t,id:"hoodie",src:x,alt:p,className:"clothIcon"})]})},f=c.p+"static/media/black.a2945071.png",k=c.p+"static/media/white.7ab492ee.png",y=c.p+"static/media/blue.177880db.png",N=c.p+"static/media/red.bae3ed12.png",S=c.p+"static/media/HoodieWhiteC.3332f82b.png",T=c.p+"static/media/HoodieRed.ab4192d0.jpg",F=c.p+"static/media/blackPolo.8540fef3.jpg",w=c.p+"static/media/bluePolo.eb9d614f.jpg",z=function(e){var t=e.currentClothing,c=e.color;return"tShirt"===t?Object(b.jsxs)("div",{className:"tshirt-color",children:[Object(b.jsx)("div",{className:"circle",onClick:c,id:k,style:{backgroundColor:"white"}}),Object(b.jsx)("div",{className:"circle",onClick:c,id:C,style:{backgroundColor:"rgb(91, 91, 92)"}}),Object(b.jsx)("div",{className:"circle",onClick:c,id:f,style:{backgroundColor:"black"}}),Object(b.jsx)("div",{className:"circle",onClick:c,id:y,style:{backgroundColor:"rgb(88, 70, 247)"}}),Object(b.jsx)("div",{className:"circle",onClick:c,id:N,style:{backgroundColor:"rgb(247, 70, 70)"}})]}):"hoodie"===t?Object(b.jsxs)("div",{className:"tshirt-color",children:[Object(b.jsx)("div",{className:"circle",onClick:c,id:S,style:{backgroundColor:"white"}}),Object(b.jsx)("div",{className:"circle",onClick:c,id:p,style:{backgroundColor:"black"}}),Object(b.jsx)("div",{className:"circle",onClick:c,id:T,style:{backgroundColor:"rgb(247, 70, 70)"}})]}):"polo"===t?Object(b.jsxs)("div",{className:"tshirt-color",children:[Object(b.jsx)("div",{className:"circle",onClick:c,id:O,style:{backgroundColor:"rgb(91, 91, 92)"}}),Object(b.jsx)("div",{className:"circle",onClick:c,id:F,style:{backgroundColor:"black"}}),Object(b.jsx)("div",{className:"circle",onClick:c,id:w,style:{backgroundColor:"rgb(88, 70, 247)"}})]}):void 0},I=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{onChange:e.upperText,type:"text",className:"form-control form-control-sm mb-2",placeholder:"Text 1 (Draggable)"}),Object(b.jsxs)("select",{onChange:e.fontFamily1,className:"form-control form-control-sm mb-2",children:[Object(b.jsx)("option",{children:"Arial"}),Object(b.jsx)("option",{children:"Impact"}),Object(b.jsx)("option",{children:"Cambria"}),Object(b.jsx)("option",{children:"Georgia"}),Object(b.jsx)("option",{children:"Verdana"}),Object(b.jsx)("option",{children:"Helvetica"}),Object(b.jsx)("option",{children:"Tahoma"}),Object(b.jsx)("option",{children:"Trebuchet MS"}),Object(b.jsx)("option",{children:"Times New Roman"}),Object(b.jsx)("option",{children:"Garamond "})]}),Object(b.jsx)("input",{onChange:e.textSize1,type:"range",min:"12",max:"52"}),Object(b.jsxs)("div",{className:"tshirt-color",children:[Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor1,id:"White",style:{backgroundColor:"white"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor1,id:"Grey",style:{backgroundColor:"rgb(91, 91, 92)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor1,id:"Black",style:{backgroundColor:"black"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor1,id:"Blue",style:{backgroundColor:"rgb(88, 70, 247)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor1,id:"Purple",style:{backgroundColor:"rgb(204, 69, 163)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor1,id:"Red",style:{backgroundColor:"rgb(247, 70, 70)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor1,id:"OrangeRed",style:{backgroundColor:"rgb(250, 110, 59)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor1,id:"Yellow",style:{backgroundColor:"rgb(249, 252, 71)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor1,id:"Green",style:{backgroundColor:"rgb(88, 197, 60)"}})]})]})},L=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{onChange:e.lowerText,type:"text",className:"form-control form-control-sm mb-2",placeholder:"Text 2 (Draggable)"}),Object(b.jsxs)("select",{onChange:e.fontFamily2,className:"form-control form-control-sm mb-2",children:[Object(b.jsx)("option",{children:"Arial"}),Object(b.jsx)("option",{children:"Impact"}),Object(b.jsx)("option",{children:"Cambria"}),Object(b.jsx)("option",{children:"Georgia"}),Object(b.jsx)("option",{children:"Verdana"}),Object(b.jsx)("option",{children:"Helvetica"}),Object(b.jsx)("option",{children:"Tahoma"}),Object(b.jsx)("option",{children:"Trebuchet MS"}),Object(b.jsx)("option",{children:"Times New Roman"}),Object(b.jsx)("option",{children:"Garamond "})]}),Object(b.jsx)("input",{onChange:e.textSize2,type:"range",min:"12",max:"52"}),Object(b.jsxs)("div",{className:"tshirt-color pb-4",children:[Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor2,id:"White",style:{backgroundColor:"white"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor2,id:"Grey",style:{backgroundColor:"rgb(91, 91, 92)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor2,id:"Black",style:{backgroundColor:"black"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor2,id:"Blue",style:{backgroundColor:"rgb(88, 70, 247)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor2,id:"Purple",style:{backgroundColor:"rgb(204, 69, 163)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor2,id:"Red",style:{backgroundColor:"rgb(247, 70, 70)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor2,id:"OrangeRed",style:{backgroundColor:"rgb(250, 110, 59)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor2,id:"Yellow",style:{backgroundColor:"rgb(249, 252, 71)"}}),Object(b.jsx)("div",{className:"circle smallcirc",onClick:e.textColor2,id:"Green",style:{backgroundColor:"rgb(88, 197, 60)"}})]})]})},R=function(e){return Object(b.jsx)("span",{children:Object(b.jsxs)("div",{className:"form-group mb-1",children:[Object(b.jsx)("input",{onChange:e.urlChange,type:"text",className:"form-control-file mb-2",placeholder:"Transparent PNG recommended!"}),Object(b.jsx)("button",{onClick:e.shirtImg,className:"btn btn-primary mr-2",children:" Submit "}),Object(b.jsx)("input",{onChange:e.shirtSize,type:"range",min:"10",max:"300"})]})})},P="",G=function(e){Object(s.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={currentClothing:"tShirt",tshirtColor:f,upperText:"",textSize1:38,fontFamily1:"Arial",textColor1:"black",lowerText:"",textSize2:38,fontFamily2:"Arial",textColor2:"black",shirtImg:"https://taiff.next4dev.com.br/wp-content/uploads/2020/11/style-black-new.png",shirtSize:150,textColor:"black"},e.handleCurrentClothing=function(t){e.setState({currentClothing:t.target.id}),e.setState({tshirtColor:t.target.alt})},e.handleTshirtColor=function(t){e.setState({tshirtColor:t.target.id})},e.handleUpperText=function(t){e.setState({upperText:t.target.value})},e.handleTextSize1=function(t){e.setState({textSize1:t.target.value})},e.handleFontFamily1=function(t){e.setState({fontFamily1:t.target.value})},e.handleTextColor1=function(t){e.setState({textColor1:t.target.id})},e.handleLowerText=function(t){e.setState({lowerText:t.target.value})},e.handleTextSize2=function(t){e.setState({textSize2:t.target.value})},e.handleFontFamily2=function(t){e.setState({fontFamily2:t.target.value})},e.handleTextColor2=function(t){e.setState({textColor2:t.target.id})},e.handleURLchange=function(e){P=e.target.value},e.handleShirtImg=function(){e.setState({shirtImg:P})},e.handleImageSize=function(t){e.setState({shirtSize:t.target.value})},e.formatImageSize=function(){var t=e.state.shirtSize;return parseInt(t)},e.handleTextColor=function(t){e.setState({textColor:t.target.id})},e}return Object(n.a)(c,[{key:"formatText1",value:function(){var e=this.state.textSize1;return parseInt(e)}},{key:"formatText2",value:function(){var e=this.state.textSize2;return parseInt(e)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"container py-5",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-8",children:Object(b.jsx)(h,{display:this.state,textFormat1:this.formatText1(),textFormat2:this.formatText2(),formatImageSize:this.formatImageSize()})}),Object(b.jsx)("div",{className:"col-lg-4",children:Object(b.jsxs)("div",{className:"card bg-light container shadow",children:[Object(b.jsx)("h3",{className:"text-center",children:"Settings"}),Object(b.jsx)("hr",{}),Object(b.jsx)(v,{handlecurrentClothing:this.handleCurrentClothing}),Object(b.jsx)("hr",{}),Object(b.jsx)("h4",{children:"Change T-Shirt Color"}),Object(b.jsx)(z,{currentClothing:this.state.currentClothing,color:this.handleTshirtColor}),Object(b.jsx)("hr",{}),Object(b.jsx)("h4",{children:"Change Image (URL)"}),Object(b.jsx)(R,{urlChange:this.handleURLchange,shirtImg:this.handleShirtImg,shirtSize:this.handleImageSize}),Object(b.jsx)("hr",{}),Object(b.jsx)("h4",{children:"Change Text"}),Object(b.jsx)(I,{upperText:this.handleUpperText,textSize1:this.handleTextSize1,fontFamily1:this.handleFontFamily1,textColor1:this.handleTextColor1}),Object(b.jsx)("hr",{}),Object(b.jsx)(L,{lowerText:this.handleLowerText,textSize2:this.handleTextSize2,fontFamily2:this.handleFontFamily2,textColor2:this.handleTextColor2})]})})]})})}}]),c}(r.Component);var B=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(G,{})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,r=t.getFID,l=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),r(e),l(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),E()}},[[16,1,2]]]);
//# sourceMappingURL=main.d33579f1.chunk.js.map