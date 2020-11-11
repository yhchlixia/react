import Cloud from '@/pages/cloud/Cloud';
import Find from '@/pages/find/Find';
import User from '@/pages/user/User';
import Video from '@/pages/video/Video';
import React, { useEffect, useState } from 'react';
import './Context.less';

interface IContext {
    menu: string,
    backgroundColor?: string
}
const Context = (props: IContext) => {
    return (
    <div className="context" style={{backgroundColor: props.backgroundColor}}>
        {
            props.menu === '1' ? <User /> : props.menu === '2' ? <Find /> : props.menu === '3' ? <Cloud /> : props.menu === '4' ? <Video /> : null
        }
    </div>
    )
}

export default Context;