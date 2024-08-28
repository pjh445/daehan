$(document).ready(function(){//전체:시작
	
	//상단메뉴에서 메인메뉴 "li>a"
	$("header li>a").on("mouseenter click", function(){
		//모든 서브메뉴 가리기
		$("header nav").slideUp("fast");
		//해당 서브메뉴만 보이기
		$(this).next().slideDown("fast");
	});
	//탭키로 이동할때 마지막메뉴가 포커스를 잃을때
	$("header li:last-child nav a:last-child").blur(function(){
		//모든 서브메뉴 가리기
		$("header nav").slideUp("fast");
	});
		
	
	//슬라이드:시작
	const slide = setInterval(fading, 2500);
	let i = 3;
	function fading(){
		i--; 
		if(i==0){
			$("#slide img").fadeIn(1000);
			i=3;
		} else {
			$("#slide img").eq(i).fadeOut(1000);
		}		
	}
	//슬라이드:끝
	
	//공지사항+갤러리 제목 활성화: 시작
	$("#notice h2").click(function(){		
		$(this).addClass("active").siblings().removeClass("active");
		if( $(this).index()==0 ){
			$("#notice ul+div").hide();
			$("#notice ul").show();
		} else {
			$("#notice ul+div").css("display","flex");//제이쿼리는 플렉스기능이 없다.
			$("#notice ul").hide();
		}
	});//공지사항+갤러리 제목 활성화: 끝
	
	//공지사항의 첫번째 항목을 클릭하면 팝업 보이기
	$("#notice li:first-child a").click(function(){
		$("#popup").fadeIn();
	});
	//팝업창에서 닫기버튼을 클릭할때
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
	
	
	
});////////////////전체: 끝