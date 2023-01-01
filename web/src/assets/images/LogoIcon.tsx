import * as React from 'react';

interface LogoIconProps {
    className?: string;
    styles?: any;
}

export const LogoIcon: React.FC<LogoIconProps> = (props: LogoIconProps) => (
    <svg
        className={props.className}
        style={props.styles}
        fill="none"
        width="118"
        height="20"
        viewBox="0 0 118 20"
        xmlns="http://www.w3.org/2000/svg"
    >
      
      <text x="0" y="20" fill="white" font-family="IBM Plex Sans"  font-weight="500" font-size="25">ROZEFX</text>
      
        </svg>
);
