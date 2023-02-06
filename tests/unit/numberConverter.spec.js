import { shallowMount, mount } from '@vue/test-utils'
import NumberConverter from '@/components/NumberConverter.vue'
import { nextTick } from 'vue';

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

describe('setconvertion function test', () => {
  const wrapper = mount(NumberConverter)

  //Test if the binary conversion is working
  it("get binary conversion", async () => {
    await wrapper.setData({ binaryValue: '111', isError: false, decimalValue: "" })
    await nextTick();
    wrapper.vm.setconvertion();
    expect(wrapper.vm.decimalValue).toEqual(7);
  })

  //Test if the binary conversion fails if wrong value is passes
  it("test validation", async () => {
    await wrapper.setData({ binaryValue: '90', isError: false, decimalValue: "" })
    await nextTick();
    wrapper.vm.setconvertion();
    expect(wrapper.vm.decimalValue).toBe("");
  })
});

describe('test the v-if condition', () => {
  const wrapper = mount(NumberConverter);

  //Test decimal value conversion is displayed
  it("display decimal value conversion", async () => {
    await wrapper.setData({ binaryValue: '111', isError: false, decimalValue: "7" })
    const decimalLbl = wrapper.get('#decimal-value')
    expect(decimalLbl.text()).toContain('Decimal Value : 7');
  })

  //Test error message is displayed
  it("display decimal value conversion", async () => {
    await wrapper.setData({ binaryValue: '9032', isError: true, decimalValue: "" })
    const errorLbl = wrapper.get('#error-message')
    expect(errorLbl.text()).toContain('Please Enter a valid binary digit(1/0) less than 8 digits');
  })
})