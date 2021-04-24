import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'
describe('LoginForm', () => {
  // 'it' or 'test' work the same way
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="text"]')
    input.setValue('Adam Jahr')
    wrapper.trigger('submit') // No matter what triggers the submit, this will work
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1) // Check that event was emitted
    const expectedPayload = { name: 'Adam Jahr' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
// Recommended practice - include a test-id on the element that won't be changed...
// <input data-testid="name-input" type="text" v-model="name" />
// const input = wrapper.find('[data-testid="name-input"]')
