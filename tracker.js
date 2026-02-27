// 1. INITIAL SETUP (Nur einmal deklarieren!)
const trackerData = JSON.parse(localStorage.getItem('greenbite_tracker')) || {};
let selectedDayKey = null; 

// Zentrale Icon-Konfiguration
const icons = {
    // Deine bestehenden Icons (time, difficulty, etc.) ...
    analysis: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 10 1.16 5.07a.5.5 0 0 0 .93.18l1.3-2.1c.19-.3.63-.3.82 0l1.3 2.1a.5.5 0 0 0 .93-.18L20 10"></path><path d="M2 20h20"></path><path d="M5 20c1.05-3.35 2.53-6.64 5.31-9.07a8.43 8.43 0 0 1 5.38-1.93h.31a8.43 8.43 0 0 1 5.38 1.93c2.78 2.43 4.26 5.72 5.31 9.07"></path></svg>', // Sprout
    alert: '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 2 3 10H4l8 10-3-10h5L6 2Z"></path></svg>', // Zap
    check: '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>', // Check-Circle
    tip: '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>', // Lightbulb
    trash: '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>' // Trash
};
// Hilfsfunktion: Montag finden
function getMonday(d) {
    d = new Date(d);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
}

let currentMonday = getMonday(new Date());

// Global verfügbar machen für die Buttons
window.changeWeek = function(direction) {
    currentMonday.setDate(currentMonday.getDate() + (direction * 7));
    initCalendar();
};

