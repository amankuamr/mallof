"use client";

const cardStyle = {
  background: "rgba(100, 100, 100, 0.30)",
  borderRadius: 18,
  border: "1.5px solid rgba(255,255,255,0.5)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
  backdropFilter: "blur(40px)",
  WebkitBackdropFilter: "blur(40px)",
  color: "#fff",
  fontFamily: "'Inter', 'Roboto', sans-serif",
};

function PoweredByCard() {
  return (
    <div
      style={{
        ...cardStyle,
        padding: 28,
        width: 300,
        height: 650,
        textAlign: "center",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Sponsors Sequence as per provided order */}
      <div style={{
        width: '100%',
        fontWeight: 900,
        fontSize: 15,
        color: '#FFD700',
        marginBottom: 16,
        letterSpacing: 1.5,
        textAlign: 'left',
        textTransform: 'uppercase',
        fontFamily: 'Inter, Roboto, sans-serif',
        borderLeft: '3px solid #FFD700',
        padding: '1px 0 1px 10px',
        boxShadow: '0 1px 4px 0 rgba(255,215,0,0.08)'
      }}>
        Title Sponsor
      </div>
      <div style={{ width: '100%', height: 100, minHeight: 60, background: '#fff', borderRadius: 12, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: 1, overflow: 'hidden' }}>
      <img src="/images/logoes/singhania.jpeg" alt="Singhania Motors Title Sponsor" style={{ maxHeight: '80%', maxWidth: '80%', objectFit: 'contain', display: 'block' }} />
      </div>
      <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.18)', margin: '8px 0 8px 0', borderRadius: 1 }} />
      <div style={{marginTop: 8}}>
        <div style={{
          width: '100%',
          fontWeight: 900,
          fontSize: 15,
          color: '#1E90FF',
          marginBottom: 10,
          letterSpacing: 1.5,
          textAlign: 'left',
          textTransform: 'uppercase',
          fontFamily: 'Inter, Roboto, sans-serif',
          borderLeft: '3px solid #1E90FF',
          padding: '1px 0 1px 10px',
          boxShadow: '0 1px 4px 0 rgba(30,144,255,0.08)'
        }}>
          Co Sponsors
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div style={{ width: '100%', height: 40, background: '#fff', borderRadius: 10, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.5, overflow: 'hidden' }}>
              <img src="/images/logoes/plug.jpeg" alt="Plug Co Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div style={{ width: '100%', height: 40, background: '#fff', borderRadius: 10, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.5, overflow: 'hidden' }}>
              <img src="/images/logoes/geetanjali.png" alt="Geetanjali Co Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div style={{ width: '100%', height: 40, background: '#000', borderRadius: 10, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.5, overflow: 'hidden' }}>
              <img src="/images/logoes/spykar.jpeg" alt="Spykar Co Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div style={{ width: '100%', height: 40, background: '#e8eaf6', borderRadius: 10, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.5, overflow: 'hidden' }}>
              <img src="/images/logoes/starc.jpeg" alt="Starcade Co Sponsor" style={{ width: '90%', height: '90%', objectFit: 'contain', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.18)', margin: '8px 0 8px 0', borderRadius: 1 }} />
      <div style={{
        width: '100%',
        fontWeight: 900,
        fontSize: 15,
        color: '#3CB371',
        margin: '16px 0 10px 0',
        letterSpacing: 1.5,
        textAlign: 'left',
        textTransform: 'uppercase',
        fontFamily: 'Inter, Roboto, sans-serif',
        borderLeft: '3px solid #3CB371',
        padding: '1px 0 1px 10px',
        boxShadow: '0 1px 4px 0 rgba(60,179,113,0.08)'
      }}>
        Sponsors
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#363436', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/vanhausen.jpeg" alt="VH Women Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#363436', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/vanhausen.jpeg" alt="VH Men Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#fff', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/crocs.jpeg" alt="Crocs Sponsor" style={{ width: '160%', height: '160%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#071338', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/dunki.png" alt="Dhunki Sponsor" style={{ width: '170%', height: '170%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#fff', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/sunglass.jpeg" alt="Sunglass Hut Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#284531', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/brewhau.jpeg" alt="Brew Haus Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#a0a0a0', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/fashioncase.jpeg" alt="Fashion Case Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#fff', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/hidesign.jpeg" alt="Hi-Design Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#000', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/renee.jpeg" alt="Renee Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#000', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/max.jpeg" alt="Max Sponsor" style={{ width: '90%', height: '90%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#070709', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/lord of drinks.jpeg" alt="LOD Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#fff', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/Lazeez.png" alt="Lazeez Affaire Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#fbc8c5', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/tickled.jpeg" alt="Tickled Pink Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#fff', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/newu.jpeg" alt="New U Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: '100%', height: 32, background: '#20211f', borderRadius: 8, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, color: '#fff', letterSpacing: 0.2, overflow: 'hidden' }}>
            <img src="/images/logoes/bella vita.jpeg" alt="Bellavita Sponsor" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
                  </div>
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
// Import as .js because playerData.js is not a TypeScript module
// @ts-ignore: Importing JS module in TS file
import { players } from "./playerData.js";
import getFirebaseDb from "./firebaseConfig";
import { ref, onValue } from "firebase/database";

// Define Player type if not already defined
interface Player {
  name: string;
  number: string;
}

type WinnerTablesProps = {
  blur: boolean;
  filterDigits?: string;
};

function WinnerTables({ blur, filterDigits }: WinnerTablesProps) {
  // Filter players by last digits if filterDigits is provided
  let filtered: Player[] = players as Player[];
  if (filterDigits && filterDigits.length > 0) {
    const reversed = filterDigits.split('').reverse().join('');
    filtered = players.filter((p: Player) => p.number.endsWith(reversed));
  }
  // Dynamically split players between left and right tables
  const mid = Math.ceil(filtered.length / 2);
  const left = filtered.slice(0, mid).map((p, idx) => ({ rank: idx + 1, ...p }));
  const right = filtered.slice(mid).map((p, idx) => ({ rank: mid + idx + 1, ...p }));
  // Refs for scrollable divs
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    const scrollDiv = (ref: React.RefObject<HTMLDivElement | null>): void => {
      if (!ref.current) return;
      let el = ref.current;
      let end = el.scrollHeight - el.clientHeight;
      if (end <= 0) return;
      let duration = 15000; // ms (slower scroll)
      let delay = 5000; // ms
      let direction = 1; // 1: down, -1: up
      function startScroll(): void {
        let start = direction === 1 ? 0 : end;
        let target = direction === 1 ? end : 0;
        let startTime: number | null = null;
        function animateScroll(ts: number): void {
          if (!startTime) startTime = ts;
          let progress = Math.min((ts - startTime) / duration, 1);
          el.scrollTop = start + (target - start) * progress;
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            direction *= -1;
            setTimeout(startScroll, delay);
          }
        }
        requestAnimationFrame(animateScroll);
      }
      el.scrollTop = 0;
      setTimeout(startScroll, delay);
    };
    scrollDiv(leftRef);
    scrollDiv(rightRef);
  }, [filtered]);

  const avatar = "https://i.imgur.com/UXb3JYj.png";
  const tableHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 10,
    marginBottom: 10,
    borderBottom: "2px solid rgba(255,255,255,0.3)",
    fontWeight: "bold",
  };
  const tableRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  };
  const userInfoStyle = {
    display: "flex",
    alignItems: "center",
    gap: 10,
  };
  const rankStyle = {
    background: "#00c853",
    color: "white",
    width: 22,
    height: 22,
    borderRadius: "50%",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const avatarStyle: React.CSSProperties = {
    width: 30,
    height: 30,
    borderRadius: "50%",
    objectFit: "cover",
  };
  const nameStyle = { fontSize: 14 };
  const numberStyle = { fontSize: 14 };

  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "nowrap", justifyContent: "center", width: "100%" }}>
      {/* Left Table */}
      <div style={{ ...cardStyle, padding: 0, flex: 1, maxHeight: 300, minHeight: 300, margin: 0, position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <div style={{ ...tableHeaderStyle, padding: '24px 24px 10px 24px' }}>
          <span>NAME</span>
          <span>Coupan Code</span>
        </div>
        <div
          ref={leftRef}
          style={{
            flex: 1,
            overflowY: 'auto',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE 10+
          }}
          className="hide-scrollbar"
        >
        {left.map((row, idx) => (
          <div
            style={{
              ...tableRowStyle,
              background: idx % 2 === 0 ? "rgba(255,255,255,0.07)" : "rgba(255,0,0,0.07)",
              padding: 0,
              position: 'relative',
            }}
            key={row.rank}
          >
            <>
              <div style={{ ...userInfoStyle, padding: '8px 24px' }}>
                <div style={rankStyle}>{row.rank}</div>
                <img className="avatar" src={avatar} alt="user" style={avatarStyle} />
                <span style={nameStyle}>{row.name}</span>
              </div>
              <div style={{ ...numberStyle, padding: '8px 24px' }}>{row.number}</div>
            </>
          </div>
        ))}
                </div>
      </div>
      {/* Right Table */}
      <div style={{ ...cardStyle, padding: 0, flex: 1, maxHeight: 300, minHeight: 300, margin: 0, position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <div style={{ ...tableHeaderStyle, padding: '24px 24px 10px 24px' }}>
          <span>NAME</span>
          <span>Coupan Code</span>
        </div>
        <div
          ref={rightRef}
          style={{
            flex: 1,
            overflowY: 'auto',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE 10+
          }}
          className="hide-scrollbar"
        >
        {right.map((row, idx) => (
          <div
            style={{
              ...tableRowStyle,
              background: idx % 2 === 0 ? "rgba(255,255,255,0.07)" : "rgba(255,0,0,0.07)",
              padding: 0,
              position: 'relative',
            }}
            key={row.rank}
          >
            <>
              <div style={{ ...userInfoStyle, padding: '8px 24px' }}>
                <div style={rankStyle}>{row.rank}</div>
                <img className="avatar" src={avatar} alt="user" style={avatarStyle} />
                <span style={nameStyle}>{row.name}</span>
              </div>
              <div style={{ ...numberStyle, padding: '8px 24px' }}>{row.number}</div>
            </>
          </div>
        ))}
                </div>
      </div>
    </div>
  );
}

type WinnersListProps = {
  blur: boolean;
  filterDigits?: string;
};

function WinnersList({ winners }: { winners: Player[] }) {
  // Only render animation on client
  const [isClient, setIsClient] = React.useState(false);
  const [showPartyPop, setShowPartyPop] = React.useState(false);
  const prevWinnersRef = React.useRef<Player[]>([]);

  React.useEffect(() => { setIsClient(true); }, []);

  // Trigger party pop only when a new winner is added
  React.useEffect(() => {
    if (
      prevWinnersRef.current.length < winners.length &&
      winners.length > 0 &&
      (!prevWinnersRef.current.length || prevWinnersRef.current[prevWinnersRef.current.length - 1].number !== winners[winners.length - 1].number)
    ) {
      setShowPartyPop(true);
      setTimeout(() => setShowPartyPop(false), 4000); // Hide after 4 seconds
    }
    prevWinnersRef.current = winners;
  }, [winners]);

  return (
    <div
      style={{
        background: "none",
        boxShadow: "none",
        border: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        width: 300,
        minHeight: 440,
        padding: 0,
        margin: 0,
        marginTop: 0,
        marginRight: 16,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      {/* Lottie script for party pop animation */}
      <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js" type="module"></script>
      <h2
        style={{
          textTransform: "uppercase",
          fontWeight: "bold",
          marginBottom: 0,
          letterSpacing: 2,
        }}
      >
        WINNER
      </h2>
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 7 }}>
        {isClient && showPartyPop && (
          <div
            dangerouslySetInnerHTML={{
              __html: `<dotlottie-wc src="https://lottie.host/d006eb34-837f-4c28-9acf-334d8f00cfc2/YTUllsdRBR.lottie" style="width:300px;height:300px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:2" speed="1" autoplay></dotlottie-wc>`
            }}
          />
        )}
        {(() => {
          const slots = Array(12).fill(null);
          // Reverse the winners so the first is at the bottom
          const reversedWinners = [...winners].reverse();
          const start = Math.max(0, 12 - reversedWinners.length);
          for (let i = 0; i < reversedWinners.length && i < 12; i++) {
            slots[start + i] = reversedWinners[i];
          }
          return slots.map((player, idx) => (
            <div
              key={player ? player.number + idx : 'placeholder-' + idx}
              style={{
                ...cardStyle,
                background: 'rgba(255, 215, 0, 0.35)',
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: 10,
                minHeight: 50,
                maxHeight: 42,
                marginBottom: 0,
                position: "relative",
                zIndex: 1,
                maxWidth: 300,
                width: '100%'
              }}
            >
              {/* Slot number, from bottom (1) to top (12) */}
              <span style={{
                background: '#222',
                color: '#FFD700',
                borderRadius: '50%',
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 15,
                marginRight: 12,
                border: '2px solid #FFD700',
                flexShrink: 0
              }}>{12 - idx}</span>
              <img
                src={"https://i.imgur.com/UXb3JYj.png"}
                alt="player"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 17,
                  marginRight: 10,
                  opacity: player ? 1 : 0.3
                }}
              />
              <span style={{ color: player ? "red" : "#aaa", fontWeight: "bold", fontSize: 13, marginRight: 10 }}>{player ? player.name : '---'}</span>
              <span style={{ fontSize: 11, color: player ? '#222' : '#aaa', background: '#FFD700', borderRadius: 5, padding: '1px 7px', fontWeight: 600 }}>{player ? `#${player.number}` : '------'}</span>
            </div>
          ));
        })()}
      </div>
          </div>
  );
}

