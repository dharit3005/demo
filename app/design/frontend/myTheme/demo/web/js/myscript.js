require(["jquery"], function($){
    $('.form.subscribe').on('submit', function(e) {
        e.preventDefault(e);
        alert('This is just a test');
        return false;
    });
});