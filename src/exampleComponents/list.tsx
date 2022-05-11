import React, { FC } from "react";

// указываем generic T - это означает, что interface принимает
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
}

export default function List<T>({ items, renderItem }: ListProps<T>) {
  return <div>{items.map(renderItem)}</div>;
}
