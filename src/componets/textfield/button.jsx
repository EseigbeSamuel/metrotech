import React from "react";

export default function Button({
  size = "medium",
  children,
  variant = "outline",
  onClick,
}) {
  const getBtnSize = () => {
    if (size === "medium") {
      return "px-4";
    } else if (size === "small") {
      return "px-2";
    } else if (size === "large") {
      return "w-full";
    }
  };
  const getBtnVariant = () => {
    if (variant === "contained") {
      return "bg-black text-white";
    } else if (variant === "outlined") {
      return "border-[1px] border-black text-black hover:bg-black hover:text-white";
    }
  };

  return (
    <button
      className={`h-[40px] ${getBtnSize()} ${getBtnVariant()} rounded-md font-semibold text-[15px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
