import { Children, ReactElement, cloneElement } from 'react';
import Column from './view/Column';
import { Form } from './view/Form';
import { Item, Items } from './view/Items';
import Row from './view/Row';
import ScrollDragHorizontal from './view/ScrollDragHorizontal';
import { Section } from './view/Section';

export function V({ children }: { children: ReactElement }) {
  const child = Children.only(children);

  return cloneElement(child);
}

V.Section = Section;
V.Column = Column;
V.Row = Row;
V.Form = Form;
V.ScrollDragHorizontal = ScrollDragHorizontal;
V.Items = Items;
V.Item = Item;
V.Item = Item;