function initCalendar() {
    const grid = document.getElementById('calendar-grid');
    const weekDisplay = document.getElementById('current-week-display');
    if (!grid || !weekDisplay) return;

    grid.innerHTML = '';
    const daysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const todayStr = new Date().toISOString().split('T')[0];

    // Wochen-Header (Englisch formatieren)
    const lastDay = new Date(currentMonday);
    lastDay.setDate(lastDay.getDate() + 6);
    weekDisplay.textContent = `${currentMonday.toLocaleDateString('en-GB', {day:'2-digit', month:'2-digit'})} - ${lastDay.toLocaleDateString('en-GB', {day:'2-digit', month:'2-digit'})}`;

    for (let i = 0; i < 7; i++) {
        const date = new Date(currentMonday);
        date.setDate(date.getDate() + i);
        const dateKey = date.toISOString().split('T')[0];

        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        
        // Highlight Today & Selected
        if (dateKey === todayStr) dayDiv.classList.add('today-border');
        if (dateKey === selectedDayKey) dayDiv.classList.add('selected-day');

        dayDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-weight: bold;">
                <span>${daysShort[i]}</span>
                <span style="opacity: 0.5;">${date.getDate()}.${date.getMonth() + 1}.</span>
            </div>
            <div class="day-content" style="margin-top: 10px;">
                ${renderDayRecipes(dateKey)}
            </div>
        `;
        
        dayDiv.onclick = () => openAddSection(dateKey);
        grid.appendChild(dayDiv);
    }
}

function renderDayRecipes(key) {
    if (!trackerData[key]) return '';
    return trackerData[key].map((name, index) => `
        <div class="tracker-entry" style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.85rem;">${name}</span>
            <span class="delete-icon" onclick="event.stopPropagation(); deleteEntry('${key}', ${index})" style="cursor: pointer; opacity: 0.6; display: flex; align-items: center;">
                ${icons.trash}
            </span>
        </div>
    `).join('');
}

window.openAddSection = function(key) {
    selectedDayKey = key;
    const dateObj = new Date(key);
    document.getElementById('selected-day-name').textContent = dateObj.toLocaleDateString('en-GB');
    document.getElementById('add-recipe-section').classList.remove('hidden');
    document.getElementById('add-recipe-section').scrollIntoView({ behavior: 'smooth' });
    initCalendar();
};

window.saveToTracker = function() {
    const select = document.getElementById('recipe-select');
    const name = select.value;
    if (!selectedDayKey || !name) return;

    if (!trackerData[selectedDayKey]) trackerData[selectedDayKey] = [];
    trackerData[selectedDayKey].push(name);
    localStorage.setItem('greenbite_tracker', JSON.stringify(trackerData));
    closeAddSection();
    renderNutritionAnalysis();
};

window.deleteEntry = function(key, index) {
    trackerData[key].splice(index, 1);
    localStorage.setItem('greenbite_tracker', JSON.stringify(trackerData));
    initCalendar();
    renderNutritionAnalysis();
};

window.closeAddSection = function() {
    selectedDayKey = null;
    document.getElementById('add-recipe-section').classList.add('hidden');
    initCalendar();
};

window.logout = function() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = "index.html";
};

// Start beim Laden
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('recipe-select');
    if (typeof recipes !== 'undefined' && select) {
        recipes.forEach(r => {
            const opt = document.createElement('option');
            opt.value = r.name; opt.textContent = r.name;
            select.appendChild(opt);
        });
    }
    initCalendar();
    renderNutritionAnalysis();
});
// ─────────────────────────────────────────────────────────────
// NUTRITION ANALYSIS — TOP 3 DEFICITS
// ─────────────────────────────────────────────────────────────

const PER_MEAL_REQUIREMENTS = {
    kalium:     { label: 'Potassium',   value: 1265,    unit: 'mg' },
    vitaminC:   { label: 'Vitamin C',   value: 34.5,    unit: 'mg' },
    eisen:      { label: 'Iron',        value: 4.25,    unit: 'mg' },
    calcium:    { label: 'Calcium',     value: 330,     unit: 'mg' },
    phosphor:   { label: 'Phosphorus',  value: 180,     unit: 'mg' },
    vitaminA:   { label: 'Vitamin A',   value: 0.255,   unit: 'mg' },
    magnesium:  { label: 'Magnesium',   value: 110,     unit: 'mg' },
    vitaminB12: { label: 'Vitamin B12', value: 0.0013,  unit: 'mg' },
    folat:      { label: 'Folate',      value: 100,     unit: 'µg' },
    vitaminE:   { label: 'Vitamin E',   value: 4,       unit: 'mg' },
    zink:       { label: 'Zinc',        value: 3.75,    unit: 'mg' },
    niacin:     { label: 'Niacin',      value: 4.8,     unit: 'mg' },
    vitaminK1:  { label: 'Vitamin K1',  value: 22.5,    unit: 'µg' },
    riboflavin: { label: 'Riboflavin',  value: 0.35,    unit: 'mg' },
    pyridoxin:  { label: 'Vitamin B6',  value: 0.45,    unit: 'mg' },
};

const RECIPE_HINTS = {
    kalium:     ['Smashed Crispy Potatoes', 'Seasonal Vegetable Soup with White Beans'],
    vitaminC:   ['Crispy Tofu & Broccoli Stir-Fry', 'Caponata di Melanzane'],
    eisen:      ['Lensecurry with Mango and Coconut', 'Seasonal Vegetable Soup with White Beans'],
    calcium:    ['Creamy pasta bake with tomatoes and mozzarella', 'Cheesy Quesadillas'],
    phosphor:   ['Omelette with mushrooms', 'Lensecurry with Mango and Coconut'],
    vitaminA:   ['Indian Sweet Potato and Cauliflower Curry', 'Seasonal Vegetable Soup with White Beans'],
    magnesium:  ['Seasonal Vegetable Soup with White Beans', 'Lensecurry with Mango and Coconut'],
    vitaminB12: ['Omelette with mushrooms', 'Vegetarian Tortellini Pan'],
    folat:      ['Lensecurry with Mango and Coconut', 'Chick-Pea Bowl'],
    vitaminE:   ['Caponata di Melanzane', 'Smashed Crispy Potatoes'],
    zink:       ['Cheesy Quesadillas', 'Chick-Pea Bowl'],
    niacin:     ['Smashed Crispy Potatoes', 'African Stew'],
    vitaminK1:  ['Seasonal Vegetable Soup with White Beans', 'Crispy Tofu & Broccoli Stir-Fry'],
    riboflavin: ['Omelette with mushrooms', 'Lensecurry with Mango and Coconut'],
    pyridoxin:  ['Smashed Crispy Potatoes', 'Lensecurry with Mango and Coconut'],
};

function renderNutritionAnalysis() {
    const container = document.getElementById('nutrition-analysis');
    if (!container || typeof recipes === 'undefined') return;

    // Collect meals from last 7 days
    const today = new Date();
    const eatenNames = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = d.toISOString().split('T')[0];
        if (trackerData[key]) trackerData[key].forEach(n => eatenNames.push(n));
    }

    if (eatenNames.length === 0) {
        container.innerHTML = `<div class="nutrition-empty">
            <p>No meals tracked in the last 7 days yet.<br>Start cooking and the analysis will appear here! 🥦</p>
        </div>`;
        return;
    }

    // Sum micronutrients from tracked recipes
    const totals = {};
    Object.keys(PER_MEAL_REQUIREMENTS).forEach(k => totals[k] = 0);
    eatenNames.forEach(name => {
        const r = recipes.find(r => r.name === name);
        if (!r?.nutrition?.micronutrients) return;
        Object.keys(PER_MEAL_REQUIREMENTS).forEach(k => {
            if (r.nutrition.micronutrients[k]?.value) totals[k] += r.nutrition.micronutrients[k].value;
        });
    });

    // Compare against full week requirement (7 days × 3 meals × per-meal need)
    const ranked = Object.keys(PER_MEAL_REQUIREMENTS).map(k => ({
        key: k,
        label: PER_MEAL_REQUIREMENTS[k].label,
        pct: Math.min(Math.round(totals[k] / (PER_MEAL_REQUIREMENTS[k].value * 21) * 100), 999)
    })).sort((a, b) => a.pct - b.pct);

    const deficits = ranked.filter(r => r.pct < 80).slice(0, 3); // TOP 3 ONLY
    const good     = ranked.filter(r => r.pct >= 80);

    let html = `
        <div class="nutrition-header">
            <h3><i data-lucide="check-circle" style="width: 18px; height: 18px;"></i> Weekly Nutrition Check</h3>
            <p class="nutrition-subtitle">Based on ${eatenNames.length} tracked meal${eatenNames.length !== 1 ? 's' : ''} in the last 7 days</p>
        </div>`;

    if (deficits.length > 0) {
        html += `<div class="nutrition-alert">${icons.alert} Top ${deficits.length} nutrient${deficits.length > 1 ? 's' : ''} to focus on this week:</div>
                 <div class="nutrient-bars">`;
        deficits.forEach(r => {
            const color = r.pct < 40 ? '#e63946' : r.pct < 60 ? '#f4a261' : '#e9c46a';
            const hints = RECIPE_HINTS[r.key]?.join(' or ') || '';
            html += `
                <div class="nutrient-row">
                    <div class="nutrient-info">
                        <span class="nutrient-name">${r.label}</span>
                        <span class="nutrient-pct" style="color:${color}">${r.pct}%</span>
                    </div>
                    <div class="nutrient-bar-bg">
                        <div class="nutrient-bar-fill" style="width:${r.pct}%; background:${color};"></div>
                    </div>
                    ${hints ? `<div class="nutrient-tip">${icons.tip} Try: <em>${hints}</em></div>` : ''}
                </div>`;
        });
        html += `</div>`;
    } else {
        html += `<div class="nutrition-alert" style="background:rgba(64,145,108,0.12);border-color:#52b788;color:#52b788;">
            ${icons.check} Great week — no major deficits!
        </div>`;
    }

    if (good.length > 0) {
        html += `<div class="nutrition-good-section">
            <div class="nutrition-good-title">${icons.check} Well covered (≥80%):</div>
            <div class="nutrition-good-pills">
                ${good.map(r => `<span class="good-pill">${r.label} <b>${r.pct > 200 ? '100+' : r.pct}%</b></span>`).join('')}
            </div>
        </div>`;
    }

    container.innerHTML = html;
}
