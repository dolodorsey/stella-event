"use client";
import { useState, useEffect, useRef } from "react";

// STELLA — "Velvet Cinema" aesthetic
// Atlanta's R&B/Soul Concert Series
const C = {
  base:    "#080509", surface: "#0F0C12", panel: "#160F1C",
  plum:    "#6B1F5E", plumGlow: "rgba(107,31,94,0.18)",
  gold:    "#C9A84C", goldGlow: "rgba(201,168,76,0.15)",
  rose:    "#C46080", roseGlow: "rgba(196,96,128,0.12)",
  cream:   "#F3EDE4", muted: "rgba(243,237,228,0.45)", dim: "rgba(243,237,228,0.2)",
  border:  "rgba(243,237,228,0.06)",
};
const F = {
  display: "'Playfair Display',Georgia,serif",
  sans:    "'DM Sans',system-ui,sans-serif",
  mono:    "'DM Mono',monospace",
};

const TICKETS = [
  { date:"May 10, 2026", note:"Spring Edition",   url:"https://huglife.vercel.app/#tickets" },
  { date:"Aug 9, 2026",  note:"Summer Edition",   url:"https://huglife.vercel.app/#tickets" },
  { date:"Sep 19, 2026", note:"Fall Edition",     url:"https://huglife.vercel.app/#tickets" },
];

function useInView(t=0.1){const ref=useRef<HTMLDivElement>(null);const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});o.observe(el);return()=>o.disconnect()},[t]);return[ref,v] as const}
function Reveal({children,d=0}:{children:React.ReactNode;d?:number}){const[ref,v]=useInView();return<div ref={ref} style={{transform:v?"translateY(0)":"translateY(40px)",opacity:v?1:0,transition:`all 1s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}
const Grain=()=><div style={{position:"absolute",inset:0,opacity:0.04,pointerEvents:"none",zIndex:0,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}/>;

function Nav(){const[sc,setSc]=useState(false);useEffect(()=>{const h=()=>setSc(window.scrollY>60);window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h)},[]);return(
<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:sc?"12px clamp(24px,4vw,60px)":"24px clamp(24px,4vw,60px)",display:"flex",justifyContent:"space-between",alignItems:"center",background:sc?`${C.base}F5`:"transparent",backdropFilter:sc?"blur(20px)":"none",borderBottom:sc?`1px solid ${C.border}`:"none",transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)"}}>
<div><div style={{fontFamily:F.mono,fontSize:"7px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.rose,marginBottom:"2px"}}>A KHG HugLife Event</div><span style={{fontFamily:F.display,fontSize:"18px",fontWeight:700,color:C.cream,letterSpacing:"0.06em",fontStyle:"italic"}}>STELLA</span></div>
<div style={{display:"flex",gap:"clamp(16px,2vw,32px)",alignItems:"center"}}>
{["Experience","About","Tickets"].map(n=><a key={n} href={`#${n.toLowerCase()}`} style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.2em",textTransform:"uppercase",color:C.muted,textDecoration:"none",transition:"color 0.3s"}} onMouseEnter={e=>(e.target as HTMLElement).style.color=C.cream} onMouseLeave={e=>(e.target as HTMLElement).style.color=C.muted}>{n}</a>)}
<a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.base,background:C.rose,padding:"10px 24px",textDecoration:"none",transition:"all 0.3s"}} onMouseEnter={e=>(e.target as HTMLElement).style.transform="translateY(-2px)"} onMouseLeave={e=>(e.target as HTMLElement).style.transform="translateY(0)"}>Get Tickets</a>
</div>
</nav>
);}

