
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isRounded?: boolean;
  isFullWidth?: boolean;
  withHoverAnimation?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isRounded = false,
  isFullWidth = false,
  withHoverAnimation = true,
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-hive-yellow focus:ring-opacity-50';
  
  const variantClasses = {
    primary: 'bg-hive-yellow text-hive-black hover:bg-hive-yellow/90 active:bg-hive-yellow/95',
    secondary: 'bg-hive-black text-white hover:bg-hive-black/90 active:bg-hive-black/95',
    outline: 'bg-transparent border border-hive-yellow text-hive-black hover:bg-hive-yellow/10 active:bg-hive-yellow/5',
    ghost: 'bg-transparent text-hive-black hover:bg-hive-yellow/10 active:bg-hive-yellow/5',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const roundedClasses = isRounded ? 'rounded-full' : 'rounded-md';
  const widthClasses = isFullWidth ? 'w-full' : '';
  const hoverAnimationClasses = withHoverAnimation ? 'transform hover:-translate-y-1 hover:shadow-md' : '';
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        roundedClasses,
        widthClasses,
        hoverAnimationClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
