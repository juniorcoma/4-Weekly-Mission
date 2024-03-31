export const ONEYEAR_MILLISECONDS = 31536000000;
export const ONEMONTH_MILLISECONDS = 2678400000;
export const ONEDAY_MILLISECONDS = 86400000;
export const ONEHOUR_MILLISECONDS = 3600000;
export const ONEMINUTE_MILLISECONDS = 60000;
export const SERVER_URL = "https://bootcamp-api.codeit.kr/api";
export const ABOUT_SOCIAL_INFORMATION = [
  {
    id: 1,
    title: "facebook icon",
    iconImg: "/img/facebook.png",
    url: "https://www.facebook.com/",
  },
  {
    id: 2,
    title: "twitter icon",
    iconImg: "/img/twitter.png",
    url: "https://twitter.com/",
  },
  {
    id: 3,
    title: "youtube icon",
    iconImg: "/img/youtube.png",
    url: "https://www.youtube.com/",
  },
  {
    id: 4,
    title: "instagram icon",
    iconImg: "/img/insta.png",
    url: "https://www.instagram.com/",
  },
];

export const FOLDER_OPTION_INFORMATION = [
  {
    id: 1,
    name: "공유",
    iconsrc: "/img/share.png",
    url: "/folder/sharedmodal",
  },
  {
    id: 2,
    name: "이름 변경",
    iconsrc: "/img/pen.png",
    url: "/folder/editmodal",
  },
  {
    id: 3,
    name: "삭제",
    iconsrc: "/img/delet.png",
    url: "/folder/deletemodal",
  },
];

export const MODAL_TYPE = [
  {
    id: 1,
    type: "입력",
    title: "폴더 이름 변경",
    placehold: "변경할 이름을 입력하세요",
    btnTitle: "변경하기",
    btnBg: "linear",
  },
  {
    id: 2,
    type: "입력",
    title: "폴더 추가",
    placehold: "추가할 폴더 이름을 입력하세요",
    btnTitle: "추가하기",
    btnBg: "linear",
  },
  {
    id: 3,
    type: "삭제",
    title: "폴더 삭제",
    btnTitle: "삭제하기",
    btnBg: "red",
  },
  {
    id: 4,
    type: "삭제",
    title: "링크 삭제",
    placehold: "",
    btnTitle: "삭제하기",
    btnBg: "red",
  },
];
