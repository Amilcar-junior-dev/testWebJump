import React from 'react';
import ViewHeader from './view'
import { PropsHeader } from './Models';

const Header: React.FC<PropsHeader> = ({
    children,
}) => {
    return (
        <ViewHeader
         
        >
            {children}
        </ViewHeader>
    )
}
export default Header;