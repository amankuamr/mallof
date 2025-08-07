"use client";

import {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  JSX
} from "react";

export default function Dashboard() {
  const [input, setInput] = useState<string>("");
  const [slotDigits, setSlotDigits] = useState([0, 0, 0, 0, 0]);
  const [reels, setReels] = useState([[0], [0], [0], [0], [0]]);
  const [offsets, setOffsets] = useState([0, 0, 0, 0, 0]);
  const [animating, setAnimating] = useState<boolean>(false);
  const [spinning, setSpinning] = useState<boolean[]>([false, false, false, false, false]);
  const [currentCol, setCurrentCol] = useState<number>(4);
  const rafRefs = useRef<(number | null)[]>([null, null, null, null, null]);
  const bcRef = useRef<BroadcastChannel | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "BroadcastChannel" in window) {
      bcRef.current = new window.BroadcastChannel("jackpot-counter");
    }
    if (inputRef.current) inputRef.current.focus();
    return () => {
      if (bcRef.current) bcRef.current.close();
    };
  }, [inputRef]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 5);
    setInput(val);
  };

  const displayDigits: string[] = Array(5 - input.length).fill("").concat(input.split("").reverse());

  const handleSearch = (): void => {
    if (!input || animating) return;

    if (bcRef.current) {
      bcRef.current.postMessage({ type: "search", value: input });
    }

    setAnimating(true);
    const itemHeight = 80;

    for (let i = 0; i < 5; i++) {
      if (rafRefs.current[i]) cancelAnimationFrame(rafRefs.current[i]!);
    }

    const newReels = reels.map((reel, i) => {
      if (i === currentCol) {
        let arr: number[] = [];
        for (let j = 0; j < 20; j++) arr.push(Math.floor(Math.random() * 10));

        const digitChar = input.length > i ? input[input.length - 1 - i] : "0";
        const digit = /^[0-9]$/.test(digitChar) ? parseInt(digitChar, 10) : 0;

        arr.push(digit);
        return arr;
      } else if (slotDigits[i] !== 0) {
        return [slotDigits[i]];
      } else {
        return [0];
      }
    });

    setReels(newReels);
    setOffsets([0, 0, 0, 0, 0]);
    setSpinning((prev) => prev.map((_, i) => i === currentCol));

    const i = currentCol;
    const direction = i % 2 === 0 ? 1 : -1;
    const reelLen = newReels[i].length;
    let pos = 0;
    let speed = 24 + i * 2;
    let stopping = false;

    const spin = () => {
      if (!stopping) {
        pos += direction * -speed;
        if (Math.abs(pos) >= reelLen * itemHeight) {
          pos = 0;
        }
        setOffsets((prev) => {
          const next = [...prev];
          next[i] = pos;
          return next;
        });
        rafRefs.current[i] = requestAnimationFrame(spin);
      } else {
        const finalIndex = reelLen - 1;
        const finalOffset = direction * -itemHeight * finalIndex;
        const decelFrames = 32;
        let frame = 0;

        const decel = () => {
          frame++;
          const t = frame / decelFrames;
          const ease = 1 - Math.pow(1 - t, 2);
          const currentOffset = pos + (finalOffset - pos) * ease;
          setOffsets((prev) => {
            const next = [...prev];
            next[i] = currentOffset;
            return next;
          });

          if (frame < decelFrames) {
            rafRefs.current[i] = requestAnimationFrame(decel);
          } else {
            setOffsets((prev) => {
              const next = [...prev];
              next[i] = finalOffset;
              return next;
            });
            setSlotDigits((prev) => {
              const next = [...prev];
              next[i] = Number(input);
              return next;
            });
            setReels((prev) => {
              const next = [...prev];
              next[i] = [Number(input)];
              return next;
            });
            setTimeout(() => {
              setOffsets((prev) => {
                const next = [...prev];
                next[i] = 0;
                return next;
              });
              setSpinning((prev) => {
                const next = [...prev];
                next[i] = false;
                return next;
              });

              if (currentCol === 0) {
                setTimeout(() => {
                  setSlotDigits([0, 0, 0, 0, 0]);
                  setCurrentCol(4);
                }, 1400);
                setAnimating(false);
              } else {
                setCurrentCol((prev) => prev - 1);
                setAnimating(false);
              }
            }, 60);
          }
        };

        rafRefs.current[i] = requestAnimationFrame(decel);
      }
    };

    rafRefs.current[i] = requestAnimationFrame(spin);
    setTimeout(() => {
      stopping = true;
    }, 1200 + i * 400);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#111",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', 'Roboto', sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginRight: 12,
          position: 'relative',
          height: 40,
        }}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            maxLength={5}
            inputMode="numeric"
            pattern="[0-9]*"
            style={{
              position: 'absolute',
              opacity: 0,
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              zIndex: 2,
              cursor: 'pointer',
            }}
            tabIndex={0}
            autoFocus
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 8,
              background: 'rgba(40, 20, 40, 1)',
              border: '2px solid #fff',
              borderRadius: 9999,
              padding: '0 18px',
              height: 40,
              alignItems: 'center',
              minWidth: 120,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 1,
            }}
            onClick={() => inputRef.current?.focus()}
          >
            {displayDigits.map((char, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  width: 18,
                  height: 28,
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#fff',
                  textAlign: 'center',
                  borderBottom: '2px solid #fff',
                  background: 'none',
                  letterSpacing: 1,
                  transition: 'border-color 0.2s',
                  userSelect: 'none',
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={handleSearch}
          disabled={animating}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "2px solid #fff",
            background: "transparent",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "border 0.2s",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
            padding: 0,
          }}
          aria-label="Search"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
    </div>
  );
}
