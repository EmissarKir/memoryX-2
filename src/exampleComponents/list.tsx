import React, { FC } from "react";

// указываем generic T - это означает, что interface принимает
interface ListProps<T> {
  items: T[];
  renderItem: (user: T) => JSX.Element;
}

export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
