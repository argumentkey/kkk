function report(e){var e=e||{},r={pro:"huya_web",pas:YA.cookie.get("username")||"",yyuid:YA.cookie.get("yyuid")||"",pageType:"root",rso:"",rso_desc:"",eid:"",eid_desc:""};for(var o in e)r[o]=e[o];window.ya=new YA(r.pro,r.pas,{pageType:r.pageType,yyuid:r.yyuid}),ya.reportProductStartUp({pro:r.pro,rso:r.rso,rso_desc:r.rso_desc}),ya.startProductHeartbeat({pro:r.pro,rso:r.rso,rso_desc:r.rso_desc}),ya.reportProductEvent({eid:r.eid,eid_desc:r.eid_desc})}function parseQueryString(e){var r,o={};if(-1!=(r=e.indexOf("?")))for(var s=e.substring(r+1,e.length),i=s.split("&"),t=[],d=0,a=i.length;a>d;d++)t=i[d].split("="),o[t[0]]=t[1];return o}report({rso:parseQueryString(location.href).rso||"",rso_desc:parseQueryString(location.href).rso_desc||"",eid:"pageview/icenter",eid_desc:"pageview/个人中心",pro:"huya_web"});