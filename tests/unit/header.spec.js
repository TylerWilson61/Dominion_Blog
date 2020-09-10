import { shallowMount } from '@vue/test-utils'
import Header from '@/layout/header.vue'

describe('Header Component Unit tests:', () =>{
    test('is a vue instance', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.isVueInstance()).toBeTruthy();
      });

      test('restricts access when logged out', () => {
        const wrapper = shallowMount(Header)
        const logout = jest.fn()
        wrapper.setMethods({
            logout: logout
        })
        wrapper.find('.logout').trigger('click')
        expect(logout).toHaveBeenCalled();



      });


})