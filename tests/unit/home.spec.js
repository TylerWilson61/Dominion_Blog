import { shallowMount } from '@vue/test-utils'
import Home from '@/components/home_body.vue'

describe('Home Component Unit tests:', () =>{
    test('is a vue instance', () => {
        const wrapper = shallowMount(Home)
        expect(wrapper.isVueInstance()).toBeTruthy();
      });

      test('loads posts on page creation', () => {
        const wrapper = shallowMount(Home, {
            data () {
                return {
                    posts: [{
                        "title": "how to bread",
                        "content": "bake",
                        "author": "tyler",
                        "id": 4
                      }]
                }
            }
        })
        expect(wrapper.find(('#post')).exists).toBeTruthy()


      });


})