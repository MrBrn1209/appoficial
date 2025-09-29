
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = "", ...rest }) => {
  return (
    <div className={"rounded-2xl-lg border border-gray-200 bg-white shadow-soft " + className} {...rest}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<CardProps> = ({ children, className = "", ...rest }) => {
  return <div className={"p-4 " + className} {...rest}>{children}</div>;
};

export const CardTitle: React.FC<CardProps> = ({ children, className = "", ...rest }) => {
  return <h3 className={"text-[17px] font-semibold " + className} {...rest}>{children}</h3>;
};
