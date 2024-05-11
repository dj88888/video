function createNode() {
    var container = document.createDocumentFragment();
    var e_0 = document.createElement("div");
    var e_1 = document.createElement("meta");
    e_1.setAttribute("charset", "UTF-8");
    e_0.appendChild(e_1);
    var e_2 = document.createElement("meta");
    e_2.setAttribute("http-equiv", "X-UA-Compatible");
    e_2.setAttribute("content", "IE=edge");
    e_0.appendChild(e_2);
    var e_3 = document.createElement("meta");
    e_3.setAttribute("name", "viewport");
    e_3.setAttribute("content", "width=device-width, initial-scale=1.0");
    e_0.appendChild(e_3);
    var e_4 = document.createElement("title");
    e_4.appendChild(document.createTextNode("加载中···"));
    e_0.appendChild(e_4);
    var e_5 = document.createElement("img");
    e_5.setAttribute("src", "https://qqq.gtimg.cn/music/photo_new/T053XD000003wfkDC4Avjc8.gif");
    e_5.setAttribute("width", "430px");
    e_5.setAttribute("htight", "px");
    e_0.appendChild(e_5);
    var e_6 = document.createElement("meta");
    e_6.setAttribute("http-equiv", "refresh");
    e_6.setAttribute("content", "2;url= https://baidu.com ");
    e_0.appendChild(e_6);
    container.appendChild(e_0);
    return container;
}
