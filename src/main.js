import Vue from 'vue';
import store from './store'
import routes from './router';
/* import axios from 'axios'; */
/**import Button from "ant-design-vue/lib/button";
import "ant-design-vue/dist/antd.css"; **/
import { 
  Button, 
  Table, 
  Modal,
  Form,
  Input,
  Select,
  TreeSelect,
  Divider,
  Popconfirm
 } from 'ant-design-vue'
import App from './App.vue'
/* https://my.oschina.net/tongjh/blog/1928824 */

Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(Modal.name, Modal)
Vue.component(Form.name, Form)
Vue.component(Input.name, Input)
Vue.component(Divider.name, Divider)
Vue.component(Popconfirm.name, Popconfirm)
Vue.component(Select.name, Select)
Vue.component(TreeSelect.name, TreeSelect)
Vue.config.productionTip = false
/*Vue.use(axios)*/


new Vue({
  el: '#app',
  store,
  router: routes,
  render: h => h(App),
}).$mount('#app')





/**new Vue({
  template: `
    <div id="app">
      <h1>Transitions</h1>
      <ul>
        <li>
          <router-link to="/">/</router-link>
        </li>
        <li>
          <router-link to="/parent">/parent</router-link>
        </li>
        <li>
          <router-link to="/parent/foo">/parent/foo</router-link>
        </li>
        <li>
          <router-link to="/parent/bar">/parent/bar</router-link>
        </li>
      </ul>
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
  `
}).$mount('#app')**/