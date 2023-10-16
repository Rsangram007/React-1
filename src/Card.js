import React from 'react';
import './Card.css';

export default function Card({ className, children }) {
  //const cardClasses = 'card ' + className;
  return <div className={'card ' + className}>{children}</div>;
}
