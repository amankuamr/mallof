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
        height: 500,
        textAlign: "center",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img src="/images/pngwing.com (4).png" alt="Left Image 1" style={{ width: 70, margin: "20px auto 5px", display: "block" }} />
      <div style={{ fontSize: 16, fontWeight: 600 }}>Company</div>
      <div style={{ fontSize: 12, color: "#ccc", marginBottom: 10 }}>business tagline</div>
      <img src="/images/pngwing.com (3).png" alt="Left Image 2" style={{ width: 70, margin: "20px auto 5px", display: "block" }} />
      <div style={{ fontSize: 16, fontWeight: 600 }}>ABSTRACT LOGO</div>
      <img src="/images/pngwing.com (4).png" alt="Left Image 3" style={{ width: 70, margin: "20px auto 5px", display: "block" }} />
      <div style={{ fontSize: 16, fontWeight: 600 }}>Amazon</div>
      <div style={{ fontSize: 12, color: "#ccc", marginBottom: 10 }}>business tagline</div>
      <div style={{ fontSize: 11, color: "#ccc", marginTop: 15, textAlign: "justify" }}>
        <span style={{ fontWeight: "bold" }}>ⓘ </span>
        In order to give back to new and old customers, starting today, the system will automatically give 1% rewards to members who recharge for the first time. The transaction flow reward has also been activated.
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
// Import as .js because playerData.js is not a TypeScript module
// @ts-ignore: Importing JS module in TS file
import { players } from "./playerData.js";

// Define Player type if not already defined
interface Player {
  name: string;
  number: string;
}

type WinnerTablesProps = {
  blur: boolean;
  filterDigits?: string;
};

