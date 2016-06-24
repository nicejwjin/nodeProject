//모듈을 참조한다
var crypto= require('crypto');
var key= 'only my key';
var password= 'haha';
//해시생성 테스트
var temp= crypto.createHash('sha1');
temp.update(password);
var result= temp.digest('hex');
console.log(result);
console.log(result== crypto.createHash('sha1').update('haha').digest('hex'));
//암호화한다. 키를 이용한 스타릴
var cipher= crypto.createCipher('aes192', key);
cipher.update(password, 'utf-8', 'base64');
var cipheredPassword= cipher.final('base64');
//암호화해제한다
var decipher= crypto.createDecipher('aes192', key);
decipher.update(cipheredPassword, 'base64','utf-8');
var decipheredPassword= decipher.final('utf-8');

console.log(cipheredPassword);
console.log(decipheredPassword);

