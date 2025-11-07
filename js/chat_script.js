// N8N Chat Initialization
import {
    createChat
} from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';


const queryParams = new URLSearchParams(window.location.search); // URL'den params'ı al
const urlData = {
  utm_adgroup: queryParams.get('utm_adgroup') || 'blank',
  keyword: queryParams.get('keyword') || 'blank',
  device: queryParams.get('device') || 'blank',
  adposition: queryParams.get('adposition') || 'blank',
  network: queryParams.get('network') || 'blank',
  location: queryParams.get('location') || 'blank',
  utm_source: queryParams.get('utm_source') || 'blank',
  utm_campaign: queryParams.get('utm_campaign') || 'blank',
  utm_term: queryParams.get('utm_term') || 'blank',
  utm_medium: queryParams.get('utm_medium') || 'blank',
  hsa_acc: queryParams.get('hsa_acc') || 'blank',
  hsa_cam: queryParams.get('hsa_cam') || 'blank',
  hsa_grp: queryParams.get('hsa_grp') || 'blank',
  hsa_ad: queryParams.get('hsa_ad') || 'blank',
  hsa_src: queryParams.get('hsa_src') || 'blank',
  hsa_tgt: queryParams.get('hsa_tgt') || 'blank',
  hsa_kw: queryParams.get('hsa_kw') || 'blank',
  hsa_mt: queryParams.get('hsa_mt') || 'blank',
  hsa_net: queryParams.get('hsa_net') || 'blank',
  hsa_ver: queryParams.get('hsa_ver') || 'blank',
  match_type: queryParams.get('match_type') || 'blank',
  bid_match_type: queryParams.get('bid_match_type') || 'blank',
  search_term: queryParams.get('search_term') || 'blank',
  medium: queryParams.get('medium') || 'blank'
};

createChat({
    /*webhookUrl: 'https://n.abroadworks.com/webhook/02d19b60-c066-4aba-a5c5-d697d62f222c/chat',*/
    /*webhookUrl: 'https://n.abroadworks.com/webhook/048ebd2d-10a1-4e25-a67d-603e7a5f9cae/chat',*/
    webhookUrl: 'https://n.abroadworks.com/webhook/ce13782f-dad8-4e28-8d00-1039f0936aa0/chat',
    target: '#n8n-chat',
    mode: 'window',
    chatInputKey: 'chatInput',
    chatSessionKey: 'sessionId',
    metadata: {urlData},
    showWelcomeScreen: false,
    defaultLanguage: 'en',
    initialMessages: [
        'Hi there! 👋'
    ],
    i18n: {
        en: {
            title: 'Hi there! 👋',
            subtitle: "Start a chat. We're here to help you 24/7.",
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your question...',
        },
    },
});

// jQuery DOM Ready
$(document).ready(function() {
    setTimeout(function() {
        // $('#n8n-chat .chat-window-toggle').click(); // 5 saniye sonra chat'i aç
    }, 10000); // 5000ms = 5 saniye
});

