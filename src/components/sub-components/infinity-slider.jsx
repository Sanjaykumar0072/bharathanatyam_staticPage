import React, { Component } from 'react';
import $ from 'jquery';

export default class InfinitySlider extends Component {
    jQuerycode = () => {
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

        var pos1 = 0, pos3 = 0;
        var _mouseDown = false;

        $.fn.multiply = function (numCopies) {
            var newElements = this.clone();
            for (var i = 1; i < numCopies; i++) {
                newElements = newElements.add(this.clone());
            }
            return newElements;
        };

        function getTranslateXY(element) {
            const style = window.getComputedStyle(element[0]);
            const matrix = new DOMMatrixReadOnly(style.transform);
            return {
                translateX: matrix.m41,
                translateY: matrix.m42
            }
        }


        function getclientX(e) {
            return (typeof e.clientX !== 'undefined') ? e.clientX : e.originalEvent.touches[0].clientX;
        }

        $('.fs-inner').on('mousedown touchstart', function (e) {
            var $this = $(this);

            e = e || window.event;
            e.preventDefault();

            pos3 = getclientX(e);
            _mouseDown = true;
            $this.addClass('fs-grabbing');
        });

        $('.fs-inner').on('mousemove touchmove', function (e) {
            if (_mouseDown == true) {
                var $this = $(this);

                e = e || window.event;
                e.preventDefault();

                var cT = getTranslateXY($this.closest('.fs-outer')).translateX;

                pos1 = pos3 - (getclientX(e)) + cT;
                pos3 = getclientX(e);

                $this.closest('.fs-container').css('left', $this.closest('.fs-container').offset().left - pos1 + 'px');
                $this.addClass('fs-moving');
            }
        });

        //updates container left position to always show original list on view - making it infinite loop
        $('.fs-inner').on('mouseup touchend', function (e) {
            if (_mouseDown == true) {
                clearDrag();
                var $this = $(this);

                $this.removeClass('fs-grabbing');
                setTimeout(function () {
                    $this.removeClass('fs-moving');
                }, 1000);

                var cL = Math.abs(parseInt($this.closest('.fs-container').offset().left));
                var oL = Math.abs(parseInt($this.find('.fs-dup1').innerWidth()));
                var oW = Math.abs(parseInt($this.find('.fs-org').innerWidth()));
                var cT = getTranslateXY($this.closest('.fs-outer')).translateX;

                cL = cL + cT;

                //to check if original element is in left side touch
                if ((cL + oW < oL) || cL > oL) {
                    //find the 
                    var adjust = oL + (cL % oW);
                    $this.closest('.fs-container').css('left', -adjust);
                }
            }
        });

        function clearDrag() {
            pos1 = 0;
            pos3 = 0;
            _mouseDown = false;
        }

        //duplicate the original list to left and right
        $(window).on('load', function () {
            fsSlider();
        });

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

                //show original list in view
                $fsContainer.css('left', -$this.find('.fs-dup1').innerWidth());

                //give its height to parent
                $freeSlide.css('height', $fsContainer.outerHeight(true));

                //give its width to global css
                var orgWidth = $(this).find('.fs-org').width();
                var duration = orgWidth / 20; //change the speed of the slider

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
    componentDidMount() {
        this.jQuerycode()
    }

    render() {
        return (
            <div>
                <div className="freeslide fs1">
                    <div className="fs-outer">
                        <div className="fs-container">
                            <div className="fs-inner">
                                <ul className="fs-org">
                                    <li><img src="/images/INF_Slider_1.png" /></li>
                                    <li><img src="/images/INF_Slider_2.png" /></li>
                                    <li><img src="/images/INF_Slider_3.png" /></li>
                                    <li><img src="/images/INF_Slider_4.png" /></li>
                                    <li><img src="/images/INF_Slider_5.png" /></li>
                                    <li><img src="/images/INF_Slider_6.png" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}