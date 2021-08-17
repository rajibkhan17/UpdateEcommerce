import React, { useState } from 'react';
import { Menu } from 'antd';
import { 
    UserAddOutlined,
    UserOutlined,
    AppstoreOutlined, 
    SettingOutlined 
} from '@ant-design/icons';

import { Link } from 'react-router-dom';

const { SubMenu, Item } = Menu;


const Header = () => {
   const [current, setCurrent] = useState("home")

   const handleClick = (e) => {
     //console.log(e.key);
     setCurrent(e.key);
   };

   return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="d-block m-auto">
    
    <Item key="home" icon={<AppstoreOutlined />}>
    <Link to="/">Home</Link>
    </Item>

    <Item key="register" icon={<UserAddOutlined />} className="float-right">
    <Link to="/register">Register</Link>
    </Item>

    <Item key="login" icon={<UserOutlined />} className="float-right">
    <Link to="/login">Login</Link>
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












