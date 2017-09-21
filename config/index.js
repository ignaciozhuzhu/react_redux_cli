const mode = process.env.NODE_ENV || "DEV"

//前后端 开发环境 生产环境  host port 配置

const options = {
    host: mode == "DEV" ? "192.168.2.177" : "http://mymengqiqi.com",
    path: mode == "DEV" ? "" : "/yigu/redux_demo",
    dev_port: 666,
    socket_host: "http://192.168.2.177",
    socket_port: 1997,
    PORT: 555,
    origin: "ignacioWeb",
    staticPath: __dirname + '/../public',
    adminEmail: "119414860@qq.com", //发邮件的人邮箱
    AUTHCODE: "csvbtlmbyqbabhbi", //授权码
    staticPath: __dirname + '/../public',
    currentMonth: new Date().getMonth() + 1
}
options.port = mode === "DEV" ? ":" + options.PORT : ""

module.exports = options