import React from "react";

export interface NavigationOption {
  name: string;
  href: string;
  icon: React.ElementType;
  current: boolean;
}
