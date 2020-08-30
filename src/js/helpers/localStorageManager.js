export default class LocalStorageManager {

    addNewGeoObject(newGeoObjectData) {

        this._updateLocalStorage(newGeoObjectData);
    }

    getGeoObjectsData() {
        const geoObjects = JSON.parse(localStorage.getItem('geoobjects')) || [];

        return geoObjects;
    }

    getFeedbackData(addressLink = null) {
        let feedbacksData = JSON.parse(localStorage.getItem('feedbacks')) || [];

        if (!addressLink) {
            return feedbacksData;
        }

        let feedback = {};

        feedbacksData.forEach(item => {
            if (item.address === addressLink) {
                feedback = item;
            }
        })

        return feedback;
        
    }

    _updateLocalStorage(newGeoObjectData) {
        const geoObjects = this.getGeoObjectsData();

        geoObjects.push(newGeoObjectData);

        localStorage.setItem('geoobjects', JSON.stringify(geoObjects));

        // Update feedbacks
        const feedbacksData = this.getFeedbackData();

        const address = newGeoObjectData.properties.address;
        const coords = newGeoObjectData.properties.coords;
        
        const feedbackInfo = newGeoObjectData.properties.data.reviews[0];
        const username = feedbackInfo.username;
        const location = feedbackInfo.location;
        const feedback = feedbackInfo.feedback;

        let added = false;

        if (feedbacksData.length) {
            feedbacksData.forEach(item => {
                if (item.address === address) {
                    added = true;
                    item.feedbacks.push({
                        username,
                        location,
                        feedback
                    })
                }
            })
        }

        if (!added) {
            feedbacksData.push({
                address,
                coords,
                feedbacks: [
                    {
                        username,
                        location,
                        feedback
                    }
                ]
            })
        }

        localStorage.setItem('feedbacks', JSON.stringify(feedbacksData))
    }
}
