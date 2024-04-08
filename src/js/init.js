// 获取DOM元素
var dateTime = document.getElementById('dateTime');
// 初始化时间 - 格式3
// const initDateTime: IdateTime = (container) => {
//     container.innerHTML = new Date().toLocaleString();
//     setInterval(() => {
//         container.innerHTML = new Date().toLocaleString();
//     }, 1000);
// }
// 初始化时间 - 格式4
var initDateTime = (function (container) {
    container.innerHTML = new Date().toLocaleString();
    setInterval(function () {
        container.innerHTML = new Date().toLocaleString();
    }, 1000);
});
initDateTime(dateTime);
