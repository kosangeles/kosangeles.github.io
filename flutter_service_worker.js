'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "f44b134378c66416ecf7a37af8e5a5ee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2aadd2dd76ef7ef750bf412d0c6a22b1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "62a5d31e68953c011a5cbf6f4a25dc00",
".git/logs/refs/heads/main": "69197f76071d66c393c8162e2bd0c293",
".git/logs/refs/remotes/origin/main": "2c44ead0f8baba450b7aabe67e8193b0",
".git/objects/00/48851e12c9b40fd9d5c4b59c33a2b334325750": "a79fac828a8e3d26d426f96718bba9a1",
".git/objects/06/c46fe6a520677a0dcb2e6f246b3889a4092bfb": "52c15bf2d7f26ee0d62caea78ed90a62",
".git/objects/08/581b39151d5fdc167d5f1f56d138afb00677eb": "8a9755ec7ddcd94e8b94c89794ee5914",
".git/objects/09/66d8087a44e05f2ffef9164181e2baffb460d4": "8edc3953bb49d3f90fb6f14bfc3a731c",
".git/objects/09/c6e391e1d2eff406c31a41619fc546241be3c4": "19b3a75f0370ba19f8064ec4d529e36a",
".git/objects/0e/0bb3c675457c73340f25b6292be022994a78f8": "daf0b72d591bb52941847a25510c0577",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/1a/05de1fa1a8b4bfefb05ce39e32f6e2066267f1": "325fe4b6595d3647fa719b878e9df656",
".git/objects/20/a95a5f120f6c3a23c1b5e811be25a3e8214a62": "5dfac09cabce85532b8c996d21397ed1",
".git/objects/25/d9cd8209fa3b30f61c00db4f3706c2c9597b10": "622a8a07ea8a6b5ecdce4717ca3f5c4d",
".git/objects/2b/362fe61a28e7568cf056a6f991ad581b3d0c17": "81b49a2cb233e706adfc34683c966eab",
".git/objects/2e/76d50ae8bfb09300ba4a23094b0a905c182407": "1a53d47fb4c703d68ca8a40f1bd91530",
".git/objects/33/b1c6853b4eb86651eb2273c2296125de079c3c": "72c9490949928f88a00d924f7a8a4740",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/7e03f62235b89365b60f43b92a22f56710bf76": "7bab8da90f151fc6d515dd4f02992abd",
".git/objects/3c/31c9a6d8e54222ecad75ac938dc14440e54f63": "506f6897ba8eb647c8fbc77582da3609",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/6cb51417977450dc3ef6a46b14fc33bda1103d": "877be049c94156871b69b4452bc94cfb",
".git/objects/43/09ad4384f6817d220f4edf13d97fb8fe022eea": "e00a777c0f3bc5238aa91299048c099f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/52/0aefbb66fd508c94442886103aaad0feafd2b9": "03975742350d107ef5bfc9665f157b70",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/f8ba1e857805ec720ec9f3df9491cab1d96420": "78527436b897ecb3a3bb2964bb589d41",
".git/objects/59/544376bf9e3a7987968c958e0244477d9d19be": "af50594412c55480afb6a702f5ed0c7e",
".git/objects/62/6fe725aff28a0a156c1f365d544be927c08e28": "262af18503ef0c8707fea6271dec5317",
".git/objects/64/46424974966f8723c97046e12f28bac3e939b3": "0e16382a24e896a68a53d6dbaf768354",
".git/objects/68/30314b07f15fbb2ccd02690ad24dbff8834436": "12561e1bce67c3777b0161e9f2229aae",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/24a0426adfb36272c100cf7fc89dc1e5d73112": "f96f5d200239b875792432bc2128a6f3",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/626bbd6e61783abb1128a2331b1b865342022e": "f03adee570ae5adefc116558a98856dc",
".git/objects/87/00530959fc2bd044d9ddea24f2c3229c1dc466": "77f1c1a8d706d70d810d5ce91d980e47",
".git/objects/87/139c37b35952bd7cbb04ab93676dd6a15bb5a5": "a99f971b7b5a1f7a80fe711ceea34b06",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/a913d2981189be0380e18e26713b641b902953": "5074180f2d42d5ff51c6f21ee4f88811",
".git/objects/a3/c3f86e97a0f0abad251d431d6663fd4d5049e3": "c212c868d7b83ff303fc2ba975db2822",
".git/objects/a7/a51cf51cc399b7fbe622376df45cea03a9d122": "a6ad0ad0888f7d11259b2e4106dd3a9f",
".git/objects/a8/e350da771e3ee3a83b6ab7c42e6edacae034bb": "198c32f34bc3022d5ae05a45bde49070",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/989a4dbc25a0ab080f46c92ddae8703a8343a1": "bc09cde4c9844cfb5784a24e7e818c43",
".git/objects/ae/1d28691c13b052dd12fee854d63d7da42f0e9c": "fdf7a00be1a7ff1713e106900ab46f60",
".git/objects/b3/fe6a1f03bf44691ecf921a37949bab2bec5ee5": "28b957422388512d5684dc8caed49bcf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/5a039a3cbaef062e9c09ea942c99ff2db49349": "0017699d03b7036f526608d75820af72",
".git/objects/c8/f144bc55257d4bf524e0a87395ec68a5f20f3b": "200ad0881b4816b0a9d3fa32f301783e",
".git/objects/c9/3202c22f22398ff12fbb2832878712a5c790e2": "1e72326b088b50c0c609c85d5ca539e9",
".git/objects/ca/8f525831342784d618dc6adc7246b9a1bc1330": "c4188d1d117f1443dcb840e97cfad8b9",
".git/objects/cf/abf44df6d98e00758af350eb061243da4db177": "0496abc30e287de940b3cab883fbb837",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/053d8ca00214364a3394f9ef440a6b8487d6bc": "de98e0c21688391cd52bc788f2995a74",
".git/objects/d7/1e49b177306e5804d493046908eeb531725427": "dca4d4a3c89ba031368c2d362f8b9536",
".git/objects/d9/f1f8078819d14215eb830d3c898009b975faaa": "b0ef90697c023d3dc97a6927a61f9b8e",
".git/objects/e2/cbb7826d729c4ff381ce4a08d453508815a0ff": "e394850fe3311a83c51f886808fe997d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/30d0d82852c88b261c9fb4d3e1bb167cb362a9": "088134721dd0e51d011fcb622fec607c",
".git/objects/e8/b0324c254522f8b4e1892140cb81ea6c68479d": "68df49db4102da91b3d577d1c0e94387",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/ab9cd50e0f8b2b24f17f0a1706a14f695294ec": "116a256d861df00a7ff9ee13285b93e4",
".git/objects/fb/f8735870b036265cba8cebe8dab9983a455468": "1de7d75a7d77059b81d9a8571b3537b3",
".git/objects/fd/71861e0fc55be7b25fb818354820d6a6542de8": "933be4309a95134995c27fa0b85c9725",
".git/objects/ff/d64554846821220cd23e3e72d0509d435b4e97": "2331a47b0a12c63da2fafe537fb8c32d",
".git/refs/heads/main": "15e628e339ba60bd51471b979572b098",
".git/refs/remotes/origin/main": "15e628e339ba60bd51471b979572b098",
"assets/AssetManifest.json": "9a741e18a133cf999a764839cfcc9a5b",
"assets/assets/icons/icon_chat.png": "c7f878c3e410fb2eb605f5bba49af8de",
"assets/assets/icons/icon_diamond.png": "3abed75d6df6616abe5e3ff1f8215148",
"assets/assets/icons/icon_diamond1.png": "d22786201623769c4210e6258741e4a0",
"assets/assets/icons/icon_diamondwhite.png": "41fc231e8c762c9defd04e9cc9a3da92",
"assets/assets/icons/icon_gender.png": "87b3e6399f8d69bb8cd438aa368e8bda",
"assets/assets/icons/icon_heart.png": "dbac5857386ec8e8d222e44f20bc3e40",
"assets/assets/icons/icon_heart2.png": "0a13f5857f2bba961572a219bde07c3e",
"assets/assets/icons/icon_info.png": "c2bb113ca91f5fbd9f4c306c4e2d4699",
"assets/assets/icons/icon_location.png": "ef88bdb87d1f357f7f3cd6901231925b",
"assets/assets/icons/icon_lotus.png": "27a4373db6a114fe0b2c58f33c9bfa1b",
"assets/assets/icons/icon_photos.png": "081ebe6ae3ca0a4ba29475f8764efe7b",
"assets/assets/icons/icon_photos1.png": "fa7d5a24b6360e1c8376a6cd72626e51",
"assets/assets/icons/icon_profile.png": "3c2be568c1d5b61cb4083b036a6e9e4c",
"assets/assets/icons/icon_verify.png": "3b76730927cff55663fb2e573777f0b0",
"assets/assets/images/bg1_form.png": "084db278943068e4aa373b1f4681275b",
"assets/assets/images/bg_profile.png": "6d834176d8437b7f1ac1f71cf9d376f4",
"assets/assets/images/nophoto_female.png": "7d7efe0fa3ec7d7c4d8ad38f5f93e59b",
"assets/assets/images/nophoto_male.png": "5e22f0dc4527f87dda1a6db7c802f001",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f305b58ba57f471be8d15eb8bdcb08ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "42c32b3ca57cb836208a3f4644be4de0",
"/": "42c32b3ca57cb836208a3f4644be4de0",
"main.dart.js": "2939715af7babf73330c48c860b64935",
"manifest.json": "b6a579d0e661ca0c920879553ecf641f",
"version.json": "e514ef67f307197938f5a04765e80833"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
