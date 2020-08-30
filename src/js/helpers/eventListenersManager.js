export default class EventListenersManager {

    toggleInputEventListeners(toggle) {
        const usernameInput = document.querySelector('#username-input');
        const locationInput = document.querySelector('#location-input');
        const textReviewInput = document.querySelector('#review-text');

        if (usernameInput) {
            const onFocus = e => {
                if (!e.target.value) {
                    const placeholder = e.target.previousElementSibling;
                    placeholder.style.zIndex = 5;
                    placeholder.style.top = '-7px';
                }
            };

            const onFocusOut = e => {
                if (!e.target.value) {
                    const placeholder = e.target.previousElementSibling;
                    placeholder.style.zIndex = 1;
                    placeholder.style.top = '11px';
                }
            };

            if (toggle === 'add') {
                [usernameInput, locationInput, textReviewInput].forEach(
                    input => {
                        input.addEventListener('focus', onFocus);
                        input.addEventListener('focusout', onFocusOut);
                    }
                );
            } else {
                [usernameInput, locationInput, textReviewInput].forEach(
                    input => {
                        input.removeEventListener('focus', onFocus);
                        input.removeEventListener('focusout', onFocusOut);
                    }
                );
            }
        }
    }
}
