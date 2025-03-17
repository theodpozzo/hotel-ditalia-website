import React from "react";

export const Separator: React.FC<{ className?: string }> = ({ className = "" }) => {
  return <hr className={`border-t border-gray-300 ${className}`} />;
}; 