import{o as x,n as A,r as T,a as z,b as I,m as b,c as f,d as u,e as c,w as o,u as _,f as d,t as g,g as k,F as q,U as w,h as i,i as C,A as L}from"./vendor.c8b63bf4.js";const j=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&p(a)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}};j();const O=["xingorg1","ce-bu-zhun-2","ban-cheng-zhi","gu-yao-c","adah-r","inspiring-sinoussi1ht","zhao-jia-d","bei-xi-zi-du","zou-chang-qing","boring-karektx","ping-zhong-zi","MyEnglandGirl","will-6f","fuyoujie2020"],F=[{dataIndex:"rank",className:"user-rank",key:"rank",slots:{title:"customTitle",customRender:"rank"}},{title:"\u961F\u5458",className:"user-avatar",dataIndex:"userAvatar",key:"userAvatar",slots:{customRender:"userAvatar"}},{title:"LeetCode\u4E3B\u9875",dataIndex:"userSlug",key:"userSlug",slots:{customRender:"userSlug"}},{title:"\u9898\u76EE\u901A\u8FC7\u603B\u6570",dataIndex:"acTotal"},{title:"\u8FC7\u53BB\u4E00\u5E74\u5185\u603B\u63D0\u4EA4\u6570",dataIndex:"totalSubmissions"},{title:"\u901A\u8FC7\u7684\u63D0\u4EA4\u6570",dataIndex:"acSubmissions"}];const B=i(" \u6392\u540D "),E={style:{"margin-left":"10px"}},M=i("\u{1F32A} \u7B97\u6CD5\u5C0F\u5206\u961F\u5237\u9898\u6392\u884C\u699C"),R=d("a",{href:"https://gitee.com/xingorg1/algorithmic-clock-out/issues",target:"_blank",style:{float:"left"}},"[ \u6253\u5361\u5730\u5740 ]",-1),V=i(" \u5404\u4F4D\u53EA\u7BA1\u52A0\u6CB9~ \u6211\u4EEC\u76F8\u7EA6\u9876\u5CF0\u3002\u{1F4AA}\u{1F4AA}\u{1F4AA} "),$={setup(S){x(()=>{localStorage.getItem("qdyj-notice")||A.open({message:"\u7B97\u6CD5\u5C0F\u5206\u961F\u8FDB\u9636\u6253\u5361\u4EA4\u6D41\u7FA4",duration:null,description:"\u529B\u6C42\u505A\u4E13\u6CE8\u7B97\u6CD5\u7684\u9AD8\u8D28\u91CF\u6210\u957F\u793E\u7FA4\uFF0C\u60F3\u52A0\u7FA4\u7684\u540C\u5B66\u53EF\u4EE5\u5728\u516C\u4F17\u53F7\u300C\u524D\u7AEF\u5370\u8BB0\u300D\u540E\u53F0\u56DE\u590D\u5173\u952E\u5B57\u300C\u7B97\u6CD5\u300D\u3002\u5982\u672A\u4E0B\u5B9A\u51B3\u5FC3\u5B66\u7B97\u6CD5\u8BF7\u4E0D\u8981\u76F2\u76EE\u52A0\u7FA4\u3002",onClose:()=>{localStorage.setItem("qdyj-notice",!0)}})});const l=T([]),m=z(!0);let p=O.map(e=>I.post("/leetcode/graphql",{operationName:"userPublicProfile",query:`query userPublicProfile($userSlug: String!) {
  userProfilePublicProfile(userSlug: $userSlug) {
    username
    profile {
      userSlug
      realName
      userAvatar
      __typename
    }
    submissionProgress {
      totalSubmissions
      acSubmissions
      acTotal
      __typename
    }
    __typename
  }
}
`,variables:{userSlug:e},userSlug:e}));return Promise.all(p).then(e=>{console.log(e),b.success("\u9762\u5BF9\u75BE\u98CE\u5427\uFF01\u{1F60F}\u{1F60F}\u{1F60F}"),e&&e.length>0&&(e.forEach((t,a)=>{try{let n=t.data.data.userProfilePublicProfile;const{realName:y,userAvatar:h,userSlug:s}=n.profile,{acTotal:r,totalSubmissions:N,acSubmissions:P}=n.submissionProgress;l.push({key:a+1+"",rank:1,realName:y,userAvatar:h,userSlug:s,acTotal:r,totalSubmissions:N,acSubmissions:P})}catch(n){console.log(n),b.error("\u{1F62F}\u963F\u6B27! \u6709\u4EBA\u8D26\u53F7404\u4E86\u{1F648}~ \u5FEB\u53BB\u544A\u8BC9\u77F3\u5934\u59D0\uFF01")}}),l.sort((t,a)=>-t.acTotal+a.acTotal),l.map((t,a)=>t.rank=a+1))}).catch(e=>{console.log(e),b.error("\u{1F62F}\u963F\u6B27! leetcode\u4E0D\u80AF\u7ED9\u6570\u636E\u{1F648}~ \u5FEB\u53BB\u544A\u8BC9\u77F3\u5934\u59D0\uFF01")}).finally(()=>{m.value=!1}),(e,t)=>{const a=f("a-avatar"),n=f("a-tag"),y=f("a-typography-link"),h=f("a-table");return u(),c(h,{columns:_(F),"data-source":_(l),bordered:"",loading:m.value,pagination:{pageSize:20}},{name:o(({text:s})=>[d("a",null,g(s),1)]),customTitle:o(()=>[d("span",null,[k(_(q),{twoToneColor:"#F40"}),B])]),userAvatar:o(({text:s,record:r})=>[d("span",null,[s?(u(),c(a,{key:0,size:"large",src:s},null,8,["src"])):(u(),c(a,{key:1,size:"large",style:{"background-color":"#87d068"}},{icon:o(()=>[k(_(w))]),_:1}))]),d("span",E,[r.rank===1?(u(),c(n,{key:0,color:"red"},{default:o(()=>[i(g(r.realName),1)]),_:2},1024)):r.rank===2?(u(),c(n,{key:1,color:"orange"},{default:o(()=>[i(g(r.realName),1)]),_:2},1024)):r.rank===3?(u(),c(n,{key:2,color:"green"},{default:o(()=>[i(g(r.realName),1)]),_:2},1024)):(u(),c(n,{key:3,color:"default"},{default:o(()=>[i(g(r.realName),1)]),_:2},1024))])]),userSlug:o(({text:s})=>[d("span",null,[k(y,{href:`https://leetcode-cn.com/u/${s}/`,target:"_blank"},{default:o(()=>[i(g(s),1)]),_:2},1032,["href"])])]),title:o(()=>[M]),footer:o(()=>[R,V]),_:1},8,["columns","data-source","loading"])}}};const v=C($);v.config.productionTip=!1;v.use(L);v.mount("#app");