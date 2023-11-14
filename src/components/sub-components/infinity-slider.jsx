import React, { Component } from 'react';
import $ from 'jquery';

export default class InfinitySlider extends Component {

    componentDidMount() {
        this.fsSlider(); // Initialize the slider on mount
        $(window).on('resize', this.fsSlider); // Re-init slider on window resize
    }

    componentWillUnmount() {
        $(window).off('resize', this.fsSlider); // Remove window resize listener
    }

    fsSlider = () => {
        var waitForFinalEvent = (function () {
            var timers = {};
            return function (callback, ms, uniqueId) {
                if (!uniqueId) {
                    uniqueId = "Don't call this twice without a uniqueId";
                }
                if (timers[uniqueId]) {
                    clearTimeout(timers[uniqueId]);
                }
                timers[uniqueId] = setTimeout(callback, ms);
            };
        })();

        $.fn.multiply = function (numCopies) {
            var newElements = this.clone();
            for (var i = 1; i < numCopies; i++) {
                newElements = newElements.add(this.clone());
            }
            return newElements;
        };

        //duplicate the original list to left and right
        $(window).on('load', fsSlider);

        function fsSlider() {
            $('.fs-inner').each(function (index) {
                var listWidth = 0;
                var $this = $(this);
                var $fsContainer = $this.closest('.fs-container');
                var $freeSlide = $this.closest('.freeslide');

                //reinit destroy
                $this.find('.fs-dup').remove();
                $fsContainer.removeAttr('style');
                $freeSlide.removeAttr('style');

                $this.find('li').each(function () {
                    listWidth += $(this).innerWidth();
                });

                var clonedElem = $this.find('li');
                var quot = ($this.innerWidth() + $(window).innerWidth()) / listWidth;
                var mult = (quot > 1) ? Math.ceil(quot) : 2;

                $this.prepend('<ul class="fs-dup fs-dup1"></ul>');
                $this.append('<ul class="fs-dup fs-dup2"></ul>');

                $this.find('.fs-dup').append(clonedElem.multiply(mult));
                // $this.find('.fs-dup a').removeAttr('data-fancybox').removeAttr('href');
                // $this.find('.fs-dup img').unwrap();

                //show original list in view
                $fsContainer.css('left', -$this.find('.fs-dup1').innerWidth());

                //give its height to parent
                $freeSlide.css('height', $fsContainer.outerHeight(true));

                //give its width to global css
                var orgWidth = $(this).find('.fs-org').width();
                var duration = orgWidth / 50;

                $this.closest('.fs-outer').attr('style', '--fs-width-' + (index + 1) + ': ' + orgWidth + 'px');
                $this.closest('.fs-outer').css('animation-duration', duration + 's');
            });
        }

        $(window).on('resize', function () {
            waitForFinalEvent(function () {
                fsSlider();
            }, 500, "final_event");
        });

        $(document).on('click', '.fs-dup li', function (e) {
            if (!$(this).closest('.fs-inner').hasClass('fs-moving')) {
                var $slides = $(this).closest('.fs-inner').find('.fs-org li');

                var len = $(this).closest('.fs-inner').find('.fs-org li').length;
                var eq = ($(this).closest('li').index() || 0) % len;

                $slides.eq(eq).find('img').trigger('click');
            }
        });
    }

    render() {

        const imageList = [];
        const totalImages = 17; // Total number of images

        for (let i = 1; i <= totalImages; i++) {
            imageList.push(
                <li key={i}>
                    <img src={`/public/images/slider/rectangle${i}.png`} alt={`Image ${i}`} />
                </li>
            );
        }

        return (
            <div>
                <div className="freeslide fs1">
                    <div className="fs-outer">
                        <div className="fs-container">
                            <div className="fs-inner">
                                <ul className="fs-org">
                                    {imageList}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}