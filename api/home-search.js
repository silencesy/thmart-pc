//头部下拉菜单js
$('#search-module-list li a').on('click',function(){
    $('#navsearchmodule').text($(this).text());
});