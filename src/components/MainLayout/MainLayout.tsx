import React, { ReactNode } from 'react'

import Navbar from '../Navbar/Navbar'

type Props = {
    children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
export default MainLayout