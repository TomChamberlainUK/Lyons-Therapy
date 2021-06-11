import React from 'react';

export default function mapReactDescendants(children, fn) {
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    if (child.props.children) {
      child = React.cloneElement(child, { children: mapReactDescendants(child.props.children, fn) });
    }
    return fn(child);
  });
}