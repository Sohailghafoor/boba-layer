import * as React from "react";
import { useTheme } from "@mui/material/styles";

function CalenderIcon() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const color = theme.palette.common[ isLight ? 'black' : 'white' ];
  return (
    <svg width="25" height="27"
      viewBox="0 0 25 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M6.67472 0.685547C5.93832 0.685547 5.34139 1.28288 5.34139 2.01888C2.39592 2.01888 0.00805664 4.40688 0.00805664 7.35221V20.6855C0.00805664 23.6309 2.39592 26.0189 5.34139 26.0189H18.6747C21.6201 26.0189 24.0081 23.6309 24.0081 20.6855V7.35221C24.0081 4.40688 21.6201 2.01888 18.6747 2.01888C18.6747 1.28288 18.0774 0.685547 17.3414 0.685547C16.6054 0.685547 16.0081 1.28288 16.0081 2.01888H8.00806C8.00806 1.28288 7.41112 0.685547 6.67472 0.685547ZM5.34139 4.68555C5.34139 5.42155 5.93832 6.01888 6.67472 6.01888C7.41112 6.01888 8.00806 5.42155 8.00806 4.68555H16.0081C16.0081 5.42155 16.6054 6.01888 17.3414 6.01888C18.0774 6.01888 18.6747 5.42155 18.6747 4.68555C20.1481 4.68555 21.3414 5.87888 21.3414 7.35221V20.6855C21.3414 22.1589 20.1481 23.3522 18.6747 23.3522H5.34139C3.86859 23.3522 2.67472 22.1589 2.67472 20.6855V7.35221C2.67472 5.87888 3.86859 4.68555 5.34139 4.68555ZM13.3414 10.0189C12.6054 10.0189 12.0081 10.6162 12.0081 11.3522C12.0081 12.0882 12.6054 12.6855 13.3414 12.6855H17.3414C18.0774 12.6855 18.6747 12.0882 18.6747 11.3522C18.6747 10.6162 18.0774 10.0189 17.3414 10.0189H13.3414ZM6.67472 15.3522C5.93832 15.3522 5.34139 15.9495 5.34139 16.6855C5.34139 17.4215 5.93832 18.0189 6.67472 18.0189H10.6747C11.4107 18.0189 12.0081 17.4215 12.0081 16.6855C12.0081 15.9495 11.4107 15.3522 10.6747 15.3522H6.67472Z" fill={color} fillOpacity="0.45" />
    </svg>
  );
}

export default CalenderIcon;
