import React, { useEffect } from "react";
import { useLocation, useMatches, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux";
import { addTabItem, deleteTabItem, setTabsList } from "@/redux/modules/tabs";

import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import { arrayMove, horizontalListSortingStrategy, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Tabs } from "antd";

import "./index.less";

import type { MetaProps } from "@/router/interface";
import type { TabsListProp } from "@/redux/interface";
import type { DragEndEvent } from "@dnd-kit/core";

type TargetKey = string | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>;

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  "data-node-key": string;
}

const DraggableTabNode = ({ ...props }: DraggableTabPaneProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props["data-node-key"]
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleX: 1 }),
    transition
  };

  return React.cloneElement(props.children as React.ReactElement, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners
  });
};

const TabsContainer: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const matches = useMatches();
  const dispatch = useAppDispatch();

  const tabsList = useAppSelector(state => state.tab);

  const sensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } });

  const initTabs = () => {
    const meta = matches[matches.length - 1].data as MetaProps;
    if (!meta.isAffix && !meta.isFull && !meta.isHide) {
      const tab = {
        title: meta.title!,
        icon: meta.icon!,
        path: pathname,
        closable: !!meta.closable
      };
      dispatch(addTabItem(tab));
    }
  };

  const tabItems = tabsList.map(item => {
    return {
      key: item.path,
      label: (
        <>
          {<i className={`iconfont ${item.icon}`} />}
          {item.title}
        </>
      ),
      closable: item.closable
    };
  });

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const activeIndex = tabsList.findIndex(i => i.path === active.id);
      const overIndex = tabsList.findIndex(i => i.path === over?.id);
      dispatch(setTabsList(arrayMove<TabsListProp>(tabsList, activeIndex, overIndex)));
    }
  };

  const onChange = (key: string) => {
    navigate(key);
  };

  const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
    if (action === "remove" && typeof targetKey === "string") {
      dispatch(deleteTabItem({ path: targetKey, current: pathname === targetKey }));
    }
  };

  useEffect(() => initTabs(), [matches]);

  return (
    <Tabs
      hideAdd
      size="middle"
      type="editable-card"
      className="layout-tab container-bg"
      items={tabItems}
      activeKey={pathname}
      onEdit={onEdit}
      onChange={onChange}
      {...{
        renderTabBar: (tabBarProps, DefaultTabBar) => (
          <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
            <SortableContext items={tabItems.map(i => i.key)} strategy={horizontalListSortingStrategy}>
              <DefaultTabBar {...tabBarProps}>
                {node => (
                  <DraggableTabNode {...node.props} key={node.key}>
                    {node}
                  </DraggableTabNode>
                )}
              </DefaultTabBar>
            </SortableContext>
          </DndContext>
        )
      }}
    />
  );
};

export default TabsContainer;
