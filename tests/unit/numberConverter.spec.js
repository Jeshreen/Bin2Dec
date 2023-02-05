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

  it('has input field', () => {
    expect(wrapper.html()).toContain('Enter Binary Number')
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
})

describe('getValidate function test', () => {
  const wrapper = shallowMount(NumberConverter)

  //Test if null value is passed return value is true indicating error
  it("null check", () => {
    let value = ""
    let response = wrapper.vm.getValidated(value);
    expect(response).toBe(true);
  })

  //Test if string value is passed return value is true indicating error
  it("string check", () => {
    let value = "test"
    let response = wrapper.vm.getValidated(value);
    expect(response).toBe(true);
  })

  //Test if decimal value is passed return value is true indicating error
  it("decimal number check", () => {
    let value = "87"
    let response = wrapper.vm.getValidated(value);
    expect(response).toBe(true);
  })

  //Test if negative decimal value is passed return value is true indicating error
  it("negative number check", () => {
    let value = "-19"
    let response = wrapper.vm.getValidated(value);
    expect(response).toBe(true);
  })

  //Test if negative binary value is passed return value is true indicating error
  it("negative binary number check", () => {
    let value = "-100"
    let response = wrapper.vm.getValidated(value);
    expect(response).toBe(true);
  })

  //Test if special character value is passed return value is true indicating error
  it("special character check", () => {
    let value = "*/"
    let response = wrapper.vm.getValidated(value);
    expect(response).toBe(true);
  })

  //Test if binary value is passed return value is false indicating not an error
  it("enter correct value", () => {
    let value = '10001'
    let response = wrapper.vm.getValidated(value);
    expect(response).toBe(false);
  })
})

