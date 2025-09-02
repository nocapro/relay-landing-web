export const NocaLogo = (props: React.ComponentProps<'svg'>) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="64" height="64" rx="12" fill="#0A0A0A"/>
    <path d="M20 23L32 23C37.5228 23 42 27.4772 42 33L42 33" stroke="url(#paint0_linear_1_4_noca)" strokeWidth="4"/>
    <path d="M20 41L32 41C37.5228 41 42 36.5228 42 31L42 31" stroke="url(#paint1_linear_1_4_noca)" strokeWidth="4"/>
    <defs>
      <linearGradient id="paint0_linear_1_4_noca" x1="20" y1="23" x2="42" y2="33" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8"/>
        <stop offset="1" stopColor="#22D3EE"/>
      </linearGradient>
      <linearGradient id="paint1_linear_1_4_noca" x1="20" y1="41" x2="42" y2="31" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8"/>
        <stop offset="1" stopColor="#22D3EE"/>
      </linearGradient>
    </defs>
  </svg>
);