var subList = ['°ø»çÁß'];
for(var i = 0; i < subList.length; i++)
{
  var val = i + 1;
  if(smSelect == i)
    document.write('<a style="color:black; text-decoration:none;" href="'+ val +'.html"><li style="color:black; background:white; border-color="black"">'+subList[i]+'</li></a>');
  else
    document.write('<a style="color:white; text-decoration:none;" href="'+ val +'.html"><li>'+subList[i]+'</li></a>');
}