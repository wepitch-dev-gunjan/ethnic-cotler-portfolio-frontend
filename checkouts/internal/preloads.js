
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.0b523aed3387830ebdb6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8229.baseline.en.ac7af7bd201fb25e5d5f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2422.baseline.en.1fc7320eed0249566e6f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.baseline.en.4a76a447edee315e82bd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.a7132349d2f02aed720f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.baseline.en.7ec3164fc01d10bbabc6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5019.baseline.en.723e311f4a05eaa581cf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/235.baseline.en.cc824a8cccdfe3bda9ad.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.baseline.en.4108502d9f2c1ca7f6c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2933.baseline.en.4befadb0a90c967a54b2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.baseline.en.8c5771f38f9e1bdd903a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3395.baseline.en.6bebcf5d55a9a738560c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.baseline.en.ced406538197ce91636b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.baseline.en.3a519f1ef58d0e8c891c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.2f0413acc4fb63a5274c.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/8229.baseline.en.6887155289e5c4b51653.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.44428467e736b1c925f1.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.cb164c3255e5d577ddea.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  