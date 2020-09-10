import { shallowMount } from '@vue/test-utils'
import Login from '@/components/login_content.vue'

describe('Login component unit tests: ', () => {
  test('is a vue instance', () => {
      const wrapper = shallowMount(Login)
      expect(wrapper.isVueInstance()).toBeTruthy();
    });


    test('renders title', () => {
        const wrapper = shallowMount(Login, {
            data () {
                return {
                    msg:"Dominion Blog",
                    usnm: "",
                    pswd:"",
                    login_failed_pswd:false,
                    login_verified:false,
                    login_failed_usnm:false,
                    register_failed:false,
                    register_verified:false,
                    id:""
                }
                
            }
        })
        expect(wrapper.find('h1').text()).toEqual("Dominion Blog")
        
    });

        test('runs login function', () => {
            
            const wrapper = shallowMount(Login, {
                data () {
                    return {
                        msg:"Dominion Blog",
                        usnm: "",
                        pswd:"",
                        login_failed_pswd:false,
                        login_verified:false,
                        login_failed_usnm:false,
                        register_failed:false,
                        register_verified:false,
                        id:""
                    }
                    
                }
            })
            const check_login = jest.fn()
            wrapper.setMethods({
                check_login:check_login
            })
            wrapper.find('#login_btn').trigger('click')
            expect(check_login).toHaveBeenCalled()

        });
        test('runs register function', () => {
            
            const wrapper = shallowMount(Login, {
                data () {
                    return {
                        msg:"Dominion Blog",
                        usnm: "",
                        pswd:"",
                        login_failed_pswd:false,
                        login_verified:false,
                        login_failed_usnm:false,
                        register_failed:false,
                        register_verified:false,
                        id:""
                    }
                    
                }
            })
            const check_register = jest.fn()
            wrapper.setMethods({
                check_register:check_register
            })
            wrapper.find('#register_btn').trigger('click')
            expect(check_register).toHaveBeenCalled()

        });


})
