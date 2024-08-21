import{r as t,a as v,j as e,R as F}from"./index-tczcSmrJ.js";import{I as V,_ as A}from"./index-CrK4NdKt.js";import{B as I,a as M,b as R,c as k,d as B,e as H}from"./index-tM2hi5UH.js";import{Q as O,B as L}from"./ReactToastify-BfB5xRnB.js";const U="https://AlexSanchezrl.github.io/health_and_life/assets/icon2-Ddm7iNsf.png",$=({pill:s,handleShowEdit:i})=>{const{updatePill:r}=t.useContext(v),{name:c,brand:m,quantityAssigned:n,quantityLeft:h,dosage:o,eachTime:f,sideEffects:x,pillType:d}=s,[g,w]=t.useState(c??""),[b,S]=t.useState(m??""),[p,C]=t.useState(d??""),[j,P]=t.useState(x??""),[y,N]=t.useState(n??0),[a,E]=t.useState(h??0),[T,q]=t.useState(o??0),[D,Q]=t.useState(f??0),u="text-lg font-bold",Z=async l=>{l.preventDefault();try{await r(g,b,y,a,p,T,D,j,(s==null?void 0:s._id)??""),i()}catch(z){console.log(z)}},_=["Analgésicos","Antiinflamatorios","Antibióticos","Antidepresivos","Antihipertensivos","Antihistamínicos","Antidiabéticos","Anticoagulantes","Antivirales","Broncodilatadores","Diuréticos","Inmunosupresores","Antipsicóticos","Estatinas","Antiepilépticos"].filter(l=>l!==d?l:null).map(l=>e.jsx("option",{value:l,children:l}));return e.jsxs("form",{className:"space-y-5",onSubmit:Z,children:[e.jsxs("section",{className:"flex",children:[e.jsxs("div",{className:"",children:[e.jsx("label",{className:u,children:"Pill's name"}),e.jsx("input",{type:"text",className:"w-40 outline-none border px-2 py-1",onChange:l=>w(l.target.value),defaultValue:g})]}),e.jsxs("div",{children:[e.jsx("label",{className:u,children:"Pill's brand"}),e.jsx("input",{type:"text",className:"w-40 outline-none border px-2 py-1",onChange:l=>S(l.target.value),defaultValue:b})]})]}),e.jsxs("section",{className:"flex flex-col",children:[e.jsx("label",{className:u,children:"Pill type"}),e.jsxs("select",{onChange:l=>C(l.target.value),className:"w-full outline-none border px-2 py-1",children:[e.jsx("option",{defaultValue:p,children:p}),_]})]}),e.jsxs("section",{className:"flex w-fit",children:[e.jsxs("div",{children:[e.jsx("label",{className:u,children:"Quantity assigned"}),e.jsx("input",{type:"number",className:"w-40 outline-none border px-2 py-1",onChange:l=>N(Number(l.target.value)),defaultValue:y})]}),e.jsxs("div",{children:[e.jsx("label",{className:u,children:"Quantity left"}),e.jsx("input",{type:"number",className:"w-40 outline-none border px-2 py-1",onChange:l=>E(Number(l.target.value)),defaultValue:a})]})]}),e.jsxs("section",{className:"flex",children:[e.jsxs("div",{children:[e.jsx("label",{className:u,children:"Dosage"}),e.jsx("input",{type:"number",className:"w-40 outline-none border px-2 py-1",onChange:l=>q(Number(l.target.value)),defaultValue:T})]}),e.jsxs("div",{children:[e.jsx("label",{className:u,children:"Time"}),e.jsx("input",{type:"number",className:"w-40 outline-none border px-2 py-1",onChange:l=>Q(Number(l.target.value)),defaultValue:D})]})]}),e.jsxs("section",{className:"flex flex-col",children:[e.jsx("label",{className:u,children:"Side effects"}),e.jsx("textarea",{className:"outline-none border px-2 py-1",onChange:l=>P(l.target.value),children:j})]}),e.jsx("section",{children:e.jsx("input",{type:"submit",className:"border border-black font-bold text-xl px-2 py-1 hover:bg-blue-900 rounded-xl hover:text-white hover:border-transparent transition-colors duration-300",value:"Update"})})]})},Y=({pill:s})=>{const i=new Date,{deletePill:r}=t.useContext(v),[c,m]=t.useState(!1),[n,h]=t.useState(!1),[o,f]=t.useState(!1);if(!s)return null;const x=async()=>{try{if(!(s!=null&&s._id))return A.error("Sorry, there was an error");await r(s==null?void 0:s._id),A.success("Successfully deleted!")}catch(g){A.error("Delete failed. Please try again."),console.error("Error storing pill:",g)}},d=()=>{f(!o)};return e.jsxs("div",{className:`flex flex-col justify-center rounded-xl border border-black p-2 lg:p-5 w-[350px] lg:w-[400px] space-y-4 h-fit\r
                    transform transition-transform duration-300 hover:scale-105`,children:[e.jsx(V,{position:"top-center",reverseOrder:!1}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Pills details"}),e.jsxs("div",{className:"flex items-center gap-x-5 text-lg",children:[e.jsxs("button",{onClick:d,children:[" ",o?e.jsx(I,{}):e.jsx(M,{})]}),e.jsx("button",{onClick:x,children:e.jsx(R,{})})]})]}),o?e.jsx("section",{children:e.jsx($,{handleShowEdit:d,pill:s})}):e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"flex flex-col rounded-xl bg-gray-200 p-4 space-y-4",children:[e.jsxs("div",{className:"flex justify-between ",children:[e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("span",{className:"h-10 w-10 rounded-full p-2 text-lg font-bold bg-white",children:"&"}),e.jsxs("div",{className:"flex flex-col ml-2",children:[e.jsx("h4",{className:"font-semibold",children:"Name"}),e.jsx("span",{className:"font-bold text-blue-900",children:s==null?void 0:s.name})]})]}),e.jsxs("span",{className:"text-lg font-bold",children:[i.getMonth()," - ",i.getDay()]})]}),e.jsxs("div",{className:"border-t border-gray-400",children:[e.jsxs("h4",{className:"font-bold mt-2",children:["Brand: ",e.jsx("span",{className:"font-semibold text-blue-900",children:s==null?void 0:s.brand})]}),e.jsxs("h4",{className:"font-bold",children:["Quantity assigned: ",e.jsx("span",{className:"font-semibold text-blue-900",children:s==null?void 0:s.quantityAssigned})]}),e.jsxs("h4",{className:"font-bold",children:["Total left: ",e.jsx("span",{className:"font-semibold text-blue-900",children:s==null?void 0:s.quantityLeft})]})]}),e.jsx("span",{className:"text-sm text-white font-bold px-2 py-1 rounded-xl bg-red-400 w-fit",children:s==null?void 0:s.pillType})]}),e.jsxs("button",{onClick:()=>m(!c),className:"text-start text-lg flex items-center gap-x-2 font-bold",children:["Instructions ",c?e.jsx(B,{}):e.jsx(k,{})]}),e.jsx("section",{className:`transition-container ${c?"show":"hide"}`,children:e.jsx("section",{className:"flex flex-col rounded-xl bg-gray-200 p-4 space-y-4",children:e.jsxs("div",{children:[e.jsxs("h4",{className:"font-bold",children:["Dosis: ",e.jsx("span",{className:"font-semibold text-blue-900",children:s==null?void 0:s.dosage})]}),e.jsxs("h4",{className:"font-bold",children:["Each ",e.jsx("span",{className:"font-semibold text-blue-900",children:s==null?void 0:s.eachTime})," hour"]})]})})}),e.jsxs("button",{onClick:()=>h(!n),className:"text-start text-lg flex items-center gap-x-2 font-bold",children:["Side effects ",n?e.jsx(B,{}):e.jsx(k,{})]}),e.jsx("section",{className:`transition-container ${n?"show":"hide"}`,children:e.jsx("div",{className:"flex flex-col rounded-xl bg-gray-200 p-4",children:e.jsx("p",{className:"text-lg text-justify",children:s==null?void 0:s.sideEffects})})})]})]})},W="https://AlexSanchezrl.github.io/health_and_life/assets/icon6-Bm-zYzTI.png",X=({id:s,handleShow:i})=>{const{storePill:r}=t.useContext(v),[c,m]=t.useState(""),[n,h]=t.useState(""),[o,f]=t.useState(0),[x,d]=t.useState(""),[g,w]=t.useState(0),[b,S]=t.useState(0),[p,C]=t.useState(""),j=async a=>{a.preventDefault();try{await r(c,n,o,o,x,g,b,p,s??""),L.success("Successfully stored!",{autoClose:1e3}),setTimeout(()=>{i()},1e3)}catch(E){console.error("Error storing pill:",E),L.error("Store failed. Please try again.")}};t.useEffect(()=>(document.body.classList.add("overflow-hidden"),()=>{document.body.classList.remove("overflow-hidden")}),[]);const y=["Analgésicos","Antiinflamatorios","Antibióticos","Antidepresivos","Antihipertensivos","Antihistamínicos","Antidiabéticos","Anticoagulantes","Antivirales","Broncodilatadores","Diuréticos","Inmunosupresores","Antipsicóticos","Estatinas","Antiepilépticos"].map(a=>e.jsx("option",{value:a,children:a})),N=document.querySelector(".modal-container");return N?F.createPortal(e.jsxs("div",{className:"fixed container mx-auto inset-0",children:[e.jsx(O,{}),e.jsx("div",{className:`fixed inset-0 lg:inset-custom-80 bg-white h-fit shadow-lg shadow-black \r
                rounded-none lg:rounded-2xl mt-28 lg:-mt-28 slide-up-animation`,children:e.jsx("form",{onSubmit:j,children:e.jsxs("section",{className:"flex items-start lg:items-center gap-x-2",children:[e.jsxs("div",{className:"flex flex-col rounded-none lg:rounded-l-2xl bg-blue-800 p-1 lg:p-10 basis-0 lg:basis-8/12 text-white",children:[e.jsx("h1",{className:"text-2xl font-bold mb-5",children:"Insert a new pill"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-md lg:text-lg font-bold",children:"Pill's name"}),e.jsx("input",{onChange:a=>m(a.target.value),placeholder:"Enter the pill's name...",className:"w-full outline-none text-medium py-2 px-4 border-2 border-gray-950 input-invalid",type:"text",required:!0})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-md lg:text-lg font-bold",children:"Pill's brand"}),e.jsx("input",{onChange:a=>h(a.target.value),placeholder:"Enter the pill's brand...",className:"w-full outline-none text-medium py-2 px-4 border-2 border-gray-950 input-invalid",type:"text",required:!0})]}),e.jsxs("div",{className:"flex flex-col mb-5",children:[e.jsx("label",{className:"text-md lg:text-lg font-bold",children:"Pill type"}),e.jsx("select",{onChange:a=>d(a.target.value),className:"w-full outline-none text-medium py-2 px-4 border-2 border-gray-950 input-invalid",children:y})]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-md lg:text-lg font-bold",children:"Side effects"}),e.jsx("textarea",{onChange:a=>C(a.target.value),placeholder:"Enter the side effects...",required:!0,className:"w-full outline-none text-medium py-2 px-4 border-2 border-gray-950 input-invalid"})]}),e.jsxs("div",{className:"flex gap-x-10 p-5",children:[e.jsx("button",{type:"submit",className:"bg-white text-lg lg:text-xl text-black cursor-pointer border-2 border-black rounded-xl p-2 font-bold hover:text-white hover:bg-black transition-colors duration-300 ",children:"Store"}),e.jsx("button",{onClick:i,type:"button",className:"bg-red-500 text-lg lg:text-xl rounded-xl p-2 font-bold text-white cursor-pointer",children:"Cancel"})]})]}),e.jsxs("div",{className:"flex flex-col mx-auto items-center gap-y-2 p-1",children:[e.jsx("div",{children:e.jsx("img",{className:"w-[150px] lg:w-[200px]",src:W,alt:"Company Logo"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-md lg:text-lg font-bold",children:"Quantity assigned"}),e.jsx("input",{onChange:a=>f(Number(a.target.value)),placeholder:"Enter the quantity assigned...",className:"w-full outline-none text-medium py-2 px-4 border-2 border-gray-950 input-invalid",type:"number",min:2,value:o})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-md lg:text-lg font-bold",children:"Dosage"}),e.jsx("input",{onChange:a=>w(Number(a.target.value)),placeholder:"Enter the dosage...",className:"w-full outline-none text-medium py-2 px-4 border-2 border-gray-950 input-invalid",type:"number",min:1,value:g})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("label",{className:"text-md lg:text-lg font-bold",children:["Time ",e.jsx("span",{className:"font-normal",children:"(Every how many hours?)"})]}),e.jsx("input",{onChange:a=>S(Number(a.target.value)),placeholder:"Enter the time...",className:"w-full text-black outline-none text-medium py-2 px-4 border-2 border-gray-950 input-invalid",type:"number",min:2,value:b})]})]})]})})})]}),N):(console.error("Modal container not found"),null)},G="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='450'%20height='450'%20viewBox='0%200%20537.64%20563.26'%3e%3cpath%20id='uuid-fb6bba6d-324d-4625-a98c-3d990729dcd8-114-164-127-708'%20d='m294.36,308.7c1.69,8.48,7.72,13.98,13.47,12.28,5.75-1.7,9.04-9.96,7.35-18.44-.63-3.4-2.11-6.52-4.32-9.07l-7.63-35.8-17.84,5.88,9.42,34.67c-1.01,3.51-1.16,7.11-.43,10.48,0,0,0,0,0,0Z'%20fill='%23f8a8ab'/%3e%3crect%20x='254.14'%20y='514.38'%20width='20.94'%20height='29.71'%20transform='translate(529.23%201058.47)%20rotate(-180)'%20fill='%23f8a8ab'/%3e%3cpath%20d='m272.77,561.11c-3.58.32-21.5,1.74-22.4-2.37-.82-3.77.39-7.71.56-8.25,1.72-17.14,2.36-17.33,2.75-17.44.61-.18,2.39.67,5.28,2.53l.18.12.04.21c.05.27,1.33,6.56,7.4,5.59,4.16-.66,5.51-1.58,5.94-2.03-.35-.16-.79-.44-1.1-.92-.45-.7-.53-1.6-.23-2.68.78-2.85,3.12-7.06,3.22-7.23l.27-.48,23.8,16.06,14.7,4.2c1.11.32,2,1.11,2.45,2.17h0c.62,1.48.24,3.2-.96,4.28-2.67,2.4-7.97,6.51-13.54,7.02-1.48.14-3.44.19-5.64.19-9.19,0-22.61-.95-22.71-.97Z'%20fill='%232f2e43'/%3e%3crect%20x='196.13'%20y='514.38'%20width='20.94'%20height='29.71'%20transform='translate(413.21%201058.47)%20rotate(-180)'%20fill='%23f8a8ab'/%3e%3cpath%20d='m214.76,561.11c-3.58.32-21.5,1.74-22.4-2.37-.82-3.77.39-7.71.56-8.25,1.72-17.14,2.36-17.33,2.75-17.44.61-.18,2.39.67,5.28,2.53l.18.12.04.21c.05.27,1.33,6.56,7.4,5.59,4.16-.66,5.51-1.58,5.94-2.03-.35-.16-.79-.44-1.1-.92-.45-.7-.53-1.6-.23-2.68.78-2.85,3.12-7.06,3.22-7.23l.27-.48,23.8,16.06,14.7,4.2c1.11.32,2,1.11,2.45,2.17h0c.62,1.48.24,3.2-.96,4.28-2.67,2.4-7.97,6.51-13.54,7.02-1.48.14-3.44.19-5.64.19-9.19,0-22.61-.95-22.71-.97Z'%20fill='%232f2e43'/%3e%3cpolygon%20points='213.11%20100.28%20245.58%20110.95%20245.58%2064.21%20216.12%2064.21%20213.11%20100.28'%20fill='%23f8a8ab'/%3e%3ccircle%20cx='241.56'%20cy='44.8'%20r='32.35'%20fill='%23f8a8ab'/%3e%3cpath%20d='m233.32,47.33l4.46,5.41,8.07-14.12s10.3.53,10.3-7.11c0-7.64,9.45-7.86,9.45-7.86,0,0,13.37-23.35-14.33-17.2,0,0-19.21-13.16-28.77-1.91,0,0-29.3,14.75-20.91,40.44l13.93,26.48,3.16-5.99s-1.91-25.16,14.65-18.15Z'%20fill='%232f2e43'/%3e%3cpath%20d='m0,562.07c0,.66.53,1.19,1.19,1.19h535.26c.66,0,1.19-.53,1.19-1.19s-.53-1.19-1.19-1.19H1.19c-.66,0-1.19.53-1.19,1.19Z'%20fill='%23484565'/%3e%3cpath%20d='m328.8,349.01l-61.13-19.65c-7.54-2.42-15.64,1.63-18.21,9.13l-27.62,80.54c-2.82,8.22,2.16,17.06,10.65,18.92l70.26,15.37c7.72,1.69,15.38-3.1,17.24-10.78l18.49-76.26c1.79-7.4-2.43-14.94-9.68-17.27Z'%20fill='%23e2e3e4'/%3e%3cpath%20d='m322.6,366l-3.94-.7c2.52-14.32,6-52.5-8.05-57.18-6.81-2.27-13.67,1.7-20.38,11.81-5.27,7.95-8.35,16.75-8.38,16.84l-3.78-1.31c.54-1.55,13.39-37.94,33.8-31.14,20.17,6.72,11.12,59.43,10.72,61.67Z'%20fill='%232f2e43'/%3e%3cpolygon%20points='276.25%20254.19%20166.98%20254.19%20193.72%20529.88%20224.72%20527.88%20226.25%20329.34%20245.76%20416.47%20251.47%20526.38%20279.72%20527.88%20283%20402.85%20276.25%20254.19'%20fill='%232f2e43'/%3e%3cpolygon%20points='211.34%2083.19%20248.34%2092.19%20279.97%20228.88%20276.25%20254.19%20183.6%20269.87%20166.98%20254.19%20211.34%2083.19'%20fill='%236c63ff'/%3e%3cpolygon%20points='211.28%2076.35%20198.63%2090.54%20172.97%2096.7%20129.22%20291.22%20213.52%20305.5%20237%20107.39%20211.28%2076.35'%20fill='%232f2e43'/%3e%3cpolygon%20points='248.32%2083.44%20241.72%20106.96%20272.27%20317.88%20288.03%20317.88%20280.76%20111.48%20259.36%2094.48%20248.32%2083.44'%20fill='%232f2e43'/%3e%3cpath%20d='m268.07,108.87l12.69,2.61s5.56,2.04,7.58,17.84c2.01,15.8,2.37,68.86,2.37,68.86l21.58,85.6-24.51,8.08-11.54-46.06-8.18-136.94Z'%20fill='%232f2e43'/%3e%3cpolygon%20points='246.9%2097.89%20240.76%20109.15%20253.04%20241.23%20238.71%20254.54%20225.4%20242.26%20235.13%20109.66%20220.95%2097.89%20225.91%2094.3%20231.03%20100.44%20241.27%2098.4%20245.36%2092.25%20246.9%2097.89'%20fill='%232f2e43'/%3e%3cpath%20id='uuid-4155b336-10d9-4b14-826d-07551e167be9-115-165-128-709'%20d='m186.59,275.51c5.15,6.95,12.95,9.34,17.42,5.35,4.47-3.99,3.92-12.86-1.23-19.82-2.02-2.81-4.69-4.99-7.79-6.35l-22.2-29.11-13.62,12.94,23.33,27.32c.59,3.61,1.99,6.92,4.09,9.66,0,0,0,0,0,0Z'%20fill='%23f8a8ab'/%3e%3cpath%20d='m183.11,99.89l-10.14-3.19s-13.74,3.41-18.29,20.57l-22.21,83.6,37.67,66.12,20.13-24.44-18.96-60.7,11.81-81.96Z'%20fill='%232f2e43'/%3e%3c/svg%3e",J=({text:s})=>e.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-center mx-auto p-10",children:[e.jsx("div",{children:e.jsx("img",{src:G})}),e.jsx("h3",{className:"text-black font-bold text-xl lg:text-4xl",children:s})]}),ne=({userId:s})=>{const{showPills:i,pillsContext:r}=t.useContext(v),[c,m]=t.useState(!1),[n,h]=t.useState([]);if(t.useEffect(()=>{s&&(async()=>await i(s))()},[s,i,r]),t.useEffect(()=>{r!==null&&h(r)},[r]),!s||!n)return null;const o=()=>{m(!c)},f=n.map((x,d)=>e.jsx(Y,{pill:x},d));return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" bg-blue-900 w-full",children:e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-x-5 container mx-auto p-5",children:[e.jsx("div",{className:"basis-1/2",children:e.jsx("img",{className:"h-[175px] w-[175px] md:h-[175px] md:w-[250px] xl:h-[300px] lg:w-[300px]",src:U,alt:"company's logo"})}),e.jsxs("div",{className:"text-white space-y-10",children:[e.jsx("h1",{className:"text-3xl md:text-5xl font-bold",children:"Welcome"}),e.jsx("p",{className:"text-lg lg:text-xl",children:"The drug registry gives you the control to optimize your health. health. Organize and set reminders for your medications, prioritizing your well-being and ensuring an effective follow-up of your treatment."}),c&&e.jsx(X,{id:s,handleShow:o}),e.jsxs("button",{onClick:o,className:"flex items-center gap-x-2 p-2 border-2 rounded-xl text-lg font-bold hover:bg-white hover:border-black hover:text-black ease-in-out transition-colors duration-300",children:["Add a new pill ",e.jsx(H,{})]})]})]})}),e.jsxs("div",{className:"container mx-auto my-10",children:[e.jsx("h2",{className:"text-3xl font-bold my-5 p-2 lg:p-0",children:"Your pills"}),e.jsx("div",{className:`${n.length===0?"grid grid-cols-1":"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"} gap-y-5 lg:p-0 place-items-center justify-items-center`,children:n.length===0?e.jsx(J,{text:"Sorry, but there is no pills still"}):f})]})]})};export{ne as default};
