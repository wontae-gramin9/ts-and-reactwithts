import React from "react";

type CssProps = {
  styles: React.CSSProperties;
};

export default function Css({ styles }: CssProps) {
  return <div style={styles}>How to type css style</div>;
}
