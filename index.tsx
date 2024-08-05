"use client";

import React from "react";
import { type PropsWithChildren, useState } from "react";

import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./src/components/ui/sheet";

interface Props extends PropsWithChildren {
  MenuIcon?: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  className?: string;
}

export const Sidebar: React.FC<Props> = ({
  MenuIcon = <Menu />,
  onOpen,
  onClose,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSidebarOpen = () => {
    if (isOpen) {
      setIsOpen(false);

      if (onClose) {
        onClose();
      }
    } else {
      setIsOpen(true);

      if (onOpen) {
        onOpen();
      }
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onSidebarOpen}>
      <SheetTrigger>
        {MenuIcon}
      </SheetTrigger>
      <SheetContent className={className}> 
        {children}
      </SheetContent>
    </Sheet>
  );
};
