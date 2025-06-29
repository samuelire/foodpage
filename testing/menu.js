function changeimg(Filename,FileName,filename,fileName){
  let ffood = document.querySelector('#ffood');
  ffood.setAttribute('src',Filename);
  let sfood = document.querySelector('#sfood');
  sfood.setAttribute('src',FileName);
  let tfood = document.querySelector('#tfood');
  tfood.setAttribute('src',filename);
  let ffud = document.querySelector('#ffud');
  ffud.setAttribute('src',fileName);
  
}
