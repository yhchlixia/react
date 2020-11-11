import { Progress } from 'annar';
import React from 'react';
import SvgIcon from '../SvgIcon/SvgIcon';
import './Footer.less';
const Footer = (props: any) => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-image">
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2420744160,4087949052&fm=26&gp=0.jpg" alt=""/>
                </div>
                <div className="footer-label"></div>
                <div className="footer-progress">
                    <Progress percent={50} shape="sharp" width={40} />
                </div>
                <div className="footer-menu"></div>
            </div>
        </div>
    )
}

export default Footer;