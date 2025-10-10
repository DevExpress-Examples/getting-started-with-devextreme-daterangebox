import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Content from '../DateRangeBoxContent.vue';

describe('Content', () => {
  it('renders properly', () => {
    const wrapper = mount(Content);
    expect(wrapper.html()).toContain('app-container');
  });
});
