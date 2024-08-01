import React from "react";
import { useTheme } from "./context/ThemeContext";

export default function Box() {
  const theme = useTheme();
  // Context API의 value에 typing을 했기때문에 auto completion
  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Box
    </div>
  );
}
