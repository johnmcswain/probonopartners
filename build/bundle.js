/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Created by johnmcswain on 6/18/17.
	 */

	var config = __webpack_require__(1);

	function feedLoader(){
	    $.ajax({
	        url: config.dataFeed
	    }).done(function(data) {
	        console.log(data);
	        tableBuilder(data.rss.channel.item);
	    });
	}

	function tableBuilder(list){
	    list.sort(function(a, b) {
	        if(a.categories && b.categories) {
	            var nameA = a.categories.category.toUpperCase(); // ignore upper and lowercase
	            var nameB = b.categories.category.toUpperCase(); // ignore upper and lowercase
	        }else{
	            return 0;
	        }
	        if (nameA < nameB) {
	            return -1;
	        }
	        if (nameA > nameB) {
	            return 1;
	        }
	        return 0;  // names are equal
	    });


	    list.forEach(function(item){
	        $("#project_table").append(
	            "<tr><td><div><strong>"+item.title+"</strong></div><div>"+item.mission+"</div><br><p>"+item.matters.matter+"</p></td></tr>"
	        );
	    });
	}

	feedLoader();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/**
	 * Created by johnmcswain on 6/18/17.
	 */

	module.exports = {
	    dataFeed: "http://dimalpzodor05.cloudfront.net"
	};


/***/ })
/******/ ]);