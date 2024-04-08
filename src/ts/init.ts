// 获取DOM元素
const dateTime = document.getElementById('dateTime') as HTMLDivElement;

// 初始化时间 - 格式1
// const initDateTime: (container: HTMLDivElement) => void = (container) => {
//     container.innerHTML = new Date().toLocaleString();
//     setInterval(() => {
//         container.innerHTML = new Date().toLocaleString();
//     }, 1000);
// }

// 初始化时间 - 格式2
// function initDateTime (container: HTMLDivElement): void {
//     container.innerHTML = new Date().toLocaleString();
//     setInterval(() => {
//         container.innerHTML = new Date().toLocaleString();
//     }, 1000);
// }

type IdateTime = (container: HTMLDivElement) => void;

// 初始化时间 - 格式3
// const initDateTime: IdateTime = (container) => {
//     container.innerHTML = new Date().toLocaleString();
//     setInterval(() => {
//         container.innerHTML = new Date().toLocaleString();
//     }, 1000);
// }

// 初始化时间 - 格式4
const initDateTime = ((container) => {
    container.innerHTML = new Date().toLocaleString();
    setInterval(() => {
        container.innerHTML = new Date().toLocaleString();
    }, 1000);
}) as IdateTime

initDateTime(dateTime);