import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.9:3333',
});

export default api;

// iOS com Emu: localhost
// iOs/Android com dipositivo físico: IP da máquina
// Android com Emu: adb reverse (redirecionamento de portas)
// Android do Studio com dispositivo físico: 10.0.2.2
// Android do Genymotion: 10.0.3.2