function Hero(){return(
<section style={{minHeight:"100vh",background:C.base,display:"flex",alignItems:"flex-end",padding:"0 clamp(32px,6vw,80px) 80px",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 35% 30%, ${C.plumGlow} 0%, transparent 55%), radial-gradient(ellipse at 65% 70%, ${C.roseGlow} 0%, transparent 50%)`}}/>
<Grain/>
{/* Decorative rings */}
<div style={{position:"absolute",top:"15%",right:"-5%",width:"50vw",height:"50vw",borderRadius:"50%",border:`1px solid ${C.border}`,opacity:0.4}}/>
<div style={{position:"absolute",top:"20%",right:"0%",width:"38vw",height:"38vw",borderRadius:"50%",border:`1px solid ${C.plum}30`}}/>
<div style={{maxWidth:"1200px",margin:"0 auto",width:"100%",position:"relative",zIndex:1}}>
<div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.rose,marginBottom:"24px"}}>KHG × HugLife Presents</div>
<h1 style={{fontFamily:F.display,fontSize:"clamp(64px,11vw,160px)",fontWeight:400,fontStyle:"italic",lineHeight:0.88,color:C.cream,marginBottom:"24px",letterSpacing:"-0.02em"}}>
STELLA
</h1>
<div style={{fontFamily:F.display,fontSize:"clamp(16px,2vw,28px)",fontStyle:"italic",color:C.rose,marginBottom:"20px"}}>Atlanta's Premier R&amp;B Concert Experience</div>
<div style={{fontFamily:F.sans,fontSize:"14px",color:C.muted,maxWidth:"520px",lineHeight:1.8,marginBottom:"40px"}}>
Three nights. One city. Unforgettable R&amp;B. STELLA is where Atlanta's sound meets the people who feel it deepest — intimate, electric, and alive.
</div>
<div style={{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"}}>
<a href="#tickets" style={{fontFamily:F.sans,fontSize:"11px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:C.base,background:C.rose,padding:"16px 40px",textDecoration:"none",transition:"all 0.3s"}} onMouseEnter={e=>(e.target as HTMLElement).style.transform="translateY(-2px)"} onMouseLeave={e=>(e.target as HTMLElement).style.transform="translateY(0)"}>Get Tickets</a>
<a href="#about" style={{fontFamily:F.sans,fontSize:"11px",fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"16px 36px",textDecoration:"none",transition:"all 0.3s"}}>The Experience</a>
</div>
</div>
</section>
);}

function About(){
  const pillars=[
    {icon:"♪",title:"Curated Sound",desc:"Every STELLA show is built around Atlanta's finest R&B and soul performers — from hometown legends to rising voices."},
    {icon:"✦",title:"Intimate Venue",desc:"Deliberately small. STELLA keeps crowds tight so every seat feels like the best seat in the house."},
    {icon:"◈",title:"Premium Production",desc:"World-class sound, low-key luxury lighting, and a visual environment that matches the music's depth."},
    {icon:"◇",title:"The Right Crowd",desc:"STELLA attracts Atlanta's most culture-forward audience — real fans, right energy, no filler."},
  ];
  return(
<section id="about" style={{background:C.surface,padding:"120px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 80% 50%, ${C.plumGlow} 0%, transparent 50%)`}}/>
<Grain/>
<div style={{maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal><div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.rose,marginBottom:"16px"}}>What Is STELLA</div>
<h2 style={{fontFamily:F.display,fontSize:"clamp(36px,5.5vw,80px)",fontWeight:400,fontStyle:"italic",lineHeight:0.9,color:C.cream,marginBottom:"20px"}}>Where R&amp;B<br/>Lives and Breathes</h2>
<p style={{fontFamily:F.sans,fontSize:"15px",color:C.muted,maxWidth:"600px",lineHeight:1.8,marginBottom:"64px"}}>STELLA was born from one belief: Atlanta deserves an R&amp;B experience worthy of its musical legacy. This isn't a concert with a bar. It's a concert you feel in your chest.</p></Reveal>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"2px",background:`${C.rose}15`}}>
{pillars.map((p,i)=>(
<Reveal key={i} d={i*0.1}>
<div style={{background:C.panel,padding:"40px 32px"}}>
<div style={{fontFamily:F.display,fontSize:"28px",color:C.rose,marginBottom:"16px"}}>{p.icon}</div>
<div style={{fontFamily:F.display,fontSize:"20px",fontStyle:"italic",color:C.cream,marginBottom:"12px"}}>{p.title}</div>
<div style={{fontFamily:F.sans,fontSize:"13px",color:C.muted,lineHeight:1.75}}>{p.desc}</div>
</div>
</Reveal>
))}
</div>
</div>
</section>
);}

