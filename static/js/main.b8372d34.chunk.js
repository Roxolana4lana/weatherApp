(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),o=(a(14),a(1)),s=a(2),h=a(4),m=a(3),l=a(5),u="11494222-34bf811251776054a0d41e468",p=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(h.a)(this,Object(m.a)(e).call(this,t))).state={ci:"",loading:!1,city:a.props.ci,myError:""},a}return Object(l.a)(e,t),Object(s.a)(e,[{key:"componentDidUpdate",value:function(t){var e=this;if(this.props.ci!==t.ci){var a=this.props.ci;fetch("https://pixabay.com/api/?key=".concat(u,"&q=").concat(a,"&image_type=photo")).then(function(t){return t.json()}).then(function(t){return e.setState({ci:t.hits[0].largeImageURL,loading:!1,myError:""})}).catch(function(t){t&&(e.setState({myError:"https://cdn.pixabay.com/photo/2016/06/09/00/06/oops-1444975_960_720.jpg"}),console.error("Cannot fetch Weather Data from API, ",t))})}}},{key:"componentDidMount",value:function(){var t=this,e=this.state.city;fetch("https://pixabay.com/api/?key=".concat(u,"&q=").concat(e,"&image_type=photo")).then(function(t){return t.json()}).then(function(e){return t.setState({ci:e.hits[0].largeImageURL,loading:!1,myError:""})}).catch(function(e){e&&(t.setState({myError:"https://cdn.pixabay.com/photo/2016/06/09/00/06/oops-1444975_960_720.jpg"}),console.error("Cannot fetch Weather Data from API, ",e))})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.myError?r.a.createElement("img",{className:"myimg",src:this.state.myError,alt:"city"}):r.a.createElement("img",{className:"myimg",src:this.state.ci,alt:"city"}))}}]),e}(n.Component),y=function(t){function e(){return Object(o.a)(this,e),Object(h.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Temperature: ",this.props.temperatura," \u2103"),r.a.createElement("h2",null,"Speed of the wind: ",this.props.wind," km/hour"),r.a.createElement("h2",null,"You may describe the weather as: ",this.props.weather))}}]),e}(n.Component),d=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(h.a)(this,Object(m.a)(e).call(this,t))).state={temp:"",weather:"",wind:"",isLoading:!0,city:a.props.city,myError:""},a}return Object(l.a)(e,t),Object(s.a)(e,[{key:"componentDidUpdate",value:function(t){var e=this;if(this.props.city!==t.city){var a=this.props.city;fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat("17a9c7162404f715183af1c63085339b","&units=metric")).then(function(t){return t.json()}).then(function(t){return e.setState({temp:t.main.temp,weather:t.weather[0].description,isLoading:!1,wind:t.wind.speed,myError:""})}).catch(function(t){t&&(e.setState({myError:"Type the correct name of the city in English!!!!!!!"}),console.error("Cannot fetch Weather Data from API, ",t))})}}},{key:"componentDidMount",value:function(){var t=this,e=this.state.city;fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("17a9c7162404f715183af1c63085339b","&units=metric")).then(function(t){return t.json()}).then(function(e){return t.setState({temp:e.main.temp,weather:e.weather[0].description,isLoading:!1,myError:"",wind:e.wind.speed})}).catch(function(e){e&&(t.setState({myError:"Type the correct name of the city in English!!!!!!!"}),console.error("Cannot fetch Weather Data from API, ",e))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"weather_info"},this.state.isLoading&&r.a.createElement("h1",null,"Loading...Write the correct name of the city in English :)"),this.state.myError?r.a.createElement("h1",null,this.state.myError):r.a.createElement("div",null,r.a.createElement("h1",null," The city is ",this.props.city),r.a.createElement(y,{temperatura:this.state.temp,wind:this.state.wind,weather:this.state.weather})))}}]),e}(n.Component),f=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(h.a)(this,Object(m.a)(e).call(this))).getCity=function(e){t.setState({city:e.target.value})},t.getData=function(e){e.preventDefault();/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(t.state.city)?t.setState({data:t.state.city,city:""}):console.log("type the name of the city")},t.state={city:"",data:"",loading:!1},t}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=""!==this.state.data?r.a.createElement("div",{className:"container"},r.a.createElement(d,{className:"weather_info",city:this.state.data}),r.a.createElement(p,{className:"image_info",ci:this.state.data})):r.a.createElement("div",{className:"instruction"}," !!! Type the name of the city in English");return r.a.createElement("div",{className:"main_form "},r.a.createElement("form",{onSubmit:this.getData},r.a.createElement("input",{className:"myInput",type:"text",value:this.state.city,name:"city",onChange:this.getCity}),r.a.createElement("button",{className:"myBtn",type:"submit"},"Submit"),r.a.createElement("div",{className:"try"})),t)}}]),e}(n.Component),E=(a(16),function(t){function e(){return Object(o.a)(this,e),Object(h.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"main_container"},r.a.createElement("div",{className:"myBorder"}),r.a.createElement("div",{className:"introWords"},r.a.createElement("h1",null,"Hello :) ",r.a.createElement("span",null,"Welcome to my weather page!!!!"))),r.a.createElement(f,null))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.b8372d34.chunk.js.map