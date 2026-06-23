"use client";

import { useEffect } from "react";

// CSS shorthand helper — lets us write font/etc as strings without TS complaints
const s = (styles: Record<string, unknown>) => styles as React.CSSProperties;

const BOOKS = [
  { title: "The Name of the Wind", author: "Patrick Rothfuss", price: "£6.50", condition: "Like New", seller: "Maya R.", bg: "linear-gradient(150deg,#16413c,#0c2723)", border: "rgba(212,168,90,.35)", badge: "#D4A85A", badgeText: "#16413c", logo: "rgba(212,168,90,.7)", line: "rgba(212,168,90,.6)", authorColor: "rgba(246,241,231,.66)", dot: "#D4A85A", titleSize: "23px" },
  { title: "Dune", author: "Frank Herbert", price: "£8.00", condition: "Like New", seller: "Tom B.", bg: "linear-gradient(150deg,#9a5520,#5a2c10)", border: "rgba(246,241,231,.3)", badge: "#D4A85A", badgeText: "#16413c", logo: "rgba(246,241,231,.55)", line: "rgba(246,241,231,.5)", authorColor: "rgba(246,241,231,.7)", dot: "#D4A85A", titleSize: "27px" },
  { title: "Beloved", author: "Toni Morrison", price: "£4.50", condition: "Well-loved", seller: "Priya N.", bg: "linear-gradient(150deg,#6e2530,#3f1218)", border: "rgba(246,241,231,.28)", badge: "#C98232", badgeText: "#1a140b", logo: "rgba(246,241,231,.5)", line: "rgba(246,241,231,.45)", authorColor: "rgba(246,241,231,.68)", dot: "#C98232", titleSize: "28px" },
  { title: "The Overstory", author: "Richard Powers", price: "£7.00", condition: "Good", seller: "Elena K.", bg: "linear-gradient(150deg,#2f4f3a,#1b3324)", border: "rgba(212,168,90,.32)", badge: "#8FA3B8", badgeText: "#1a140b", logo: "rgba(212,168,90,.6)", line: "rgba(212,168,90,.55)", authorColor: "rgba(246,241,231,.66)", dot: "#8FA3B8", titleSize: "25px" },
  { title: "Norwegian Wood", author: "Haruki Murakami", price: "£5.50", condition: "Good", seller: "Sam W.", bg: "linear-gradient(150deg,#3c4a63,#222b3c)", border: "rgba(246,241,231,.28)", badge: "#8FA3B8", badgeText: "#1a140b", logo: "rgba(246,241,231,.5)", line: "rgba(246,241,231,.45)", authorColor: "rgba(246,241,231,.66)", dot: "#8FA3B8", titleSize: "25px" },
  { title: "Circe", author: "Madeline Miller", price: "£7.50", condition: "Like New", seller: "Ada L.", bg: "linear-gradient(150deg,#9a6a24,#5f3f12)", border: "rgba(246,241,231,.3)", badge: "#D4A85A", badgeText: "#16413c", logo: "rgba(246,241,231,.55)", line: "rgba(246,241,231,.5)", authorColor: "rgba(246,241,231,.7)", dot: "#D4A85A", titleSize: "28px" },
  { title: "The Secret History", author: "Donna Tartt", price: "£5.00", condition: "Well-loved", seller: "Jonah P.", bg: "linear-gradient(150deg,#2a352c,#161d18)", border: "rgba(212,168,90,.3)", badge: "#C98232", badgeText: "#1a140b", logo: "rgba(212,168,90,.55)", line: "rgba(212,168,90,.5)", authorColor: "rgba(246,241,231,.64)", dot: "#C98232", titleSize: "24px" },
  { title: "Wild", author: "Cheryl Strayed", price: "£6.00", condition: "Good", seller: "Nadia F.", bg: "linear-gradient(150deg,#a85c30,#6d381a)", border: "rgba(246,241,231,.3)", badge: "#8FA3B8", badgeText: "#1a140b", logo: "rgba(246,241,231,.55)", line: "rgba(246,241,231,.5)", authorColor: "rgba(246,241,231,.7)", dot: "#8FA3B8", titleSize: "30px" },
];

