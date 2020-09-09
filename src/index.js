// External css files
import "normalize.css";
import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/free-brands-svg-icons/";
import "devicon/devicon.min.css";
import "devicon/devicon-colors.css";

import "./styles/style.scss";

import { startAnimations } from "./animations";
import { startEvents } from "./events";
import {initModal} from './modal';

startAnimations();
startEvents();
initModal();
