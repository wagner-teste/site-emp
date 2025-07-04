"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IconArrowRight, IconPhone, IconMail, IconBrandWhatsapp } from '@tabler/icons-react';
import { useCTA, CTAConfig } from '@/app/contexts/CTAContext';
import { cn } from '@/lib/utils';

type CTAIconPosition = 'left' | 'right';

interface CTAButtonProps extends Omit<CTAConfig, 'id' | 'label'> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  iconPosition?: CTAIconPosition;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  id = `cta-${Math.random().toString(36).substring(2, 9)}`,
  type = 'primary',
  action,
  target,
  section = 'global',
  urgencyTag = false,
  variant = 'default',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className,
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  ...props
}) => {
  const { trackCTAClick, openModal, getWhatsAppLink } = useCTA();

  const config: CTAConfig = {
    id,
    type,
    label: typeof children === 'string' ? children : 'CTA Button',
    action,
    target,
    section,
    urgencyTag,
    variant,
    size,
    icon
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (disabled || loading) return;

    trackCTAClick(config);

    switch (action) {
      case 'modal':
        openModal(target, id);
        break;
      case 'whatsapp':
        window.open(getWhatsAppLink(target), '_blank', 'noopener,noreferrer');
        break;
      case 'phone':
        window.location.href = `tel:${target.replace(/\D/g, '')}`;
        break;
      case 'external':
        window.open(target, '_blank', 'noopener,noreferrer');
        break;
      case 'internal':
        window.location.href = target;
        break;
      default:
        onClick?.();
    }
  };

  const getVariantStyles = () => {
    const baseStyles = cn(
      "relative inline-flex items-center justify-center font-medium transition-all",
      "duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
      "disabled:opacity-70 disabled:cursor-not-allowed",
      "overflow-hidden min-h-[44px]" // Touch target minimum
    );

    const sizeStyles = {
      sm: "px-3 py-2 text-sm rounded-md",
      md: "px-4 py-2.5 text-base rounded-lg",
      lg: "px-6 py-3 text-lg rounded-xl",
      xl: "px-8 py-4 text-xl rounded-xl"
    };

    // Cores específicas para WhatsApp e telefone
    const getActionSpecificStyles = () => {
      if (action === 'whatsapp') {
        return "bg-[#25D366] text-white hover:bg-[#1da851] focus:ring-[#25D366] shadow hover:shadow-md";
      }
      if (action === 'phone') {
        return "bg-[#0077FF] text-white hover:bg-[#0066dd] focus:ring-[#0077FF] shadow hover:shadow-md";
      }
      return null;
    };

    const actionSpecificStyles = getActionSpecificStyles();
    if (actionSpecificStyles) {
      return cn(baseStyles, sizeStyles[size], actionSpecificStyles, fullWidth && "w-full", className);
    }

    const variantStyles = {
      default: cn(
        type === 'primary' 
          ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow hover:shadow-md"
          : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500"
      ),
      gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl",
      outline: cn(
        "border bg-transparent",
        type === 'primary'
          ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500"
          : "border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500"
      ),
      ghost: cn(
        type === 'primary'
          ? "text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
          : "text-gray-700 hover:bg-gray-100 focus:ring-gray-500"
      )
    };

    return cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      fullWidth && "w-full",
      className
    );
  };

  const renderIcon = () => {
    if (loading) {
      return (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      );
    }

    if (icon) return icon;

    switch (action) {
      case 'phone': return <IconPhone className="h-4 w-4" />;
      case 'whatsapp': return <IconBrandWhatsapp className="h-4 w-4" />;
      case 'modal': return <IconMail className="h-4 w-4" />;
      default: return <IconArrowRight className="h-4 w-4" />;
    }
  };

  return (
    <div className="relative inline-block">
      {urgencyTag && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn(
            "absolute -top-2 -right-2 text-xs px-2 py-0.5 rounded-full z-10",
            "bg-red-500 text-white animate-pulse"
          )}
        >
          Oferta!
        </motion.span>
      )}

      <motion.button
        whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
        onClick={handleClick}
        disabled={disabled || loading}
        className={getVariantStyles()}
        aria-label={config.label}
        data-cta-id={id}
        data-cta-type={type}
        data-cta-action={action}
        {...props}
      >
        <span className={cn(
          "flex items-center gap-2 whitespace-nowrap",
          iconPosition === 'left' && 'flex-row-reverse'
        )}>
          {iconPosition !== 'right' && renderIcon()}
          <span className="truncate">{children}</span>
          {iconPosition === 'right' && renderIcon()}
        </span>

        {/* Efeito Ripple */}
        {!disabled && !loading && (
          <motion.span
            className="absolute inset-0 rounded-inherit bg-white opacity-0"
            whileTap={{ opacity: 0.2, scale: 1.5 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    </div>
  );
};