import * as React from 'react';
import { View, Text, Image, Modal,Button} from 'remax/one';
import styles from './index.css';
import Header from '../component/header/Header'
import Context from '../component/context/Context';
import Footer from '../component/footer/Footer';

export default () => {
  const [menu, setMenu] = React.useState('2')
  function onChangeTab(id: any) {
    setMenu(id)
  }
  return (
    <View className={styles.app}>
      <Header ocChangeTab={(id: any) => onChangeTab(id)}></Header>
      <Context menu={menu}></Context>
      <Footer />
    </View>
  );
};
// 这个咋启动 骑一下
