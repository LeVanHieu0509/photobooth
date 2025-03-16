import { device } from "@/styles/media";
import styled from "styled-components";

export const GalleryWrapper = styled.div`
  .imgDrop img {
    object-fit: cover;
    width: 100%;
    height: 400px;
  }

  img {
    transition: all 0.3s;
  }

  .sec_community .row_column .images1 .content {
    top: 0;
    bottom: 0;
    right: 0;
    width: 66.67%;
  }

  .imgDrop {
    position: relative;
    overflow: hidden;
    background-size: cover;
    display: block;
  }

  .sec_community .row_column .images1 .content,
  .sec_community .row_column .images2 .content,
  .sec_community .row_column .images3 .content,
  .sec_community .row_column .images4 .content {
    color: #fff;
    transition: all 0.3s;
    text-align: center;
    padding: 15px;
  }

  .sec_community .row_column .images1,
  .sec_community .row_column .images2,
  .sec_community .row_column .images3,
  .sec_community .row_column .images4 {
    position: relative;
    cursor: pointer;
  }

  .color_main {
    color: #1c8b1c;
  }
  p {
    margin-bottom: 15px;
  }
  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) / -2);
    margin-left: calc(var(--bs-gutter-x) / -2);
  }

  .wraper {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }
  .sec_community .row_column {
    position: relative;
    margin: 0;
  }
  @media (min-width: 1201px) {
    .pt-50 {
      padding-top: 50px;
    }
    .row {
      margin-left: -10px;
      margin-right: -10px;
    }
  }

  @media (min-width: 768px) {
    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .sec_community .ttl {
      padding-right: 50px;
    }
  }

  .bsd {
    box-shadow: 0px 1px 7px 1px #ddd;
  }

  /* TABLE OF CONTENT
    1. header
    2. footer
    3. page index 
*/

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 99999;
    background: #1c8b1c;
    transition: all 0.3s;
    color: #1b2550;
    padding: 10px 0;
  }

  @media (min-width: 1201px) {
    .header {
      padding: 10px 0;
    }
  }

  .header .logo {
    width: 55px;
    transition: all 0.3s;
  }

  @media (min-width: 1201px) {
    .header .logo {
      width: 65px;
    }
  }

  .header .navbar {
    display: block;
    padding: 0;
  }

  @media (max-width: 991px) {
    .header-top .list_social {
      margin-right: 80px;
      margin-top: 2px;
    }
  }

  .header-top .list_social li:not(:last-child) {
    display: none;
  }

  .header-top .tel {
    width: 109px;
    margin-left: 15px;
    transition: all 0.3s;
  }

  @media (min-width: 992px) {
    .header-top .tel {
      margin-left: 30px;
    }
  }

  .header-top .tel:hover {
    transform: scale(1.05);
  }

  .header-top .language {
    margin-left: auto;
    display: block;
    font-weight: 500;
    width: 70px;
    text-align: center;
    position: relative;
    z-index: 9999;
    color: #fff;
  }

  @media (max-width: 991px) {
    .header-top .language {
      margin-right: 20px;
    }
  }

  @media (max-width: 767px) {
    .header-top .language {
      margin-right: 35px;
    }
  }

  .header-top .language .icon_down {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
  }

  .header-top .language .dropdown_btn {
    padding: 5px 10px 4px;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 110px;
    font-size: 16px;
    line-height: 20px;
    color: white;
  }

  @media (min-width: 768px) {
    .header-top .language .dropdown_btn {
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .header-top .language .dropdown_btn:after {
    width: 12px;
    height: 6px;
    border: none;
    background-image: url(../images/icon_down.png);
    background-size: 100%;
  }

  .header-top .language .dropdown_btn span {
    display: block;
  }

  .header-top .language .dropdown-menu {
    width: 140px;
    min-width: 70px;
    right: -27px !important;
    top: 100% !important;
    transform: translate(0) !important;
    left: auto !important;
    border-radius: 0;
    border: none;
    padding: 0;
  }

  .header-top .language .dropdown-menu .dropdown-item {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px 22px;
    line-height: 30px;
    text-align: right;
  }

  .header-top .language .dropdown-menu .dropdown-item + a {
    border-top: 1px solid #eee;
  }

  .header-top .language .dropdown-toggle::after {
    margin-left: 10px;
  }

  .header-bottom .tel {
    transition: all 0.3s;
    margin-left: 15px;
    display: block;
  }

  @media (max-width: 767px) {
    .header-bottom .tel {
      width: 36px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      top: -1px;
    }
  }

  @media (min-width: 992px) {
    .header-bottom .tel {
      margin-left: 30px;
    }
  }

  .header-bottom .tel:hover {
    transform: scale(1.05);
  }

  .header-bottom .tel img {
    max-width: 109px;
    width: 109px;
  }

  @media (max-width: 767px) {
    .header-right {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .header-right {
      max-width: calc(100% - 30px);
    }
  }

  @media (min-width: 1201px) {
    .header-right {
      max-width: calc(100% - 55px);
    }
  }

  @media (min-width: 992px) {
    .header .modal-dialog {
      width: 100%;
      transform: translate(0, 0) !important;
    }
  }

  @media (max-width: 1200px) {
    .header-end {
      position: absolute;
      top: 15px;
      right: 80px;
    }
  }

  @media (max-width: 991px) {
    .header-end {
      top: 50%;
      transform: translateY(-50%);
      right: 80px;
    }
  }

  .header-end .cart {
    display: block;
    width: 30px;
    margin-left: 18px;
    transition: all 0.3s;
  }

  .header-end .cart img {
    display: block;
  }

  .header-end .cart:hover {
    transform: scale(1.05);
  }

  .header_nav {
    width: 100%;
  }

  @media (max-width: 991px) {
    .header_nav {
      align-items: flex-start !important;
    }
  }

  @media (max-width: 991px) {
    .header_nav .nav {
      height: 100%;
      overflow: auto;
      align-content: flex-start;
    }
  }

  @media (max-width: 991px) {
    .header_nav .nav > li {
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
  }

  .header_nav .nav > li > a {
    position: relative;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    opacity: 0.7;
    text-transform: uppercase;
  }

  @media (max-width: 991px) {
    .header_nav .nav > li > a {
      width: calc(100% - 60px);
      padding: 15px 0;
      color: #fff;
      text-transform: uppercase;
    }
  }

  @media (min-width: 992px) {
    .header_nav .nav > li > a {
      padding: 12px;
    }
  }

  .header_nav .nav > li > a.nav_btn {
    text-align: center;
  }

  @media (max-width: 991px) {
    .header_nav .nav > li > a.nav_btn {
      margin: 15px 0;
      padding: 10px 0;
      background: #0d5a2e;
      color: #fff;
      border-radius: 4px;
    }
  }

  @media (min-width: 992px) {
    .header_nav .nav > li > a.nav_btn {
      border: 1px solid #ffffff;
      border-radius: 10px;
    }
  }

  .header_nav .nav > li > a > span {
    display: block;
  }

  .header_nav .nav > li.active > a,
  .header_nav .nav > li:hover a {
    opacity: 1;
  }

  .header_nav .nav > li .icon_toggle {
    width: 4px;
    height: 6px;
    margin-left: 3px;
    background-image: url(../images/icon_down.png);
    background-size: 80%;
    background-repeat: no-repeat;
  }

  @media (max-width: 991px) {
    .header_nav .nav > li .icon_toggle svg {
      transform: rotate(-90deg);
    }
  }

  .header_nav .nav > li .icon_toggle svg {
    width: 10px;
    display: none;
  }

  .header_nav .nav > li .icon_toggle path {
    stroke: #1c8b1c;
    fill: #1c8b1c;
  }

  @media (min-width: 992px) {
    .header_nav .nav > li + li {
      margin-left: 25px;
    }
  }

  @media (max-width: 991px) {
    .header_nav .nav > li .sub_menu li {
      display: flex !important;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 991px) {
    .header_nav .nav > li .sub_menu li a {
      width: calc(100% - 60px) !important;
      padding: 15px 0;
      color: #fff;
    }
  }

  @media (min-width: 992px) {
    .header_nav .nav > li .sub_menu li a + .icon_toggle {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      background-image: url(../images/icon_right.png);
      width: 5px;
      height: 8px;
      padding: 0;
      background-size: 100%;
    }
  }

  @media (max-width: 767px) {
    .header_nav .nav > li .sub_menu li.on > a + .icon_toggle {
      background-image: url(../images/icon_down_w.svg) !important;
      background-size: 8px;
    }
  }

  .header_nav .nav > li .sub_menu li:hover a + .icon_toggle {
    background-image: url(../images/icon_right_w.png);
  }

  @media (max-width: 767px) {
    .header_nav .nav > li.on > a + .icon_toggle {
      background-image: url(../images/icon_down.png) !important;
      background-size: 14px;
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }

  .header_nav .nav .dropdown {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 992px) {
    .header_nav .nav .dropdown {
      align-items: center;
    }
  }

  .header_nav .nav .dropdown .icon_toggle {
    width: 10px;
  }

  @media (max-width: 991px) {
    .header_nav .nav .dropdown .icon_toggle {
      width: 60px;
      text-align: right;
      line-height: 40px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 0;
      background-size: 14px;
      background-position: center center;
    }
  }

  @media (min-width: 992px) {
    .header_nav .nav .dropdown .icon_toggle {
      pointer-events: none;
      padding-right: 10px;
    }
  }

  @media (max-width: 991px) {
    .header_nav .nav .dropdown .sub_menu {
      width: 100%;
      display: none;
      background: rgba(255, 255, 255, 0.05);
    }
  }

  @media (min-width: 992px) {
    .header_nav .nav .dropdown .sub_menu {
      display: block !important;
    }
  }

  .header_nav .nav li {
    position: relative;
  }

  @media (max-width: 991px) {
    .header_nav .nav li > .sub_menu {
      border-top: 1px solid rgba(255, 255, 255, 0.3);
    }
  }

  @media (min-width: 992px) {
    .header_nav .nav li > .sub_menu {
      width: 250px;
      white-space: nowrap;
      position: absolute;
      top: calc(100% + 30px);
      left: 0;
      color: #444;
      background: #fff;
      transition: all 0.3s;
      z-index: 10;
      box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.16);
      opacity: 0;
      pointer-events: none;
    }
  }

  .header_nav .nav li > .sub_menu > li + li {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  @media (min-width: 768px) {
    .header_nav .nav li > .sub_menu > li + li {
      border: none;
    }
  }

  .header_nav .nav li > .sub_menu > li > a {
    display: block;
    line-height: 20px;
    text-align: left;
    position: relative;
    width: 100%;
    padding: 10px 25px;
    text-decoration: none;
    transition: all 0.4s;
    color: #fff;
  }

  @media (min-width: 992px) {
    .header_nav .nav li > .sub_menu > li > a {
      padding: 13px 25px;
      color: #444;
    }
  }

  .header_nav .nav li > .sub_menu > li > a:hover,
  .header_nav .nav li > .sub_menu > li > a.active {
    color: #fff;
    background: #1c8b1c;
  }

  .header_nav .nav li > .sub_menu > li > a:hover:before,
  .header_nav .nav li > .sub_menu > li > a.active:before {
    opacity: 1;
  }

  @media (min-width: 992px) {
    .header_nav .nav li > .sub_menu .sub_menu {
      transform: translateX(100%) translateY(-50px);
      left: -5px;
    }
  }

  @media (min-width: 992px) {
    .header_nav .nav li:hover > .sub_menu {
      top: 100%;
      opacity: 1;
      pointer-events: inherit;
    }
  }

  @media (max-width: 991px) {
    .header .slogan {
      display: none;
    }
  }

  .header .navbar-toggler {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    z-index: 9999;
    width: 60px;
  }

  .header .navbar-toggler:focus {
    outline: 0 !important;
    box-shadow: none;
    border: none;
  }

  .header .navbar-toggler span {
    width: 26px;
    height: 3px;
    margin: auto;
    background: #fff;
    border-radius: 3px;
    position: relative;
  }

  .header .navbar-toggler span:before,
  .header .navbar-toggler span:after {
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    background: #fff;
    transform: rotate(0deg);
    transition: all 0.4s;
    border-radius: 3px;
    left: 0;
  }

  .header .navbar-toggler span:before {
    top: -10px;
  }

  .header .navbar-toggler span:after {
    bottom: -10px;
  }

  .header .navbar-toggler.toggle_menu span {
    background-color: transparent;
  }

  .header .navbar-toggler.toggle_menu span:before,
  .header .navbar-toggler.toggle_menu span:after {
    background: #fff;
  }

  .header .navbar-toggler.toggle_menu span:before {
    top: 0;
    transform: rotate(45deg);
  }

  .header .navbar-toggler.toggle_menu span:after {
    bottom: 0;
    transform: rotate(-45deg);
  }

  @media (min-width: 992px) {
    .header .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 991px) {
    .header .navbar .header_nav {
      width: 100%;
      max-width: 400px;
      background: #1c8b1c;
      height: 100vh;
      position: fixed;
      right: 0;
      top: 0;
      transform: translateX(100%);
      transition: ease-in-out 0.2s;
    }
    .header .navbar .header_nav ul.nav {
      padding: 55px 25px 25px;
    }
    .header .navbar.show .header_nav {
      transform: translateX(0);
    }
  }

  @media (min-width: 992px) {
    .header .navbar {
      width: auto;
      overflow: inherit;
      position: static;
      display: flex;
      opacity: 1 !important;
      height: auto !important;
    }
    .header .navbar .modal-dialog {
      max-width: 100%;
      margin: 0;
      pointer-events: inherit;
    }
  }

  .header .form_search {
    position: relative;
    width: 140px;
    padding-right: 30px;
  }

  @media (min-width: 992px) {
    .header .form_search {
      padding-right: 34px;
    }
  }

  .header .form_search input {
    border: none;
    height: 30px;
  }

  @media (min-width: 768px) {
    .header .form_search input {
      height: 34px;
    }
  }

  .header .form_search input.input_search {
    border-radius: 4px 0 0 4px;
    background: #e6e6e6;
    width: 100%;
    padding: 10px 15px;
    font-size: 12px;
  }

  .header .form_search input.input_search::placeholder {
    font-size: 12px;
    color: #cbcbcb;
  }

  .header .form_search input.input_search:focus {
    outline: none;
  }

  .header .form_search input.input_submit {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 4px;
    background-color: #1c8b1c;
    background-image: url(../images/icon_search.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 12px;
    width: 30px;
  }

  @media (min-width: 768px) {
    .header .form_search input.input_submit {
      width: 34px;
    }
  }

  .tel_head {
    background: #be4f18;
    color: #fff;
    border-radius: 30px;
    transition: all 0.3s;
  }

  @media (min-width: 768px) {
    .tel_head {
      margin-left: 30px;
    }
  }

  .tel_head .icon {
    width: 30px;
    height: 30px;
    line-height: 30px;
    padding: 9px;
  }

  @media (max-width: 767px) {
    .tel_head {
      margin-left: 15px;
    }
    .tel_head span {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .tel_head {
      padding: 8px 15px;
      font-size: 14px;
      line-height: 18px;
    }
    .tel_head:hover {
      transform: scale(1.05);
      color: #fff;
    }
    .tel_head .icon {
      display: none;
    }
  }

  .list_social li {
    margin: 0 5px;
    transition: all 0.2s;
  }

  .list_social li a {
    display: block;
    text-align: center;
  }

  .list_social li:hover {
    transform: scale(1.1);
  }

  .header-bottom {
    position: relative;
  }

  @media (max-width: 991px) {
    .modal {
      pointer-events: none;
    }
  }

  .modal.show {
    pointer-events: inherit;
  }

  main {
    padding-top: 75px;
  }

  @media (max-width: 991px) {
    main {
      padding-top: 70px;
    }
  }

  header .modal-dialog {
    position: relative;
    width: auto;
    margin: 0;
    pointer-events: inherit;
  }

  header .modal.fade .modal-dialog {
    transform: inherit !important;
  }

  .navbar-form-search {
    position: relative;
    z-index: 9999999;
  }

  @media (max-width: 991px) {
    .navbar-form-search {
      position: fixed;
      top: 10px;
      right: 15px;
      display: flex;
      align-items: center;
      display: none;
    }
  }

  .navbar-form-search .form-control {
    border: 1px solid #0d5a2e;
    width: 150px;
  }

  @media (max-width: 991px) {
    .navbar-form-search .form-control {
      border-right: none;
      border-radius: 5px 0 0 5px;
      height: 30px;
    }
  }

  @media (min-width: 992px) {
    .navbar-form-search .form-control {
      width: 260px;
    }
  }

  .navbar-form-search .form-control::placeholder {
    font-size: 13px;
  }

  .navbar-form-search .btn {
    border: 0;
    background: transparent;
    font-size: 18px;
  }

  .navbar-form-search .btn:active,
  .navbar-form-search .btn:hover,
  .navbar-form-search .btn:focus {
    color: #000;
    outline: none;
    box-shadow: none;
  }

  .navbar-form-search .search-form-container {
    text-align: right;
    overflow: hidden;
    background: transparent;
    z-index: 9;
    width: 100%;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 992px) {
    .navbar-form-search .search-form-container {
      top: 50%;
      transform: translateY(-50%);
      right: 40px;
      left: auto;
      margin-left: auto;
      width: 300px;
      position: absolute;
    }
  }

  .navbar-form-search .search-form-container .search-input-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 992px) {
    .navbar-form-search .search-form-container .search-input-group {
      width: 300px;
    }
  }

  #search-button {
    background-image: url(../images/icon_search.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center center;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 991px) {
    #search-button {
      height: 30px;
      background-size: 12px;
      background-color: #fff;
      border-radius: 0 5px 5px 0;
      border: 1px solid #0d5a2e;
      margin-left: -2px;
      border-left: none;
    }
  }

  .header nav {
    transition: all 0.3s;
  }

  @media (min-width: 992px) {
    .header:not(.active_search) .nav {
      opacity: 0;
      pointer-events: none;
    }
  }

  @media (min-width: 992px) {
    .header.active_search .search-form-container {
      width: 0;
    }
  }

  #hide-search-input-container {
    background-image: url(../images/cancel.png);
    background-size: 12px;
    background-repeat: no-repeat;
    background-position: center center;
    width: 40px;
    height: 35px;
  }

  @media (max-width: 991px) {
    #hide-search-input-container {
      display: none;
    }
  }

  main {
    overflow: hidden;
  }

  .social_fixed {
    position: fixed;
    bottom: 10%;
    /* transform: translateY(-50%); */
    right: 15px;
    z-index: 9999;
  }

  .social_fixed li a img {
    border-radius: 100%;
  }

  .social_fixed li a {
    display: block;
    cursor: pointer;
    transition: all 0.3s;
    width: 30px;
    border-radius: 100%;
  }

  @media (min-width: 768px) {
    .social_fixed li a {
      width: 50px;
    }
  }

  .social_fixed li a:hover {
    transform: scale(1.1);
  }

  .social_fixed li + li {
    margin-top: 10px;
  }

  footer {
    position: relative;
    z-index: 1;
    color: #fff;
    z-index: 99;
  }

  footer .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  footer .bg:after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #1c8b1c;
    opacity: 0.8;
  }

  footer .logo {
    width: 80px;
  }

  @media (min-width: 768px) {
    footer .logo {
      width: 100px;
    }
  }

  @media (min-width: 1201px) {
    footer .logo {
      width: 130px;
    }
  }

  footer .memu li + li {
    margin-top: 5px;
  }

  footer .memu li a:hover {
    text-decoration: underline;
  }

  footer .address {
    border-top: 1px solid #1676b7;
    padding: 8px 15px;
  }

  @media (min-width: 768px) {
    footer .address {
      padding: 15px;
    }
  }

  @media (max-width: 991px) {
    footer .ttl_f {
      margin-top: 20px;
    }
  }

  footer address {
    display: block;
    margin: 0;
  }

  @media (max-width: 767px) {
    footer address {
      text-align: center;
    }
  }

  footer address a {
    color: #ed8322;
  }

  footer address a:hover {
    color: #ed8322;
    text-decoration: underline;
  }

  footer .footer_top .info_item {
    padding: 10px 0;
    margin: 0;
  }

  @media (min-width: 1201px) {
    footer .footer_top .info_item {
      margin-right: 50px;
    }
  }

  footer .footer_top .info_item + dl {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }

  footer .footer_top .info_item dd {
    margin-top: 5px;
    font-size: 13px;
    line-height: 16px;
  }

  footer .form_footer {
    background: #fff;
    border-radius: 4px;
    padding: 15px;
  }

  @media (max-width: 991px) {
    footer .form_footer {
      margin-top: 30px;
    }
  }

  footer .form_footer .group label {
    display: block;
    color: #888;
    margin-top: 10px;
  }

  footer .form_footer .group .input {
    height: 20px;
    margin-top: 8px;
    font-size: 12px;
  }

  footer .form_footer .group .input::placeholder {
    font-size: 12px;
  }

  footer .form_footer .group .btn_shared {
    height: 30px;
    width: 100%;
    padding: 0;
    line-height: 30px;
    font-size: 12px;
    margin-top: 5px;
  }

  footer .form_footer .group textarea {
    height: 54.03px;
    border-radius: 4.98px;
    background: #e6e6e6;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: none;
  }

  footer .form_footer .group textarea:focus {
    outline: none;
  }

  .social li {
    width: 30px;
    margin: 0 5px;
  }

  .social li a {
    display: block;
    transition: all 0.3s;
  }

  .social li a:hover {
    transform: scale(1.1);
  }

  body.home {
    background-image: url(../images/deco_01.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom 50px center;
  }

  .pddrop {
    padding-bottom: 56.25%;
  }

  .image-pop {
    height: 100%;
    position: relative;
  }

  .image-pop img {
    vertical-align: bottom;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media (max-width: 767px) {
    .image-pop {
      display: none;
    }
  }

  .filter_main {
    position: relative;
  }

  .filter_main .row_item {
    margin-left: -2px;
    margin-right: -2px;
  }

  .filter_main .row_item .colum_item {
    padding: 0 2px;
  }

  .filter_main .group {
    border: 1px solid #a7a7a7;
  }

  @media (min-width: 768px) {
    .filter_main .group {
      margin-bottom: 12px;
      padding: 4px;
    }
  }

  .filter_main .group label {
    display: block;
    width: 230px;
    background: #1c8b1c;
    color: #fff;
    padding: 12px;
    font-size: 15px;
    line-height: 18px;
    margin: 0;
  }

  @media (max-width: 767px) {
    .filter_main .group label {
      display: none;
    }
  }

  .filter_main .group input[type="search"] {
    font-size: 15px;
    line-height: 18px;
    text-align: left;
    color: #a7a7a7;
    border: none;
    padding: 0 20px;
    display: block;
    margin: 0;
    width: calc(100% - 42px);
  }

  @media (min-width: 768px) {
    .filter_main .group input[type="search"] {
      width: calc(100% - 230px - 42px);
    }
  }

  .filter_main .group input[type="search"]:focus {
    outline: none;
  }

  .filter_main .group.filter_search input[type="search"] {
    width: calc(100% - 42px);
  }

  .filter_main .group input[type="submit"] {
    width: 42px;
    height: 42px;
    margin: 0;
    display: block;
    background-color: #1c8b1c;
    background-image: url(../images/icon_search.svg);
    background-size: 20px;
    background-position: center center;
    background-repeat: no-repeat;
    border: none;
    transition: all 0.3s;
  }

  .filter_main .group input[type="submit"]:hover {
    opacity: 0.7;
  }

  .filter_main .group input[type="submit"]:disabled {
    cursor: not-allowed;
    background-color: #9e9e9e;
  }

  .filter_main .btn-group {
    width: 100%;
  }

  @media (max-width: 767px) {
    .filter_main .btn-group {
      margin-top: 4px;
    }
  }

  .filter_main .btn-group .dropdown-toggle {
    height: 42px;
    background: #fff;
    color: #a7a7a7;
    font-size: 15px;
    border: 1px solid #a7a7a7;
    padding: 10px 30px 10px 20px;
    width: 100%;
    position: relative;
    cursor: pointer;
  }

  .filter_main .btn-group .dropdown-toggle:after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
  }

  .filter_main .btn-group .dropdown-menu {
    width: 100%;
    max-width: 100%;
    z-index: 999;
    border-radius: 0;
    border: 1px solid #a7a7a7;
    background: #fff;
    padding: 0;
  }

  .filter_main .btn-group .dropdown-menu ul {
    font-size: 15px;
  }

  .filter_main .btn-group .dropdown-menu ul li {
    padding: 5px 20px;
    margin: 2px 0;
  }

  .filter_main .btn-group .dropdown-menu ul li:hover {
    background: #e8e8e8;
    color: #fff;
  }

  .filter_main .btn_submit {
    height: 42px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    background: #1c8b1c;
    color: #fff;
    transition: all 0.3s;
  }

  @media (max-width: 767px) {
    .filter_main .btn_submit {
      margin-top: 4px;
    }
  }

  .filter_main .btn_submit:hover {
    opacity: 0.7;
  }

  .sec_about {
    position: relative;
    color: #fff;
  }

  .sec_about:before {
    position: absolute;
    content: "";
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #4790aa 0%, #80ac79 100%);
    opacity: 0.8;
  }

  .sec_about .item {
    position: relative;
  }

  .sec_about .item:before {
    position: absolute;
    content: "";
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #4790aa 0%, #80ac79 100%);
    opacity: 0.8;
  }

  .sec_about .item .bg {
    z-index: 1;
  }

  .sec_about .item .bg .imgDrop {
    height: 100%;
  }

  .sec_about .item .content,
  .sec_about .item .images {
    z-index: 3;
    position: relative;
  }

  .sec_about .tv,
  .sec_about .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  .sec_about .tv .screen,
  .sec_about .bg .screen {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    margin: auto;
  }

  .sec_about .slider {
    position: relative;
    z-index: 3;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .sec_about .ttl_main {
    padding-bottom: 20px;
    border-bottom: 1px solid #fff;
  }

  .sec_about .btn_shared {
    position: relative;
    z-index: 3;
    min-width: 240px;
  }

  @media (min-width: 1201px) {
    .sec_about .btn_shared {
      margin-left: -100px;
    }
  }

  .sec_about .slick-arrow {
    background-size: 25px;
    margin: 0 10px;
  }

  .sec_about .slick-arrow:not(:hover) {
    opacity: 0.5;
  }

  .sec_about .slick-dots {
    bottom: 30px;
  }

  .sec_about .slick-dots li button {
    background-color: transparent;
    border: 1px solid #fff;
    box-shadow: none !important;
  }

  .sec_about .slick-dots li button:after {
    display: none !important;
  }

  .sec_about .slick-dots li.slick-active button {
    background-color: #fff;
  }

  @media (min-width: 1201px) {
    .sec_history .img {
      margin-right: 30px;
    }
  }

  .sec_why {
    position: relative;
    color: #fff;
  }

  .sec_why:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-image: linear-gradient(to right, #1a6380 0%, #018f51 99.71%);
    opacity: 0.59;
  }

  .sec_why .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .sec_why .wraper {
    position: relative;
    z-index: 3;
  }

  .sec_why .content_main {
    background: #fff;
    color: #000;
    box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.2);
    padding: 10px 20px 10px 5px;
  }

  @media (min-width: 768px) {
    .sec_why .content_main {
      padding: 0 20px;
    }
  }

  .sec_why .content_main .item_left {
    width: 90px;
  }

  .sec_why .content_main .item_left .number {
    position: relative;
  }

  .sec_why .content_main .item_left .number span {
    display: inline-block;
    background: #fff;
    padding: 0 10px;
    position: relative;
    z-index: 1;
  }

  .sec_why .content_main .item_left .number:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    right: 10px;
    height: 1px;
    background: #888;
  }

  .sec_why .content_main .item_left .icon {
    width: 38px;
    margin: 10px auto;
  }

  .sec_why .content_main .item_right {
    width: calc(100% - 90px);
  }

  .system_partner {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .system_partner:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background-size: 50%;
    bottom: 0;
    background-color: #fff;
    background-image: url(../images/deco_02.png);
    background-position: top -350px right;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .system_partner .row {
    margin-left: -8px;
    margin-right: -8px;
  }

  .system_partner .col-6 {
    padding: 8px;
  }

  .system_partner .item {
    display: block;
    background: #fff;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    position: relative;
  }

  .system_partner .item .imgDrop {
    padding-top: 71.72996%;
    border-bottom: 1px solid #eee;
  }

  .system_partner .item .imgDrop img {
    transition: all 0.3s;
  }

  .system_partner .item .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 37px;
  }

  .system_partner .item .mask span {
    font-size: 7px;
    color: #fff;
    transform: rotate(-45deg);
    position: absolute;
    top: 4px;
    left: 2px;
  }

  .system_partner .item .content {
    padding: 15px 10px;
  }

  .system_partner .item .ttl {
    font-size: 13px;
  }

  .system_partner .item .text {
    font-size: 12px;
    line-height: 14px;
    margin-top: 8px;
  }

  .system_partner .item .btn_shared {
    font-size: 10px;
    line-height: 25px;
    padding: 0 15px;
  }

  .system_partner .item:hover {
    box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.2);
  }

  .system_partner .item:hover .imgDrop img {
    transform: scale(1.1);
  }

  .sec_customer .avatar {
    width: 40px;
  }

  .sec_customer .avatar .imgDrop {
    padding-top: 100%;
    border-radius: 50%;
  }

  .sec_customer .info {
    padding-left: 10px;
  }

  .sec_customer .info .des {
    font-size: 10px;
  }

  .sec_customer .group_start {
    background-image: url(../images/bg_start.svg);
    width: 155px;
    height: 34px;
    background-repeat: no-repeat;
  }

  .sec_customer .group_start .start {
    margin: 0 2px;
  }

  .sec_customer .images .imgDrop {
    padding-top: 69.90291%;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    .sec_customer .images .imgDrop {
      border-radius: 24px;
    }
  }

  .sec_customer .slider_main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 15px;
  }

  .sec_customer .slider_main .slick-list {
    width: 100%;
    order: -1;
  }

  .sec_customer .slider_main .slick-arrow {
    position: static;
    order: 3;
    transform: translateY(0);
    width: 40px;
    height: 40px;
    margin-top: 45px;
    background-size: 25px;
  }

  @media (min-width: 768px) {
    .sec_customer .slider_main .slick-arrow {
      background-size: 100%;
    }
  }

  .sec_customer .slider_main .slick-arrow.slick-prev {
    background-image: url(../images/icon_prev.svg);
    left: 0;
  }

  .sec_customer .slider_main .slick-arrow.slick-next {
    background-image: url(../images/icon_next.svg);
  }

  .sec_customer .slider_main .slick-dots {
    position: static;
    order: 2;
    display: flex;
    margin-top: -10px;
  }

  .sec_customer .slider_main .slick-dots li {
    display: block;
    width: 10px;
    margin-left: 0;
    margin-right: 20px;
  }

  .sec_customer .slider_main .slick-dots li button {
    background: #b9b9b8;
  }

  .sec_customer .slider_main .slick-dots li button:after {
    border: none;
  }

  .sec_customer .slider_main .slick-dots li.slick-active button {
    background: #808080;
  }

  .post_news .item {
    padding: 5px 8px 25px;
    transition: all 0.3s;
    display: block;
  }

  .post_news .item:hover {
    box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.2);
  }

  .post_news .item .imgDrop {
    padding-top: 53.33333%;
  }

  #modal_intro .modal-content {
    padding: 15px;
  }

  @media (min-width: 768px) {
    #modal_intro .modal-content {
      padding: 0;
    }
    #modal_intro .modal-content .col-content {
      padding: 25px 40px 25px 0;
    }
  }

  #modal_intro .modal-content .ttl {
    text-align: right;
  }

  #modal_intro .modal-content .form_fb {
    padding: 0;
    text-align: right;
  }

  #modal_intro .modal-content .form_fb input {
    text-align: right;
  }

  #modal_intro .modal-content .close {
    display: block;
    background-color: #1c8b1c;
    background-size: 200%;
  }

  @media (max-width: 767px) {
    #modal_intro .modal-content .close {
      position: relative;
      margin-left: auto;
      top: -5px;
      right: -5px;
    }
  }

  @media (min-width: 768px) {
    #modal_intro .modal-content .close {
      top: 10px;
      right: 10px;
    }
  }

  #modal_intro .modal-content .btn_submit {
    text-align: center !important;
    max-width: unset;
  }

  #map {
    display: block;
    padding-top: 400px;
  }

  .item_loaction {
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }

  .item_loaction:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }

  .item_loaction .images {
    width: 100%;
  }

  @media (min-width: 768px) {
    .item_loaction .images {
      width: 187px;
    }
  }

  .item_loaction .images .imgDrop {
    padding-top: 70%;
  }

  @media (min-width: 768px) {
    .item_loaction .images .imgDrop {
      padding-top: 100%;
    }
  }

  .item_loaction .content {
    width: 100%;
    padding: 10px;
  }

  @media (min-width: 768px) {
    .item_loaction .content {
      width: calc(100% - 187px);
      padding: 15px 30px;
    }
  }

  .item_loaction .btn_shared {
    line-height: 30px;
    padding: 0 30px;
    font-size: 12px;
    color: #ffff;
    background-image: linear-gradient(to right, #1b6380 0%, #019151 100%);
  }

  .item_loaction .btn_shared + a {
    margin-left: 15px;
  }

  .item_loaction .slider {
    padding-bottom: 0;
  }

  .item_loaction .slick-dots {
    bottom: 10px;
  }

  .item_loaction .slick-dots li {
    margin: 0 8px;
  }

  .item_loaction .slick-dots li button {
    background-color: #b9b9b8;
    border: none;
    box-shadow: none !important;
    width: 6px;
    height: 6px;
  }

  .item_loaction .slick-dots li button:after {
    display: none !important;
  }

  .item_loaction .slick-dots li.slick-active button {
    background-color: #666;
  }

  .hot_partner .item {
    padding: 0 3px;
  }

  @media (min-width: 768px) {
    .hot_partner .item {
      padding: 0 15px;
    }
  }

  .hot_partner .item .imgDrop {
    padding-top: 100%;
  }

  .hot_partner .item .imgDrop img {
    filter: grayscale(100);
    transition: all 0.3s;
  }

  .hot_partner .slick-arrow {
    z-index: 1;
    margin-top: -25px;
  }

  @media (max-width: 767px) {
    .hot_partner .slick-arrow {
      font-size: 25px;
      background-size: 12px;
    }
  }

  @media (min-width: 768px) {
    .hot_partner .slick-arrow {
      margin-top: -58px;
    }
  }

  .hot_partner .slick-arrow.slick-prev {
    background-image: url(../images/arr_prev2.svg);
  }

  .hot_partner .slick-arrow.slick-next {
    background-image: url(../images/arr_next2.svg);
  }

  @media (min-width: 768px) {
    .hot_partner .slider {
      margin-left: -50px;
      margin-right: -50px;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 50px;
    }
  }

  .hot_partner .slider .slick-current .imgDrop img {
    /* filter: grayscale(0); */
  }

  .hot_partner .slider .imgDrop:hover {
    transition: transform 0.2s;
    transition-timing-function: ease-in-out;
    transform: scale(1.1);
  }

  .hot_partner .slider .imgDrop:focus img,
  .hot_partner .slider .imgDrop:hover img {
    filter: grayscale(0);
    transition: transform 0.2s;
  }

  .form_connect {
    position: relative;
  }

  @media (max-width: 767px) {
    .form_connect {
      padding: 30px 0;
    }
  }

  .form_connect .btn_shared {
    background-image: linear-gradient(to right, #1b6380 0%, #019151 100%);
  }

  @media (max-width: 767px) {
    .form_connect .content_form,
    .form_connect .content {
      padding: 0 !important;
    }
  }

  .fotm_contact .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .fotm_contact .bg:before,
  .fotm_contact .bg:after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0.8;
    z-index: 1;
    left: 0;
    right: 0;
  }

  .form_connect .bg:before {
    background: #1b6380;
    left: 0;
    width: 70%;
  }

  .form_connect .bg:after {
    background: #019151;
    width: 30%;
    right: 0;
    left: unset;
  }

  .fotm_contact .bg.bg1:before {
    background: #1b6380;
  }

  .fotm_contact .bg.bg2:before {
    background: #019151;
  }

  .fotm_contact .row {
    margin: 0;
  }

  .fotm_contact .row .col-12 {
    padding: 0;
    position: relative;
  }

  .fotm_contact .row .content_form,
  .fotm_contact .row .content {
    position: relative;
    z-index: 1;
    padding: 15px;
    z-index: 2;
  }

  @media (min-width: 768px) {
    .fotm_contact .row .content_form,
    .fotm_contact .row .content {
      padding: 30px;
    }
  }

  @media (min-width: 768px) {
    .fotm_contact .row .content_form,
    .fotm_contact .row .content {
      padding: 45px;
    }
  }

  .fotm_contact .row .content_form .form_shared,
  .fotm_contact .row .content .form_shared {
    border-radius: 18.18px;
    background: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    padding: 20px;
  }

  .fotm_contact .row .content_form .form_shared .group + .group,
  .fotm_contact .row .content .form_shared .group + .group {
    margin-top: 12px;
  }

  .fotm_contact .row .content_form .form_shared .group label,
  .fotm_contact .row .content .form_shared .group label {
    display: block;
    margin-bottom: 8px;
  }

  .fotm_contact .row .content_form .form_shared .group .input,
  .fotm_contact .row .content_form .form_shared .group textarea,
  .fotm_contact .row .content .form_shared .group .input,
  .fotm_contact .row .content .form_shared .group textarea {
    height: 35px;
    padding: 10px 15px;
    background: #fff;
    width: 100%;
    display: block;
    border-radius: 0;
    border: none;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
  }

  .fotm_contact .row .content_form .form_shared .group textarea,
  .fotm_contact .row .content .form_shared .group textarea {
    height: 77px;
  }

  .fotm_contact .row .content_form .form_shared .btn_submit,
  .fotm_contact .row .content .form_shared .btn_submit {
    line-height: 35px;
    border-radius: 4px;
    color: #fff;
    background: #1c8b1c;
    padding: 0 30px;
    font-size: 14px;
    width: 100%;
    display: block;
    border: none;
  }

  .fotm_contact .row .content {
    color: #fff;
  }

  .fotm_contact .row .content .ttl_mail {
    max-width: 290px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #fff;
  }

  .sec_about_des {
    position: relative;
  }

  .sec_about_des .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .sec_about_des .bg:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, #47859f 0%, #80a179 100%);
    opacity: 0.8;
    z-index: 1;
  }

  .sec_about_des .wraper {
    position: relative;
    z-index: 2;
    color: #fff;
  }

  @media (max-width: 767px) {
    .sec_about_des .images {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 1201px) {
    .sec_about_des .images {
      padding-right: 30px;
    }
  }

  .sec_about_des .column {
    width: 100%;
    background: #018651;
    color: #fff;
  }

  @media (max-width: 576px) {
    .sec_about_des .column {
      margin-top: 15px;
    }
  }

  @media (min-width: 577px) {
    .sec_about_des .column {
      width: calc(33.33% - (8px / 3));
    }
  }

  .sec_about_des .column .item {
    text-align: center;
    padding: 20px;
  }

  @media (min-width: 768px) {
    .sec_about_des .column .item {
      padding: 20px 30px 40px;
    }
  }

  @media (min-width: 1201px) {
    .sec_about_value .row {
      margin-left: -30px;
      margin-right: -30px;
    }
  }

  @media (min-width: 1201px) {
    .sec_about_value .col-12 {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  .sec_about_value .ttl {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .sec_about_value .ttl span {
    font-size: 74px;
    color: #565656;
    opacity: 0.2;
  }

  .sec_about_value .ttl .txt {
    margin-left: 20px;
  }

  .sec_about_value .ttl.ttl_even {
    justify-content: flex-end;
  }

  .sec_about_value .img1 .imgDrop {
    padding-top: 57.91667%;
  }

  .sec_about_value .img2 {
    width: 100%;
    height: 100%;
  }

  .sec_about_value .img2 .imgDrop {
    height: 100%;
  }

  .infrastructure {
    position: relative;
    z-index: 2;
  }

  .infrastructure .item {
    padding: 30px 0;
  }

  .infrastructure .item .imgDrop {
    padding-top: 69.44444%;
  }

  .infrastructure .slick-slide {
    transform: scale(0.9);
  }

  .infrastructure .slick-current {
    transform: scale(1.02);
  }

  .infrastructure .slider {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .infrastructure .slider .slick-dots {
    position: static;
  }

  .infrastructure .slider .slick-dots li {
    margin: 0 8px;
  }

  .infrastructure .slider .slick-dots li button {
    background-color: #b9b9b8;
    border: none;
    box-shadow: none !important;
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }

  .infrastructure .slider .slick-dots li button:after {
    display: none !important;
  }

  .infrastructure .slider .slick-dots li.slick-active button {
    background-color: #666;
  }

  .infrastructure .slider .slick-arrow {
    margin: 0;
    top: auto;
    transform: translateY(0);
    background-repeat: no-repeat;
    background-position: center center;
    order: 99;
    z-index: 99;
    bottom: 0;
  }

  @media (max-width: 767px) {
    .infrastructure .slider .slick-arrow {
      font-size: 25px;
      background-size: 12px;
    }
  }

  @media (min-width: 768px) {
    .infrastructure .slider .slick-arrow {
      background-size: 100%;
      width: 40px;
      height: 40px;
    }
  }

  .infrastructure .slider .slick-arrow:before {
    display: none;
  }

  .infrastructure .slider .slick-arrow.slick-prev {
    left: 0;
    background-image: url(../images/icon_prev.svg);
  }

  @media (min-width: 768px) {
    .infrastructure .slider .slick-arrow.slick-prev {
      left: calc(50% - 500px);
    }
  }

  .infrastructure .slider .slick-arrow.slick-next {
    right: 0;
    background-image: url(../images/icon_next.svg);
  }

  @media (min-width: 768px) {
    .infrastructure .slider .slick-arrow.slick-next {
      right: calc(50% - 500px);
    }
  }

  .connect_value .images .imgDrop {
    padding-top: 79.18367%;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    .connect_value .images .imgDrop {
      border-radius: 25px;
    }
  }

  @media (min-width: 1201px) {
    .connect_value .content {
      padding-left: 20px;
    }
  }

  .connect_value2 {
    position: relative;
    color: #fff;
  }

  .connect_value2:before {
    position: absolute;
    content: "";
    top: 0Q;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #1a6380 0%, #018f51 99.71%);
    opacity: 0.8;
  }

  .connect_value2 .wraper {
    position: relative;
    z-index: 1;
  }

  .connect_value2 .ttl {
    padding-bottom: 15px;
    position: relative;
  }

  @media (min-width: 768px) {
    .connect_value2 .ttl {
      padding-bottom: 30px;
    }
  }

  .connect_value2 .ttl:before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 2px;
    background: #ffff;
    width: 89px;
  }

  @media (min-width: 1201px) {
    .connect_value2 .content {
      margin-right: 30px;
    }
  }

  .connect_value2 .images {
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
    margin: -10% 0;
  }

  .connect_value2 .images .imgDrop {
    padding-top: 129.79592%;
  }

  .product_main .row_product {
    padding: 5px;
  }

  @media (min-width: 768px) {
    .product_main .row_product {
      padding: 20px;
    }
  }

  @media (max-width: 767px) {
    .product_main .row_product .col-6 {
      padding: 0 2px;
    }
  }

  .product_main .product_nav {
    text-align: center;
    border-bottom: 1px solid #888;
  }

  .product_main .product_nav .item {
    cursor: pointer;
    padding-bottom: 8px;
  }

  @media (min-width: 768px) {
    .product_main .product_nav .item {
      padding-bottom: 15px;
    }
  }

  .product_main .product_nav .item .images {
    max-width: 80px;
    margin: auto;
  }

  .product_main .product_nav .item img {
    margin: auto;
  }

  .product_main .product_nav .slick-current .item {
    position: relative;
  }

  .product_main .product_nav .slick-current .item:before {
    position: absolute;
    content: "";
    bottom: -1px;
    left: 0;
    right: 0;
    background: #1c8b1c;
    height: 3px;
  }

  @media (min-width: 768px) {
    .product_main .product_nav .slick-current .item:before {
      height: 6px;
    }
  }

  .product_main .product_slider .item {
    display: block;
    text-align: center;
    background: #fff;
    transition: all 0.3s;
  }

  @media (max-width: 767px) {
    .product_main .product_slider .item {
      border: 1px solid #eee;
    }
  }

  .product_main .product_slider .item:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  }

  .product_main .product_slider .item .images .imgDrop {
    padding-top: 100%;
  }

  .product_main .product_slider .item .content {
    padding: 10px 5px;
  }

  @media (min-width: 768px) {
    .product_main .product_slider .item .content {
      padding: 20px 10px;
    }
  }

  .product_main .product_slider .item .content .btn_buy {
    background-image: linear-gradient(to right, #1b6380 0%, #019151 100%);
    width: 120px;
    height: 37px;
    text-align: center;
    color: #fff;
    line-height: 37px;
    margin-left: auto;
    margin-right: auto;
  }

  .feedback_customer .row_item {
    padding-bottom: 20px;
  }

  @media (max-width: 767px) {
    .feedback_customer .col-4 {
      padding: 3px;
    }
  }

  @media (max-width: 767px) {
    .feedback_customer .slider {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .feedback_customer .slider .slick-arrow {
      position: static;
      margin: 0 15px;
    }
    .feedback_customer .slider .slick-list {
      order: -1;
    }
  }

  .feedback_customer .comment {
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
    color: #fff;
    transition: all 0.3s;
    font-size: 12px;
    line-height: 15px;
    position: relative;
    z-index: 1;
  }

  .feedback_customer .comment:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #1b6380 0%, #019151 100%);
    opacity: 0.8;
    z-index: -1;
  }

  .feedback_customer .item {
    position: relative;
  }

  @media (max-width: 767px) {
    .feedback_customer .item {
      margin-top: 2px;
    }
  }

  .feedback_customer .item .images .imgDrop {
    padding-top: 100%;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    .feedback_customer .item .images .imgDrop {
      border-radius: 15px;
    }
  }

  .feedback_customer .item .comment {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
  }

  @media (max-width: 767px) {
    .feedback_customer .item .comment {
      display: none;
    }
  }

  .feedback_customer .item .btn_modal {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  @media (min-width: 768px) {
    .feedback_customer .item .btn_modal {
      display: none;
    }
  }

  .feedback_customer .item:hover .comment {
    bottom: -20px;
    opacity: 1;
  }

  @media (min-width: 768px) {
    .feedback_customer .slider {
      margin-left: -50px;
      margin-right: -50px;
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  .feedback_customer .slick-arrow {
    z-index: 1;
  }

  @media (max-width: 767px) {
    .feedback_customer .slick-arrow {
      font-size: 25px;
      background-size: 12px;
    }
  }

  .feedback_customer .slick-arrow.slick-prev {
    background-image: url(../images/arr_prev2.svg);
  }

  .feedback_customer .slick-arrow.slick-next {
    background-image: url(../images/arr_next2.svg);
  }

  .feedback_customer .modal-content {
    background-color: transparent;
  }

  .feedback_customer .modal-content .btn-close {
    background-color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 5px;
    margin-left: auto;
  }

  .info_brand .info_contact li + li {
    margin-top: 15px;
  }

  @media (max-width: 767px) {
    .info_brand .row_item_contact {
      margin-top: 30px;
    }
  }

  .info_brand .item {
    padding-top: 100%;
    position: relative;
    background-image: url(../images/contact_item.png);
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
  }

  @media (min-width: 768px) {
    .info_brand .item {
      margin-left: 15px;
    }
  }

  .info_brand .item:before {
    position: absolute;
    content: "";
    top: 10%;
    left: 10%;
    right: 19%;
    bottom: 0;
    background-image: url(../images/mask.png);
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
  }

  .info_brand .item .content {
    position: absolute;
    font-size: 8px;
    line-height: 12px;
    left: 5%;
    right: 16%;
    bottom: 20%;
    text-align: center;
    z-index: 2;
    top: 10%;
  }

  @media (min-width: 768px) {
    .info_brand .item .content {
      top: 15%;
    }
  }

  .info_brand .item:hover:before {
    opacity: 1;
  }

  @media (min-width: 768px) {
    .sec_community .ttl {
      padding-right: 50px;
    }
  }

  .sec_community .images2 .imgDrop {
    /* padding-top: 202%; */
    height: 100%;

    @media ${device.mobile} {
      height: unset;
    }
  }

  .sec_community .images2 img {
    /* padding-top: 202%; */
    height: 100%;
    @media ${device.mobile} {
      height: unset;
    }
  }

  .sec_community .images3 .imgDrop {
    /* padding-top: 50.2%; */
  }

  .sec_community .images4 .imgDrop {
    /* padding-top: 100%; */
  }

  .sec_community .column {
    padding: 0;
  }

  .sec_community .images1,
  .sec_community .images2,
  .sec_community .images3,
  .sec_community .images4 {
    border: 1px solid #fff;
  }

  .sec_community .row_column {
    position: relative;
    margin: 0;
  }

  .sec_community .row_column .images1,
  .sec_community .row_column .images2,
  .sec_community .row_column .images3,
  .sec_community .row_column .images4 {
    position: relative;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    .sec_community .row_column .images1,
    .sec_community .row_column .images2,
    .sec_community .row_column .images3,
    .sec_community .row_column .images4 {
      margin-top: 20px;
    }
  }

  @media (min-width: 768px) {
    .sec_community .row_column .images1:before,
    .sec_community .row_column .images2:before,
    .sec_community .row_column .images3:before,
    .sec_community .row_column .images4:before {
      position: absolute;
      content: "";
      background: #fff;
      z-index: 2;
    }
  }

  .sec_community .row_column .images1 .content,
  .sec_community .row_column .images2 .content,
  .sec_community .row_column .images3 .content,
  .sec_community .row_column .images4 .content {
    color: #fff;
    transition: all 0.3s;
    text-align: center;
    padding: 15px;
  }

  @media (max-width: 767px) {
    .sec_community .row_column .images1 .content,
    .sec_community .row_column .images2 .content,
    .sec_community .row_column .images3 .content,
    .sec_community .row_column .images4 .content {
      background: #1c8b1c;
    }
    .sec_community .row_column .images1 .content {
      width: 100% !important;
    }
  }

  @media (min-width: 768px) {
    .sec_community .row_column .images1 .content,
    .sec_community .row_column .images2 .content,
    .sec_community .row_column .images3 .content,
    .sec_community .row_column .images4 .content {
      position: absolute;
      padding: 15px 30px;
      background-image: linear-gradient(to top, #008045 0%, rgba(0, 128, 69, 0) 100%);
      opacity: 0;
    }
  }

  .sec_community .row_column .images1:hover .content,
  .sec_community .row_column .images2:hover .content,
  .sec_community .row_column .images3:hover .content,
  .sec_community .row_column .images4:hover .content {
    opacity: 1;
  }

  @media (min-width: 768px) {
    .sec_community .row_column .images1:before {
      top: 0;
      bottom: 0;
      left: 33.33%;
      width: 2px;
    }
  }

  .sec_community .row_column .images1 .content {
    top: 0;
    bottom: 0;
    right: 0;
    width: 66.67%;
  }

  @media (min-width: 768px) {
    .sec_community .row_column .images3:before {
      top: 0;
      left: 50%;
      bottom: 0;
      width: 2px;
    }
  }

  @media (min-width: 768px) {
    .sec_community .row_column .images3 .content {
      top: 0;
      bottom: 0;
      width: 50%;
    }
  }

  .sec_community .row_column .images31 .content {
    left: 0;
  }

  .sec_community .row_column .images32 .content {
    right: 0;
  }

  .sec_community .row_column .images2 {
    position: relative;
    border-right: 2px solid #fff;
    height: 100%;

    @media ${device.mobile} {
      height: unset;
    }
  }

  .sec_community .row_column .images2:before {
    top: 50%;
    height: 2px;
    left: 0;
    right: 0;
  }

  .sec_community .row_column .images2 .content {
    left: 0;
    right: 0;
    bottom: 0;
    height: 50%;
  }

  .sec_community .row_column .images4 {
    position: relative;
  }

  .sec_community .row_column .images4 .content {
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  .community_value .images {
    position: relative;
  }

  @media (max-width: 767px) {
    .community_value .images .images2 {
      max-width: 200px;
      margin: 30px auto;
      border: 3px solid #1c8b1c;
    }
  }

  @media (min-width: 768px) {
    .community_value .images .images2 {
      position: absolute;
      width: 45%;
      margin-left: 10%;
      top: 40%;
      border: 5px solid #1c8b1c;
    }
  }

  .community_value .images .images2 .imgDrop {
    padding-top: 150%;
  }

  @media (min-width: 768px) {
    .community_value .content {
      padding-left: 30px;
    }
  }

  .advantages .advantages_main {
    background: #fffbe5;
  }

  .advantages .content {
    position: relative;
    max-width: 530px;
    margin-left: auto;
    margin-right: auto;
  }

  .advantages .modal-content {
    background-color: transparent;
    border: none;
  }

  .advantages .content_item {
    box-shadow: 0px 0px 5.72px rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 8px;
    z-index: 99;
    transition: all 0.25s;
  }

  @media (max-width: 767px) {
    .advantages .content_item {
      max-width: 280px;
      margin: auto;
    }
  }

  @media (min-width: 768px) {
    .advantages .content_item {
      pointer-events: none;
      width: 223px;
      left: 100%;
      position: absolute;
      top: -10px;
      margin-left: 20px;
      opacity: 0;
    }
  }

  .advantages .content_item .head_item {
    padding: 10px 20px;
    background: #1c8b1c;
    color: #fff;
    border-radius: 8px 8px 0 0;
    position: relative;
  }

  @media (max-width: 767px) {
    .advantages .content_item .head_item {
      padding-right: 40px;
    }
  }

  @media (min-width: 768px) {
    .advantages .content_item .head_item {
      line-height: 18px;
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    .advantages .content_item .head_item:before {
      position: absolute;
      content: "";
      top: 50%;
      transform: translateY(-50%) translateX(-100%);
      width: 0px;
      height: 0px;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 7px solid #1c8b1c;
      left: 0;
    }
  }

  @media (min-width: 768px) {
    .advantages .content_item .head_item .close {
      display: none;
    }
  }

  .advantages .content_item .body_item {
    padding: 15px 20px;
    color: #666;
    font-size: 12px;
    line-height: 16px;
  }

  .advantages .item {
    position: absolute;
    width: 7.36452%;
    height: 7.36452%;
  }

  .advantages .item .icon,
  .advantages .item .icon_sp {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-image: url(../images/icon_modal.png);
    background-size: 15px;
    background-repeat: no-repeat;
    transform: scale(1.8);
    transition: all 0.3s;
    position: absolute;
    top: 0px;
    left: 17px;
  }

  .advantages .item .icon:hover,
  .advantages .item .icon_sp:hover {
    transform: scale(2.2);
    top: 6px;
    left: 21px;
  }

  .advantages .item .icon_sp {
    position: relative;
    top: 0px;
    left: 0px;
  }

  .advantages .item .icon_sp:hover {
    top: 0px;
    left: 0px;
  }

  .advantages .item .txt {
    color: #1c8b1c;
    text-align: center;
    position: absolute;
    white-space: nowrap;
    transition: all 0.3s;
    pointer-events: none;
    margin-top: -60px;
  }

  @media (max-width: 767px) {
    .advantages .item .txt {
      background: rgba(255, 255, 255, 0.8);
      padding: 5px 12px;
      border-radius: 20px;
      top: 0;
      font-size: 12px;
      line-height: 15px;
      transform: translateY(-100%);
      margin-top: -5px;
      display: none;
    }
  }

  @media (min-width: 768px) {
    .advantages .item .txt {
      transform: translateY(-50%);
      top: 50%;
      left: 100%;
      margin-left: 30px;
    }
  }

  .advantages .item .txt img {
    margin-bottom: 10px;
  }

  @media (max-width: 767px) {
    .advantages .item .content_item {
      display: none;
    }
  }

  .advantages .item_01 {
    top: 29.45902%;
    right: 0%;
  }

  @media (max-width: 767px) {
    .advantages .item_01 .txt {
      right: 0;
    }
  }

  .advantages .item_02 {
    top: 52.45902%;
    right: -4.5%;
  }

  @media (max-width: 767px) {
    .advantages .item_02 .txt {
      right: 0;
    }
  }

  .advantages .item_03 {
    top: 77.45902%;
    right: 3.5%;
  }

  @media (max-width: 767px) {
    .advantages .item_03 .txt {
      right: -20px;
    }
  }

  .advantages .item_04 {
    top: 77.45902%;
    left: 5.5%;
  }

  @media (max-width: 767px) {
    .advantages .item_04 .txt {
      left: -30px;
      transform: translateY(100%);
      margin-top: -8px;
    }
  }

  @media (min-width: 768px) {
    .advantages .item_01 .txt,
    .advantages .item_06 .txt {
      top: 20%;
    }
    .advantages .item_02 .txt,
    .advantages .item_05 .txt {
      top: 100%;
    }
    .advantages .item_03 .txt,
    .advantages .item_04 .txt {
      top: 200%;
    }
    .advantages .item_04 .txt {
      left: auto;
      right: 100%;
      margin-right: 30px;
    }
  }

  @media (min-width: 768px) {
    .advantages .item_04 .content_item {
      right: 100%;
      left: auto;
      margin-left: 0;
      margin-right: 30px;
    }
  }

  @media (min-width: 768px) {
    .advantages .item_04 .content_item .head_item:before {
      left: auto;
      right: 0;
      transform: translate(100%, -50%);
      border-right: none;
      border-left: 7px solid #1c8b1c;
    }
  }

  .advantages .item_05 {
    top: 51.45902%;
    left: -2.5%;
  }

  @media (max-width: 767px) {
    .advantages .item_05 .txt {
      margin-left: -10px;
      transform: translateY(100%);
      margin-top: -8px;
    }
  }

  @media (min-width: 768px) {
    .advantages .item_05 .txt {
      left: auto;
      right: 100%;
      margin-right: 30px;
    }
  }

  @media (min-width: 768px) {
    .advantages .item_05 .content_item {
      right: 100%;
      left: auto;
      margin-left: 0;
      margin-right: 30px;
    }
  }

  @media (min-width: 768px) {
    .advantages .item_05 .content_item .head_item:before {
      left: auto;
      right: 0;
      transform: translate(100%, -50%);
      border-right: none;
      border-left: 7px solid #1c8b1c;
    }
  }

  .advantages .item_06 {
    top: 28.45902%;
    left: 2.5%;
  }

  @media (max-width: 767px) {
    .advantages .item_06 .txt {
      left: -40px;
      transform: translateY(100%);
      margin-top: -8px;
    }
  }

  @media (min-width: 768px) {
    .advantages .item_06 .txt {
      left: auto;
      right: 100%;
      margin-right: 30px;
    }
  }

  @media (min-width: 768px) {
    .advantages .item_06 .content_item {
      right: 100%;
      left: auto;
      margin-left: 0;
      margin-right: 30px;
    }
  }

  @media (min-width: 768px) {
    .advantages .item_06 .content_item .head_item:before {
      left: auto;
      right: 0;
      transform: translate(100%, -50%);
      border-right: none;
      border-left: 7px solid #1c8b1c;
    }
  }

  @media (min-width: 768px) {
    .advantages .item:hover .content_item {
      opacity: 1;
    }
    .advantages .item:hover .txt {
      opacity: 0;
    }
  }

  @media (max-width: 767px) {
    .advantages .item.on:before {
      position: fixed;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #000;
      opacity: 0.85;
      z-index: 9999;
    }
    .advantages .item.on .content_item {
      opacity: 1;
      z-index: 99999;
    }
  }

  .advantages .slider {
    margin-bottom: 0;
    overflow: initial;
  }

  .advantages .slick-dots {
    margin-top: 40px;
    position: static;
  }

  .advantages .slick-dots li {
    margin: 0 10px;
  }

  .advantages .slick-dots li button {
    background: #cacaca;
  }

  .advantages .slick-dots li.slick-active button {
    background: #aaa;
  }

  .post {
    position: relative;
  }

  .post.post_first {
    display: block;
  }

  .post.post_first .images .imgDrop {
    padding-top: 62.71186%;
  }

  .post.post_first .images .imgDrop:before {
    position: absolute;
    content: "";
    top: 20%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(to top, #008045 0%, rgba(0, 128, 69, 0) 100%);
  }

  .post.post_first .content {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    padding: 15px;
  }

  @media (min-width: 768px) {
    .post.post_first .content {
      padding: 30px 20px;
    }
  }

  .post.post_first .content .ttl {
    text-transform: uppercase;
  }

  .post.post_first .content .date {
    font-size: 12px;
  }

  .post.post_first:hover .content {
    opacity: 0.6;
  }

  .post:not(.post_first) {
    width: 100%;
  }

  .post:not(.post_first) .images {
    width: 40%;
  }

  .post:not(.post_first) .images .imgDrop {
    padding-top: 65.21739%;
  }

  .post:not(.post_first) .content {
    width: 60%;
    padding-left: 20px;
  }

  .post:not(.post_first):hover .ttl {
    color: #1c8b1c;
  }

  .post:not(.post_first).post_list .images {
    width: 100%;
  }

  .post:not(.post_first).post_list .content {
    width: 100%;
    padding-left: 0;
    padding-top: 10px;
  }

  .post:not(.post_first).post_list .content .date {
    font-size: 12px;
    color: #6c6c6c;
  }

  @media (max-width: 767px) {
    .post:not(.post_first).post_list .content .text {
      display: none;
    }
  }

  .news_main .slider {
    padding-bottom: 0;
  }

  .news_main .slick-dots {
    position: static;
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    .news_main .slick-dots {
      margin-top: 30px;
      display: flex;
      justify-content: flex-start;
    }
  }

  .news_main .slick-dots li {
    margin: 0 10px;
  }

  .news_main .slick-dots li button {
    background: #b9b8b7;
    width: 10px;
    height: 10px;
    box-shadow: none;
  }

  .news_main .slick-dots li.slick-active button {
    background: #757474;
  }

  .ttl_news_sub {
    background: #1c8b1c;
    color: #fff;
    line-height: 32px;
    padding: 0 15px;
    display: inline-block;
  }

  .ttl.line {
    border-bottom: 1px solid #888;
    padding-bottom: 10px;
  }

  @media (min-width: 1201px) {
    .news_hot {
      padding-left: 20px;
    }
  }

  .news_hot .news_hot_main a {
    border-top: 1px solid #888;
    padding-top: 12px;
    margin-bottom: 12px;
  }

  .news_hot .news_hot_main a .content {
    padding-left: 10px;
  }

  .news_hot.news_hot_detail a .images {
    display: none;
  }

  .news_hot.news_hot_detail a .content {
    padding-left: 0;
    width: 100%;
  }

  .product_more .slider {
    margin-left: -15px;
    margin-right: -15px;
  }

  .product_more .item {
    display: block;
    font-family: "Be Vietnam Pro SemiBold";
    padding: 0 10px;
  }

  .product_more .item .imgDrop {
    padding-top: 100%;
  }

  .product_more .item .imgDrop img {
    transition: all 0.3s;
  }

  .product_more .item .imgDrop.promotion_more {
    padding-top: 66.66667%;
  }

  .product_more .item .text {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (min-width: 768px) {
    .product_more .item .text {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .product_more .item .text.promotion_more {
    padding-left: 0;
    padding-right: 0;
  }

  .product_more .item:hover img {
    transform: scale(1.1);
  }

  .product_more .slick-dots {
    position: static;
    margin-top: 30px;
  }

  .product_more .slick-dots li {
    margin: 0 10px;
  }

  .product_more .slick-dots li button {
    background: #b9b8b7;
    width: 10px;
    height: 10px;
    box-shadow: none;
    opacity: 0.5;
  }

  .product_more .slick-dots li.slick-active button {
    opacity: 1;
    background: #757474;
  }

  .product_more .post {
    padding: 0 5px;
  }

  @media (min-width: 768px) {
    .product_more .post {
      padding: 0 15px;
    }
  }

  /*# sourceMappingURL=styles.css.map */
`;
