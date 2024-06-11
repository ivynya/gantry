var E=Object.defineProperty;var C=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{r as m,n as y,f as w,h as j,i as S,j as B,k as b,l as I,m as L,p as N,q,v as P,w as T}from"./scheduler.aB-ZLtKC.js";let $=!1;function D(){$=!0}function H(){$=!1}function M(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function O(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const l=t[r].claim_order,o=(s>0&&t[n[s]].claim_order<=l?s+1:M(1,s,_=>t[n[_]].claim_order,l))-1;i[r]=n[o]+1;const c=o+1;n[c]=r,s=Math.max(c,s)}const f=[],a=[];let u=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(f.push(t[r-1]);u>=r;u--)a.push(t[u]);u--}for(;u>=0;u--)a.push(t[u]);f.reverse(),a.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<a.length;r++){for(;l<f.length&&a[r].claim_order>=f[l].claim_order;)l++;const o=l<f.length?f[l]:null;e.insertBefore(a[r],o)}}function z(e,t){if($){for(O(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){$&&!n?z(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function F(e){e.parentNode&&e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function R(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function ne(){return x(" ")}function ie(){return x("")}function re(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function se(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return e.dataset.svelteH}function U(e){return Array.from(e.childNodes)}function V(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,s=!1){V(e);const f=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const u=e[a];if(t(u)){const r=n(u);return r===void 0?e.splice(a,1):e[a]=r,s||(e.claim_info.last_index=a),u}}for(let a=e.claim_info.last_index-1;a>=0;a--){const u=e[a];if(t(u)){const r=n(u);return r===void 0?e.splice(a,1):e[a]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,u}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function W(e,t,n,i){return A(e,s=>s.nodeName===t,s=>{const f=[];for(let a=0;a<s.attributes.length;a++){const u=s.attributes[a];n[u.name]||f.push(u.name)}f.forEach(a=>s.removeAttribute(a))},()=>i(t))}function ae(e,t,n){return W(e,t,n,R)}function G(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ue(e){return G(e," ")}function fe(e,t){t=""+t,e.data!==t&&(e.data=t)}function ce(e,t){e.value=t??""}function oe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function de(e,t,n){for(let i=0;i<e.options.length;i+=1){const s=e.options[i];if(s.__value===t){s.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function _e(e){const t=e.querySelector(":checked");return t&&t.__value}function he(e,t,n){e.classList.toggle(t,!!n)}function me(e,t){return new e(t)}const h=new Set;let d;function $e(){d={r:0,c:[],p:d}}function pe(){d.r||m(d.c),d=d.p}function J(e,t){e&&e.i&&(h.delete(e),e.i(t))}function ye(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),d.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function xe(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function ge(e){e&&e.c()}function ve(e,t){e&&e.l(t)}function K(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),b(()=>{const f=e.$$.on_mount.map(q).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...f):m(f),e.$$.on_mount=[]}),s.forEach(b)}function Q(e,t){const n=e.$$;n.fragment!==null&&(I(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(P.push(e),T(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(e,t,n,i,s,f,a=null,u=[-1]){const r=L;N(e);const l=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:s,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:w(),dirty:u,skip_bound:!1,root:t.target||r.$$.root};a&&a(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(c,_,...g)=>{const v=g.length?g[0]:_;return l.ctx&&s(l.ctx[c],l.ctx[c]=v)&&(!l.skip_bound&&l.bound[c]&&l.bound[c](v),o&&X(e,c)),_}):[],l.update(),o=!0,m(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){D();const c=U(t.target);l.fragment&&l.fragment.l(c),c.forEach(F)}else l.fragment&&l.fragment.c();t.intro&&J(e.$$.fragment),K(e,t.target,t.anchor),H(),j()}N(r)}class be{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Q(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{le as A,ce as B,de as C,te as D,_e as E,xe as F,be as S,ye as a,x as b,ae as c,U as d,R as e,G as f,F as g,ue as h,we as i,ee as j,z as k,fe as l,ie as m,pe as n,se as o,oe as p,$e as q,me as r,ne as s,J as t,ge as u,ve as v,K as w,Q as x,he as y,re as z};
