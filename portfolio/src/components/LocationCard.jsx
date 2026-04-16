import { useState, useRef, useEffect } from "react";

export default function LocationCard() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const start = useRef({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    dragging.current = true;
    start.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
    e.preventDefault();
  };

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      setOffset({
        x: Math.max(-80, Math.min(80, e.clientX - start.current.x)),
        y: Math.max(-40, Math.min(40, e.clientY - start.current.y)),
      });
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  // Grid lines
  const lines = [];
  for (let i = 0; i <= 10; i++) {
    lines.push(
      <line key={"h" + i} x1="0" y1={i * 18} x2="500" y2={i * 18}
        stroke="currentColor" strokeWidth=".4" />
    );
    lines.push(
      <line key={"v" + i} x1={i * 50} y1="0" x2={i * 50} y2="200"
        stroke="currentColor" strokeWidth=".4" />
    );
  }

  return (
    <div className="dash-cell location-card" onMouseDown={onMouseDown}>
      <div className="dash-label">location</div>
      <div className="map-canvas">
        <svg
          viewBox={`${-offset.x} ${-offset.y} 400 140`}
          style={{ color: "var(--fg3)", opacity: .5 }}
        >
          {lines}
          {/* Landmass blobs */}
          <rect x="40"  y="18" width="110" height="55" rx="6" fill="var(--bg2)" stroke="var(--fg3)" strokeWidth=".3" />
          <rect x="162" y="28" width="80"  height="42" rx="5" fill="var(--bg2)" stroke="var(--fg3)" strokeWidth=".3" />
          <rect x="15"  y="85" width="65"  height="28" rx="4" fill="var(--bg2)" stroke="var(--fg3)" strokeWidth=".3" />
          <rect x="120" y="82" width="95"  height="32" rx="4" fill="var(--bg2)" stroke="var(--fg3)" strokeWidth=".3" />
          <rect x="230" y="75" width="75"  height="40" rx="4" fill="var(--bg2)" stroke="var(--fg3)" strokeWidth=".3" />
          {/* Pin */}
          <circle cx="108" cy="47" r="4" fill="var(--green)" opacity="1" />
          <circle cx="108" cy="47" r="10" fill="var(--green)" opacity=".15" />
          <circle cx="108" cy="47" r="18" fill="var(--green)" opacity=".06" />
        </svg>
        <span className="map-hint">drag</span>
      </div>
      <div className="loc-label">
        <span className="loc-dot" />
        Randolph, Massachusetts
      </div>
    </div>
  );
}