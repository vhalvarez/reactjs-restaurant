import React from "react";
import {SidebarContainer, SidebarMenu, Icon, CloseIcon, SidebarLink, SidebarBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarMenu>
                <SidebarLink to="/">Pizzaasss</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>

            <SidebarBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;
