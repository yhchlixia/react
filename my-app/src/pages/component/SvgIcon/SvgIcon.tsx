import React, { CSSProperties } from 'react';
import './SvgIcon.less'
interface ISvgIcon {
    type: string;
    color?: string;
    size?: string;
    width?: string;
    height?: string;
    style?: CSSProperties;
}
const SvgIcon = (props: ISvgIcon) => {
    const { type, size = 16, color = '#333', width, height } = props;
    return (
        <div className="svg-icon" style={{width: width || size+ 'px', height: height || size+ 'px', ...props.style}}>
            <img style={{width: '100%', height: '100%'}} src={`/svg/${type}.svg`} alt=""/>
        </div>
    )
}

export default SvgIcon;