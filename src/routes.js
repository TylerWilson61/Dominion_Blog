// import { component } from "vue/types/umd";

import newpost from './page_components/newpost'
import login_page from './page_components/login_page'
import home from './page_components/home'
import postview from './page_components/postview'

export default[
  {path:"/new", component:newpost},
  {path:"/", component:login_page},
  {path:"/home", component:home},
  {path:"/posts/:id", component:postview}
]
