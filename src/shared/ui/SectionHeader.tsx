import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  centered?: boolean;
  className?: string;
  variant?: 'light' | 'dark';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  centered = true,
  className = '',
  variant = 'light'
}) => {
  const subtitleColor = variant === 'dark' ? 'text-stone-400' : 'text-stone-500';
  const titleColor = variant === 'dark' ? 'text-stone-100' : 'text-stone-900';

  return (
    <div className={`mb-10 md:mb-16 space-y-3 md:space-y-4 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className={`text-xs font-bold tracking-[0.2em] ${subtitleColor} uppercase`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-5xl font-display ${titleColor}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
