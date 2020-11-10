import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

start();

function mount() {
  return new Vue({
    render: h => h(App),
  }).$mount('#app')
}

async function start() {
	const vm = mount();
	
  await delay(500);
  
  vm.$destroy();

  // add delay to potentially wait for vm to be fully destroyed
  await delay(100);
	
  document.querySelector('#app').innerHTML = '';
	
	await delay(500);
	
	mount();
}

function delay(ms = 200) {
	return new Promise(resolve => setTimeout(resolve, ms));
}