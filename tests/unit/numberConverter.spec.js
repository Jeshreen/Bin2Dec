import { shallowMount, mount } from '@vue/test-utils'
import NumberConverter from '@/components/NumberConverter.vue'

/**
 * Test 1 - Mounting the Number converter component
 */
describe('Mount Component', () => {
  const wrapper = shallowMount(NumberConverter);
  test('does wrapper exists', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('das input field', () => {
    expect(wrapper.html()).toContain('Enter Binary Number')
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
})

