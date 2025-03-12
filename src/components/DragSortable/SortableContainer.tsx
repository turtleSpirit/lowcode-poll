import React, { FC } from 'react';

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

type PropsType = {
  children: JSX.Element | JSX.Element[];
  items: Array<{ id: string; [k: string]: any }>;
  onDragEnd: (oldIndex: number, newIndex: number) => void;
};

const SortableContainer: FC<PropsType> = (props: PropsType) => {
  const { children, items, onDragEnd } = props;

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8, // 拖拽距离才判定为拖拽
      },
    })
  );
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over == null) return;

    if (active.id == over.id) {
      const oldIndex = items.findIndex(c => c.fe_id === active.id);
      const newIndex = items.findIndex(c => c.fe_id === over.id);
      onDragEnd(oldIndex, newIndex);
    }
  }
  return <p>123 {children}</p>;
};

export default SortableContainer;
