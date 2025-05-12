const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  , 'Counterparts', 'Oh, Sleeper', 'An Old Dog', 
  'Anywhere But Here', 
];

function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

const bandList = document.getElementById('band');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  bandList.appendChild(li);
});
