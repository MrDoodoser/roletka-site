import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { brand: { 50:'#eef7ff',100:'#d9edff',500:'#1684e3',600:'#0d6fc2',900:'#07345e' } } } }, plugins: [] };
export default config;
