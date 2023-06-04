import { createApp } from 'vue'
import App from './App.vue'

// Styles
import './styles/tailwind.css';

// Components
import Button from './components/Button.vue';
import InputField from './components/InputField.vue';
import InputFieldLabel from './components/InputFieldLabel.vue';
import Typography from './components/Typography.vue';

const app = createApp(App)

app.component('Button', Button);
app.component('InputField', InputField);
app.component('InputFieldLabel', InputFieldLabel);
app.component('Typography', Typography);

app.mount('#app')