export default function HomePage() {
  useEffect(() => {
    const root = document.getElementById("pp-root");
    if (!root) return;
    let vh = window.innerHeight;

    // --- Dust particles ---
    root.querySelectorAll("[data-dust]").forEach((c) => {
      if (c.childElementCount > 0) return; // prevent double-seeding on hot reload
      const n = parseInt(c.getAttribute("data-dust") || "14");
      const tint = c.getAttribute("data-tint") || "rgba(212,168,90,0.6)";
      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        const size = 1 + Math.random() * 3.6;
        el.style.cssText = `position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;width:${size}px;height:${size}px;border-radius:50%;background:${tint};box-shadow:0 0 ${size*3}px ${tint};animation:ppDrift ${8+Math.random()*13}s ease-in-out ${Math.random()*9}s infinite;opacity:${0.2+Math.random()*0.6};pointer-events:none;`;
        c.appendChild(el);
      }
    });

    // --- Flying book pages ---
    root.querySelectorAll("[data-pages]").forEach((c) => {
      if (c.childElementCount > 0) return;
      const n = parseInt(c.getAttribute("data-pages") || "10");
      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        const w = 17 + Math.random() * 22;
        const h = w * 1.32;
        const rot = Math.random() * 54 - 27;
        const dur = 7 + Math.random() * 7;
        const delay = Math.random() * 9;
        el.style.cssText = `position:absolute;left:${26+Math.random()*46}%;bottom:${16+Math.random()*34}%;width:${w}px;height:${h}px;border-radius:2px;background:linear-gradient(135deg,#f7f2e8,#e4d9c1);box-shadow:0 7px 18px rgba(0,0,0,.3),inset 0 0 0 1px rgba(120,90,50,.16);--r:${rot}deg;transform:rotate(${rot}deg) scale(.82);animation:ppPage ${dur}s ease-in ${delay}s infinite;opacity:0;pointer-events:none;`;
        el.innerHTML = `<i style="position:absolute;left:15%;right:15%;top:27%;height:1px;background:rgba(120,90,50,.24)"></i><i style="position:absolute;left:15%;right:32%;top:46%;height:1px;background:rgba(120,90,50,.18)"></i><i style="position:absolute;left:15%;right:22%;top:65%;height:1px;background:rgba(120,90,50,.16)"></i>`;
        c.appendChild(el);
      }
    });

    // --- Custom cursor ---
    const cursor = root.querySelector("[data-cursor]") as HTMLElement | null;
    if (window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      if (cursor) {
        window.addEventListener("pointermove", (e) => {
          cursor.style.opacity = "1";
          cursor.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
        }, { passive: true });
        document.addEventListener("mouseleave", () => { cursor.style.opacity = "0"; });
      }
      root.querySelectorAll("[data-tilt]").forEach((card) => {
        const c = card as HTMLElement;
        c.addEventListener("pointermove", (e) => {
          const r = c.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          c.style.transform = `perspective(820px) rotateY(${px*13}deg) rotateX(${-py*13}deg) translateY(-8px)`;
        });
        c.addEventListener("pointerleave", () => { c.style.transform = ""; });
      });
    }

    // --- Nav scroll-to links ---
    const nav = root.querySelector("[data-nav]") as HTMLElement | null;
    const goTo = (name: string) => {
      if (name === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
      const el = (root.querySelector(`[data-scene="${name}"]`) || document.getElementById(name)) as HTMLElement | null;
      if (!el) return;
      const top = el.offsetTop + el.offsetHeight * 0.34;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    };
    root.querySelectorAll("[data-target]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        goTo(a.getAttribute("data-target") || "");
      });
    });

    // --- Side dots ---
    const dots = [...root.querySelectorAll("[data-dot]")] as HTMLElement[];
    dots.forEach((d) => d.addEventListener("click", () => goTo(d.getAttribute("data-dot") || "")));

    // --- Genre filter chips ---
    const chips = [...root.querySelectorAll("[data-chip]")] as HTMLElement[];
    chips.forEach((c) => c.addEventListener("click", () => {
      chips.forEach((ch) => {
        const on = ch === c;
        ch.style.background = on ? "#2F4F3A" : "transparent";
        ch.style.color = on ? "#F6F1E7" : "rgba(42,33,24,0.7)";
        ch.style.borderColor = on ? "#2F4F3A" : "rgba(42,33,24,0.22)";
      });
    }));

    // --- Sound toggle ---
    let soundOn = false;
    let actx: AudioContext | null = null;
    let masterGain: GainNode | null = null;
    let nodes: AudioNode[] = [];
    let twinkleOn = false;
    let twinkleTimer: ReturnType<typeof setTimeout> | null = null;

    const ensureCtx = () => {
      if (!actx) actx = new (window.AudioContext || (window as any).webkitAudioContext)();
      if (actx.state === "suspended") actx.resume();
      if (!masterGain) { masterGain = actx.createGain(); masterGain.gain.value = 0; masterGain.connect(actx.destination); }
      return actx;
    };
    const noiseBuffer = (seconds: number) => {
      const ctx = actx!; const n = Math.floor(seconds * ctx.sampleRate);
      const buf = ctx.createBuffer(1, n, ctx.sampleRate); const d = buf.getChannelData(0);
      let last = 0;
      for (let i = 0; i < n; i++) { const w = Math.random()*2-1; d[i]=(last+0.02*w)/1.02; last=d[i]; d[i]*=3.2; }
      return buf;
    };
    const bell = (freq: number, peak: number, dur: number) => {
      if (!actx || !masterGain) return;
      const t = actx.currentTime;
      const o = actx.createOscillator(); o.type="sine"; o.frequency.value=freq;
      const o2 = actx.createOscillator(); o2.type="sine"; o2.frequency.value=freq*2.01;
      const g = actx.createGain(); g.gain.value=0;
      const g2 = actx.createGain(); g2.gain.value=0;
      o.connect(g).connect(masterGain); o2.connect(g2).connect(masterGain);
      g.gain.linearRampToValueAtTime(peak, t+0.012); g.gain.exponentialRampToValueAtTime(0.0001, t+dur);
      g2.gain.linearRampToValueAtTime(peak*0.35, t+0.012); g2.gain.exponentialRampToValueAtTime(0.0001, t+dur*0.6);
      o.start(t); o2.start(t); o.stop(t+dur+0.05); o2.stop(t+dur+0.05);
    };
    const scheduleTwinkle = () => {
      if (!twinkleOn || !soundOn) return;
      const scale = [523.25,587.33,659.25,783.99,880.0,1046.5,1174.7];
      const f = scale[Math.floor(Math.random()*scale.length)];
      bell(f, 0.045, 1.6);
      if (Math.random()<0.4) setTimeout(() => twinkleOn && bell(f*1.5, 0.03, 1.3), 140);
      twinkleTimer = setTimeout(scheduleTwinkle, 1400+Math.random()*3200);
    };
    const startAmbience = () => {
      const ctx = ensureCtx(); const t = ctx.currentTime; nodes = [];
      const wind = ctx.createBufferSource(); wind.buffer = noiseBuffer(4); wind.loop = true;
      const windLp = ctx.createBiquadFilter(); windLp.type="lowpass"; windLp.frequency.value=480;
      const windG = ctx.createGain(); windG.gain.value=0.035;
      wind.connect(windLp).connect(windG).connect(masterGain!); wind.start();
      const windLfo = ctx.createOscillator(); windLfo.frequency.value=0.06;
      const windLfoG = ctx.createGain(); windLfoG.gain.value=170;
      windLfo.connect(windLfoG).connect(windLp.frequency); windLfo.start();
      nodes.push(wind, windLfo);
      const padG = ctx.createGain(); padG.gain.value=0.05;
      const padLp = ctx.createBiquadFilter(); padLp.type="lowpass"; padLp.frequency.value=900; padLp.Q.value=0.4;
      padLp.connect(padG).connect(masterGain!);
      const padLfo = ctx.createOscillator(); padLfo.frequency.value=0.05;
      const padLfoG = ctx.createGain(); padLfoG.gain.value=260;
      padLfo.connect(padLfoG).connect(padLp.frequency); padLfo.start(); nodes.push(padLfo);
      [65.41,98.0,164.81,196.0].forEach((f, i) => {
        const o = ctx.createOscillator(); o.type = i<2 ? "sine" : "triangle"; o.frequency.value=f;
        const od = ctx.createOscillator(); od.frequency.value=f*1.004; od.type="sine";
        const g = ctx.createGain(); g.gain.value = i===0 ? 0.5 : 0.28;
        o.connect(g).connect(padLp); od.connect(g); o.start(); od.start(); nodes.push(o, od);
      });
      twinkleOn = true; scheduleTwinkle();
      masterGain!.gain.cancelScheduledValues(t);
      masterGain!.gain.setValueAtTime(masterGain!.gain.value, t);
      masterGain!.gain.linearRampToValueAtTime(0.9, t+1.8);
    };
    const stopAmbience = () => {
      twinkleOn = false;
      if (twinkleTimer) clearTimeout(twinkleTimer);
      if (masterGain && actx) {
        const t = actx.currentTime;
        masterGain.gain.cancelScheduledValues(t);
        masterGain.gain.setValueAtTime(masterGain.gain.value, t);
        masterGain.gain.linearRampToValueAtTime(0, t+0.7);
      }
      setTimeout(() => { nodes.forEach(n => { try { (n as OscillatorNode).stop(); } catch(e){} }); nodes=[]; }, 900);
    };

    const soundBtn = root.querySelector("[data-sound]") as HTMLElement | null;
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        soundOn = !soundOn;
        soundBtn.setAttribute("aria-pressed", String(soundOn));
        const son = soundBtn.querySelector("[data-son]") as HTMLElement | null;
        const soff = soundBtn.querySelector("[data-soff]") as HTMLElement | null;
        if (son) son.style.display = soundOn ? "flex" : "none";
        if (soff) soff.style.display = soundOn ? "none" : "flex";
        soundBtn.style.color = soundOn ? "#D4A85A" : "rgba(246,241,231,0.7)";
        soundBtn.style.borderColor = soundOn ? "rgba(212,168,90,0.5)" : "rgba(246,241,231,0.2)";
        try { soundOn ? startAmbience() : stopAmbience(); } catch(e) {}
      });
    }

    // --- Core scroll engine ---
    const scenes = [...root.querySelectorAll("[data-scene]")].map((el) => ({
      el,
      fx: [...el.querySelectorAll("[data-fx]")] as HTMLElement[],
      counts: [...el.querySelectorAll("[data-count]")] as HTMLElement[],
      threads: [...el.querySelectorAll("[data-thread]")] as Element[],
    }));

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const smooth = (a: number, b: number, x: number) => {
      if (a === b) return x >= b ? 1 : 0;
      const t = clamp((x-a)/(b-a), 0, 1);
      return t*t*(3-2*t);
    };

    const applyFx = (el: HTMLElement, p: number) => {
      const d = el.dataset;
      let appear = 1;
      if (d.fadeIn !== undefined) appear = smooth(parseFloat(d.fadeIn), parseFloat(d.fadeIn)+0.12, p);
      let disappear = 0;
      if (d.fadeOut !== undefined) disappear = smooth(parseFloat(d.fadeOut), Math.min(parseFloat(d.fadeOut)+0.18, 1), p);
      const opacity = clamp(appear-disappear, 0, 1);
      let ty=0, tx=0;
      if (d.ty)  ty += (1-appear)*parseFloat(d.ty) - disappear*parseFloat(d.ty)*0.5;
      if (d.tx)  tx += (1-appear)*parseFloat(d.tx);
      if (d.par) ty += (p-0.5)*parseFloat(d.par);
      if (d.rise) ty += -p*parseFloat(d.rise);
      let scale = 1;
      if (d.scaleFrom !== undefined) {
        const a = parseFloat(d.scaleFrom), b = parseFloat(d.scaleTo||"1");
        const pulse = (b-a)*0.55*Math.sin(p*Math.PI);
        scale = a+(b-a)*p+pulse;
        ty += (p-0.5)*55;
        tx += Math.sin(p*Math.PI)*18;
      } else if (d.zoom) {
        const [za, zb] = d.zoom.split(",").map(Number);
        scale = za+(1-za)*appear+(zb-1)*disappear;
      }
      el.style.opacity = String(opacity);
      el.style.transform = `translate3d(${tx}px,${ty}px,0) scale(${scale})`;
    };

    let lastActive = -1;
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      if (nav) {
        if (y > 50) {
          nav.style.background = "rgba(20,15,9,0.86)";
          nav.style.backdropFilter = "blur(14px)";
          (nav.style as any).webkitBackdropFilter = "blur(14px)";
          nav.style.borderBottomColor = "rgba(212,168,90,0.16)";
          nav.style.paddingTop = "15px";
          nav.style.paddingBottom = "15px";
        } else {
          nav.style.background = "transparent";
          nav.style.backdropFilter = "none";
          (nav.style as any).webkitBackdropFilter = "none";
          nav.style.borderBottomColor = "transparent";
          nav.style.paddingTop = "26px";
          nav.style.paddingBottom = "26px";
        }
      }

      let activeIdx = 0, bestDist = Infinity;
      scenes.forEach((sc, idx) => {
        const rect = sc.el.getBoundingClientRect();
        const denom = Math.max(1, rect.height-vh);
        const p = clamp(-rect.top/denom, 0, 1);
        const dist = Math.abs(rect.top + rect.height/2 - vh/2);
        if (dist < bestDist) { bestDist=dist; activeIdx=idx; }
        sc.fx.forEach((el) => applyFx(el, p));
        sc.counts.forEach((el) => {
          const target = parseFloat(el.getAttribute("data-count")||"0");
          el.textContent = Math.round(target*smooth(0.12,0.7,p)).toLocaleString("en-US");
        });
        sc.threads.forEach((el) => {
          const dp = smooth(0.18,0.72,p);
          (el as any).style.strokeDashoffset = String(1-dp);
          (el as any).style.opacity = String(smooth(0.12,0.3,p) * clamp(1-smooth(0.86,1,p),0,1));
        });
      });

      dots.forEach((d, i) => {
        const on = i === activeIdx;
        d.style.background = on ? "#D4A85A" : "rgba(246,241,231,0.28)";
        d.style.transform = on ? "scale(1.55)" : "scale(1)";
      });

      if (soundOn && activeIdx !== lastActive) {
        try {
          const roots2 = [523.25,587.33,659.25,698.46,783.99,880.0];
          const f = roots2[Math.min(activeIdx, roots2.length-1)];
          bell(f, 0.08, 2.2);
          setTimeout(() => soundOn && bell(f*1.25, 0.05, 1.8), 90);
        } catch(e) {}
      }
      lastActive = activeIdx;
    };

    const requestTick = () => {
      if (!ticking) { ticking=true; requestAnimationFrame(() => { onScroll(); ticking=false; }); }
    };
    const handleResize = () => {
      vh = window.innerHeight;
      const m = window.innerWidth < 880;
      const links = root.querySelector("[data-navlinks]") as HTMLElement | null;
      const dotsWrap = root.querySelector("[data-dotswrap]") as HTMLElement | null;
      if (links)    links.style.display    = m ? "none" : "flex";
      if (dotsWrap) dotsWrap.style.display = m ? "none" : "flex";
      onScroll();
    };

    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", handleResize);
    handleResize();
    onScroll();

    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="pp-root" style={s({ position:"relative", background:"#141009", color:"#F6F1E7", fontFamily:"'Manrope',system-ui,sans-serif", overflowX:"clip" })}>

      {/* Custom cursor glow */}
      <div data-cursor="" style={s({ position:"fixed", left:0, top:0, width:540, height:540, marginLeft:-270, marginTop:-270, borderRadius:"50%", background:"radial-gradient(circle,rgba(212,168,90,.13),rgba(201,130,50,.05) 42%,transparent 70%)", pointerEvents:"none", zIndex:95, opacity:0, transition:"opacity .35s ease", mixBlendMode:"screen" })} />

      {/* Film grain overlay */}
      <div style={s({ position:"fixed", inset:0, pointerEvents:"none", zIndex:96, opacity:0.05, mixBlendMode:"overlay", backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`, backgroundSize:"170px 170px" })} />

      {/* ── NAV ── */}
      <nav data-nav="" style={s({ position:"fixed", top:0, left:0, right:0, zIndex:100, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"26px clamp(20px,5vw,64px)", transition:"background .5s ease,padding .4s ease,border-color .5s ease", borderBottom:"1px solid transparent" })}>
        <a href="#" data-target="top" style={s({ display:"flex", alignItems:"center", gap:11, textDecoration:"none", color:"#F6F1E7" })}>
          <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
            <path d="M2.2 24.5 V11 a8.8 8.8 0 0 1 17.6 0 V24.5" stroke="#D4A85A" strokeWidth="1.5"/>
            <path d="M11 24.5 V6.5" stroke="#D4A85A" strokeWidth="1" opacity=".55"/>
            <circle cx="11" cy="11.2" r="1.9" fill="#D4A85A"/>
          </svg>
          <span style={s({ font:"500 21px/1 'Cormorant Garamond',serif", letterSpacing:".01em" })}>
            Paper <span style={{ color:"#D4A85A", fontStyle:"italic" }}>Portals</span>
          </span>
        </a>

        <div data-navlinks="" style={s({ display:"flex", alignItems:"center", gap:"clamp(20px,2.6vw,36px)" })}>
          {[["Discover","discover"],["Sell","yourturn"],["How It Works","journey"],["Sustainability","impact"],["Community","magic"]].map(([label, target]) => (
            <a key={target} href="#" data-target={target} style={s({ font:"600 12px 'Manrope'", letterSpacing:".14em", textTransform:"uppercase", color:"rgba(246,241,231,.82)", textDecoration:"none", transition:"color .25s" })}>{label}</a>
          ))}
        </div>

        <button data-sound="" aria-pressed="false" style={s({ display:"flex", alignItems:"center", gap:8, background:"transparent", border:"1px solid rgba(246,241,231,.2)", color:"rgba(246,241,231,.7)", padding:"8px 15px", borderRadius:30, cursor:"pointer", font:"600 11px 'Manrope'", letterSpacing:".13em", transition:"all .3s" })}>
          <span data-soff="" style={{ display:"flex" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
          </span>
          <span data-son="" style={{ display:"none" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          </span>
          <span>SOUND</span>
        </button>
      </nav>

      {/* Side navigation dots */}
      <div data-dotswrap="" style={s({ position:"fixed", right:24, top:"50%", transform:"translateY(-50%)", zIndex:90, display:"flex", flexDirection:"column", gap:14 })}>
        {["spark","journey","impact","magic","yourturn","discover"].map((scene) => (
          <button key={scene} data-dot={scene} style={s({ width:9, height:9, borderRadius:"50%", background:"rgba(246,241,231,.28)", border:"none", padding:0, cursor:"pointer", transition:"all .3s" })} />
        ))}
      </div>

      {/* ══════════════════════════════════════════
          SCENE 1 — THE SPARK / HERO
      ══════════════════════════════════════════ */}
      <section data-scene="spark" style={{ position:"relative", height:"340vh" }}>
        <div style={s({ position:"sticky", top:0, height:"100vh", overflow:"hidden" })}>
          <div data-fx="" data-scale-from="1.08" data-scale-to="1.32" style={s({ position:"absolute", inset:"-5%", backgroundImage:"url('/images/hero.png')", backgroundPosition:"center 30%", backgroundSize:"cover", backgroundRepeat:"no-repeat", willChange:"transform" })} />
          <div style={s({ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(18,13,7,.62) 0%,rgba(18,13,7,.18) 32%,rgba(18,13,7,.5) 72%,rgba(18,13,7,.95) 100%)" })} />
          <div style={s({ position:"absolute", inset:0, background:"radial-gradient(115% 80% at 50% 42%,transparent 40%,rgba(12,9,5,.7) 100%)" })} />
          <div data-dust="18" data-tint="rgba(212,168,90,.7)" style={s({ position:"absolute", inset:0, pointerEvents:"none" })} />
          <div data-pages="13" data-fx="" data-rise="80" style={s({ position:"absolute", inset:0, pointerEvents:"none" })} />

          {/* Title block */}
          <div data-fx="" data-fade-out="0.12" data-zoom="1,1.55" style={s({ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:24, willChange:"transform" })}>
            <div style={s({ font:"600 13px 'Manrope'", letterSpacing:".42em", textTransform:"uppercase", color:"#D4A85A", marginBottom:26 })}>Second-hand books · Endless worlds</div>
            <h1 style={s({ margin:0, font:"500 clamp(56px,11.5vw,156px)/1.04 'Cormorant Garamond',serif", color:"#F6F1E7", letterSpacing:"-.01em" })}>
              Paper <span style={{ fontStyle:"italic", color:"#D4A85A" }}>Portals</span>
            </h1>
            <p style={s({ margin:"clamp(48px,8vh,88px) 0 0", font:"italic 400 clamp(18px,2.4vw,30px)/1.4 'Cormorant Garamond',serif", color:"rgba(246,241,231,.88)" })}>
              Every book opens a new world.
            </p>
          </div>

          {/* Sub-headline */}
          <div data-fx="" data-fade-in="0.24" data-fade-out="0.88" data-ty="64" data-zoom="0.82,1.08" style={s({ position:"absolute", left:0, right:0, bottom:"clamp(80px,13vh,150px)", padding:"0 clamp(24px,7vw,110px)", opacity:0, transformOrigin:"left bottom" })}>
            <h2 style={s({ margin:0, maxWidth:"14ch", font:"500 clamp(38px,6.4vw,98px)/1.0 'Cormorant Garamond',serif", color:"#F6F1E7", letterSpacing:"-.01em" })}>Every book holds a world inside.</h2>
            <p style={s({ margin:"24px 0 0", maxWidth:"46ch", font:"300 clamp(15px,1.4vw,20px)/1.7 'Manrope'", color:"rgba(246,241,231,.72)" })}>A reader opens an old book. As the pages turn, castles, clouds and entire skies spill out — the book becomes a portal.</p>
          </div>

          {/* Scroll cue */}
          <div data-fx="" data-fade-out="0.07" style={s({ position:"absolute", bottom:30, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:12 })}>
            <span style={s({ font:"600 10px 'Manrope'", letterSpacing:".3em", textTransform:"uppercase", color:"rgba(246,241,231,.6)" })}>Scroll</span>
            <div style={s({ position:"relative", width:1, height:46, background:"rgba(246,241,231,.25)", overflow:"hidden" })}>
              <span style={s({ position:"absolute", left:-1, top:0, width:3, height:14, borderRadius:2, background:"#D4A85A", animation:"ppBob 2.4s ease-in-out infinite" })} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SCENE 2 — THE JOURNEY
      ══════════════════════════════════════════ */}
      <section data-scene="journey" style={{ position:"relative", height:"400vh" }}>
        <div style={s({ position:"sticky", top:0, height:"100vh", overflow:"hidden" })}>
          <div data-fx="" data-scale-from="1.05" data-scale-to="1.2" style={s({ position:"absolute", inset:"-5%", backgroundImage:"url('/images/book_transfer.png')", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", willChange:"transform" })} />
          <div style={s({ position:"absolute", inset:0, background:"linear-gradient(105deg,rgba(16,20,14,.88) 0%,rgba(16,20,14,.45) 42%,rgba(16,20,14,.15) 70%,rgba(16,20,14,.4) 100%)" })} />
          <div style={s({ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(14,11,7,.4),transparent 30%,rgba(14,11,7,.85))" })} />
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" style={s({ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" })}>
            <path data-thread="" pathLength="1" d="M 300 560 Q 500 430 720 540" fill="none" stroke="#D4A85A" strokeWidth="2.4" strokeLinecap="round" style={{ strokeDasharray:1, strokeDashoffset:1, opacity:0, filter:"drop-shadow(0 0 7px rgba(212,168,90,.95))" } as React.CSSProperties} />
          </svg>

          <div data-fx="" data-fade-in="0.14" data-fade-out="0.92" data-ty="60" style={s({ position:"absolute", left:0, bottom:"clamp(80px,13vh,150px)", padding:"0 clamp(24px,7vw,110px)", opacity:0 })}>
            <h2 style={s({ margin:0, maxWidth:"15ch", font:"500 clamp(36px,6vw,92px)/1.02 'Cormorant Garamond',serif", color:"#F6F1E7", letterSpacing:"-.01em" })}>Stories travel further when shared.</h2>
            <p style={s({ margin:"24px 0 0", maxWidth:"44ch", font:"300 clamp(15px,1.4vw,20px)/1.7 'Manrope'", color:"rgba(246,241,231,.74)" })}>One reader finishes a story. Another begins. The book changes hands, and a glowing thread connects every chapter that came before.</p>
          </div>

          <div data-fx="" data-fade-in="0.24" data-fade-out="0.9" data-par="120" style={s({ position:"absolute", top:"clamp(120px,18vh,210px)", right:"clamp(24px,6vw,90px)", maxWidth:300, textAlign:"right", opacity:0 })}>
            <p style={s({ margin:0, font:"italic 500 clamp(18px,2vw,26px)/1.45 'Cormorant Garamond',serif", color:"rgba(246,241,231,.9)" })}>
              &ldquo;I found my favourite line in someone else&apos;s margins.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SCENE 3 — THE IMPACT
      ══════════════════════════════════════════ */}
      <section data-scene="impact" style={{ position:"relative", height:"340vh" }}>
        <div style={s({ position:"sticky", top:0, height:"100vh", overflow:"hidden" })}>
          <div data-fx="" data-scale-from="1.06" data-scale-to="1.22" style={s({ position:"absolute", inset:"-5%", backgroundImage:"url('/images/sustainability.png')", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", willChange:"transform" })} />
          <div style={s({ position:"absolute", inset:0, background:"linear-gradient(95deg,rgba(13,20,12,.85) 0%,rgba(13,20,12,.35) 45%,rgba(13,20,12,.1) 72%,rgba(13,20,12,.55) 100%)" })} />
          <div style={s({ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(11,11,7,.4),transparent 28%,rgba(11,11,7,.9))" })} />
          <div data-dust="14" data-tint="rgba(150,190,120,.55)" style={s({ position:"absolute", inset:0, pointerEvents:"none" })} />

          <div data-fx="" data-fade-in="0.18" data-fade-out="0.86" data-ty="58" style={s({ position:"absolute", left:0, top:"clamp(110px,20vh,220px)", padding:"0 clamp(24px,7vw,110px)", opacity:0 })}>
            <h2 style={s({ margin:0, maxWidth:"14ch", font:"500 clamp(36px,6vw,92px)/1.02 'Cormorant Garamond',serif", color:"#F6F1E7", letterSpacing:"-.01em" })}>Every reused book gives back to the planet.</h2>
            <p style={s({ margin:"24px 0 0", maxWidth:"42ch", font:"300 clamp(15px,1.4vw,20px)/1.7 'Manrope'", color:"rgba(246,241,231,.74)" })}>When knowledge circulates, fewer trees fall and less is wasted. Sustainability and stories move together.</p>
          </div>

          <div data-fx="" data-fade-in="0.32" data-fade-out="0.88" data-ty="40" style={s({ position:"absolute", right:"clamp(24px,6vw,90px)", bottom:"clamp(70px,12vh,130px)", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(22px,3vw,48px)", opacity:0 })}>
            {[["12450","Trees saved"],["3200000","Litres of water"],["1850000","kg CO₂ reduced"],["2150000","kWh energy saved"]].map(([count, label]) => (
              <div key={label}>
                <div style={{ width:30, height:1, background:"rgba(212,168,90,.7)", marginBottom:12 }} />
                <div data-count={count} style={s({ font:"500 clamp(34px,4.4vw,62px)/1 'Cormorant Garamond',serif", color:"#F6F1E7" })}>0</div>
                <div style={s({ marginTop:8, font:"600 11px 'Manrope'", letterSpacing:".16em", textTransform:"uppercase", color:"rgba(246,241,231,.62)" })}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SCENE 4 — THE MAGIC LIVES ON
      ══════════════════════════════════════════ */}
      <section data-scene="magic" style={{ position:"relative", height:"320vh" }}>
        <div style={s({ position:"sticky", top:0, height:"100vh", overflow:"hidden" })}>
          <div data-fx="" data-scale-from="1.05" data-scale-to="1.2" data-par="60" style={s({ position:"absolute", inset:"-7%", backgroundImage:"url('/images/read_together.png')", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", willChange:"transform" })} />
          <div style={s({ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(16,14,9,.5) 0%,transparent 30%,rgba(16,14,9,.35) 60%,rgba(16,14,9,.95) 100%)" })} />
          <div data-dust="16" data-tint="rgba(212,168,90,.6)" style={s({ position:"absolute", inset:0, pointerEvents:"none" })} />
          <div data-pages="9" data-fx="" data-rise="60" style={s({ position:"absolute", inset:0, pointerEvents:"none" })} />

          <div data-fx="" data-fade-in="0.3" data-fade-out="0.78" data-par="100" style={s({ position:"absolute", left:"clamp(24px,6vw,90px)", top:"clamp(120px,18vh,200px)", maxWidth:280, opacity:0 })}>
            <p style={s({ margin:0, font:"italic 500 clamp(17px,1.9vw,24px)/1.5 'Cormorant Garamond',serif", color:"rgba(246,241,231,.9)" })}>
              &ldquo;A book is the only place a stranger can leave you a gift.&rdquo;
            </p>
          </div>

          <div data-fx="" data-fade-in="0.24" data-fade-out="0.86" data-ty="60" style={s({ position:"absolute", left:0, right:0, bottom:"clamp(80px,13vh,150px)", padding:"0 clamp(24px,7vw,110px)", textAlign:"center", opacity:0 })}>
            <h2 style={s({ margin:"0 auto", maxWidth:"16ch", font:"500 clamp(38px,6.2vw,96px)/1.0 'Cormorant Garamond',serif", color:"#F6F1E7", letterSpacing:"-.01em" })}>Shared stories build new worlds.</h2>
            <p style={s({ margin:"24px auto 0", maxWidth:"48ch", font:"300 clamp(15px,1.4vw,20px)/1.7 'Manrope'", color:"rgba(246,241,231,.74)" })}>Books create communities. Readers connect across generations, ideas spread, and imagination multiplies.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SCENE 5 — YOUR TURN
      ══════════════════════════════════════════ */}
      <section data-scene="yourturn" style={{ position:"relative", height:"280vh" }}>
        <div style={s({ position:"sticky", top:0, height:"100vh", overflow:"hidden" })}>
          <div data-fx="" data-scale-from="1.12" data-scale-to="1.26" style={s({ position:"absolute", inset:"-5%", backgroundImage:"url('/images/new_chapter.png')", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", willChange:"transform" })} />
          <div style={s({ position:"absolute", inset:0, background:"radial-gradient(110% 90% at 50% 55%,rgba(14,10,6,.35) 30%,rgba(14,10,6,.88) 100%)" })} />
          <div style={s({ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(14,10,6,.6),transparent 30%,rgba(14,10,6,.7))" })} />
          <div data-dust="16" data-tint="rgba(212,168,90,.7)" style={s({ position:"absolute", inset:0, pointerEvents:"none" })} />

          <div data-fx="" data-fade-in="0.16" data-fade-out="0.92" data-ty="50" style={s({ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:24, opacity:0 })}>
            <h2 style={s({ margin:0, maxWidth:"16ch", font:"500 clamp(42px,7vw,108px)/0.98 'Cormorant Garamond',serif", color:"#F6F1E7", letterSpacing:"-.01em" })}>Give a book its next chapter.</h2>
            <p style={s({ margin:"26px 0 0", maxWidth:"40ch", font:"300 clamp(15px,1.4vw,20px)/1.7 'Manrope'", color:"rgba(246,241,231,.78)" })}>Buy. Sell. Exchange. Keep the story moving — and become part of an endless one.</p>
            <div style={s({ marginTop:40, display:"flex", flexWrap:"wrap", gap:16, justifyContent:"center" })}>
              <a href="#discover" data-target="discover" style={s({ display:"inline-flex", alignItems:"center", gap:10, background:"#D4A85A", color:"#1a140b", textDecoration:"none", font:"700 13px 'Manrope'", letterSpacing:".1em", textTransform:"uppercase", padding:"17px 34px", borderRadius:40, animation:"ppGlow 4.5s ease-in-out infinite", transition:"transform .25s" })}>Explore Books →</a>
              <a href="#discover" data-target="discover" style={s({ display:"inline-flex", alignItems:"center", gap:10, background:"transparent", color:"#F6F1E7", textDecoration:"none", font:"700 13px 'Manrope'", letterSpacing:".1em", textTransform:"uppercase", padding:"17px 34px", borderRadius:40, border:"1px solid rgba(246,241,231,.45)", transition:"all .25s" })}>Sell Your Books</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DISCOVER — MARKETPLACE
      ══════════════════════════════════════════ */}
      <section data-scene="discover" id="discover" style={s({ position:"relative", background:"#efe6d3", color:"#2a2118", padding:"clamp(70px,10vw,140px) clamp(24px,7vw,110px) 0" })}>
        <div style={s({ position:"absolute", inset:0, pointerEvents:"none", opacity:.5, background:"radial-gradient(120% 60% at 50% 0%,rgba(212,168,90,.18),transparent 60%)" })} />
        <div style={s({ position:"relative", maxWidth:1240, margin:"0 auto" })}>

          {/* Header */}
          <div style={s({ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:24 })}>
            <div>
              <div style={s({ font:"600 12px 'Manrope'", letterSpacing:".32em", textTransform:"uppercase", color:"#6B4F3A", marginBottom:18 })}>The Marketplace</div>
              <h2 style={s({ margin:0, font:"500 clamp(38px,5.5vw,76px)/1 'Cormorant Garamond',serif", letterSpacing:"-.01em" })}>Find your next chapter.</h2>
              <p style={s({ margin:"18px 0 0", maxWidth:"48ch", font:"400 clamp(15px,1.3vw,18px)/1.7 'Manrope'", color:"rgba(42,33,24,.65)" })}>Thousands of well-loved books, each waiting for a new reader. Every purchase keeps a story — and a little of the planet — alive.</p>
            </div>
          </div>

          {/* Genre chips */}
          <div data-chips="" style={s({ display:"flex", flexWrap:"wrap", gap:11, marginTop:38 })}>
            {["All","Fiction","Classics","Sci-Fi & Fantasy","Nonfiction","Poetry"].map((chip, i) => (
              <button key={chip} data-chip="" {...(i===0 ? {"data-active":""} : {})} style={s({ font:"600 12px 'Manrope'", letterSpacing:".08em", padding:"10px 20px", borderRadius:30, cursor:"pointer", border: i===0 ? "1px solid #2F4F3A" : "1px solid rgba(42,33,24,.22)", background: i===0 ? "#2F4F3A" : "transparent", color: i===0 ? "#F6F1E7" : "rgba(42,33,24,.7)", transition:"all .25s" })}>{chip}</button>
            ))}
          </div>

          {/* Book cards */}
          <div style={s({ marginTop:44, display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))", gap:"clamp(24px,2.6vw,40px)" })}>
            {BOOKS.map((book) => (
              <div key={book.title}>
                <div data-tilt="" style={s({ position:"relative", aspectRatio:"2/3", borderRadius:4, background:book.bg, boxShadow:"0 18px 36px rgba(20,16,9,.28)", transition:"transform .35s cubic-bezier(.2,.7,.2,1)", cursor:"pointer", overflow:"hidden" })}>
                  <div style={s({ position:"absolute", left:0, top:0, bottom:0, width:10, background:"linear-gradient(to right,rgba(0,0,0,.4),rgba(255,255,255,.07))" })} />
                  <div style={s({ position:"absolute", inset:13, border:`1px solid ${book.border}`, borderRadius:2 })} />
                  <span style={s({ position:"absolute", top:14, right:14, font:"700 8px 'Manrope'", letterSpacing:".12em", color:book.badgeText, background:book.badge, padding:"4px 8px", borderRadius:20 })}>{book.condition.toUpperCase()}</span>
                  <div style={s({ position:"absolute", inset:0, display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center", textAlign:"center", padding:"34px 18px 22px" })}>
                    <span style={s({ font:"600 8px 'Manrope'", letterSpacing:".22em", color:book.logo })}>PAPER PORTALS</span>
                    <span style={s({ display:"flex", flexDirection:"column", alignItems:"center", gap:10 })}>
                      <span style={s({ font:`500 ${book.titleSize}/1.05 'Cormorant Garamond',serif`, color:"#F6F1E7" })}>{book.title}</span>
                      <span style={{ width:22, height:1, background:book.line, display:"block" }} />
                    </span>
                    <span style={s({ font:"600 9px 'Manrope'", letterSpacing:".18em", textTransform:"uppercase", color:book.authorColor })}>{book.author}</span>
                  </div>
                </div>
                <div style={s({ marginTop:14, display:"flex", justifyContent:"space-between", alignItems:"baseline", gap:8 })}>
                  <span style={s({ font:"600 14px 'Manrope'", color:"#2a2118" })}>{book.title}</span>
                  <span style={s({ font:"700 14px 'Manrope'", color:"#6B4F3A", whiteSpace:"nowrap" })}>{book.price}</span>
                </div>
                <div style={s({ marginTop:5, display:"flex", alignItems:"center", gap:7, font:"500 11px 'Manrope'", color:"rgba(42,33,24,.58)" })}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:book.dot, display:"inline-block" }} />
                  {book.condition} · from {book.seller}
                </div>
              </div>
            ))}
          </div>

          {/* Browse all CTA */}
          <div style={s({ display:"flex", justifyContent:"center", marginTop:56 })}>
            <a href="#" style={s({ display:"inline-flex", alignItems:"center", gap:10, background:"#2F4F3A", color:"#F6F1E7", textDecoration:"none", font:"700 13px 'Manrope'", letterSpacing:".1em", textTransform:"uppercase", padding:"16px 34px", borderRadius:40, transition:"all .25s" })}>Browse the full library →</a>
          </div>

          {/* Footer */}
          <footer style={s({ marginTop:"clamp(70px,9vw,120px)", borderTop:"1px solid rgba(42,33,24,.14)", padding:"38px 0", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:20 })}>
            <div style={s({ display:"flex", alignItems:"center", gap:11 })}>
              <svg width="20" height="24" viewBox="0 0 22 26" fill="none">
                <path d="M2.2 24.5 V11 a8.8 8.8 0 0 1 17.6 0 V24.5" stroke="#6B4F3A" strokeWidth="1.5"/>
                <path d="M11 24.5 V6.5" stroke="#6B4F3A" strokeWidth="1" opacity=".55"/>
                <circle cx="11" cy="11.2" r="1.9" fill="#6B4F3A"/>
              </svg>
              <span style={s({ font:"500 19px/1 'Cormorant Garamond',serif", color:"#2a2118" })}>
                Paper <span style={{ fontStyle:"italic", color:"#6B4F3A" }}>Portals</span>
              </span>
            </div>
            <p style={s({ margin:0, font:"italic 500 clamp(15px,1.6vw,20px) 'Cormorant Garamond',serif", color:"rgba(42,33,24,.7)" })}>
              Every book deserves another chapter.
            </p>
            <span style={s({ font:"500 12px 'Manrope'", letterSpacing:".06em", color:"rgba(42,33,24,.45)" })}>© 2026 Paper Portals</span>
          </footer>
        </div>
      </section>
    </div>
  );
}
