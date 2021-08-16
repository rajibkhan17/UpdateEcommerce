import React, { useState } from 'react';
import { Menu } from 'antd';
import { 
    UserAddOutlined,
    UserOutlined,
    AppstoreOutlined, 
    SettingOutlined 
} from '@ant-design/icons';

const { SubMenu, Item } = Menu;


const Header = () => {
   const [current, setCurrent] = useState("home")

   const handleClick = (e) => {
     //console.log(e.key);
     setCurrent(e.key);
   };

   return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
    
    <Item key="home " icon={<AppstoreOutlined />}>
      Home
    </Item>

    <Item key="register " icon={<UserAddOutlined />} className="float-right"  >
      Register
    </Item>

    <Item key="login " icon={<UserOutlined />} className="float-right">
      Login
    </Item>


    <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">Logout</Item>
        <Item key="setting:2">Profile</Item>
        <Item key="setting:2">Address</Item>

    </SubMenu>
  </Menu>
   )

}

export default Header;