function WinnerTables({ blur, filterDigits }: WinnerTablesProps): React.ReactElement {
  // Filter players by last digits if filterDigits is provided
  let filtered: Player[] = players as Player[];
  if (filterDigits && filterDigits.length > 0) {
    filtered = players.filter((p: Player) => p.number.endsWith(filterDigits));
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
    const scrollDiv = (ref: React.RefObject<HTMLDivElement>): void => {
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
        let startTime = null;
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
  const avatarStyle = {
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
          <span>NUMBER</span>
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
          <span>NUMBER</span>
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

function WinnersList({ blur, filterDigits }: WinnersListProps): React.ReactElement {
  // Filter players by last digits if filterDigits is provided
  let filtered: Player[] = players as Player[];
  if (filterDigits && filterDigits.length > 0) {
    filtered = players.filter((p: Player) => p.number.endsWith(filterDigits));
  }
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
        padding: 24,
        margin: 20,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <h2
        style={{
          textTransform: "uppercase",
          fontWeight: "bold",
          marginBottom: 20,
          letterSpacing: 2,
        }}
      >
        WINNERS
      </h2>
      {filterDigits ? <>
      {filtered.slice(0, 4).map((p, i) => (
        <div
          key={i}
          style={{
            ...cardStyle,
            background: i === 0
              ? 'rgba(255, 215, 0, 0.35)'
              : i === 1
              ? 'rgba(192, 192, 192, 0.35)'
              : i === 2
              ? 'rgba(205, 127, 50, 0.35)'
              : cardStyle.background,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 18,
            minHeight: 80,
            marginBottom: 16,
            position: "relative",
          }}
        >
          {/* Badge for 1st, 2nd, 3rd */}
          {i < 3 && (
            <div
              style={{
                position: 'absolute',
                top: 8,
                right: 14,
                background: i === 0 ? '#FFD700' : i === 1 ? '#C0C0C0' : '#CD7F32',
                color: '#222',
                fontWeight: 700,
                fontSize: 13,
                borderRadius: 8,
                padding: '2px 12px',
                zIndex: 2,
                boxShadow: '0 2px 6px rgba(0,0,0,0.10)',
                letterSpacing: 1,
              }}
            >
              <span role="img" aria-label="trophy">🏆</span> {i === 0 ? '1st' : i === 1 ? '2nd' : '3rd'}
            </div>
          )}
          <img
            src={"https://i.imgur.com/UXb3JYj.png"}
            alt="player"
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginBottom: 8,
            }}
          />
          <div style={{ textAlign: "center", width: "100%" }}>
            <p style={{ margin: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <span style={{ color: "red", fontWeight: "bold" }}>{p.name}</span>
            </p>
            <p style={{ fontSize: 13, margin: "2px 0" }}>#{p.number}</p>
          </div>
        </div>
      ))}
      {/* Fill with empty cards if less than 4 */}
      {Array.from({length: 4 - filtered.slice(0, 4).length}).map((_, idx) => (
        <div
          key={"empty-winner-"+idx}
          style={{
            ...cardStyle,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 18,
            minHeight: 80,
            marginBottom: 16,
            position: "relative",
            opacity: 0.3
          }}
        >
          <div style={{ width: 40, height: 40, borderRadius: 20, marginBottom: 8 }} />
          <div style={{ textAlign: "center", width: "100%" }}>
            <p style={{ margin: 0, height: 24 }}></p>
            <p style={{ fontSize: 13, margin: "2px 0", height: 18 }}></p>
          </div>
        </div>
      ))}
      </> : (
        <div style={{
          ...cardStyle,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 18,
          minHeight: 80,
          marginBottom: 16,
          position: "relative",
          fontWeight: 600,
          fontSize: 22,
          color: '#fff',
          letterSpacing: 1,
          background: 'rgba(255,255,255,0.07)'
        }}>
          Winners Awaiting
        </div>
      )}
          </div>
  );
}

// (removed duplicate import)

// Helper to get the filter string from slotDigits
function getFilterDigits(slotDigits: number[]): string {
  // slotDigits is an array of 5 numbers, right-aligned, e.g. [0,0,0,4,1] for '14'
  // We want to extract the non-zero digits from the right, in order
  const digits = slotDigits.filter((d, i) => !(i === 0 && d === 0)).join("");
  // Remove leading zeros
  return digits.replace(/^0+/, "");
}
// Slot machine digits component
type SlotMachineDigitsProps = {
  reels: number[][];
  offsets: number[];
  spinning: boolean[];
};

function SlotMachineDigits({ reels, offsets, spinning }: SlotMachineDigitsProps): React.ReactElement {
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
        gap: 16,
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

const initialDigits = [0, 0, 0, 0, 0];
const initialReels = [[0], [0], [0], [0], [0]];
const initialOffsets = [0, 0, 0, 0, 0];
const initialSpinning = [false, false, false, false, false];

export default function Home(): React.ReactElement {
  const [input, setInput] = React.useState<string>("");
  const [slotDigits, setSlotDigits] = React.useState<number[]>(initialDigits);
  const [reels, setReels] = React.useState<number[][]>(initialReels);
  const [offsets, setOffsets] = React.useState<number[]>(initialOffsets);
  const [animating, setAnimating] = React.useState<boolean>(false);
  const [spinning, setSpinning] = React.useState<boolean[]>(initialSpinning);
  const [currentCol, setCurrentCol] = React.useState<number>(4); // Start from rightmost
  const [allRevealed, setAllRevealed] = React.useState<boolean>(false);
  // blurActive state removed; blur overlays are now controlled by allDigitsFilled
  const rafRefs = React.useRef<(number | null)[]>([null, null, null, null, null]);
  const bcRef = React.useRef<BroadcastChannel | null>(null);

  // Blur overlays are active unless all 5 digits are filled and not zero
  const allDigitsFilled = slotDigits.every(d => typeof d === 'number' && d !== 0);
  const blurForLists = !allDigitsFilled;

  React.useEffect(() => {
    if (typeof window !== "undefined" && "BroadcastChannel" in window) {
      bcRef.current = new window.BroadcastChannel("jackpot-counter");
      bcRef.current.onmessage = (event: MessageEvent) => {
        if (event.data && event.data.type === "search" && event.data.value) {
          // Reset counter state before animating
          setInput(event.data.value);
          setSlotDigits([0,0,0,0,0]);
          setReels([[0],[0],[0],[0],[0]]);
          setOffsets([0,0,0,0,0]);
          setSpinning([false, false, false, false, false]);
          setCurrentCol(4);
          setTimeout(() => {
            handleSearch(event.data.value);
          }, 0);
        }
        // Listen for dashboard digit updates
        if (event.data && event.data.type === "dashboard-digits" && Array.isArray(event.data.digits)) {
          // Reverse the digits, then pad with zeros on the left (right-align)
          const rawDigits = event.data.digits.map(d => d === "" ? 0 : Number(d)).reverse();
          const paddedDigits = Array(5 - rawDigits.length).fill(0).concat(rawDigits);
          setInput(event.data.digits.join(""));
          setSlotDigits(prev => {
            // Animate only changed digits
            paddedDigits.forEach((digit, idx) => {
              if (digit !== prev[idx]) {
                animateDigit(idx, digit);
              }
            });
            return paddedDigits;
          });
        }
      };
    }
    return () => {
      if (bcRef.current) bcRef.current.close();
    };
  }, []);

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
    // Only allow digits, and max 1 digit
    const val = e.target.value.replace(/\D/g, "").slice(0, 5);
    setInput(val);
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
    for (let i = 0; i < 5; i++) {
      if (rafRefs.current[i]) cancelAnimationFrame(rafRefs.current[i]);
    }
    // Reverse the input digits, then pad with zeros on the left (right-align)
    const digitsArr = valueToUse.split("").map(Number).reverse();
    const paddedDigits = Array(5 - digitsArr.length).fill(0).concat(digitsArr);
    // Animate all filled digits
    paddedDigits.forEach((digit, idx) => {
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
                if (idx === 4) {
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
        <div style={{ position: "absolute", top: 40, left: 40, width: 360, height: 360, borderRadius: "100%", background: "radial-gradient(circle at 30% 30%, #ff00007c 0%, #ff5ecd00 80%)", filter: "blur(36px)" }} />
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
          height: 80,
          width: "auto",
          display: "block",
          zIndex: 10,
        }}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {/* Left Side: Powered By Card */}
        <div style={{ width: 360, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", height: "100%" }}>
          <div style={{ marginBottom: 12, marginTop: 8, fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>
            <span style={{ color: "red" }}>Powered</span>{" "}
            <span style={{ color: "#fff" }}>By</span>
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
              <span style={{ fontSize: 36, fontWeight: 700, marginRight: 16 }}>
                <span style={{ color: "red" }}>Lets</span>{" "}
                <span style={{ color: "#fff" }}>Begin</span>
              </span>
              {/* Digit input and display removed as requested */}
              {/* Search button removed as requested */}
              {/* Dashboard Button */}
              <a
                href="/dashboard"
                style={{
                  marginLeft: 12,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  background: "#222",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  fontSize: 18,
                  fontWeight: 700,
                  boxShadow: "0 2px 8px 0 rgba(31, 38, 135, 0.10)",
                  transition: "background 0.2s, border 0.2s",
                  cursor: "pointer",
                }}
                title="Go to Dashboard"
                aria-label="Go to Dashboard"
              >
                &#x1F4CA;
              </a>
            </div>
            {/* Slot Machine Digits Overlay */}
            <div style={{ position: "relative", width: "500px", height: "auto" }}>
              <img
                src="/images/Group 34775 (1).png"
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
              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <WinnerTables blur={!allDigitsFilled} filterDigits={getFilterDigits(slotDigits)} />
              </div>
            </div>
          </div>
        </div>
        {/* Right Side: Winners List */}
        <div style={{ width: 340, display: "flex", justifyContent: "flex-end" }}>
          <WinnersList blur={!allDigitsFilled} filterDigits={allDigitsFilled ? getFilterDigits(slotDigits) : undefined} />
        </div>
      </div>
    </div>
    </>
  );
}