import YAPI from './yApi/yApi';
import LocalStorageManager from './Extensions/localStorageManager';
import EventListenersManager from './Extensions/eventListenersManager';
import newCommentTemplate from '../templates/newCommentTemplate.hbs';

import '../scss/main.scss';

export default class App {
    init() {
        ymaps.ready(() => {
            const yApi = new YAPI();

            yApi.init({
                center: [56.84909983477016, 53.20768853355251],
                zoom: 14,
                controls: ['zoomControl']
            });

            const lsManager = new LocalStorageManager();
            const elManager = new EventListenersManager();

            const geoObjectsData = lsManager.getGeoObjectsData();

            yApi.addGeoObjectsToMap(geoObjectsData);

            document.addEventListener('click', e => {
                e.preventDefault();
                if (e.target.classList.contains('reviews__form__add-btn')) {
                    let coords = document.querySelector('.reviews').dataset
                        .coords;
                    const usernameInput = document.querySelector(
                        '#username-input'
                    );
                    const locationInput = document.querySelector(
                        '#location-input'
                    );
                    const feedbackInput = document.querySelector(
                        '#review-text'
                    );
                    const address = document.querySelector('#address-name')
                        .textContent;

                    const username = usernameInput.value,
                        location = locationInput.value,
                        feedback = feedbackInput.value;

                    coords = coords.split(',');

                    const balloonLayout = yApi.balloonLayoutForm;

                    // content for clusterer balloon
                    const balloonContentBody = `
                        <span class="address-link" data-address="${address}"> ${location} </span>
                        <p> ${feedback} </p>
                    `;

                    const newGeoObjectData = {
                        geometry: {
                            type: 'Point',
                            coordinates: coords
                        },
                        properties: {
                            balloonContentHeader: location,
                            balloonContentBody: balloonContentBody,
                            address: address,
                            coords: coords,
                            data: {
                                location: location,
                                reviews: [
                                    {
                                        username,
                                        location,
                                        feedback
                                    }
                                ]
                            }
                        }
                    };

                    lsManager.addNewGeoObject(newGeoObjectData);

                    const newGeoObject = new ymaps.GeoObject(newGeoObjectData, {
                        balloonLayout
                    });

                    yApi.clusterer.add(newGeoObject);

                    this._insertNewComment(username, location, feedback);

                    usernameInput.value = '';
                    locationInput.value = '';
                    feedbackInput.value = '';
                }

                if (e.target.classList.contains('reviews__close-btn')) {
                    yApi.map.balloon.close();
                }

                if (e.target.classList.contains('address-link')) {
                    const addressLink = e.target.dataset.address;
                    const feedbackData = lsManager.getFeedbackData(addressLink);

                    yApi.map.balloon.open(feedbackData.coords).then(() => {
                        yApi.map.balloon
                            .setOptions({ layout: yApi.balloonLayoutForm })
                            .then(() => {
                                yApi.map.balloon.setData({
                                    properties: {
                                        address: feedbackData.address,
                                        coords: feedbackData.coords,
                                        data: {
                                            reviews: feedbackData.feedbacks
                                        }
                                    }
                                });
                            });
                    });
                }
            });

            const observer = new MutationObserver(mutationRecord => {
                for (let mutation of mutationRecord) {
                    if (mutation.type === 'childList') {
                        if (mutation.addedNodes.length) {
                            elManager.toggleInputEventListeners('add');
                        }
                        if (mutation.removedNodes.length) {
                            elManager.toggleInputEventListeners('remove');
                        }
                    }
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    _insertNewComment(username, location, text) {
        const reviewsList = document.querySelector('.reviews-list');
        const html = newCommentTemplate({ username, location, text });

        if (reviewsList) {
            reviewsList.insertAdjacentHTML('beforeend', html);
        } else {
            const ul = document.createElement('ul');
            const reviewsBody = document.querySelector('.reviews__body');

            reviewsBody.querySelector('.empty').remove();
            ul.classList.add('reviews-list');
            ul.innerHTML = html;
            reviewsBody.prepend(ul);
        }
    }
}
