/* main function */
import initUtils from "./utils.js";
import initTyped from "./plugins/typed.js";
import initModeToggle from "./tools/lightDarkSwitch.js";
import initLazyLoad from "./layouts/lazyload.js";
import initScrollTopBottom from "./tools/scrollTopBottom.js";
import initLocalSearch from "./tools/localSearch.js";
import initCopyCode from "./tools/codeBlock.js";
import downloadFile from "./download.js";

export const main = {
  themeInfo: {
    theme: `Redefine v${theme.version}`,
    author: "EvanNotFound",
    repository: "https://github.com/EvanNotFound/hexo-theme-redefine",
  },
  localStorageKey: "REDEFINE-THEME-STATUS",
  styleStatus: {
    isExpandPageWidth: false,
    isDark: false,
    fontSizeLevel: 0,
    isOpenPageAside: true,
  },
  printThemeInfo: () => {
    console.log(
      `
tttttttttjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
tttttttttjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
ttttttttjtjjjjjjjjjjjfjjjjjjjjjjjjjjjjj
ttttttttjjjjjjjjEEEEEEEtjjjjjjjjjjjjjjj
tttttttttjjjjjEEEEEEEEEEEjjjjjjjjjjjjjj
ttttttttjjjjjEEEEEEEEEEEEEEGjjjjjjjtttt
ttttttttjjjjKEEEEEEEEEEEEEEEjjjjjtttitj
tttttttjjtjEDDEEEEEEEEEEEEEEEjjttti;;;;
tttttttt;;;EEEDDEEEEEEEEEEEEEEttfji;;;;
tttttttttiDEEEEEEDEEEEEEEEEEEEEti;;ii;;
tttttttttiEEEEEEEEEEEEEEEEEEEEEi;;;;,::
;tttttttttEEEEEEEEEEEEEDEEEDEEEi::;,:::
;tttjjjtjjEEEEEEEEEEEEEEEEEEEEE.::,::;,
;,;tjjjjjjEEEEEEEEE:EEEEKEEEEEE...::;:,
,;itjjjjjjEEEDEEEKGLEEEEEKKEEEK;;;,,,;t
jjttjjjjjjjDiL;DDG,:EEEEEKEEEEK::::;itt
jjjjjjjjjjjfiLD:Lf.DDEKKKKKEKE,,:::;;tt
jjjjjjjjjjji,:::::.GDjEEKKEKK;;;;;;,;it
jjjjjjjjjjjtt:::::::,,;K;;iEEiiii;;,iit
tjjjjjjjjjjjG:i:,:::,,:L::,Ettiiiii,,;t
,,,,,itjjjjjj:::::,,:,:::,Etttttt;;;;;i
,:;::i;jjjjjj::::::::::,LEtttittji,,;it
,;:,;;;tjjjjj.::::::::::EEjjjjfjjii;,ii
;iiiiitjjjjjjj:::::::,::Effffjjftiii;tt
tttttjjjjjjjjjj::::;;:::ijfjfjjiittiitt
jjjjjjj,,jj;jjjjj;;::::,,ffffjjtttttttt
jjjjjj,,:jj,jjjjjj::::E::,fffjjjjjttttt
jjjjjf,j:j:,jjjjjj::::::::fffjjjjjjjjjj
jjjjjj:j:i:,jjjjj.:::::::,:jjjjjjjjjjjj
jtjjjj:,::::jjjj::,.::::.::,jjjjjjjjjjj
jjj,jj:::,,,jjj.:f:::::::,:::fjjjjjjjjj
jjj,.j.,,:,:jj.:::::::,,:::::,fjjfjjjff
jjjj::jt,;::f;,:.....,:::::::.:jfjjjjff
jjjjj:,;:,::::::.f.,::::::::::.:ffjjjjj
jjjjjj:::,::,t::::::,::::::::::::ffjjff
jjjjjj::,:::,::::::,:::::::::::,,ffjjff
jjjjjj:i::::,:::i:,::.:::::::::,.tfjffj
jjjjjj:;::::::,.::,::::::::::::;,:fffff
jjjjjj:;;::::::f,::::::::::::::,,:ffffj
      \n  Github: https:\/\/github.com\/aduie`
    ); // console log message
  },
  setStyleStatus: () => {
    localStorage.setItem(
      main.localStorageKey,
      JSON.stringify(main.styleStatus),
    );
  },
  getStyleStatus: () => {
    let temp = localStorage.getItem(main.localStorageKey);
    if (temp) {
      temp = JSON.parse(temp);
      for (let key in main.styleStatus) {
        main.styleStatus[key] = temp[key];
      }
      return temp;
    } else {
      return null;
    }
  },
  refresh: () => {
    initUtils();
    initModeToggle();
    initScrollTopBottom();
    if (
      theme.home_banner.subtitle.text.length !== 0 &&
      location.pathname === config.root
    ) {
      initTyped("subtitle");
    }

    if (theme.navbar.search.enable === true) {
      initLocalSearch();
    }

    if (theme.articles.code_block.copy === true) {
      initCopyCode();
    }

    if (theme.articles.lazyload === true) {
      initLazyLoad();
    }
    downloadFile();
  },
};

export function initMain() {
  main.printThemeInfo();
  main.refresh();
}

document.addEventListener("DOMContentLoaded", initMain);

try {
  swup.hooks.on("page:view", () => {
    main.refresh();
  });
} catch (e) { }






