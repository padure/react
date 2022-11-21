import React from 'react';
import classes from './Button.module.css'

const Button = ({children, ...props}) => (
  <button {...props} className={classes.myBtn}>
      {children}
  </button>
);

export default Button;
