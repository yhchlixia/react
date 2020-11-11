import React, { useState } from 'react';
import SvgIcon from '../SvgIcon/SvgIcon';
import './Header.less'

interface IHeader {
    ocChangeTab: (id: any) => void,
    backgroundColor?: string
}

const Header = (props: IHeader) => {
    const [currentTab, setCurrentTab] = useState('2')
    const [tabs, setTabs] = useState([
        {
            id: '1',
            title: '我的',
            new: false
        },
        {
            id: '2',
            title: '发现',
            new: false
        },
        {
            id: '3',
            title: '云村',
            new: false
        },
        {
            id: '4',
            title: '视频',
            new: true
        }
    ])

    function changeTab(id: any) {
        tabs.forEach((item: any) => {
            if (item.id === id) {
                item.new = false
            }
        })
        setTabs(tabs)
        setCurrentTab(id)
        props.ocChangeTab && props.ocChangeTab(id)
    }
    return (
        <div className="header" style={{backgroundColor: props.backgroundColor}}>
            <div className="header-div">
                <div className="header-menu">
                    <SvgIcon type="menu" size='48'></SvgIcon>
                </div>
                <div className="header-tabs">
                    {
                        tabs && tabs.map(item => {
                            return (
                                <div key={item.id} onClick={() => changeTab(item.id)} className={currentTab === item.id ? 'tab active' : 'tab'}>
                                    {item.title}
                                    {item.new ? <div className="new"></div> : null}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="header-search">
                    <SvgIcon type="search" size='48'></SvgIcon>
                </div>
            </div>
        </div>
    )
}
export default Header;