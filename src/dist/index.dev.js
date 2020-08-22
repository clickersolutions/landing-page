"use strict";

require("normalize.css");

require("animate.css/animate.min.css");

require("@fortawesome/fontawesome-free/css/all.css");

require("@fortawesome/free-brands-svg-icons/");

require("devicon/devicon.min.css");

require("devicon/devicon-colors.css");

require("./styles/style.scss");

var _animations = require("./animations");

var _events = require("./events");

// External css files
(0, _animations.startAnimations)();
(0, _events.startEvents)();