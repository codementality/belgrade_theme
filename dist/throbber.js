/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/js/throbber.js ***!
  \****************************/
/**
 * @file
 * Replaced Drupal cores ajax throbber(s), see: https://www.drupal.org/node/2974681
 *
 */
(function ($, Drupal) {
  Drupal.theme.ajaxProgressThrobber = function () {
    return "\n    <span class=\"ajax-spinner ajax-spinner--inline fs-sm me-2\">\n        <span class=\"spinner-grow spinner-grow-sm text-secondary\" role=\"status\"></span>\n    </span>";
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return "\n    <div class=\"ajax-spinner ajax-spinner--fullscreen\">\n      <span class=\"ajax-spinner__label\">" + Drupal.t('Loading&nbsp;&hellip;', {}, {
      context: "Loading text for Drupal cores Ajax throbber (fullscreen)"
    }) + "\n      </span>\n    </div>";
  }; // You can also customize only throbber message:
  // Drupal.theme.ajaxProgressMessage = message => '<div class="my-message">' + message + '</div>';

})(jQuery, Drupal);
/******/ })()
;