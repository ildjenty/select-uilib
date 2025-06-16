"use client";

import { forwardRef } from "react";
import {
  Tabs as AriaTabs,
  TabList,
  Tab,
  TabPanel,
  type TabsProps as AriaTabsProps,
  type TabListProps,
  type TabProps,
  type TabPanelProps,
} from "react-aria-components";
import { cva, cx } from "@/styled-system/css";

const tabsListRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "border",
  },
});

const tabsTriggerRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    px: "3",
    py: "1.5",
    gap: "1",
    transitionProperty: "all",
    transitionDuration: "fast",
    transform: "translateY(1px)",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "transparent",
    color: "muted",
    text: "sm",
    fontWeight: "semibold",
    whiteSpace: "nowrap",
    cursor: "pointer",
    outline: "none",
    _hover: {
      bg: "accent",
      borderBottomColor: "border",
    },
    _disabled: {
      pointerEvents: "none",
      opacity: "0.5",
    },
    _selected: {
      bg: "active",
      color: "primary",
      borderBottomColor: "primary",
    },
    _focusVisible: {
      ringWidth: "1px",
      ringColor: "primary",
    },
  },
});

const tabsContentRecipe = cva({
  base: {
    width: "full",
    outline: "none",
    _focusVisible: {
      ringWidth: "1px",
      ringColor: "primary",
    },
  },
});

type TabsProps = AriaTabsProps & {
  className?: string;
};

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, ...props }, ref) => {
    return (
      <AriaTabs ref={ref} className={cx("w-full", className)} {...props} />
    );
  }
);

Tabs.displayName = "Tabs";

type TabsListProps = TabListProps<object> & {
  className?: string;
};

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabList
        ref={ref}
        className={cx(tabsListRecipe(), className)}
        {...props}
      />
    );
  }
);

TabsList.displayName = "TabsList";

type TabsTriggerProps = TabProps & {
  className?: string;
};

const TabsTrigger = forwardRef<HTMLDivElement, TabsTriggerProps>(
  ({ className, ...props }, ref) => {
    return (
      <Tab
        ref={ref}
        className={cx(tabsTriggerRecipe(), className)}
        {...props}
      />
    );
  }
);

TabsTrigger.displayName = "TabsTrigger";

type TabsContentProps = TabPanelProps & {
  className?: string;
};

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabPanel
        ref={ref}
        className={cx(tabsContentRecipe(), className)}
        {...props}
      />
    );
  }
);

TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
