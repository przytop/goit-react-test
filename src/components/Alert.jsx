import css from "./Alert.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";

export const Alert = ({
  children,
  variant,
  outlined = false,
  elevated = false,
}) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["info", "success", "warning", "error"]).isRequired,
  outlined: PropTypes.bool,
  elevated: PropTypes.bool,
};
