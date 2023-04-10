import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    UserOutlined,
    PicCenterOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const admin = () => {
    const naviga = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => { // hiện nav
        setCollapsed(!collapsed);
    };
    let userItem = (localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')!) : false
    if (userItem.user?.role == 'member' || userItem == false) { // kiểm tra xem user.role có phải admin không 
        naviga('/')
        message.error("Bạn không có quyền try cập vào trang quản trị") // nếu không phải admin thì hiện lỗi và trả về trang homepage
    }
    type MenuItem = Required<MenuProps>['items'][number];
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }
    return (
        <div className='row'>
            <aside className='col-2'>
                <div>
                    <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <b style={{ paddingLeft: 20 }}>{userItem.user?.name}: {userItem.user?.role}</b>
                    <Menu style={{ height: 500 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={[
                            { label: "Trang Chủ", key: "/", icon: <HomeOutlined /> },
                            { label: "Sản phẩm", key: "/admin", icon: <HomeOutlined /> },
                            { label: "Danh mục", key: "/admin/danhmuc", icon: <PicCenterOutlined /> },
                            { label: "Tài Khoản", key: "/admin/taikhoan", icon: <UserOutlined /> },
                        ]}
                        onClick={({ key }) => {
                            if (key === 'Tài Khoản') {
                            }
                            else {
                                naviga(key)
                            }
                        }}
                    />
                </div>
            </aside>
            <main className='col-10'>
                <Outlet />
            </main>
        </div>
    )
}

export default admin