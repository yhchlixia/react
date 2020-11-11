import { Cell, Loading, SwipeAction, Swiper } from 'annar';
import React, { useEffect } from 'react'
import Carousel from '../component/Carousel/Carousel';
import SvgIcon from '../component/SvgIcon/SvgIcon';
import './Find.less'

const Find = (props: any) => {
    const images = [
        {
            url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2420744160,4087949052&fm=26&gp=0.jpg',
            name: '1',
            bgColor: '#999'
        },{
            url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1723782218,71054171&fm=26&gp=0.jpg',
            name: '2',
            bgColor: '#666'
        },{
            url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4256956787,1960961286&fm=26&gp=0.jpg',
            name: '3',
            bgColor: '#333'
        }
    ]
    const menus = [
        {
            url: 'date',
            id: 0,
            label: '每日推荐',
        },{
            url: 'redio',
            id: 1,
            label: '私人FM',
        },{
            url: 'music',
            id: 2,
            label: '歌单',
        },{
            url: 'stats',
            id: 3,
            label: '排行榜',
        },{
            url: 'audio',
            id: 4,
            label: '直播',
        },{
            url: 'radio',
            id: 5,
            label: '电台',
        },{
            url: 'digital-ocean',
            id: 6,
            label: '数字专辑',
        },{
            url: 'chat',
            id: 7,
            label: '畅聊',
        },{
            url: 'game',
            id: 8,
            label: '游戏专区',
        }
    ]
    const menusWidth = menus.length * 140 + 20;
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleDelete = async () => {
      console.log('Delete');
    };
    return (
        <div className="user">
            <Carousel images={images} timeOut={2} />
            <div className="user-find">
                <div className='find-inner' style={{width: menusWidth + 'px'}}>
                    {
                        menus && menus.map((item: any) => (
                            <div key={item.id} className='flex'>
                                <div className='flex-div'>
                                    <SvgIcon type={item.url} size='100' style={{backgroundColor: 'red', borderRadius: '50%', padding: '20px'}}></SvgIcon>
                                    <label className='flex-label' htmlFor={item.lebel}>{item.label}</label>
                                </div>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Find;