function Tickets(){const[sel,setSel]=useState(0);return(
<section id="tickets" style={{background:C.base,padding:"100px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 50%, ${C.plumGlow} 0%, transparent 55%)`}}/>
<Grain/>
<div style={{maxWidth:"1100px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal>
<div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.rose,marginBottom:"16px"}}>2026 Season</div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"24px",marginBottom:"48px"}}>
<h2 style={{fontFamily:F.display,fontSize:"clamp(36px,6vw,84px)",fontWeight:400,fontStyle:"italic",lineHeight:0.9,color:C.cream}}>Three Nights.<br/>All Atlanta.</h2>
<div style={{display:"flex",alignItems:"center",gap:"8px"}}>
<div style={{width:"8px",height:"8px",borderRadius:"50%",background:"#4ADE80",boxShadow:"0 0 8px #4ADE80",animation:"stellaPulse 2s ease-in-out infinite"}}/>
<span style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.3em",color:"#4ADE80",textTransform:"uppercase"}}>Tickets On Sale</span>
</div>
</div>
</Reveal>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2px",background:`${C.rose}20`,marginBottom:"3px"}}>
{TICKETS.map((t,i)=>(
<Reveal key={i} d={i*0.1}>
<div onClick={()=>setSel(i)} style={{background:sel===i?`linear-gradient(145deg,${C.surface},${C.panel})`:"rgba(255,255,255,0.02)",padding:"36px 28px",cursor:"pointer",borderTop:`2px solid ${sel===i?C.rose:"transparent"}`,transition:"all 0.3s"}}>
<div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"}}>
<div style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ADE80",animation:"stellaPulse 2s ease-in-out infinite"}}/>
<span style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.25em",color:"#4ADE80",textTransform:"uppercase"}}>On Sale</span>
</div>
<div style={{fontFamily:F.display,fontSize:"clamp(18px,2.5vw,28px)",fontStyle:"italic",color:C.cream,marginBottom:"6px"}}>{t.date}</div>
<div style={{fontFamily:F.mono,fontSize:"10px",color:C.rose,marginBottom:"20px"}}>{t.note}</div>
<a href={t.url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#fff",background:C.rose,padding:"12px 28px",textDecoration:"none",display:"inline-block",transition:"all 0.3s"}} onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.transform="translateY(-2px)"} onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.transform="translateY(0)"}>Buy Tickets →</a>
</div>
</Reveal>
))}
</div>
<Reveal d={0.2}>
<div style={{background:C.surface,padding:"28px 32px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"}}>
<div>
<div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.4em",textTransform:"uppercase",color:C.rose,marginBottom:"6px"}}>Groups · VIP · Private Events</div>
<div style={{fontFamily:F.display,fontSize:"18px",fontStyle:"italic",color:C.cream}}>Celebrating with a group?</div>
</div>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
<a href="mailto:thekollectiveworldwide@gmail.com?subject=STELLA Group Tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#fff",background:C.rose,padding:"13px 32px",textDecoration:"none",display:"inline-block"}}>Group Inquiry</a>
<a href="mailto:thekollectiveworldwide@gmail.com?subject=STELLA VIP" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"13px 28px",textDecoration:"none",display:"inline-block"}}>VIP Access</a>
</div>
</div>
</Reveal>
<div style={{marginTop:"24px",display:"flex",gap:"28px",justifyContent:"center",flexWrap:"wrap"}}>
{["Powered by Eventbrite","Secure Checkout","Instant Confirmation","18+ Event"].map(s=>(
<div key={s} style={{fontFamily:F.sans,fontSize:"9px",color:"rgba(243,237,228,0.2)",letterSpacing:"0.15em"}}>{s}</div>
))}
</div>
</div>
<style>{`@keyframes stellaPulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
</section>
);}

function FAQ(){
  const[open,setOpen]=useState<number|null>(null);
  const items=[
    {q:"What is STELLA?",a:"STELLA is Atlanta's premier R&B concert experience — three intimate shows per year celebrating the depth and soul of Atlanta's R&B music culture."},
    {q:"Where does STELLA take place?",a:"STELLA is held at curated intimate venues across Atlanta. Exact venue details are sent with your ticket confirmation."},
    {q:"What is the dress code?",a:"Elevated. STELLA is a night out experience — dress elegantly. Think cocktail, date night, or soft glam. No athletic wear."},
    {q:"Is STELLA 18+?",a:"Yes. STELLA is an 18+ event. Valid ID required at the door. 21+ sections available for those who want access to the full bar."},
    {q:"Can I purchase tickets at the door?",a:"Door availability is not guaranteed. All three 2026 dates tend to sell out. We strongly recommend purchasing online."},
    {q:"Do you offer VIP tables or bottle service?",a:"Yes. VIP table reservations and bottle packages are available for all three dates. Email thekollectiveworldwide@gmail.com with subject 'STELLA VIP'."},
  ];
  return(
<section id="faq" style={{background:C.surface,padding:"80px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<Grain/>
<div style={{maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal>
<div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.rose,marginBottom:"16px"}}>FAQ</div>
<h2 style={{fontFamily:F.display,fontSize:"clamp(32px,5vw,64px)",fontWeight:400,fontStyle:"italic",color:C.cream,marginBottom:"48px",lineHeight:0.95}}>Common Questions</h2>
</Reveal>
<div style={{display:"flex",flexDirection:"column",gap:"2px",background:`${C.rose}20`}}>
{items.map((item,i)=>(
<Reveal key={i} d={i*0.05}>
<div onClick={()=>setOpen(open===i?null:i)} style={{background:open===i?C.panel:C.base,padding:"24px 28px",cursor:"pointer",borderLeft:`3px solid ${open===i?C.rose:"transparent"}`,transition:"all 0.3s"}} onMouseEnter={e=>{if(open!==i)(e.currentTarget as HTMLDivElement).style.background=`${C.rose}08`}} onMouseLeave={e=>{if(open!==i)(e.currentTarget as HTMLDivElement).style.background=C.base}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px"}}>
<div style={{fontFamily:F.display,fontSize:"clamp(14px,1.5vw,18px)",fontStyle:"italic",color:C.cream,lineHeight:1.3}}>{item.q}</div>
<div style={{color:C.rose,fontSize:"20px",flexShrink:0,transition:"transform 0.3s",transform:open===i?"rotate(45deg)":"rotate(0deg)"}}>+</div>
</div>
{open===i&&<div style={{fontFamily:F.sans,fontSize:"14px",color:C.muted,lineHeight:1.75,marginTop:"12px",paddingRight:"32px"}}>{item.a}</div>}
</div>
</Reveal>
))}
</div>
</div>
</section>
);}

function Footer(){return(
<footer style={{background:C.base,borderTop:`1px solid ${C.border}`,padding:"60px clamp(32px,5vw,80px)"}}>
<div style={{maxWidth:"1200px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px"}}>
<div>
<div style={{fontFamily:F.display,fontSize:"22px",fontStyle:"italic",color:C.cream,marginBottom:"4px"}}>STELLA</div>
<div style={{fontFamily:F.sans,fontSize:"11px",color:C.muted}}>A KHG HugLife Experience · Atlanta, GA</div>
</div>
<div style={{display:"flex",gap:"24px",flexWrap:"wrap"}}>
<a href="mailto:thekollectiveworldwide@gmail.com" style={{fontFamily:F.sans,fontSize:"10px",color:C.muted,textDecoration:"none",letterSpacing:"0.1em"}}>Contact</a>
<a href="https://huglife.vercel.app" style={{fontFamily:F.sans,fontSize:"10px",color:C.muted,textDecoration:"none",letterSpacing:"0.1em"}}>HugLife Events</a>
</div>
<div style={{fontFamily:F.sans,fontSize:"10px",color:C.dim}}>© 2026 The Kollective Hospitality Group</div>
</div>
</footer>
);}

export default function STELLASite(){return(
<div style={{background:C.base,minHeight:"100vh"}}>
<Nav/><Hero/><About/><Tickets/><FAQ/><Footer/>
</div>
);}
