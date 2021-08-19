import { homeTab } from './homeTab'
import { menuTab } from './menuTab'
import { contactTab } from './contactTab'

homeTab();

changeTabs();

function clearContent () {
    document.getElementById("content").removeChild(document.querySelector('nav'));
    document.getElementById("content").removeChild(document.getElementById('main'));
}

function changeTabs () {
    const tabs = Array.from(document.getElementsByClassName('tab-link'));
    tabs.forEach(tab => tab.addEventListener('click', () => {
        clearContent();
        if (tab.id == 'homeBtn') homeTab();
        if (tab.id == 'menuBtn') menuTab();
        if (tab.id == 'contactBtn') contactTab();
        changeTabs();
    }));
}
