import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import {Search,ShoppingBag,ArrowRight,Check,Palette,Code2,Monitor,Building2,Megaphone,Camera,Menu,X} from "lucide-react";
import "./styles.css";

const courses=[
["Learn Figma from Basic","https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80"],
["Build Digital Asset","https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80"],
["the Power of Big Data","https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"],
["Balancing Productivity and Focus","https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"],
["Mastering Money Management","https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"],
["From Idea to Startup Success","https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"]
];
const cats=[["Design",Palette],["Development",Code2],["IT & Software",Monitor],["Business",Building2],["Marketing",Megaphone],["Photography",Camera]];
const people=[
["Sarah M.","Enthusiastic Learner","“ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations.”"],
["James L.","Lifelong Learner","“I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available.”"],
["Alex B.","Inspired Creator","“As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible.”"]
];

function Header(){
 const [open,setOpen]=useState(false);
 return <header className="header"><div className="container nav">
  <a className="brand" href="#home"><b>B</b><span>ByteSpace</span></a>
  <button className="mobile" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  <nav className={open?"links open":"links"}><a href="#home">Home</a><a href="#courses">Courses</a><a href="#creators">Creators</a></nav>
  <div className="nav-actions"><a href="#login">Sign In</a><a className="join" href="#signup">Join Us</a><ShoppingBag size={17}/></div>
 </div></header>
}

function Hero(){
 return <section className="hero" id="home"><div className="grid-bg"></div>
  <div className="shape s1"></div><div className="shape s2"></div><div className="shape s3"></div>
  <div className="container hero-inner">
   <p className="eyebrow">LEARN • CREATE • GROW</p>
   <h1>Get Access to Hundreds<br/>Courses Available</h1>
   <p className="hero-sub">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
   <div className="hero-search"><Search size={17}/><input placeholder="Course, topic, creator"/><button>Search</button></div>
   <div className="hero-art">
    <div className="lime-blob"></div>
    <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"/>
    <div className="stat stat1"><small>UI/UX Design</small><b>20 Courses</b><span>1000+ Students</span></div>
    <div className="stat stat2"><small>Learning Progress</small><strong>55%</strong><i></i></div>
   </div>
  </div>
 </section>
}

function Logos(){return <div className="logos"><div>◉ Logipsum</div><div>◌ Logipsum</div><div>◉ Logipsum</div><div>✥ Logipsum</div><div>◉ Logipsum</div></div>}

function CourseCard({c}){return <article className="course-card"><div className="course-img"><img src={c[1]}/><div className="pills"><span>17 Lessons</span><span>2 hours 16 mins</span><span>59 Comments</span></div></div><h3>{c[0]}</h3><div className="meta">by <a>purepixel studio</a><span>4.5 ★</span></div><div className="level">▥ Beginner <span>👤 👤 👤 <b>20+</b></span></div><strong className="price">$25<small>/Lifetime</small></strong></article>}

function Discover(){
 const [active,setActive]=useState("Featured");
 const tags=["Featured","Music","Drawing & Painting","Marketing","Animation","Social Media","UI/UX Design","Creative Marketing","Digital Illustration","Film & Video","Crafts","Freelance & Entrepreneurship","Graphic Design","Photography","Productivity","Web Development","Data Science","Cooking","+ More"];
 return <section className="section discover" id="courses"><div className="container">
  <div className="heading"><h2>Discover Your Passion,<br/>Build Your Skills</h2><p>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p></div>
  <div className="tags">{tags.map(x=><button className={x===active?"active":""} onClick={()=>setActive(x)} key={x}>{x}</button>)}</div>
  <div className="course-grid">{courses.map((c,i)=><CourseCard c={c} key={i}/>)}</div>
 </div></section>
}

function Categories(){
 return <section className="section categories"><div className="container"><div className="heading"><h2>Explore Diverse Learning Paths at Bytespace</h2><p>At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone.</p></div><div className="cat-grid">{cats.map(([name,Icon])=><div className="cat" key={name}><span><Icon size={21}/></span><b>{name}</b></div>)}</div></div></section>
}

function Growth(){
 return <section className="growth"><div className="container split"><div><h2>Your Path to Professional<br/>Growth Starts Here!</h2><p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry insights, or embark on a new professional path, we have something for you.</p><a className="blue-link">1200+ <small>Students learning with us</small></a></div><div className="growth-art"><div className="circle"></div><img src={courses[0][1]}/><div className="mini-progress">Learning Progress<strong>55%</strong><i></i></div></div></div></section>
}

function Creator(){
 return <section className="creator" id="creators"><div className="container split"><div className="creator-art"><div className="revenue">Total Revenue<br/><b>$120.29</b><i></i></div><div className="year">Year to Date<br/><b>$1,200.38</b></div><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85"/><div className="happy">Happy Students<br/><b>2K+</b></div></div><div><h2>Create & Manage<br/>Courses Easily.</h2><p>ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p><ul><li><Check/>Share Your Expertise</li><li><Check/>Monetize Your Passion</li><li><Check/>Flexibility and Autonomy</li><li><Check/>Build a Community</li></ul></div></div></section>
}

function BlueCTA(){
 return <section className="blue-cta"><div className="grid-bg"></div><div className="container"><h2>Unlock Your Potential as a<br/>Creator with ByteSpace</h2><p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of our community.</p><button>Become a Creator <ArrowRight size={17}/></button></div></section>
}

function Testimonials(){
 return <section className="testimonials"><div className="container"><div className="heading left"><h2>Community is Saying</h2><p>Hear from our learners and accomplished creators.</p></div><div className="people">{people.map((p,i)=><article className="person" key={i}><div className="avatar">{p[0][0]}</div><h3>{p[0]}</h3><a>{p[1]}</a><p>{p[2]}</p></article>)}</div></div></section>
}

function Footer(){
 return <footer><div className="container footer-grid"><div><a className="brand" href="#home"><b>B</b><span>ByteSpace</span></a><p>Stay Up to date with our latest features and releases by joining our newsletter.</p><div className="newsletter"><input placeholder="Enter your email"/><button>Search</button></div><small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small></div><div className="footer-links"><div><a>Featured Courses</a><a>Featured Categories</a><a>Business</a><a>IT</a><a>Design</a></div><div><a>Development</a><a>Marketing</a><a>Photography</a><a>Finance</a><a>Sport</a></div><div><a>Become a Creator</a><a>Affiliate Program</a><a>Contact</a><a>Help</a><a>About</a></div></div></div><div className="container copyright">© 2026 ByteSpace. All rights reserved.<span>Terms of Services　 Cookies Settings</span></div></footer>
}

function App(){return <><Header/><main><Hero/><Logos/><Discover/><Categories/><Growth/><Creator/><BlueCTA/><Testimonials/></main><Footer/></>}
createRoot(document.getElementById("root")).render(<App/>);