setInterval(function(){
    // 点击删除按钮
    document.getElementsByClassName('Button ContentItem-action Button--plain Button--withIcon Button--withLabel')[2].childNodes[0].click();

    //确认删除
    setTimeout(function() {
        document.getElementsByClassName('ModalButtonGroup')[0].childNodes[0].click();
    },1000)

}, 2000)
