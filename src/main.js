import { createApp } from 'vue'
import App from './App.vue'

// Styles
import './styles/tailwind.css';

// Components
import Button from './components/Button.vue';
import InputField from './components/InputField.vue';
import InputLabel from './components/InputLabel.vue';
import Typography from './components/Typography.vue';
import SuccessPage from './components/SuccessPage.vue';

const app = createApp(App)

app.component('Button', Button);
app.component('InputField', InputField);
app.component('InputLabel', InputLabel);
app.component('Typography', Typography);

app.mount('#app')