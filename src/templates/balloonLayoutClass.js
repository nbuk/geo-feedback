export const balloonLayout = ymaps.templateLayoutFactory.createClass(
    `<div class="reviews" data-coords="{{ properties.data.coords }}">
<div class="reviews__header">
  <div class="reviews__header__location">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="15" height="15"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,3.44c-30.40325,0 -55.04,24.63676 -55.04,55.04c0,25.14541 13.26658,52.13762 26.32406,73.07313c13.05748,20.9355 26.12922,35.83781 26.12922,35.83781c0.6573,0.74853 1.60677,1.1754 2.60292,1.17025c0.99615,-0.00515 1.94115,-0.44183 2.59067,-1.19712c0,0 13.06376,-15.15008 26.11578,-36.20735c13.05203,-21.05731 26.31735,-48.02001 26.31735,-72.67672c0,-30.40324 -24.63675,-55.04 -55.04,-55.04zM86,10.32c26.70075,0 48.16,21.45924 48.16,48.16c0,22.12729 -12.53468,48.48186 -25.28265,69.0486c-10.67662,17.22495 -19.71307,28.28617 -22.8975,32.1089c-3.20014,-3.78155 -12.2081,-14.64112 -22.86391,-31.72594c-12.74252,-20.4305 -25.27594,-46.76097 -25.27594,-69.43156c0,-26.70076 21.45925,-48.16 48.16,-48.16zM85.9664,34.36641c-1.39981,0.00037 -2.65984,0.84884 -3.18658,2.14577c-0.52674,1.29693 -0.21516,2.7837 0.78798,3.76001l18.20781,18.20781h-39.85563c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h39.85563l-18.20781,18.20781c-0.89867,0.86281 -1.26068,2.14404 -0.94641,3.34956c0.31427,1.20552 1.2557,2.14696 2.46122,2.46122c1.20552,0.31427 2.48675,-0.04774 3.34956,-0.94641l23.77766,-23.77765c0.85151,-0.64892 1.35239,-1.65727 1.35502,-2.72786c0.00263,-1.07059 -0.49328,-2.08139 -1.34158,-2.73449c-0.0067,-0.0045 -0.01342,-0.00898 -0.02015,-0.01344l-23.77094,-23.77094c-0.64765,-0.66575 -1.53698,-1.04135 -2.46578,-1.04141z"></path></g></g></svg>
  <p id="address-name">{{ properties.data.address }}</p>
  </div>
  <span class="reviews__close"></span>
</div>
<div class="reviews__body">
{% if properties.data.reviews %}
  <ul class="reviews-list">
      {% for review in properties.data.reviews %}
      <li class="reviews-list__item review-item">
          <div class="review-item__header">
              <h5 class="review-item__username">{{ review.username }}</h5>
              <span>{{ review.location }}</span>
          </div>
          <p class="review-item__text">{{ review.textReview }}</p>
      </li>
      {% endfor %}
  </ul>
{% else %}
  <p>Отзывов пока нет...</p>
{% endif %}
  <hr>
</div>
<div class="reviews__form">
  <h4>Ваш отзыв</h4>
  <form action="#">
      <div class="reviews__form__username">
          <span class="placeholder">Ваше имя</span>
          <input id="username-input" type="text" name="username"></input>
      </div>
      <div class="reviews__form__location">
          <span class="placeholder">Укажите место</span>
          <input id="location-input" type="text" name="location"></input>
      </div>
      <div class="reviews__form__text">
          <span class="placeholder">Ваши впечателния</span>
          <textarea name="review-text" id="review-text" cols="30" rows="10"></textarea>
      </div>
      <button class="reviews__form__add-btn">Добавить</button>
  </form>
</div>
</div>`,
    {
        build: function() {
            this.constructor.superclass.build.call(this);

            this._element = document.querySelector('.reviews');
            this.__closeBtn = document.querySelector('.reviews__close');
            this.__closeBtn.addEventListener(
                'click',
                this.onCloseClick.bind(this)
            );

            const reviewListNode = document.querySelector(
                '.reviews-list'
            );

            if (reviewListNode) {
                if (reviewListNode.scrollHeight > 150) {
                    const scrollBar = new ScrollBar({
                        listSelector: '.reviews-list', // required
                        listHeight: '150px', // required
                        listWidth: '100%', // required
                        sliderOpacity: '0.2',
                        thumbColor: '#ffb59f',
                        thumbWidth: '10px',
                        thumbBorderRadius: '10px',
                        hideOnFocusOut: true
                    });

                    scrollBar.init();
                }
            }

            this.applyElementOffset();
        },
        clear: function() {
            this.constructor.superclass.clear.call(this);
        },
        onSublayoutSizeChange: function() {
            balloonLayout.superclass.onSublayoutSizeChange.apply(
                this,
                arguments
            );

            if (!this._isElement(this._$element)) {
                return;
            }

            this.applyElementOffset();
            this.events.fire('shapechange');
        },
        applyElementOffset: function() {
            this._element.style.top = '0';
            this._element.style.left = '0';
        },
        onCloseClick: function(e) {
            e.preventDefault();

            this.events.fire('userclose');
        },
        getShape: function() {
            if (!this._isElement(this._$element)) {
                return balloonLayout.superclass.getShape.call(this);
            }

            const position = this._$element.position();

            return new ymaps.shape.Rectangle(
                new ymaps.geometry.pixel.Rectangle([
                    [position.left, position.top],
                    [
                        position.left + this._$element[0].offsetWidth,
                        position.top + this._$element[0].offsetHeight
                    ]
                ])
            );
        },
        _isElement: function(el) {
            return el && el[0];
        }
    }
)