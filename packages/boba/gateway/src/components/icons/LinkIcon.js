import { useTheme } from "@mui/material";
import * as React from "react";

function LinkIcon() {

  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const color = theme.palette.common[isLight ? 'black' : 'white'];

  return (<svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.1504 1.97347C9.41443 1.99327 8.70414 2.35027 8.08186 3.00427L7.20814 3.92226C6.98528 4.15626 6.98528 4.53126 7.20814 4.76526C7.431 4.99926 7.80586 4.99926 8.02871 4.76526L8.88414 3.84726C9.71214 2.97726 10.6304 2.89026 11.5407 3.84726C12.4516 4.80366 12.3687 5.76847 11.5407 6.63847L9.81157 8.45587C8.98357 9.32587 8.06528 9.41227 7.15499 8.45587L6.90528 8.19368C6.36757 7.62848 5.56472 8.47148 6.103 9.03668L6.35271 9.29886C7.74471 10.7617 9.36929 10.6063 10.6139 9.29886L12.343 7.48147C13.5876 6.17407 13.7356 4.46707 12.343 3.00427C11.647 2.27287 10.8859 1.95427 10.1504 1.97347ZM6.58414 5.60826C5.89786 5.65506 5.22985 6.00067 4.62299 6.63847L2.89385 8.45587C1.50128 9.91867 1.64928 11.6257 2.89385 12.9331C4.13785 14.2405 5.76299 14.3959 7.15499 12.9331L8.02871 12.0151C8.25157 11.7811 8.25157 11.4061 8.02871 11.1721C7.80586 10.9381 7.431 10.9381 7.20814 11.1721L6.35271 12.0901C5.44186 13.0471 4.52414 12.9601 3.69614 12.0901C2.86814 11.2201 2.78528 10.2559 3.69614 9.29886L5.42528 7.48147C5.84528 7.04047 6.26014 6.83407 6.65557 6.80707C7.13386 6.77407 7.63557 7.01227 8.08186 7.48147L8.33157 7.74368C8.55443 7.97768 8.91099 7.97768 9.13385 7.74368C9.35671 7.50968 9.35671 7.13468 9.13385 6.90068L8.88414 6.63847C8.223 5.94367 7.42643 5.55006 6.58414 5.60826Z"
      fill={color}
      fillOpacity="0.65" />
  </svg>
  )
}

export default LinkIcon;
