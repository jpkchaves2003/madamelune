(function(){
  // roda zodiacal (SVG) girando ao lado
  var signes = ["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"];
  var t = [];
  for (var i = 0; i < 12; i++) {
    var a = i * 30;
    t.push('<g transform="rotate(' + a + ' 210 210)"><text x="210" y="46" text-anchor="middle" font-size="26" fill="#5b3f8d">' + signes[i] + '</text></g>');
    t.push('<line x1="210" y1="62" x2="210" y2="80" stroke="#b8892f" stroke-width="1.5" transform="rotate(' + (a + 15) + ' 210 210)"/>');
  }
  var svg = '<svg viewBox="0 0 420 420" width="100%" height="100%">' +
    '<circle cx="210" cy="210" r="196" fill="none" stroke="#5b3f8d" stroke-width="1.5"/>' +
    '<circle cx="210" cy="210" r="160" fill="none" stroke="#b8892f" stroke-width="1"/>' +
    '<circle cx="210" cy="210" r="70" fill="none" stroke="#5b3f8d" stroke-width="1"/>' +
    '<line x1="14" y1="210" x2="406" y2="210" stroke="#5b3f8d" stroke-width=".6"/>' +
    '<line x1="210" y1="14" x2="210" y2="406" stroke="#5b3f8d" stroke-width=".6"/>' +
    '<line x1="70" y1="70" x2="350" y2="350" stroke="#b8892f" stroke-width=".5"/>' +
    '<line x1="350" y1="70" x2="70" y2="350" stroke="#b8892f" stroke-width=".5"/>' +
    t.join('') + '</svg>';
  var roue = document.createElement('div');
  roue.className = 'roue'; roue.innerHTML = svg;
  document.body.appendChild(roue);
  // estrelinhas
  var n = window.innerWidth < 760 ? 10 : 16;
  for (var j = 0; j < n; j++) {
    var s = document.createElement('span');
    s.className = 'sparkle';
    s.textContent = Math.random() > .5 ? '✦' : '✧';
    s.style.left = Math.random() * 98 + 'vw';
    s.style.top = Math.random() * 96 + 'vh';
    s.style.fontSize = (9 + Math.random() * 13) + 'px';
    s.style.animationDuration = (6 + Math.random() * 9) + 's';
    s.style.animationDelay = (Math.random() * 8) + 's';
    document.body.appendChild(s);
  }
  // fade-up
  var obs = new IntersectionObserver(function(es){
    es.forEach(function(e){ if (e.isIntersecting) e.target.classList.add('vis'); });
  }, {threshold:.08});
  document.querySelectorAll('section,.heroimg,.preuve').forEach(function(el){ obs.observe(el); });
})();
