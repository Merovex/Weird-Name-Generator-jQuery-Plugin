/*
 * 	Weird Name Generator 0.1 - jQuery plugin
 *	written by Gary H. Wilson	
 *	http://www.jarofcode.com
 *
 *	Copyright (c) 2011 Gary H. Wilson (http://www.jarofcode.com)
 *	Built for jQuery library http://jquery.com
 */
(function(a){a.extend({wng:{randRange:function(a,b){return Math.floor(Math.random()*(b-a+1))+a},leet:function(a,b){b=Number(b);var c={numbers:{vowels:{a:"4",e:"3",i:"1",o:"0"},consonants:{l:"1",r:"2",z:"2",s:"5",b:"6",g:"6",t:"7",l:"7",b:"8",g:"9",q:"9"}},symbols:{vowels:{a:["4","/-\\","/_\\","@","/\\"],e:["3"],i:["1","|"],o:["0","()","[]","{}"],u:["|_|","\\_\\","/_/","\\_/","(_)"]},consonants:{b:["8,|3","13","|}","|:","|8","18","6","|B"],c:["<","{","[","("],d:["|>","|)","|}","|]"],f:["|=","ph","|#"],g:["[","-","[+","6"],h:["|-|","[-]","{-}","|=|","[=]","{=}"],j:["_|","_/","_7","_)"],k:["|<","1<"],l:["|_","|,"],m:["|\\/|","^^","/\\/\\","[]\\/][","[]V[]","][\\\\//][","//.",".\\\\","N\\"],n:["|\\|","/\\/","/V","][\\\\]["],p:["|o","|O","|>","|*","|°","|D"],q:["O_","9","(,)"],r:["|2","12",".-","|^"],s:["5","$","§"],t:["7","+","7`","'|'"],v:["\\/"],w:["\\/\\/","(/\\)","\\^/","|/\\|","\\X/","][1][","\\\\'","'//"],x:["%","*","><","}{",")("],y:["`/","¥"],z:["2","7_",">_"]}}},d=a.split(""),e;for(var f=0;f<d.length;f++){e=d[f].toLowerCase();switch(b){case 1:c.numbers.vowels[e]&&(d[f]=c.numbers.vowels[e]);break;case 2:f>0&&c.numbers.vowels[e]&&(d[f]=c.numbers.vowels[e]);break;case 3:f>0&&(c.numbers.vowels[e]&&(d[f]=c.numbers.vowels[e]),c.numbers.consonants[e]&&(d[f]=c.numbers.consonants[e]));break;case 4:c.numbers.vowels[e]&&(d[f]=c.numbers.vowels[e]),c.numbers.consonants[e]&&(d[f]=c.numbers.consonants[e]);break;case 5:c.symbols.vowels[e]&&(d[f]=c.symbols.vowels[e][this.randRange(0,c.symbols.vowels[e].length-1)]),c.symbols.consonants[e]&&(d[f]=c.symbols.consonants[e][this.randRange(0,c.symbols.consonants[e].length-1)])}}return d=d.join(""),d},create:function(b){var c={sound:"random",size:"5",leet:0};b&&a.extend(c,b);var d=["a","e","i","o","u","y"],e=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","z"],f=["a","ai","ae","e","ea","ee","i","ie","o","oo","u","y"],g=["B","Bl","Br","Chr","Cr","D","Dr","G","Gr","K","Kr","P","Pr","Sp","St","T","Tr"],h=["C","Ch","F","H","J","L","M","N","Ph","Qu","R","S","Sh","Sm","Sn","Th","V","W","X","Y","Z"],i=g.slice(0).concat(["mbl","rb","rbl"]),j=h.slice(0).concat(["sm","sn","sr"]),k=["b","c","d","g","k","p","sp","st","t"],l=["f","h","j","l","m","n","r","s","th","v","w","x","y","z"],m=!0,n=!0;c.sound=="random"?(m=this.randRange(0,1),n=this.randRange(0,1)?!0:!1):c.sound=="soft"&&(n=!1,m=!1);var o=[],p="";m?n?o.push(g[this.randRange(0,g.length-1)]):o.push(h[this.randRange(0,h.length-1)]):o.push(d[this.randRange(0,d.length-1)].toUpperCase());var q=!0;for(var r=0;r<c.size-2;r++){m=m==0,c.sound=="random"&&(n=n==0);do{m?n?p=i[this.randRange(0,i.length-1)].toLowerCase():p=j[this.randRange(0,j.length-1)].toLowerCase():this.randRange(0,3)==0?p=f[this.randRange(0,f.length-1)]:p=d[this.randRange(0,d.length-1)];switch((o[o.length-1]+p).toLowerCase()){case"quu":case"quy":case"yy":case"cie":q=!1;break;default:q=!0}}while(!q);o.push(p)}return m=m==0,m?n?o.push(k[this.randRange(0,k.length-1)]):o.push(l[this.randRange(0,l.length-1)]):o.push(d[this.randRange(0,d.length-1)]),c.leet?this.leet(o.join(""),c.leet):o.join("")}}})})(jQuery);