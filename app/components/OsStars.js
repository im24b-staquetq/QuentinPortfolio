function OsStar({ fill }) {
  if (fill <= 0) {
    return (
      <span className="inline-block w-[1em] text-slate-600" aria-hidden>
        ★
      </span>
    );
  }
  if (fill >= 1) {
    return (
      <span className="inline-block w-[1em] text-amber-400" aria-hidden>
        ★
      </span>
    );
  }
  return (
    <span className="relative inline-block w-[1em]" aria-hidden>
      <span className="text-slate-600">★</span>
      <span
        className="absolute left-0 top-0 h-full overflow-hidden text-amber-400"
        style={{ width: `${fill * 100}%` }}
      >
        <span className="inline-block w-[1em]">★</span>
      </span>
    </span>
  );
}

export default function OsStars({ rating }) {
  const value = Math.min(5, Math.max(0, Number(rating) || 0));
  return (
    <span className="inline-flex shrink-0 gap-px text-sm leading-none" aria-label={`${value} von 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <OsStar key={n} fill={Math.min(1, Math.max(0, value - (n - 1)))} />
      ))}
    </span>
  );
}
