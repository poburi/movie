(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{20:function(e,t,n){e.exports=n(45)},45:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(13),s=n.n(i),o=n(3),u=n.n(o),c=n(14),m=n(15),l=n(16),d=n(19),v=n(18),p=n(17),y=n.n(p),g=n(2),f=n.n(g);function h(e){e.id;var t=e.title;e.year,e.summary,e.poster;return a.a.createElement("h4",null,t)}h.prototype={id:f.a.number.isRequired,title:f.a.string.isRequired,year:f.a.number.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired};var b=h,j=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(c.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,r=n.data.data.movies,e.setState({movies:r,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return a.a.createElement("div",null,t?"Loading...":n.map((function(e){return console.log(e),a.a.createElement(b,{id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image})})))}}]),n}(a.a.Component);s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.206ab870.chunk.js.map