(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{20:function(e,t,a){e.exports=a(47)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),i=a.n(s),o=a(3),c=a.n(o),m=a(14),l=a(15),u=a(16),d=a(19),v=a(18),g=a(17),p=a.n(g),y=a(2),_=a.n(y);a(45);function f(e){e.id;var t=e.title,a=e.year,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h4",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,t){return r.a.createElement("li",{className:"genres__genre",key:t},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,140),"...")))}f.prototype={id:_.a.number.isRequired,title:_.a.string.isRequired,year:_.a.number.isRequired,summary:_.a.string.isRequired,poster:_.a.string.isRequired,genres:_.a.arrayOf(_.a.string).isRequired};var E=f,h=(a(46),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return console.log(e),r.a.createElement(E,{key:e.id,id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9046d182.chunk.js.map