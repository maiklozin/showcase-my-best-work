const InstagramIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id={`ig-grad-${size}`} cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke={`url(#ig-grad-${size})`} strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="5" stroke={`url(#ig-grad-${size})`} strokeWidth="2" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.5" fill={`url(#ig-grad-${size})`} />
  </svg>
);

export default InstagramIcon;
