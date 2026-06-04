/* eslint-disable @next/next/no-img-element */
export default function SkillIcon({ src, alt, className = "h-8 w-8" }) {
  return <img className={className} src={src} alt={alt} width={32} height={32} loading="lazy" />;
}
