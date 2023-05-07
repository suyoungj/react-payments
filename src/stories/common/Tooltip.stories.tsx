import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from '../../components/Tooltip';
import TooltipButton from '../../components/TooltipButton';

const meta: Meta<typeof Tooltip> = {
  title: 'components/common/Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const TooltipTemplate: Story = {
  render: () => {
    return (
      <div style={{ width: '30px' }}>
        <Tooltip>
          <TooltipButton />
        </Tooltip>
      </div>
    );
  },
};

export const CVC: Story = {
  ...TooltipTemplate,
};
