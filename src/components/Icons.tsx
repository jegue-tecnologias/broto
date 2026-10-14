type IconProps = { className?: string };

export function Clock() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="8" cy="8" r="6.4" />
      <path d="M8 4.4V8l2.6 1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Globe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 9.4h17.6M3.2 14.6h17.6" />
      <path d="M12 3a15.6 15.6 0 0 0 0 18 15.6 15.6 0 0 0 0-18Z" />
    </svg>
  );
}

export function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
    </svg>
  );
}

export function Info() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.4v5.4" strokeLinecap="round" />
      <circle cx="12" cy="16.4" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Drop() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 3.4c3.4 4 5.9 7.2 5.9 10A5.9 5.9 0 0 1 12 19.3 5.9 5.9 0 0 1 6.1 13.4c0-2.8 2.5-6 5.9-10Z" strokeLinejoin="round" />
    </svg>
  );
}

export function Sun() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="4.1" />
      <path d="M12 2.8v2.1M12 19.1v2.1M4.4 4.4l1.5 1.5M18.1 18.1l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.4 19.6l1.5-1.5M18.1 5.9l1.5-1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Sprout() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 20.6v-7.4" strokeLinecap="round" />
      <path d="M12 13.2c0-3.3 2.4-5.7 5.7-6-.3 3.3-2.4 5.7-5.7 6Z" strokeLinejoin="round" />
      <path d="M12 15.4c-3 0-5.2-2-5.5-5 3 .3 5.2 2.1 5.5 5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function Paw() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <ellipse cx="7.3" cy="9.5" rx="1.9" ry="2.5" />
      <ellipse cx="12" cy="7.7" rx="1.9" ry="2.6" />
      <ellipse cx="16.7" cy="9.5" rx="1.9" ry="2.5" />
      <path d="M12 12.3c2.7 0 4.9 2.1 4.9 4.2 0 1.6-1.1 2.6-2.7 2.6-1 0-1.5-.4-2.2-.4s-1.2.4-2.2.4c-1.6 0-2.7-1-2.7-2.6 0-2.1 2.2-4.2 4.9-4.2Z" />
    </svg>
  );
}

export function Close() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function HelpCircle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" />
      <path d="M9.6 9.4a2.5 2.5 0 1 1 3.3 2.4c-.6.2-.9.7-.9 1.3v.5" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Bolt() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.4 2 5.6 13.2h5L9.8 22l8.4-11.8h-5.4L13.4 2Z" />
    </svg>
  );
}

export function Gallery() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.2" y="4.6" width="17.6" height="14.8" rx="2.6" />
      <circle cx="8.6" cy="9.8" r="1.6" />
      <path d="m4.4 17.2 4.8-4.6 3.4 3.2 2.8-2.4 4.2 3.8" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5.4v13.2M5.4 12h13.2" />
    </svg>
  );
}

export function Send() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19V5.6M5.8 11.8 12 5.6l6.2 6.2" />
    </svg>
  );
}

export function Dash() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <rect x="1.5" y="6" width="11" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}

export function Check({ strokeWidth = "2.6" }: { strokeWidth?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5l5.2 5.2L20 7" />
    </svg>
  );
}

export function Warn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <path d="M12 7v6" />
      <path d="M12 17h.01" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

export function PlantMark({ tone = "brand", className }: IconProps & { tone?: "brand" | "muted" }) {
  return (
    <svg viewBox="110 103 292 367" className={className} aria-hidden="true">
      <g transform="translate(256 306) scale(6.3529) translate(-42 -39)" fill={tone === "brand" ? "#3E6B4A" : "#8FA383"}>
        <path d="M38 39C38 22 30 15 20 9C34 12 41 23 42 34C44 20 53 12 64 8C52 17 45 26 44 39H38Z" />
      </g>
      <g transform="translate(256 352)">
        <rect x="-108" y="-46" width="216" height="40" rx="14" fill="#B4522F" />
        <path d="M-94 2 L94 2 L72 96 Q72 112 54 112 L-54 112 Q-72 112 -72 96 Z" fill="#C88B6A" />
      </g>
    </svg>
  );
}

