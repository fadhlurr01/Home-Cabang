import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv || !cv.getContext) return;
    const ctx = cv.getContext('2d');
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, DPR = 1;
    let nodes = [], hubs = [], pulses = [];
    let mouseX = 0.5, mouseY = 0.4, mX = 0.5, mY = 0.4;
    let t0 = performance.now(), nextPulse = 1.2, raf = null;
    let COL = {};

    function palette() {
      const dark = document.body.classList.contains('dark');
      COL = dark ? {
        node: ['rgba(103,232,249,', 'rgba(244,63,94,', 'rgba(20,184,166,'],
        hub:  ['rgba(103,232,249,', 'rgba(244,63,94,', 'rgba(20,184,166,'],
        link: 'rgba(20,184,166,',
        pulse: 'rgba(244,63,94,'
      } : {
        node: ['rgba(13,85,104,', 'rgba(239,68,68,', 'rgba(20,114,133,'],
        hub:  ['rgba(13,85,104,', 'rgba(239,68,68,', 'rgba(20,114,133,'],
        link: 'rgba(13,85,104,',
        pulse: 'rgba(239,68,68,'
      };
    }

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      cv.width = Math.floor(W * DPR);
      cv.height = Math.floor(H * DPR);
      cv.style.width = W + 'px';
      cv.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      palette();
      initGraph();
    }

    function initGraph() {
      nodes = [];
      hubs = [];
      pulses = [];
      const count = Math.max(16, Math.min(42, Math.floor((W * H) / 38000)));
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 1.5 + Math.random() * 2,
          c: Math.floor(Math.random() * 3),
          phase: Math.random() * Math.PI * 2
        });
      }

      const hubCount = Math.max(3, Math.min(7, Math.floor(W / 240)));
      for (let h = 0; h < hubCount; h++) {
        hubs.push({
          x: (W * (h + 1)) / (hubCount + 1) + (Math.random() - 0.5) * 80,
          y: H * 0.25 + Math.random() * (H * 0.5),
          r: 4.5 + Math.random() * 2.5,
          orbit: 35 + Math.random() * 45,
          speed: (Math.random() > 0.5 ? 1 : -1) * (0.0004 + Math.random() * 0.0004),
          angle: Math.random() * Math.PI * 2,
          c: h % 3
        });
      }
    }

    function step(now) {
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;
      mX += (mouseX - mX) * 0.05;
      mY += (mouseY - mY) * 0.05;

      ctx.clearRect(0, 0, W, H);
      palette();

      // Draw links
      const maxD = Math.min(180, Math.max(110, W * 0.15));
      const maxD2 = maxD * maxD;
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxD2) {
            const alpha = (1 - Math.sqrt(d2) / maxD) * 0.18;
            ctx.strokeStyle = COL.link + alpha + ')';
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -20) n.x = W + 20;
          if (n.x > W + 20) n.x = -20;
          if (n.y < -20) n.y = H + 20;
          if (n.y > H + 20) n.y = -20;
        }
        ctx.fillStyle = COL.node[n.c] + '0.65)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw hubs
      for (let h = 0; h < hubs.length; h++) {
        const hb = hubs[h];
        if (!reduced) hb.angle += hb.speed * (1000 * dt);
        const hx = hb.x + Math.cos(hb.angle) * hb.orbit;
        const hy = hb.y + Math.sin(hb.angle) * (hb.orbit * 0.6);

        ctx.fillStyle = COL.hub[hb.c] + '0.85)';
        ctx.beginPath();
        ctx.arc(hx, hy, hb.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = COL.hub[hb.c] + '0.25)';
        ctx.beginPath();
        ctx.arc(hx, hy, hb.r + 6, 0, Math.PI * 2);
        ctx.stroke();
      }

      raf = requestAnimationFrame(step);
    }

    const onMove = (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    resize();
    raf = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="branch-net-wrap" id="branchNetWrap" aria-hidden="true">
      <div className="bg-aurora bg-aurora-1"></div>
      <div className="bg-aurora bg-aurora-2"></div>
      <div className="bg-aurora bg-aurora-3"></div>
      <div className="bg-ring bg-ring-1"></div>
      <div className="bg-ring bg-ring-2"></div>
      <div className="bg-ring bg-ring-3"></div>
      <canvas className="branch-net" id="bgCanvas" ref={canvasRef} aria-hidden="true" />
    </div>
  );
}

