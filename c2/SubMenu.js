var subList = ['Intro', 'CLR', 'Hello World', '변수', '자료형', '형변환', '상수와 열거형', 'Nullable, var', '문자열', '연산자'];
for(var i = 0; i < subList.length; i++)
{
  var val = i + 1;
  if(smSelect == i)
    document.write('<a style="color:black; text-decoration:none;" href="'+ val +'.html"><li style="color:black; background:white; border-color="black"">'+subList[i]+'</li></a>');
  else
    document.write('<a style="color:white; text-decoration:none;" href="'+ val +'.html"><li>'+subList[i]+'</li></a>');
}
