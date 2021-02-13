import React, { ReactChildren } from 'react';

export interface ILayoutProps {
  children: ReactChildren | string;
}

const Layout = ({ children }: ILayoutProps) => <main>{children}</main>;

export default Layout;
