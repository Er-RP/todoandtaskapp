import { DARK_MODE, THEME_MODE_HTML_ATTRIBUTE } from "./constant";

export const changeTheme = (theme: string) => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  };
export const changeMode = () => {
    const htmlNode: HTMLHtmlElement | null = document.querySelector("html")
    if(htmlNode?.getAttribute(THEME_MODE_HTML_ATTRIBUTE) === DARK_MODE){
        htmlNode.removeAttribute(THEME_MODE_HTML_ATTRIBUTE)
    }
    else{
        htmlNode?.setAttribute(THEME_MODE_HTML_ATTRIBUTE,DARK_MODE)
    }
}

