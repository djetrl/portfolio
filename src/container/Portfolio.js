import { connect } from 'react-redux';
import UseActionProject from '../redux/Slice/Project/ActionPage';
import { useEffect, useState } from 'react';
import { Portfolio as BasePortfolio } from "../component"
import koin from '../assets/img/Profile/Koin.jpg';
import compass from '../assets/img/Profile/compass.jpg';
import chatfrnt from '../assets/img/Profile/chatfrnt.jpg';
import chatbck from '../assets/img/Profile/chatbck.jpg';
const Portfolio =({items})=>{
  const {setItemProject} = UseActionProject();
  const [statusInfo, setStatusInfo] = useState('');
  const Data = [
    {
      name:'Koin',
      img:koin,
      text:'Лендинговая страница представляет собой важный инструмент привлечения клиентов и продвижения продукта. Когда дело доходит до информации о продукте и управлении облачным сервисом, важно обеспечить ясность и привлекательность контента.',
      github:'https://github.com/djetrl/koin',
      site:'https://djetrl.github.io/koin/'
    },
    {
      name:'Compass',
      img:compass,
      text:'Лендинг страница, предоставляющая услуги туризма.',
      github:'https://github.com/djetrl/Compas',
      site:'https://djetrl.github.io/Compas/'
    },
    {
      name:'chat frontend',
      img:chatfrnt,
      text:'Пользовательская часть мессенджера, в котором реализованны основные функции.',
      github:'https://github.com/djetrl/chat-fontend',
      site:''
    },
    {
      name:'chat backend',
      img:chatbck,
      text:'Серверная часть мессенджера, из особенностей можно отметить сжатия файлов и перевод в webp формат, использования socket.io, и шифрования.',
      github:'https://github.com/djetrl/chat-backend',
      site:''
    }
  ]
  useEffect(()=>{
    setItemProject()
  },[])
  return (
    <BasePortfolio items={items} statusInfo={statusInfo} setStatusInfo={setStatusInfo} Data={Data}  />
  )
}

export default connect(({ project })=>({items:project.item}))(Portfolio);