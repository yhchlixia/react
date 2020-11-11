import React, { useState, useEffect } from 'react';
import { View, Text, Image, Modal,Button} from 'remax/one';
import './index.css';
import Header from '../component/header/Header'
import Context from '../component/context/Context';
import Footer from '../component/footer/Footer';
import { usePageEvent } from 'remax/macro';
import { Loading } from 'annar';
import { usePageInstance, useQuery } from 'remax';

export default () => {
  const [menu, setMenu] = React.useState('2')
  const [showUpdate, setShowUpdate] = React.useState(false)
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const query = useQuery();
  const instance = usePageInstance();
  console.log('pageQuery', query);
  console.log('pageInstance', instance);

  useEffect(() => {
      if (menu === '1') {
          setBackgroundColor('');
      } else {
          setBackgroundColor('#ffffff');
      }
  }, [menu])

  function onChangeTab(id: any) {
    setMenu(id)
  }

  usePageEvent('onPullDownRefresh', () => {
    setShowUpdate(true);
    setTimeout(() => {
      setShowUpdate(false)
    }, 3000)
 });

  return (
    <View className={'app'}>
      {
        showUpdate ? (
          <div className="show-update">
            <Loading color="#1890FF" />
          </div>
        ) : null
      }
      <Header ocChangeTab={(id: any) => onChangeTab(id)} backgroundColor={backgroundColor}></Header>
      <Context menu={menu} backgroundColor={backgroundColor}></Context>
      <Footer />
    </View>
  );
};
// 这个咋启动 骑一下
