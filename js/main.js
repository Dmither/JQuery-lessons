$(function(){
    function changeAttribute(element, attribute, action={ADD: 'add', CHANGE: 'change', REMOVE: 'remove'}, value=''){
        if (action=ADD){
            element.attr(attribute);
        } else if (action=CHANGE){
            element.attr(attribute, value);
        } else {
            element.removeAttr(attribute);
        }
    }
    changeAttribute($('.logo img', 'src', ADD, img/logo.png))
})