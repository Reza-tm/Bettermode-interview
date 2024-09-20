export const getCookie = (key: string) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`))
    ?.split("=")[1];
};

export const setCookie = (key: string, value: string, secs?: number) => {
  let expires = "";
  if (secs) {
    const date = new Date();
    date.setTime(date.getTime() + secs * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = key + "=" + value + expires + "; path=/";
};
