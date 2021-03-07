var data = [
  {
    id: 125,
    name: 'Multiuser Sketchpad',

    link:
      'https://cedgarcia-front-end-mentor-solutions.vercel.app/1_profile-card-component-main/index.html',
  },

  {
    id: 158,
    name: 'Three.js Sketches',
    timestamp: '2016/02/12',
    link:
      'https://cedgarcia-front-end-mentor-solutions.vercel.app/2_social-proof-section-master/index.html',
  },
];

var nav = document.getElementById('projects'); // document.getElementById( 'nav' );
var viewer = document.getElementById('viewer');
var iframe = document.getElementById('iframe');

// iOS iframe auto-resize workaround

if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
  iframe.style.width = getComputedStyle(iframe).width;
  iframe.style.height = getComputedStyle(iframe).height;
}

var expand = document.getElementById('expand');
expand.addEventListener('click', function () {
  nav.className = nav.className === '' ? 'hidden' : '';
});

var selected,
  divs = {};

init();

function init() {
  buildNav(data);

  if (window.location.hash) {
    var hash = window.location.hash.substr(1);

    var id = hash.split('/')[1];

    for (var i in data) {
      if (data[i].id == id) {
        loadProject(data[i]);
        break;
      }
    }
  } else {
    loadProject(data[0]);
  }

  window.addEventListener(
    'popstate',
    function (event) {
      if (event.state != null) loadProject(event.state);
    },
    false
  );
}

function buildNav(projects) {
  for (var i in projects) {
    nav.appendChild(buildProject(projects[i]));
  }
}

function buildProject(data) {
  var div = document.createElement('div');
  div.className = 'project';
  div.addEventListener(
    'click',
    function (event) {
      loadProject(data);
      window.location.hash =
        '/' +
        data.id +
        '/' +
        data.name
          .toLowerCase()
          .replace(/\ /gi, '_')
          .replace(/[:.,\'()%]/gi, '');
    },
    false
  );

  var id = data.id - 1;
  var x = id % 32;
  var y = Math.floor(id / 32);

  var span = document.createElement('span');
  span.className = 'image';
  span.style.backgroundPosition = '-' + x * 32 + 'px -' + y * 32 + 'px';
  div.appendChild(span);

  var text = document.createElement('div');
  text.innerHTML = data.name + '<br>';

  text.innerHTML +=
    '<a class="link" href="' +
    data.link +
    '" target="_blank"><img src="files/link.png" style="margin-top:1px"></a>'; // ' + data.link.replace( /http:\/\//gi, '' ) +
  div.appendChild(text);

  divs[data.id] = div;

  return div;
}

function loadProject(data) {
  if (selected) {
    selected.className = 'project';
  }

  nav.className = 'hidden';

  selected = divs[data.id];
  selected.className = 'project selected';

  document.title = 'Frontend Mentor | ' + data.name;
  iframe.src = data.link;
}
