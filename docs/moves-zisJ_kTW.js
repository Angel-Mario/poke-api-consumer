import{j as e,q as b,s as x,w as h,x as j,y as g,r as c,z as w,A as u,V as _,v as N}from"./index-Be0Pxp4S.js";const y=({move:s})=>{var l,t,r;return s.id&&e.jsx("div",{className:"relative flex h-20 w-44 select-none flex-row overflow-hidden rounded-md border border-slate-200 bg-gray-50 shadow-md shadow-slate-200 mlarge:w-48 2xl:w-56",children:e.jsxs("div",{className:"grid w-fillAvailable grid-cols-8 gap-x-1",children:[e.jsxs("div",{className:"col-span-5 flex flex-col ps-1 pt-1",children:[e.jsx("h1",{className:"line-clamp-1 text-base font-bold capitalize",children:s.name}),((l=s.pokemon_v2_moveeffect)==null?void 0:l.pokemon_v2_moveeffecteffecttexts.length)==1&&((t=s.pokemon_v2_moveeffect)==null?void 0:t.pokemon_v2_moveeffecteffecttexts[0].short_effect)&&e.jsx("h1",{className:"line-clamp-3 text-justify text-sm font-semibold leading-4",children:(r=s.pokemon_v2_moveeffect)==null?void 0:r.pokemon_v2_moveeffecteffecttexts[0].short_effect.replace("$effect_chance%","")})]}),e.jsxs("div",{className:"col-span-3 flex flex-col content-center gap-x-1",children:[e.jsx("div",{className:"absolute h-full w-full",style:{backgroundColor:b[x[s.type_id]]}}),e.jsxs("div",{className:"z-10 mx-[2px] mt-1 flex flex-col justify-center text-xs font-semibold text-gray-100",children:[e.jsx("h1",{className:"rounded-lg border py-[1px] text-center font-semibold capitalize",children:x[s.type_id]}),e.jsxs("h1",{className:"mt-2 text-center",children:["PW:",s.power?s.power:"~"]}),e.jsxs("h1",{className:"text-center",children:["PP:",s.pp]})]})]})]})},`${s.id}`)},M=()=>{const s=h(o=>o.moves),{filterText:l,ver:t}=j(),{isSmallDevice:r,isSemiSmallDevice:i,isSemiMediumDevice:a,isMediumDevice:n,isLargeDevice:f,isExtraLargeDevice:d}=g({zeroBP:375,firstBP:420,secondBP:565,thirdBP:639,fourBP:770,fiveBP:1210}),v=c.useMemo(()=>w(s,u(+t+1),l,P(r,i,a,n,f,d)),[s,l,u(+t+1),r,i,a,n,f,d]),p=o=>o?e.jsx("div",{className:"mb-2 mt-1 flex w-fillAvailable flex-row flex-wrap justify-center gap-4",children:o.map(m=>e.jsx(y,{move:m},`ListItem${m.id}`))}):e.jsx(e.Fragment,{children:"No encontro"});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mb-1 mt-1 h-full w-fillAvailable rounded-xl bg-white pr-0 sm:h-fillAvailable sm:ps-3",children:e.jsx(_,{items:v,columns:1,itemSize:80,showSpacer:!0,numToleratedItems:1,itemTemplate:p,className:"border-1 surface-border border-round h-fillAvailable w-fillAvailable",style:{height:r||i?"98%":"99vh"}})})})};function P(s,l,t,r,i,a){return a?3:i?2:r||l?3:t?2:s?1:4}function L(){const s=h(r=>r.setList),l=c.useRef(!0),t=N();return c.useEffect(()=>{t&&l&&(s(t),l.current=!1)},[t]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"h-full w-fillAvailable sm:h-fillAvailable sm:pl-1",children:t&&e.jsx(M,{})})})}export{L as default};