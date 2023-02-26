import { Card, Segmented } from 'antd';
import * as React from 'react';
import { ReactNode } from 'react';
import { getSearchParams } from '../utils';
import './index.less';
interface SegmentedTabsProps {
  items: { key: string; children: ReactNode; label?: string; icon?: ReactNode }[];
  queryKey?: string;
}

const SegmentedTabs: React.FunctionComponent<SegmentedTabsProps> = props => {
  const { items, queryKey = 'tab' } = props;

  const [state, setState] = React.useState<{ active: string }>(() => {
    const { searchParams, path } = getSearchParams(window.location);
    const active = searchParams.get(queryKey) || items[0].key;
    return {
      active,
    };
  });

  const { active } = state;
  const options = items.map(item => {
    return {
      value: item.key,
      label: item.label,
      icon: item.icon,
    };
  });

  const onChange = value => {
    const { searchParams, path } = getSearchParams(window.location);
    searchParams.set(queryKey, value);
    window.location.hash = `${path}?${searchParams.toString()}`;
    setState(preState => {
      return {
        ...preState,
        active: value,
      };
    });
  };

  return (
    <Card
      style={{ borderRadius: '4px' }}
      bodyStyle={{
        width: 'calc(100vw - 300px)',
        height: 'calc(100vh - 180px)',
        overflow: 'auto',
        padding: '12px 12px',
      }}
      title={
        <Segmented
          options={options}
          onResize={undefined}
          onResizeCapture={undefined}
          value={active}
          onChange={onChange}
        />
      }
    >
      <div className="gi-segmented-tabs">
        {items.map(item => {
          const { key, children } = item;
          const isActive = key === active;
          return (
            <div className={isActive ? 'appear' : 'hidden'} key={key}>
              {children}
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default SegmentedTabs;
