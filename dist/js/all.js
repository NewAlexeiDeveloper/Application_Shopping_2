const menuMobile=document.getElementById("menu-mobile"),overlay=document.getElementById("overlay"),showMenu=document.getElementById("show-menu"),hideMenu=document.getElementById("hide-menu"),classList={visible:"visible",hidden:"hidden",block:"block",none:"none"},toggleElement=(e,s,l)=>{e.classList.add(s),e.classList.remove(l)};showMenu.addEventListener("click",(()=>{toggleElement(overlay,classList.visible,classList.hidden),toggleElement(menuMobile,classList.visible,classList.hidden),toggleElement(hideMenu,classList.block,classList.none),toggleElement(showMenu,classList.none,classList.block)})),hideMenu.addEventListener("click",(()=>{toggleElement(overlay,classList.hidden,classList.visible),toggleElement(menuMobile,classList.hidden,classList.visible),toggleElement(hideMenu,classList.none,classList.block),toggleElement(showMenu,classList.block,classList.none)}));