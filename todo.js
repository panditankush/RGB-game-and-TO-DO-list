$("ul").on("click","li",function(){
	$(this).toggleClass("strike");
})

$("input").keypress(function(e){

	if(e.which === 13)
	{
		var value = $(this).val();

		$(this).val("");

		$("ul").append("<li><span><i class='fa fa-trash'> </i></span>" + value + "</li>")
	}
})

$("ul").on("click","span",function(e){

    $(this).parent().fadeOut();

    e.stopPropagation();
})
