
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default HomeLayout;