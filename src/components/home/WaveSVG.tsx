/**
 * Realistic ocean wave SVG with rosy blush tones.
 *
 * Three layered paths simulate wave depth:
 *   1. Back crest  — translucent blush, drifts at a different phase
 *   2. Main body   — the primary wave silhouette, gradient from crest to page bg
 *   3. Foam strip  — bright highlight along the very tip of the breaking crest
 *
 * belowColor — fill colour of the solid area below the wave crest;
 *              should match the section background that follows the hero.
 * animated   — enables the ambient waveDrift keyframe animations.
 */
interface WaveSVGProps {
  /** @deprecated — kept for backwards-compat; colour is now driven by gradients */
  fill?: string;
  animated?: boolean;
  className?: string;
  belowColor?: string;
}

export default function WaveSVG({
  animated = true,
  className,
  belowColor = "#FDFCFB",
}: WaveSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 520"
      preserveAspectRatio="none"
      aria-hidden
      className={className}
      style={{ display: "block" }}
    >
      <defs>
        {/* Main wave: blush-rose crest → page background */}
        <linearGradient id="waveGradMain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#C49A94" stopOpacity="1" />
          <stop offset="20%"  stopColor="#D4B5B0" stopOpacity="0.95" />
          <stop offset="50%"  stopColor="#E8D0CB" stopOpacity="0.9" />
          <stop offset="100%" stopColor={belowColor} stopOpacity="1" />
        </linearGradient>

        {/* Back crest: lighter, more transparent */}
        <linearGradient id="waveGradBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#E4C5BF" stopOpacity="0.5" />
          <stop offset="60%"  stopColor="#D4B5B0" stopOpacity="0.25" />
          <stop offset="100%" stopColor={belowColor} stopOpacity="0" />
        </linearGradient>

        {/* Foam highlight at the very crest tip */}
        <linearGradient id="waveGradFoam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FDF0EE" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#E4C5BF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Back wave (depth layer, slightly raised, opposite drift phase) ── */}
      <path
        d={[
          "M0,42",
          "C70,20 150,58 240,36",
          "C330,14 410,52 520,30",
          "C630,8 700,46 820,24",
          "C940,2 1020,40 1140,18",
          "C1260,0 1360,32 1440,14",
          "L1440,520 L0,520 Z",
        ].join(" ")}
        fill="url(#waveGradBack)"
        style={
          animated
            ? { animation: "waveDriftBack 11s ease-in-out infinite" }
            : undefined
        }
      />

      {/* ── Main wave body — primary breaking ocean wave ── */}
      <path
        d={[
          "M0,75",
          "C55,38 115,90 200,60",
          "C285,30 360,80 460,50",
          "C560,20 630,70 740,42",
          "C850,14 930,58 1060,34",
          "C1180,10 1300,46 1440,24",
          "L1440,520 L0,520 Z",
        ].join(" ")}
        fill="url(#waveGradMain)"
        style={
          animated
            ? { animation: "waveDrift 8s ease-in-out infinite" }
            : undefined
        }
      />

      {/* ── Foam: thin bright strip tracing the top of the main crest ── */}
      <path
        d={[
          "M0,73",
          "C55,36 115,88 200,58",
          "C285,28 360,78 460,48",
          "C560,18 630,68 740,40",
          "C850,12 930,56 1060,32",
          "C1180,8 1300,44 1440,22",
          "C1300,30 1180,16 1060,42",
          "C930,68 850,22 740,52",
          "C630,82 560,30 460,60",
          "C360,90 285,38 200,68",
          "C115,98 55,48 0,85 Z",
        ].join(" ")}
        fill="url(#waveGradFoam)"
        style={
          animated
            ? { animation: "waveDrift 8s ease-in-out infinite" }
            : undefined
        }
      />
    </svg>
  );
}