export function Mark({ tone = "brand", className }: IconProps & { tone?: "brand" | "light" }) {
  return (
    <svg viewBox="286 137 452 705" className={className} aria-hidden="true">
      <g transform="translate(0,1024) scale(0.1,-0.1)" fill={tone === "light" ? "#FFF8F4" : "#3E6B4A"}>
        <path d="M5580 8813 c-66 -29 -222 -80 -380 -123 -339 -94 -536 -235 -645 -461 -49 -102 -68 -199 -63 -317 6 -144 13 -149 75 -55 111 169 253 309 433 427 130 86 135 87 55 15 -87 -78 -190 -184 -259 -269 -55 -66 -310 -437 -360 -522 -15 -27 -31 -48 -35 -48 -4 0 -14 19 -21 43 -19 65 -64 148 -120 222 -47 62 -50 69 -50 126 0 74 -37 190 -84 262 -71 111 -200 205 -341 250 -27 9 -117 30 -200 46 -82 17 -161 34 -174 37 -23 7 -23 6 -16 -37 50 -297 133 -461 286 -568 72 -51 169 -89 284 -111 173 -34 277 -149 306 -340 16 -103 5 -185 -46 -354 -24 -80 -51 -178 -60 -218 l-18 -73 -61 60 c-75 73 -189 133 -321 167 -79 20 -114 23 -280 23 -150 0 -207 -4 -270 -19 -92 -21 -111 -32 -94 -52 6 -8 21 -14 33 -14 58 0 218 -43 284 -75 247 -123 362 -374 393 -855 13 -213 5 -2091 -11 -2396 -12 -218 -38 -381 -85 -522 -126 -376 -372 -626 -751 -763 -88 -32 -105 -52 -59 -69 39 -15 291 -29 690 -40 426 -11 459 -16 740 -107 493 -160 639 -194 928 -215 381 -28 773 41 1092 191 715 339 1091 1068 920 1786 -127 535 -569 933 -1186 1067 -143 31 -487 33 -619 4 -83 -18 -126 -33 -117 -42 2 -3 44 -11 93 -20 281 -47 501 -153 678 -323 239 -231 366 -522 395 -907 16 -209 -13 -456 -75 -644 -36 -108 -125 -288 -186 -378 -155 -227 -406 -416 -666 -502 -335 -110 -751 -62 -859 99 -34 50 -32 123 6 182 37 59 100 98 267 165 239 96 372 171 515 290 299 249 498 594 577 999 23 118 35 235 23 235 -5 0 -55 -22 -112 -50 -125 -59 -317 -124 -533 -180 -364 -93 -592 -189 -761 -317 -294 -225 -426 -553 -349 -866 15 -57 59 -167 67 -167 2 0 15 28 27 63 82 225 268 473 486 643 106 83 269 181 423 255 127 61 170 73 85 23 -77 -45 -271 -190 -373 -278 -307 -265 -536 -642 -549 -903 l-4 -93 -29 24 c-145 122 -251 345 -294 618 -22 137 -31 507 -16 668 64 703 307 1099 836 1363 163 81 367 141 655 191 420 74 671 188 852 384 237 260 294 643 143 970 -114 247 -335 426 -652 531 -195 65 -279 76 -578 76 -232 -1 -271 -3 -365 -23 -290 -63 -529 -189 -712 -374 -80 -82 -80 -83 -47 106 57 340 188 703 298 827 57 65 149 122 271 168 228 86 325 145 446 274 171 182 256 394 284 707 5 58 6 110 2 116 -5 8 -22 5 -62 -13z m-105 -1978 c205 -43 365 -198 406 -392 29 -144 -6 -330 -94 -496 -125 -236 -342 -448 -847 -827 -130 -98 -277 -212 -326 -253 -148 -124 -301 -290 -396 -427 -16 -24 -17 -22 -17 75 -2 294 53 994 100 1290 37 228 114 445 209 586 59 87 201 232 280 284 224 148 469 205 685 160z m835 -906 c-19 -73 -91 -209 -152 -290 -128 -169 -313 -296 -563 -384 -114 -40 -113 -39 90 95 302 199 480 368 595 567 19 34 36 60 38 58 2 -2 -2 -23 -8 -46z" />
      </g>
    </svg>
  );
}

export function FaceFeatures() {
  return (
    <>
      <ellipse cx="-21" cy="4" rx="4.2" ry="2.8" fill="#B4522F" opacity="0.28" />
      <ellipse cx="21" cy="4" rx="4.2" ry="2.8" fill="#B4522F" opacity="0.28" />
      <circle cx="-13" cy="-4" r="4.6" fill="#17251A" />
      <circle cx="13" cy="-4" r="4.6" fill="#17251A" />
      <circle cx="-11.4" cy="-5.8" r="1.7" fill="#FFFDF8" />
      <circle cx="14.6" cy="-5.8" r="1.7" fill="#FFFDF8" />
      <path d="M-7 7 Q0 13.5 7 7" fill="none" stroke="#17251A" strokeWidth="2.6" strokeLinecap="round" />
    </>
  );
}

export function Sprig() {
  return <path d="M0 -42 Q3.7 -46.4 4.9 -51.3" fill="none" stroke="#6E8265" strokeWidth="5" strokeLinecap="round" />;
}
