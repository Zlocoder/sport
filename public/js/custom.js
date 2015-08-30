$(document).ready(function( ){
	
	//---- Слайдер достижений
	$('#basic').each(function(){
		var $frame  = $('#basic');
		var $wrap   = $frame.parent();
		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			dragHandle: 1,
			dynamicHandle: 1,
			minHandleSize: 0
		});
	});
	
	//------Кнопка выбора турнира
	$('#registrate').click(function(){
            $(this).toggleClass('active');
            $('#information').slideToggle();
			$('#regForm').slideToggle();
			return false;
        });
	$('#cancel').click(function(){
			$('#registrate').toggleClass('active');
            $('#information').slideToggle();
			$('#regForm').slideToggle();
			return false;
        });
		
	//--------------Радиокнопки	
		$('#radioBlock1 input[type=radio] + label').click(function() {
			$('#radioBlock1 input[type=radio] + label').removeClass('checked');
			$('#radioBlock1 input[type=radio]').attr('checked',false);
			$(this).addClass('checked');
			var id=$(this).attr('for');
			$('#'+id).attr('checked','checked');
		});
		$('#radioBlock2 input[type=radio] + label').click(function() {
			$('#radioBlock2 input[type=radio] + label').removeClass('checked');
			$('#radioBlock2 input[type=radio]').attr('checked',false);
			$(this).addClass('checked');
			var id=$(this).attr('for');
			$('#'+id).attr('checked','checked');
		});
		$('#radioBlock3 input[type=radio] + label').click(function() {
			$('#radioBlock3 input[type=radio] + label').removeClass('checked');
			$('#radioBlock3 input[type=radio]').attr('checked',false);
			$(this).addClass('checked');
			var id=$(this).attr('for');
			$('#'+id).attr('checked','checked');
		});

	//--------------Чекбоксы
        $('input[type=checkbox] + label').click(function() {
            $(this).toggleClass('checked');
            var id=$(this).attr('for');
            if ($('#'+id).attr('checked'))
            {
                $('#'+id).attr('checked',false);
            }
            else
            {
                $('#'+id).attr('checked','checked')
            }
        });

	//--------------Выбор друзей
		$(".chosen-select").chosen({no_results_text: "Таких друзей не нахожу!"}).trigger("chosen:open");
	
	//--------------Скролл
		$('.scroll-pane').jScrollPane({autoReinitialise: true,mouseWheelSpeed:10,verticalGutter:10});
		
		
	//---------Выбор файла
	 var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( "button" ),
        lbl = wrapper.find( "mark" );
	var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выбрать" );
        }else
            btn.text( file_name );
    }).change();
	
	//---------Выбор аватарки
	 var wrapper2 = $( ".avatar_upload" ),
        inp2 = wrapper2.find( "input" ),
        btn2 = wrapper2.find( "button" ),
        lbl2 = wrapper2.find( "mark" );
	var file_api2 = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp2.change(function(){
        var file_name2;
        if( file_api2 && inp2[ 0 ].files[ 0 ] )
            file_name2 = inp2[ 0 ].files[ 0 ].name;
        else
            file_name2 = inp2.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name2.length )
            return;

        if( lbl2.is( ":visible" ) ){
            lbl2.text( file_name2 );
            btn2.text( "Выбрать" );
        }else
            btn2.text( file_name2 );
    }).change();
	
	//---------Табы
	 $('#wrapper > a').click(function() {
        if ($(this).attr('class') != $('#wrapper').attr('class') ) {
            $('#wrapper').attr('class',$(this).attr('class'));
			$('#wrapper > a').removeClass('active');
			$(this).addClass('active');
        }
    });
	 $('#wrapper2 > a').click(function() {
        if ($(this).attr('class') != $('#wrapper2').attr('class') ) {
            $('#wrapper2').attr('class',$(this).attr('class'));
			$('#wrapper2 > a').removeClass('active');
			$(this).addClass('active');
        }
    });
	 $('#wrapper3 > a').click(function() {
        if ($(this).attr('class') != $('#wrapper3').attr('class') ) {
            $('#wrapper3').attr('class',$(this).attr('class'));
			$('#wrapper3 > a').removeClass('active');
			$(this).addClass('active');
        }
    });
	
	//--------Списки турниров в кабинете
	$('.statistic h4').click(function(){
				if(!$(this).hasClass('active')){	//если "кликнутый" пункт неактивный:
					$('.statistic h4').removeClass('active').next('div').slideUp(); //делаем неактивными все пункты и скрываем все блоки
					$(this).addClass('active');	//активируем "кликнутый" пункт
					$(this).next('div').slideDown(200);	//раскрываем следующий за ним блок с описанием
				} else {	//иначе:
					$(this).removeClass('active').next('div').slideUp();	//скрываем данный пункт
				}
			});
});