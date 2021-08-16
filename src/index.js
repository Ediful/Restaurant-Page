import { homeTab } from './homeTab'
import { menuTab } from './menuTab'
import { contactTab } from './contactTab'

homeTab();

document.getElementById('homeBtn').addEventListener('click', homeTab);
document.getElementById('menuBtn').addEventListener('click', menuTab);
document.getElementById('contactBtn').addEventListener('click', contactTab);