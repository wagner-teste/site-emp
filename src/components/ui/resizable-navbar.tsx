"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  visible?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 sm:top-2 z-40 w-full px-2 sm:px-4", className)}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childType = child.type;
          if (typeof childType === "string") {
            return child;
          } else {
            return React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            );
          }
        }
        return child;
      })}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "95%" : "100%",
        y: visible ? 8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-3 py-2 lg:flex dark:bg-transparent",
        visible && "bg-white/90 dark:bg-neutral-950/90",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childType = child.type;
          if (typeof childType === "string") {
            return child;
          } else {
            return React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            );
          }
        }
        return child;
      })}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
  visible,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium transition duration-200 lg:flex xl:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={cn(
            "relative px-3 py-2 transition-colors duration-200 text-center min-w-[44px] min-h-[44px] flex items-center justify-center",
            visible
              ? "text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white"
              : "text-white hover:text-gray-200"
          )}
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className={cn(
                "absolute inset-0 h-full w-full rounded-full",
                visible ? "bg-gray-100 dark:bg-neutral-800" : "bg-white/10"
              )}
            />
          )}
          <span className="relative z-20 text-xs lg:text-sm">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: "100%",
        paddingRight: "8px",
        paddingLeft: "8px",
        borderRadius: visible ? "12px" : "24px",
        y: visible ? 8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between bg-transparent px-2 py-2 lg:hidden",
        visible && "bg-white/90 dark:bg-neutral-950/90",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childType = child.type;
          if (typeof childType === "string") {
            return child;
          } else {
            return React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            );
          }
        }
        return child;
      })}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
  visible,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-2",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childType = child.type;
          if (typeof childType === "string") {
            return child;
          } else {
            return React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            );
          }
        }
        return child;
      })}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950 overflow-hidden",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
  visible,
}: {
  isOpen: boolean;
  onClick: () => void;
  visible?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
    >
      {isOpen ? (
        <IconX
          className={`w-6 h-6 ${visible ? "text-black dark:text-white" : "text-white"}`}
        />
      ) : (
        <IconMenu2
          className={`w-6 h-6 ${visible ? "text-black dark:text-white" : "text-white"}`}
        />
      )}
    </button>
  );
};

export const NavbarLogo = ({ visible }: { visible?: boolean }) => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal min-w-[44px] min-h-[44px]"
    >
      <div
        className={`transition-all duration-200 ${
          visible ? "" : "bg-white rounded-lg p-1"
        }`}
      >
        <Image 
          src="/primecode.svg" 
          alt="PrimeCode Solutions Logo" 
          width={28} 
          height={28}
          className="w-7 h-7 sm:w-8 sm:h-8"
        />
      </div>
      <div className="flex flex-col items-start justify-center leading-tight">
        <span
          className={`font-medium text-center transition-colors duration-200 text-sm sm:text-base ${
            visible ? "text-black dark:text-white" : "text-white"
          }`}
        >
          PrimeCode
        </span>
        <span
          className={`text-[9px] sm:text-[10px] text-center mx-auto transition-colors duration-200 ${
            visible ? "text-black dark:text-white" : "text-white"
          }`}
        >
          SOLUTIONS
        </span>
      </div>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-3 py-2 sm:px-4 sm:py-2 rounded-md bg-white button bg-white text-black text-xs sm:text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center min-w-[44px] min-h-[44px] flex items-center justify-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};