import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`mb-16 space-y-4 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-display text-stone-900">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
