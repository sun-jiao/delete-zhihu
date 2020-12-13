setInterval(function(){
    // 打开菜单
    document.getElementsByClassName('Popover ContentItem-action')[2].childNodes[0].click();

    //点击删除按钮
    var menu = document.getElementsByClassName('AnswerItem-selfMenu')[0];var item = menu.childNodes;item[item.length-1].click();

    //确认删除
    setTimeout(function() {
        document.getElementsByClassName('ModalButtonGroup')[0].childNodes[0].click();
    },1000)

}, 2000)