// Chat Window Toggle Functionality
window.addEventListener('DOMContentLoaded', () => {
    const toggleEl = document.querySelector('.chat-window-toggle');
    if (!toggleEl) return;

    const icons = {
        default: `
      <svg class="replacement-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="white" style="pointer-events:none;">
        <g clip-path="url(#clip0_6925_397)">
          <path d="M12.793 3.32812C12.6172 3.39453 12.5 3.5625 12.5 3.75C12.5 3.9375 12.6172 4.10547 12.793 4.17188L15 5L15.8281 7.20703C15.8945 7.38281 16.0625 7.5 16.25 7.5C16.4375 7.5 16.6055 7.38281 16.6719 7.20703L17.5 5L19.707 4.17188C19.8828 4.10547 20 3.9375 20 3.75C20 3.5625 19.8828 3.39453 19.707 3.32812L17.5 2.5L16.6719 0.292969C16.6055 0.117188 16.4375 0 16.25 0C16.0625 0 15.8945 0.117188 15.8281 0.292969L15 2.5L12.793 3.32812ZM0.363281 9.375C0.140625 9.47656 0 9.69922 0 9.94531C0 10.1914 0.140625 10.4102 0.363281 10.5117L1.02734 10.8203L1.34375 10.9648L1.36719 10.9766L4.81641 12.5703L6.41016 16.0156L6.42188 16.0391L6.56641 16.3555L6.875 17.0234C6.97656 17.2461 7.19922 17.3867 7.44141 17.3867C7.68359 17.3867 7.90625 17.2461 8.00781 17.0234L8.31641 16.3555L8.46094 16.0391L8.47266 16.0156L10.0664 12.5664L13.5156 10.9766L13.5391 10.9648L13.8555 10.8203L14.5234 10.5117C14.7461 10.4102 14.8867 10.1875 14.8867 9.94531C14.8867 9.70312 14.7461 9.48047 14.5234 9.37891L13.8555 9.07031L13.5391 8.92578L13.5156 8.91406L10.0664 7.32031L8.47656 3.87109L8.46484 3.84766L8.32031 3.52734L8.01172 2.85938C7.91016 2.63672 7.6875 2.49609 7.44531 2.49609C7.20313 2.49609 6.98047 2.63672 6.87891 2.85938L6.57031 3.52734L6.42578 3.84375L6.41406 3.86719L4.82031 7.31641L1.37109 8.91016L1.34766 8.92188L1.03125 9.06641L0.363281 9.375ZM3.60547 9.94141L5.60547 9.01953C6.01172 8.83203 6.33594 8.50781 6.52344 8.10156L7.44531 6.10156L8.36719 8.10156C8.55469 8.50781 8.87891 8.83203 9.28516 9.01953L11.2852 9.94141L9.28516 10.8633C8.87891 11.0508 8.55469 11.375 8.36719 11.7812L7.44531 13.7812L6.52344 11.7812C6.33594 11.375 6.01172 11.0508 5.60547 10.8633L3.60547 9.94531V9.94141ZM15 15L12.793 15.8281C12.6172 15.8945 12.5 16.0625 12.5 16.25C12.5 16.4375 12.6172 16.6055 12.793 16.6719L15 17.5L15.8281 19.707C15.8945 19.8828 16.0625 20 16.25 20C16.4375 20 16.6055 19.8828 16.6719 19.707L17.5 17.5L19.707 16.6719C19.8828 16.6055 20 16.4375 20 16.25C20 16.0625 19.8828 15.8945 19.707 15.8281L17.5 15L16.6719 12.793C16.6055 12.6172 16.4375 12.5 16.25 12.5C16.0625 12.5 15.8945 12.6172 15.8281 12.793L15 15Z"/>
        </g>
        <defs>
          <clipPath id="clip0_6925_397">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `,
        close: `
      <svg class="replacement-icon icon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24" fill="white" style="pointer-events:none;">
        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
      </svg>
    `
    };

    let isUpdating = false;
    let observer;

    const renderIcon = (type) => {
        toggleEl.querySelectorAll('.replacement-icon').forEach(el => el.remove());
        toggleEl.insertAdjacentHTML('beforeend', icons[type]);
    };

    const hideOriginal = () => {
        toggleEl.querySelectorAll('svg:not(.replacement-icon)').forEach(svg => {
            svg.style.display = 'none';
        });
    };

    const updateState = () => {
        if (isUpdating) return;
        isUpdating = true;
        observer.disconnect();

        hideOriginal();
        const isOpen = toggleEl.classList.contains('open');
        renderIcon(isOpen ? 'close' : 'default');

        observer.observe(toggleEl, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class']
        });
        isUpdating = false;
    };

    observer = new MutationObserver(() => {
        updateState();
    });

    observer.observe(toggleEl, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    });

    updateState();

    toggleEl.addEventListener('click', () => {
        toggleEl.classList.toggle('open');
        updateState();
    });
});
