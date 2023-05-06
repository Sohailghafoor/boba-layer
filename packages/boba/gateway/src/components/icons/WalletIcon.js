import * as React from "react"
import { useTheme } from "@mui/material/styles";

function WalletIcon() {
  
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const color = theme.palette.common[ isLight ? 'black' : 'white' ];
  
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.33333 6C7.49233 6 6 7.49222 6 9.33333V11.5556V21.5556C6 24.01 7.98989 26 10.4444 26H21.5556C24.01 26 26 24.01 26 21.5556V11.5556C26 10.9422 25.5022 10.4444 24.8889 10.4444H19.3333C18.4944 10.4444 18.2244 10.1722 17.5622 8.84666C16.5589 6.83888 15.7167 6 13.7778 6H9.33333ZM9.33333 8.22222H13.7778C14.6167 8.22222 14.8867 8.49445 15.5489 9.82C15.6933 10.11 15.7533 10.2022 15.8956 10.4444H11.5209C10.9072 10.4444 10.4097 10.9422 10.4098 11.5556C10.4098 12.1689 10.9072 12.6667 11.5209 12.6667H19.3333H23.7778V21.5556C23.7778 22.7833 22.7833 23.7778 21.5556 23.7778H10.4444C9.21711 23.7778 8.22211 22.7833 8.22222 21.5556V11.5556V9.33333C8.22222 8.72 8.71967 8.22222 9.33333 8.22222ZM13.7778 17.1111C13.1641 17.1111 12.6667 17.6089 12.6667 18.2222C12.6667 18.8356 13.1641 19.3333 13.7778 19.3333H18.2222C18.8356 19.3333 19.3333 18.8356 19.3333 18.2222C19.3333 17.6089 18.8356 17.1111 18.2222 17.1111H13.7778Z"
        fill={color}
        fillOpacity="0.85" />
    </svg>
  )
}

export default WalletIcon
