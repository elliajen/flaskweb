//유효성 검증 - 입력을 정확하게 하도록 제한하는 절차
function checkMember(){
    var form =  document.regForm;
    var id = form.memberid.value;
    var pwd1 = form.passwd.value;
    var pwd2 = form.passwd_confirm.value;
    var name = form.name2.value;
    var date = form.reg_date.value;
}

regEx = /^[0-9A-Za-z]{5,10}$/;

if (id.length != 5){
    alert("아이디는 5자를 입력해주세요.");
    form.id.select();
    return false;
}else if(!regEx.test(pwd1)){
    alert("비밀번호는 5~10자리수 까지 영문, 숫자로 입력해주세요.");
    form.pwd1.select();
    return false;
}else if(pwd1 != pwd2){
    alert("입력하신 비밀번호와 일치하지 않습니다.");
    form.pwd2.select();
    return false;
}else if(name == ""){
    alert("이름은 필수 입력 항목입니다.");
    form.name.focus();
    return false;
}else if(date == ""){
    alert("가입일을 입력해주세요");
    form.date.focus();
    return false;
}else{
    form.submit();
}