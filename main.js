/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ProjectCard.js":
/*!****************************!*\
  !*** ./src/ProjectCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectCard: () => (/* binding */ ProjectCard)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\nfunction ProjectCard(project) {\n  const card = document.createElement(\"li\");\n  card.classList.add(\n    \"project\",\n    \"p-8\",\n    \"flex\",\n    \"flex-col\",\n    \"sm:flex-row\",\n    \"justify-center\"\n  );\n\n  const techIconsHtml = project.tech\n    .map((techName) => {\n      const techIcon = _data__WEBPACK_IMPORTED_MODULE_0__.techIcons.find((tech) => tech.name === techName);\n      return techIcon ? techIcon.icon : \"\";\n    })\n    .join(\" \");\n\n  const liveHtml = () => {\n    if (project.live) {\n      return `<a href=${project.live} class=\"text-jl-purple bg-light border-solid border-2 border-jl-purple hover:bg-purple-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-2 py-0.5\">Live</a>`;\n    } else {\n      return \"\";\n    }\n  };\n\n  // Construct HTML for project card using project data\n  card.innerHTML = `\n      <img src=${project.image} alt=${project.imageAlt}\" class=\"sm:w-2/5 rounded hover:scale-110 duration-500\">\n      <div class=\"pl-8 flex flex-col justify-between sm:w-3/5\">\n        <h2 class=\"text-2xl font-bold pb-2 text-jl-purple \">${project.title}</h2>\n        <p class=\" text-secondary font-light\">${project.description}</p>\n        <div>\n          <h3 class=\"text-secondary text-sm\">Tech</h3>\n          <p class=\"text-icons opacity-75 pb-2\">\n            ${techIconsHtml}\n          </p>\n        <div class=\"flex items-center space-x-4\">\n          <a href=${project.link} class=\"text-jl-purple bg-light border-solid border-2 border-jl-purple hover:bg-purple-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-2 py-0.5\">Code</a>\n          ${liveHtml()}\n        </div>\n        </div>\n      </div>\n  `;\n  return card;\n}\n\n\n//# sourceURL=webpack:///./src/ProjectCard.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   techIcons: () => (/* binding */ techIcons)\n/* harmony export */ });\nconst techIcons = [\n  {\n    name: \"React\",\n    icon: \"<i class='devicon-react-original' title='React'></i>\",\n  },\n  {\n    name: \"Vite\",\n    icon: \"<i class='devicon-vitejs-plain' title='Vite'></i>\",\n  },\n  {\n    name: \"JavaScript\",\n    icon: \"<i class='devicon-javascript-plain' title='JavaScript'></i>\",\n  },\n  {\n    name: \"HTML\",\n    icon: \"<i class='devicon-html5-plain' title='HTML'></i>\",\n  },\n  {\n    name: \"CSS\",\n    icon: \"<i class='devicon-css3-plain' title='CSS'></i>\",\n  },\n  {\n    name: \"Netlify\",\n    icon: \"<i class='devicon-netlify-plain' title='Netlify'></i>\",\n  },\n  {\n    name: \"Github\",\n    icon: \"<i class='devicon-github-original' title='Github'></i>\",\n  },\n  {\n    name: \"Ruby\",\n    icon: \"<i class='devicon-ruby-plain' title='Ruby'></i>\",\n  },\n  {\n    name: \"Ruby on Rails\",\n    icon: \"<i class='devicon-rails-plain' title='Ruby on Rails'></i>\",\n  },\n  {\n    name: \"RSpec\",\n    icon: \"<i class='devicon-rspec-plain' title='RSpec'></i>\",\n  },\n  {\n    name: \"Python\",\n    icon: \"<i class='devicon-python-plain' title='Python'></i>\",\n  },\n];\n\nconst projects = [\n  {\n    title: \"Discworld Shuffle\",\n    description:\n      \"A React based memory game using Open Library's cover API. Attempt to beat your high score by not clicking the same novel twice.\",\n    image: \"./assets/Discworld_Shuffle.jpeg\",\n    imageAlt: \"Screenshot of Discworld Shuffle\",\n    tech: [\"React\", \"Vite\", \"JavaScript\", \"HTML\", \"CSS\", \"Netlify\", \"Github\"],\n    link: \"https://github.com/jalamb5/discworld-shuffle\",\n    live: \"https://discworldshuffle.netlify.app/\",\n  },\n  {\n    title: \"Rio Grande\",\n    description: \"A shopping site using products from FakeStore API. Setup using React Router, cart value updates in real time.\",\n    image: \"./assets/rio_grande.png\",\n    imageAlt: \"Screenshot of rio grande web page\",\n    tech: [\"React\", \"Vite\", \"JavaScript\", \"HTML\", \"CSS\", \"Netlify\", \"Github\"],\n    link: \"https://github.com/jalamb5/rio-grande\",\n    live: \"https://riogrande.netlify.app/\",\n  },\n  {\n    title: \"Etch-A-Sketch\",\n    description:\n      \"Etch-A-Sketch for web. Use multiple pen sizes and colors to draw and erase or shake the board to reset.\",\n    image: \"./assets/etch.png\",\n    imageAlt: \"Screenshot of etch-a-sketch web page\",\n    tech: [\"JavaScript\", \"HTML\", \"CSS\", \"Github\"],\n    link: \"https://github.com/jalamb5/etch-a-sketch\",\n    live: \"https://jalamb5.github.io/etch-a-sketch/\",\n  },\n  {\n    title: \"Battleship\",\n    description:\n      \"Game of Battleship against AI opponent. Built using vanilla JavaScript, CSS, & HTML.\",\n    image: \"./assets/battleship.png\",\n    imageAlt: \"Screenshot of battleship web page\",\n    tech: [\"JavaScript\", \"HTML\", \"CSS\", \"Github\"],\n    link: \"https://github.com/jalamb5/battleship\",\n    live: \"https://jalamb5.github.io/battleship/\",\n  },\n  {\n    title: \"Socialize\",\n    description:\n      \"Facebook-style web app built with Ruby on Rails. Using Devise gem for account creation and login. Ability to post, delete, comment, like, and follow other users.\",\n    image: \"./assets/socialize.png\",\n    imageAlt: \"Screenshot of Socialize web page\",\n    tech: [\"Ruby on Rails\", \"Ruby\", \"JavaScript\", \"HTML\", \"CSS\", \"Github\"],\n    link: \"https://github.com/jalamb5/socialize\",\n  },\n  {\n    title: \"Connect Four\",\n    description:\n      \"Play Connect Four in the command line. Built using TDD with Ruby and RSpec.\",\n    image: \"./assets/connectfour.png\",\n    imageAlt: \"Screenshot of connect four game in command line\",\n    tech: [\"Ruby\", \"RSpec\", \"Github\"],\n    link: \"https://github.com/jalamb5/connect_four\",\n  },\n  {\n    title: \"Local To-Dos\",\n    description:\n      \"Todo list app built with vanilla JavaScript. Create todos in local storage with the ability to make multiple lists, mark as done, delete, and filter.\",\n    image: \"./assets/todo.png\",\n    imageAlt: \"Screenshot of local todos web page\",\n    tech: [\"JavaScript\", \"HTML\", \"CSS\", \"Github\"],\n    link: \"https://github.com/jalamb5/js-todo\",\n    live: \"https://jalamb5.github.io/js-todo/\",\n  },\n  {\n    title: \"Weather App\",\n    description:\n      \"Check the current weather and forecast via weatherAPI. Built with vanilla JavaScript, CSS, & HTML.\",\n    image: \"./assets/weather.png\",\n    imageAlt: \"Screenshot of weather app web page\",\n    tech: [\"JavaScript\", \"HTML\", \"CSS\", \"Github\"],\n    link: \"https://github.com/jalamb5/weather\",\n    live: \"https://jalamb5.github.io/weather/\",\n  },\n  {\n    title: \"'Daily Note' Cleanup Scripts for Obsidian\",\n    description:\n      \"Ruby & Python scripts to perform periodic cleanup actions on files created via Obsidian's Daily Notes plugin. Compares new files against a template to remove empty notes & archives older notes.\",\n    image:\n      \"https://github.com/jalamb5/Daily-Note-Cleanup/raw/main/daily_note_cleanup.png\",\n    imageAlt: \"Screenshot of script\",\n    tech: [\"Ruby\", \"Python\", \"Github\"],\n    link: \"https://github.com/jalamb5/Daily-Note-Cleanup\",\n  },\n  {\n    title: \"CV Builder\",\n    description:\n      \"A React based CV/Resume builder with the ability to add additional sections and view completed CV.\",\n    image: \"./assets/CV_Builder.jpeg\",\n    imageAlt: \"Screenshot of CV Builder\",\n    tech: [\"React\", \"Vite\", \"JavaScript\", \"HTML\", \"CSS\", \"Netlify\", \"Github\"],\n    link: \"https://github.com/jalamb5/CV-app/\",\n    live: \"https://thunderous-sopapillas-4e3f70.netlify.app/\",\n  },\n];\n\n\nconst oldProjects = [\n  {\n    title: \"Admin Dashboard Design\",\n    description: \"A CSS & HTML only design for an admin dashboard.\",\n    image: \"./assets/admindashboard.png\",\n    imageAlt: \"Screenshot of admin dashboard web page\",\n    tech: [\"HTML\", \"CSS\", \"Github\"],\n    link: \"https://github.com/jalamb5/odin-admin-dashboard\",\n    live: \"https://jalamb5.github.io/odin-admin-dashboard/\",\n  },\n];\n\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard */ \"./src/ProjectCard.js\");\n\n\n\nfunction renderProjects() {\n  const app = document.getElementById(\"project-list\");\n  _data__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {\n    const projectCard = (0,_ProjectCard__WEBPACK_IMPORTED_MODULE_1__.ProjectCard)(project);\n    app.appendChild(projectCard);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;