// (removed duplicate import)

// Helper to get the filter string from slotDigits
function getFilterDigits(slotDigits: number[]): string {
  // slotDigits is an array of 6 numbers, right-aligned, e.g. [0,0,0,0,4,1] for '14'
  // We want to extract the non-zero digits from the right, in order
  const digits = slotDigits.join("");
  // Always return a 6-digit string, padded with leading zeros
  return digits.padStart(6, "0");
}
// Slot machine digits component
type SlotMachineDigitsProps = {
  reels: number[][];
  offsets: number[];
  spinning: boolean[];
};

function SlotMachineDigits({ reels, offsets, spinning }: SlotMachineDigitsProps) {
  // reels: array of arrays of numbers for each column
  // offsets: array of numbers (px) for each column
  // spinning: array of booleans for each column
  return (
    <div
      style={{
        position: "absolute",
        top: "58%",
        left: "46%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        gap: 7,
        zIndex: 2,
        pointerEvents: "none",
      }}
    >
      {reels.map((reel, idx) => {
        const itemHeight = 80;
        // For continuous animation, repeat the reel visually
        const displayReel = spinning && spinning[idx] ? [...reel, ...reel, ...reel] : reel;
        return (
          <div
            key={idx}
            style={{
              width: 56,
              height: itemHeight,
              background: "transparent",
              borderRadius: 12,
              boxShadow: "none",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              fontFamily: "monospace",
              userSelect: "none",
              position: "relative",
            }}
          >
            <div
              style={{
                transition: spinning && spinning[idx] ? "none" : "transform 0.18s cubic-bezier(.17,.67,.83,.67)",
                transform: `translateY(${offsets[idx]}px)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {displayReel.map((n, i) => (
                <div
                  key={i}
                  style={{
                    height: itemHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 54,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Hide scrollbar for Webkit browsers
const style = `
.hide-scrollbar::-webkit-scrollbar { display: none; }
`;

const initialDigits = [0, 0, 0, 0, 0, 0];
const initialReels = [[0], [0], [0], [0], [0], [0]];
const initialOffsets = [0, 0, 0, 0, 0, 0];
const initialSpinning = [false, false, false, false, false, false];

export default function Home() {
  const [input, setInput] = React.useState<string>("");
  const [slotDigits, setSlotDigits] = React.useState<number[]>(initialDigits);
  const [reels, setReels] = React.useState<number[][]>(initialReels);
  const [offsets, setOffsets] = React.useState<number[]>(initialOffsets);
  const [animating, setAnimating] = React.useState<boolean>(false);
  const [spinning, setSpinning] = React.useState<boolean[]>(initialSpinning);
  const [currentCol, setCurrentCol] = React.useState<number>(5); // Start from rightmost
  const [allRevealed, setAllRevealed] = React.useState<boolean>(false);
  // Winner stacking state
  const [recentWinners, setRecentWinners] = React.useState<Player[]>([]);
  // blurActive state removed; blur overlays are now controlled by allDigitsFilled
  const rafRefs = React.useRef<(number | null)[]>([null, null, null, null, null, null]);

  // Blur overlays are active unless all 6 digits are filled
  const allDigitsFilled = slotDigits.length === 6 && slotDigits.every(d => typeof d === 'number');
  const blurForLists = !allDigitsFilled;

  // Listen for dashboardDigits changes from Firebase
  React.useEffect(() => {
    const db = getFirebaseDb();
    const digitsRef = ref(db, "dashboardDigits/digits");
    const unsubscribe = onValue(digitsRef, (snapshot) => {
      const digitsArr = snapshot.val();
      if (Array.isArray(digitsArr)) {
        // Reverse the digits, then pad with zeros on the left (right-align)
        const rawDigits = digitsArr.map((d: string | number) => d === "" ? 0 : Number(d)).reverse();
        const paddedDigits = Array(6 - rawDigits.length).fill(0).concat(rawDigits).map(d => Number(d));
        setInput(digitsArr.join(""));
        setSlotDigits(prev => {
          // Always animate every digit
          paddedDigits.forEach((digit, idx) => {
            animateDigit(idx, digit);
          });
          return paddedDigits;
        });
      }
    });
    return () => unsubscribe();
  }, []);

  // Winner stacking logic
  React.useEffect(() => {
    // Get the current filterDigits and filtered
    const filterDigits = getFilterDigits(slotDigits);
    let filtered: Player[] = players as Player[];
    if (filterDigits && filterDigits.length > 0) {
      filtered = players.filter((p: Player) => p.number.endsWith(filterDigits));
    }
    let timeoutId: NodeJS.Timeout | null = null;
    if (
      input.length === 6 &&
      Array.isArray(filtered) &&
      filtered.length > 0
    ) {
      timeoutId = setTimeout(() => {
        setRecentWinners(prev => {
          if (prev.some(w => w.number === filtered[0].number)) return prev;
          const next = [...prev, filtered[0]];
          return next.length > 12 ? next.slice(-12) : next;
        });
      }, 2000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [slotDigits]);

  // Animate a single digit in the slot machine
  const animateDigit = (idx: number, digit: number): void => {
    const itemHeight = 80;
    // Clean up any running animation for this digit
    if (rafRefs.current[idx]) cancelAnimationFrame(rafRefs.current[idx]);
    // Build a reel with random numbers ending in the target digit
    let arr = [];
    for (let j = 0; j < 20; j++) arr.push(Math.floor(Math.random() * 10));
    arr.push(Number(digit));
    setReels(prev => {
      const next = [...prev];
      next[idx] = arr;
      return next;
    });
    setSpinning(prev => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
    setOffsets(prev => {
      const next = [...prev];
      next[idx] = 0;
      return next;
    });
    // Animate spin
    let pos = 0;
    let speed = 24 + idx * 2;
    let stopping = false;
    const direction = idx % 2 === 0 ? 1 : -1;
    const reelLen = arr.length;
    const spin = () => {
      if (!stopping) {
        pos += direction * -speed;
        if (Math.abs(pos) >= reelLen * itemHeight) {
          pos = 0;
        }
        setOffsets(prev => {
          const next = [...prev];
          next[idx] = pos;
          return next;
        });
        rafRefs.current[idx] = requestAnimationFrame(spin);
      } else {
        // Decelerate and land on final digit
        const finalIndex = reelLen - 1;
        const finalOffset = direction * -itemHeight * finalIndex;
        const decelFrames = 32;
        let frame = 0;
        const decel = () => {
          frame++;
          const t = frame / decelFrames;
          const ease = 1 - Math.pow(1 - t, 2);
          const currentOffset = pos + (finalOffset - pos) * ease;
          setOffsets(prev => {
            const next = [...prev];
            next[idx] = currentOffset;
            return next;
          });
          if (frame < decelFrames) {
            rafRefs.current[idx] = requestAnimationFrame(decel);
          } else {
            setOffsets(prev => {
              const next = [...prev];
              next[idx] = finalOffset;
              return next;
            });
            setTimeout(() => {
              setReels(prev => {
                const next = [...prev];
                next[idx] = [Number(digit)];
                return next;
              });
              setOffsets(prev => {
                const next = [...prev];
                next[idx] = 0;
                return next;
              });
              setSpinning(prev => {
                const next = [...prev];
                next[idx] = false;
                return next;
              });
            }, 60);
          }
        };
        rafRefs.current[idx] = requestAnimationFrame(decel);
      }
    };
    rafRefs.current[idx] = requestAnimationFrame(spin);
    setTimeout(() => {
      stopping = true;
    }, 900 + idx * 100);
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits, and max 6 digits
    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
    setInput(val);
    // Update slotDigits to match the input, right-aligned and padded with zeros
    const digitsArr = val.split("").map(Number).reverse();
    const paddedDigits = Array(6 - digitsArr.length).fill(0).concat(digitsArr);
    setSlotDigits(paddedDigits);
  };

  // Handle search (slot machine spin)
  const handleSearch = (overrideValue?: string): void => {
    const valueToUse = typeof overrideValue === 'string' ? overrideValue : input;
    if (!valueToUse || animating) return;
    // If starting a new round, enable blur
    // setBlurActive removed: blur overlays are now controlled by allDigitsFilled
    setAnimating(true);
    const itemHeight = 80;
    // Clean up any running animations
    for (let i = 0; i < 6; i++) {
      const rafId = rafRefs.current[i];
      if (rafId !== null) cancelAnimationFrame(rafId);
    }
    // Reverse the input digits, then pad with zeros on the left (right-align)
    const digitsArr = valueToUse.split("").map(Number).reverse();
    const paddedDigits = Array(6 - digitsArr.length).fill(0).concat(digitsArr).map(d => Number(d));
    // Animate all filled digits
    paddedDigits.forEach((digit, idx) => {
      if (typeof digit === 'number' && typeof slotDigits[idx] === 'number' && digit !== slotDigits[idx]) {
        let arr = [];
        for (let j = 0; j < 20; j++) arr.push(Math.floor(Math.random() * 10));
        arr.push(Number(digit));
        setReels(prev => {
          const next = [...prev];
          next[idx] = arr;
          return next;
        });
        setSpinning(prev => {
          const next = [...prev];
          next[idx] = true;
          return next;
        });
        setOffsets(prev => {
          const next = [...prev];
          next[idx] = 0;
          return next;
        });
        // Animate spin for each digit
        let pos = 0;
        let speed = 24 + idx * 2;
        let stopping = false;
        const direction = idx % 2 === 0 ? 1 : -1;
        const reelLen = arr.length;
        const spin = () => {
          if (!stopping) {
            pos += direction * -speed;
            if (Math.abs(pos) >= reelLen * itemHeight) {
              pos = 0;
            }
            setOffsets(prev => {
              const next = [...prev];
              next[idx] = pos;
              return next;
            });
            rafRefs.current[idx] = requestAnimationFrame(spin);
          } else {
            // Decelerate and land on final digit
            const finalIndex = reelLen - 1;
            const finalOffset = direction * -itemHeight * finalIndex;
            const decelFrames = 32;
            let frame = 0;
            const decel = () => {
              frame++;
              const t = frame / decelFrames;
              const ease = 1 - Math.pow(1 - t, 2);
              const currentOffset = pos + (finalOffset - pos) * ease;
              setOffsets(prev => {
                const next = [...prev];
                next[idx] = currentOffset;
                return next;
              });
              if (frame < decelFrames) {
                rafRefs.current[idx] = requestAnimationFrame(decel);
              } else {
                setOffsets(prev => {
                  const next = [...prev];
                  next[idx] = finalOffset;
                  return next;
                });
                setTimeout(() => {
                  setReels(prev => {
                    const next = [...prev];
                    next[idx] = [Number(digit)];
                    return next;
                  });
                  setOffsets(prev => {
                    const next = [...prev];
                    next[idx] = 0;
                    return next;
                  });
                  setSpinning(prev => {
                    const next = [...prev];
                    next[idx] = false;
                    return next;
                  });
                  if (idx === 5) {
                    setSlotDigits(paddedDigits);
                    setAnimating(false);
                    // setBlurActive removed: blur overlays are now controlled by allDigitsFilled
                  }
                }, 60);
              }
            };
            rafRefs.current[idx] = requestAnimationFrame(decel);
          }
        };
        rafRefs.current[idx] = requestAnimationFrame(spin);
        setTimeout(() => {
          stopping = true;
        }, 900 + idx * 100);
      }
    });
  };

  return (
    <>
      <style>{style}</style>
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#111",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', 'Roboto', sans-serif",
        overflow: "hidden",
        position: "relative",
        paddingTop: 60,
      }}
    >
      {/* Gradient Blur Dots */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: 400, left: 40, width: 360, height: 460, borderRadius: "120%", background: "radial-gradient(circle at 30% 30%, #ff00007c 0%, #ff5ecd00 80%)", filter: "blur(36px)" }} />
        <div style={{ position: "absolute", bottom: 60, right: 60, width: 320, height: 320, borderRadius: "100%", background: "radial-gradient(circle at 70% 70%, #ff00007c 0%, #ff5ecd00 80%)", filter: "blur(44px)" }} />
        <div style={{ position: "absolute", top: "50%", left: 0, width: 240, height: 240, borderRadius: "100%", background: "radial-gradient(circle at 50% 50%, #ff00007c 0%, #ff5ecd00 80%)", filter: "blur(32px)", transform: "translateY(-50%)" }} />
        <div style={{ position: "absolute", bottom: 120, left: 120, width: 200, height: 200, borderRadius: "100%", background: "radial-gradient(circle at 50% 50%, #ff00007c 0%, #ff5ecd00 80%)", filter: "blur(28px)" }} />
        <div style={{ position: "absolute", top: 100, right: 180, width: 180, height: 180, borderRadius: "100%", background: "radial-gradient(circle at 50% 50%, #ff00007c 0%, #ff5ecd00 80%)", filter: "blur(24px)" }} />
      </div>
      {/* Logo at top left */}
      <img
        src="/images/gg.svg"
        alt="Logo"
        style={{
          position: "absolute",
          top: 18,
          left: "50%",
          transform: "translateX(-50%)",
          height: 190,
          maxWidth: "90vw",
          width: "auto",
          display: "block",
          zIndex: 10,
          paddingBottom: 40,
        }}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "row",
          marginTop: 40,
        }}
      >
        {/* Left Side: Powered By Card */}
        <div style={{ width: 360, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", height: "100%", marginTop: -100 }}>
          <div style={{ marginBottom: 12, marginTop: 8, fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>
            <span style={{ color: "red" }}>Sponsors</span>
          </div>
          <PoweredByCard />
        </div>
        {/* Center Content */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0, position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
              padding: "10px 28px",
            }}>
              <span style={{ fontSize: 20, fontWeight: 700, marginRight: 16, paddingTop: 60, marginBottom: -60, display: 'inline-block' }}>
                <span style={{ color: "#fff" }}>Mega </span>
                <span style={{ color: "red" }}>Lucky</span>
                <span style={{ color: "#fff" }}> Draw - </span>
                <span style={{ color: "red" }}>2025</span>
              </span>
              {/* Digit input and display removed as requested */}
              {/* Search button removed as requested */}
            </div>
            {/* Slot Machine Digits Overlay */}
            <div style={{ position: "relative", width: "500px", height: "auto", marginTop: 40 }}>
              <img
                src="/images/Group 34782.png"
                alt="Centered"
                style={{
                  width: "500px",
                  height: "auto",
                  display: "block",
                  marginBottom: 10,
                }}
              />
              <SlotMachineDigits reels={reels} offsets={offsets} spinning={spinning} />
            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 0, paddingLeft: 24, paddingRight: 24, boxSizing: "border-box" }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: 1, textAlign: "left", width: "100%" }}>
                Winner List
              </div>
              <div style={{
                width: "100%",
                height: 4,
                borderRadius: 2,
                marginBottom: 18,
                background: "linear-gradient(90deg, #000 0%, #ff0000 50%, #000 100%)"
              }} />
              <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <WinnerTables blur={!allDigitsFilled} filterDigits={input} />
            </div>
            </div>
          </div>
        </div>
        {/* Right Side: Winners List */}
        <div style={{ width: 340, display: "flex", justifyContent: "flex-end", alignItems: "flex-start", marginTop: -90 }}>
          <WinnersList winners={recentWinners.slice(-12)} />
        </div>
      </div>
    </div>
    </>
  );
}