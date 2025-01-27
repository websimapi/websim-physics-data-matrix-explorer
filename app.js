import { physicsMatrix } from './physics-data.js';

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsDiv = document.getElementById('results');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentCategory = 'all';

function searchPhysics(query) {
  resultsDiv.innerHTML = '';
  const results = [];
  
  function searchObject(obj, path = []) {
    for (const key in obj) {
      const currentPath = [...path, key];
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        searchObject(obj[key], currentPath);
      } else if (
        typeof obj[key] === 'string' && 
        obj[key].toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({
          path: currentPath.join(' → '),
          value: obj[key]
        });
      }
    }
  }

  for (const category in physicsMatrix) {
    if (currentCategory === 'all' || currentCategory === category) {
      searchObject(physicsMatrix[category], [category]);
    }
  }

  displayResults(results);
}

function displayResults(results) {
  if (results.length === 0) {
    resultsDiv.innerHTML = '<p>No results found</p>';
    return;
  }

  results.forEach(result => {
    const card = document.createElement('div');
    card.className = 'result-card';
    
    const title = document.createElement('h3');
    title.textContent = result.path;
    
    const value = document.createElement('p');
    if (result.value.includes('=') || result.value.includes('+') || result.value.includes('-')) {
      value.innerHTML = `<span class="formula">${result.value}</span>`;
    } else {
      value.textContent = result.value;
    }
    
    card.appendChild(title);
    card.appendChild(value);
    resultsDiv.appendChild(card);
  });
}

function showAllData() {
  resultsDiv.innerHTML = '';
  
  function displayObject(obj, path = []) {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        const card = document.createElement('div');
        card.className = 'result-card';
        
        const title = document.createElement('h3');
        title.textContent = [...path, key].join(' → ');
        card.appendChild(title);
        
        if (Array.isArray(obj[key])) {
          obj[key].forEach(item => {
            const p = document.createElement('p');
            if (typeof item === 'object') {
              p.textContent = JSON.stringify(item, null, 2);
            } else {
              p.textContent = item;
            }
            card.appendChild(p);
          });
          resultsDiv.appendChild(card);
        } else {
          displayObject(obj[key], [...path, key]);
        }
      }
    }
  }

  for (const category in physicsMatrix) {
    if (currentCategory === 'all' || currentCategory === category) {
      displayObject(physicsMatrix[category], [category]);
    }
  }
}

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    searchPhysics(query);
  } else {
    showAllData();
  }
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    showAllData();
  });
});

// Show all data on initial load
showAllData();