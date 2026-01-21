import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  withBorder?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  withBorder = true
}) => {
  return (
    <div className={`bg-white p-8 md:p-12 shadow-xl shadow-stone-200/50 relative overflow-hidden ${className}`}>
      {withBorder && (
        <div className="absolute inset-2 border border-stone-100 pointer-events-none"></div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
