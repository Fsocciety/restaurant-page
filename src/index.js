import createHome from "./home";
import './styles/style.css';
import fbIcon from './assets/Facebook.png';
import igIcon from "./assets/Instagram.png";
import twIcon from "./assets/Twitter.png";

const facebook = document.querySelector('.facebookIcon');
facebook.src = fbIcon;

const instagram = document.querySelector(".instagramIcon");
instagram.src = igIcon;

const twitter = document.querySelector(".twitterIcon");
twitter.src = twIcon;

createHome();