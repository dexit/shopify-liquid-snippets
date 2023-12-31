// works for SPR reviews (Free product reviews) and Judgeme Api
// single_product_review_stars_click_scroll_to_reviews_area-spr-reviews-jdgm-reviews
// Currently set to Judge.me
//
// add me by :
// <script src="{{ 'single_product_review_stars_click_scroll_to_reviews_area-spr-reviews-jdgm-reviews.js' | asset_url }}" defer="defer"></script> 
//

class ScrollOnElementClick {
  constructor() {
    // Function to log errors
    this.logError = function (message) {
      console.log(`Error: ${message}`);
    };

    // Function to log results
    this.logResult = function (message) {
      console.log(`Result: ${message}`);
    };

    // Function to scroll to the target element
    this.scrollToTarget = function () {
      // Find the element with class ".spr-badge"
      const clickElement = document.querySelector('.tt-review');
      if (!clickElement) {
        this.logError('Element with class ".tt-review" not found.');
        return;
      }

      // Find the element to scroll to (in this case, with ID "shopify-product-reviews")
      const targetElement = document.querySelector('.jdgm-rev-widg');
      if (!targetElement) {
        this.logError('Element with ID "jdgm-rev-widg" not found.');
        return;
      }

      // Add a click event listener to the click element
      clickElement.addEventListener('click', () => {
        // Scroll to the target element
        targetElement.scrollIntoView({
          behavior: 'smooth', // Use 'auto' for immediate scrolling without animation
          block: 'start',     // Scroll to the top of the element
        });

        this.logResult('Scrolling to the target element.');
      });

      this.logResult('Click event listener added to the element with class ".spr-badge".');
    };

    // Add an event listener to run the code when the page has fully loaded
    window.addEventListener('load', () => {
      // Use setTimeout to defer the execution
      setTimeout(() => this.scrollToTarget(), 1000);
      this.logResult('Page loaded. Deferring the execution.');
    });
  }
}

// Instantiate the class
const scrollOnElementClick = new ScrollOnElementClick();
