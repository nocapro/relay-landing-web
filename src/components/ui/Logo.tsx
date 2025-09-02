export const Logo = (props: React.ComponentProps<'svg'>) => (
  <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="64" height="64" rx="12" fill="#0A0A0A"/>
    <path d="M20 18H32C37.5228 18 42 22.4772 42 28C42 33.5228 37.5228 38 32 38H20V18Z" stroke="url(#paint0_linear_1_1_logo)" strokeWidth="4"/>
    <path d="M32 38L44 46" stroke="url(#paint1_linear_1_1_logo)" strokeWidth="4"/>
    <defs>
      <linearGradient id="paint0_linear_1_1_logo" x1="20" y1="18" x2="42" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8"/>
        <stop offset="1" stopColor="#22D3EE"/>
      </linearGradient>
      <linearGradient id="paint1_linear_1_1_logo" x1="32" y1="38" x2="44" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8"/>
        <stop offset="1" stopColor="#22D3EE"/>
      </linearGradient>
    </defs>
  </svg>
);