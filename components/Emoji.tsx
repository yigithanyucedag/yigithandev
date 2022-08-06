import React from "react";
import cx from "classnames";

interface Props {
  label?: string;
  symbol: string;
  className?: string;
}

const Emoji = ({ label, symbol, className }: Props) => (
  <span
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
    className={cx("emoji", className)}
  >
    {symbol}
  </span>
);
export default Emoji;
