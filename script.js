// ==================== DATA ====================
const CASE_ITEMS = {
    starter: [
        { name: '15 Звезд', icon: '⭐', rarity: 'common', stars: 15 },
        { name: '20 Звезд', icon: '⭐', rarity: 'common', stars: 20 },
        { name: 'Эскимо', icon: '🍦', rarity: 'common', stars: 30, isGift: true },
        { name: 'Чупа-чупс', icon: '🍭', rarity: 'common', stars: 35, isGift: true },
        { name: 'Кака', icon: '💩', rarity: 'rare', stars: 40, isGift: true },
        { name: '25 Звезд', icon: '⭐', rarity: 'rare', stars: 25 },
        { name: 'Носки', icon: '🧦', rarity: 'rare', stars: 50, isGift: true },
        { name: '30 Звезд', icon: '⭐', rarity: 'epic', stars: 30 },
    ],
    pro: [
        { name: '20 Звезд', icon: '⭐', rarity: 'common', stars: 20 },
        { name: 'Эскимо', icon: '🍦', rarity: 'common', stars: 30, isGift: true },
        { name: 'Рамен', icon: '�', rarity: 'common', stars: 45, isGift: true },
        { name: 'Кака', icon: '💩', rarity: 'common', stars: 40, isGift: true },
        { name: '40 Звезд', icon: '⭐', rarity: 'rare', stars: 40 },
        { name: 'Носки', icon: '🧦', rarity: 'rare', stars: 50, isGift: true },
        { name: 'Змея', icon: '🐍', rarity: 'rare', stars: 55, isGift: true },
        { name: '75 Звезд', icon: '⭐', rarity: 'epic', stars: 75 },
        { name: 'Пряник', icon: '🍪', rarity: 'epic', stars: 80, isGift: true },
    ],
    elite: [
        { name: '40 Звезд', icon: '⭐', rarity: 'common', stars: 40 },
        { name: 'Рамен', icon: '🍜', rarity: 'common', stars: 45, isGift: true },
        { name: 'Мороженое', icon: '�', rarity: 'common', stars: 50, isGift: true },
        { name: 'Заец', icon: '🐰', rarity: 'rare', stars: 65, isGift: true },
        { name: '75 Звезд', icon: '⭐', rarity: 'rare', stars: 75 },
        { name: 'Луна', icon: '🌙', rarity: 'rare', stars: 85, isGift: true },
        { name: '100 Звезд', icon: '⭐', rarity: 'epic', stars: 100 },
        { name: 'Книга', icon: '📕', rarity: 'epic', stars: 95, isGift: true },
        { name: 'Ракета', icon: '🚀', rarity: 'legendary', stars: 0 },
    ],
    legendary: [
        { name: '75 Звезд', icon: '⭐', rarity: 'common', stars: 75 },
        { name: 'Луна', icon: '🌙', rarity: 'common', stars: 85, isGift: true },
        { name: 'Облако', icon: '☁️', rarity: 'common', stars: 90, isGift: true },
        { name: '150 Звезд', icon: '⭐', rarity: 'rare', stars: 150 },
        { name: 'Обезьяна', icon: '�', rarity: 'rare', stars: 110, isGift: true },
        { name: '200 Звезд', icon: '⭐', rarity: 'epic', stars: 200 },
        { name: 'UFC Коробка', icon: '🥊', rarity: 'epic', stars: 140, isGift: true },
        { name: '300 Звезд', icon: '⭐', rarity: 'legendary', stars: 300 },
        { name: 'Змея Санта', icon: '�', rarity: 'legendary', stars: 120, isGift: true },
        { name: '500 Звезд', icon: '⭐', rarity: 'mythic', stars: 500 },
    ],
    cosmic: [
        { name: '100 Звезд', icon: '⭐', rarity: 'common', stars: 100 },
        { name: 'Леденец', icon: '🍬', rarity: 'common', stars: 130, isGift: true },
        { name: '150 Звезд', icon: '⭐', rarity: 'common', stars: 150 },
        { name: 'Букет Пионов', icon: '💐', rarity: 'rare', stars: 160, isGift: true },
        { name: 'Какао', icon: '☕', rarity: 'rare', stars: 170, isGift: true },
        { name: '300 Звезд', icon: '⭐', rarity: 'epic', stars: 300 },
        { name: 'Мухомор', icon: '🍄', rarity: 'epic', stars: 190, isGift: true },
        { name: '400 Звезд', icon: '⭐', rarity: 'legendary', stars: 400 },
        { name: 'Деньги', icon: '�', rarity: 'legendary', stars: 200, isGift: true },
        { name: '750 Звезд', icon: '⭐', rarity: 'mythic', stars: 750 },
        { name: 'Робот 2025', icon: '🤖', rarity: 'mythic', stars: 250, isGift: true },
    ],
    mystery: [
        { name: '200 Звезд', icon: '⭐', rarity: 'common', stars: 200 },
        { name: 'Ракета', icon: '🚀', rarity: 'common', stars: 0 },
        { name: '500 Звезд', icon: '⭐', rarity: 'rare', stars: 500 },
        { name: 'Торт Розовый', icon: '🎂', rarity: 'rare', stars: 210, isGift: true },
        { name: '750 Звезд', icon: '⭐', rarity: 'epic', stars: 750 },
        { name: 'Клевер', icon: '🍀', rarity: 'epic', stars: 220, isGift: true },
        { name: '1000 Звезд', icon: '⭐', rarity: 'legendary', stars: 1000 },
        { name: 'Коробка Подарок', icon: '�', rarity: 'legendary', stars: 230, isGift: true },
        { name: '2000 Звезд', icon: '⭐', rarity: 'mythic', stars: 2000 },
        { name: 'Скарлет', icon: '🔮', rarity: 'mythic', stars: 0 },
        { name: '5000 Звезд', icon: '⭐', rarity: 'mythic', stars: 5000 },
    ]
};

const RARITY_COLORS = {
    common: '#94a3b8',
    rare: '#3b82f6',
    epic: '#8b5cf6',
    legendary: '#fbbf24',
    mythic: '#ec4899'
};

const RARITY_WEIGHTS = {
    common: 50,
    rare: 30,
    epic: 15,
    legendary: 4,
    mythic: 1
};

// ==================== STATE ====================
let balance = 1000;
let inventory = [];
let history = [];
let isOpening = false;
let fastMode = false;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    updateBalanceDisplay();
    renderInventory();
    renderHistory();
    renderCaseItems();
    checkUrlParams();
});

// ==================== DATA MANAGEMENT ====================
function loadData() {
    const savedBalance = localStorage.getItem('nebula_balance');
    const savedInventory = localStorage.getItem('nebula_inventory');
    const savedHistory = localStorage.getItem('nebula_history');
    
    if (savedBalance) balance = parseInt(savedBalance);
    if (savedInventory) inventory = JSON.parse(savedInventory);
    if (savedHistory) history = JSON.parse(savedHistory);
}

function saveData() {
    localStorage.setItem('nebula_balance', balance);
    localStorage.setItem('nebula_inventory', JSON.stringify(inventory));
    localStorage.setItem('nebula_history', JSON.stringify(history));
}

// ==================== BALANCE ====================
function updateBalanceDisplay() {
    const balanceElements = document.querySelectorAll('#headerBalance, #profileBalance');
    balanceElements.forEach(el => {
        if (el) el.textContent = balance;
    });
    
    const casesOpenedEl = document.getElementById('casesOpened');
    if (casesOpenedEl) casesOpenedEl.textContent = history.length;
    
    const totalItemsEl = document.getElementById('totalItems');
    if (totalItemsEl) totalItemsEl.textContent = inventory.length;
}

function addBalance(amount) {
    balance += amount;
    updateBalanceDisplay();
    saveData();
}

function removeBalance(amount) {
    balance -= amount;
    updateBalanceDisplay();
    saveData();
}

// ==================== CASE ITEMS RENDER ====================
function renderCaseItems() {
    Object.keys(CASE_ITEMS).forEach(caseType => {
        const container = document.getElementById(`items-${caseType}`);
        if (!container) return;
        
        const items = CASE_ITEMS[caseType];
        container.innerHTML = items.slice(0, 6).map(item => 
            `<span class="item-chip ${item.rarity}">${item.icon} ${item.name}</span>`
        ).join('');
    });
}

// ==================== CASE OPENING ====================
function getRandomItem(caseType) {
    const items = CASE_ITEMS[caseType];
    const weightedItems = [];
    
    items.forEach(item => {
        const weight = RARITY_WEIGHTS[item.rarity];
        for (let i = 0; i < weight; i++) {
            weightedItems.push(item);
        }
    });
    
    return weightedItems[Math.floor(Math.random() * weightedItems.length)];
}

function openCase(caseType, price) {
    if (isOpening) return;
    
    if (balance < price) {
        showToast('Недостаточно звезд!', 'error');
        return;
    }
    
    isOpening = true;
    removeBalance(price);
    
    const modal = document.getElementById('caseModal');
    const track = document.getElementById('rouletteTrack');
    const result = document.getElementById('modalResult');
    
    modal.classList.add('active');
    result.textContent = 'Открываем кейс...';
    
    // Generate roulette items - more items for smooth animation
    const rouletteItems = [];
    const totalItems = 80;
    const winnerPosition = 35; // Winner stops earlier, plenty of items after
    
    for (let i = 0; i < totalItems; i++) {
        rouletteItems.push(getRandomItem(caseType));
    }
    
    const winningItem = getRandomItem(caseType);
    rouletteItems[winnerPosition] = winningItem;
    
    // Render roulette
    track.innerHTML = rouletteItems.map((item, index) => `
        <div class="roulette-item ${index === winnerPosition ? 'winner' : ''}" data-index="${index}">
            <span class="item-icon">${item.icon}</span>
            <span class="item-name">${item.name}</span>
        </div>
    `).join('');
    
    // Animate - calculate position with gap
    const isMobile = window.innerWidth <= 768;
    const itemWidth = isMobile ? 85 : 120; // Match CSS sizes
    const gap = 10;
    const itemTotalWidth = itemWidth + gap;
    const containerWidth = isMobile ? window.innerWidth * 0.85 : 850;
    const centerOffset = containerWidth / 2 - itemWidth / 2;
    
    // Start position: show items from the left (negative = shift left)
    const visibleItemsStart = -3;
    const startPosition = visibleItemsStart * itemTotalWidth;
    const endPosition = -(winnerPosition * itemTotalWidth - centerOffset);
    const duration = fastMode ? 1500 : 4500;
    
    track.style.transition = 'none';
    track.style.transform = `translateX(calc(-50% + ${startPosition}px))`;
    
    // Force reflow
    track.offsetHeight;
    
    setTimeout(() => {
        track.style.transition = `transform ${duration}ms cubic-bezier(0.15, 0, 0.15, 1)`;
        track.style.transform = `translateX(calc(-50% + ${endPosition}px))`;
    }, 50);
    
    setTimeout(() => {
        showWinModal(winningItem, caseType);
        result.textContent = '';
        isOpening = false;
    }, duration + 300);
}

function closeCaseModal() {
    const modal = document.getElementById('caseModal');
    modal.classList.remove('active');
    isOpening = false;
}

// ==================== FAST MODE ====================
function toggleFastMode() {
    fastMode = !fastMode;
    const toggle = document.getElementById('fastModeToggle');
    const label = document.getElementById('fastModeLabel');
    
    if (toggle) {
        toggle.classList.toggle('active', fastMode);
    }
    if (label) {
        label.textContent = fastMode ? '⚡ Быстро' : '🐌 Обычно';
    }
    
    showToast(fastMode ? '⚡ Быстрый режим включен' : '🐌 Обычный режим', 'success');
}

// ==================== WIN MODAL ====================
function showWinModal(item, caseType) {
    const winModal = document.getElementById('winModal');
    const winItem = document.getElementById('winItem');
    
    const rarityText = {
        common: 'Обычный',
        rare: 'Редкий',
        epic: 'Эпический',
        legendary: 'Легендарный',
        mythic: 'Мифический'
    };
    
    winItem.innerHTML = `
        <span class="item-icon">${item.icon}</span>
        <span class="item-name">${item.name}</span>
        <span class="item-rarity" style="color: ${RARITY_COLORS[item.rarity]}">${rarityText[item.rarity]}</span>
    `;
    
    winModal.classList.add('active');
    
    // Add to inventory
    const inventoryItem = {
        ...item,
        id: Date.now(),
        openedAt: new Date().toISOString(),
        caseType: caseType
    };
    
    inventory.unshift(inventoryItem);
    
    // Add to history
    const historyItem = {
        ...item,
        openedAt: new Date().toISOString(),
        caseType: caseType,
        caseName: getCaseName(caseType)
    };
    
    history.unshift(historyItem);
    if (history.length > 50) history.pop();
    
    // Add stars if item has stars
    if (item.stars > 0) {
        addBalance(item.stars);
        showToast(`+${item.stars} звезд!`, 'success');
    }
    
    saveData();
    renderInventory();
    renderHistory();
    updateBalanceDisplay();
    
    // Close case modal
    setTimeout(() => {
        document.getElementById('caseModal').classList.remove('active');
    }, 300);
}

function closeWinModal() {
    const winModal = document.getElementById('winModal');
    winModal.classList.remove('active');
}

function getCaseName(caseType) {
    const names = {
        starter: 'Стартовый',
        pro: 'Про',
        elite: 'Элитный',
        legendary: 'Легендарный',
        cosmic: 'Космический',
        mystery: 'Мистический'
    };
    return names[caseType] || caseType;
}

// ==================== INVENTORY ====================
function getItemSellValue(item) {
    // Return sell value based on item name or stars
    const value = ITEM_VALUES[item.name] || item.stars || 10;
    return Math.floor(value * 0.8); // 80% of value
}

function sellItem(itemId) {
    const index = inventory.findIndex(item => item.id === itemId);
    if (index === -1) return;
    
    const item = inventory[index];
    const sellValue = getItemSellValue(item);
    
    // Remove from inventory
    inventory.splice(index, 1);
    
    // Add balance
    addBalance(sellValue);
    
    // Add to history
    history.unshift({
        ...item,
        openedAt: new Date().toISOString(),
        caseName: 'Продажа',
        sold: true,
        sellValue: sellValue
    });
    if (history.length > 50) history.pop();
    
    saveData();
    renderInventory();
    renderHistory();
    updateBalanceDisplay();
    
    showToast(`Продано за ${sellValue}⭐!`, 'success');
}

function resetBalance() {
    balance = 1000;
    inventory = [];
    
    saveData();
    updateBalanceDisplay();
    renderInventory();
    renderHistory();
    
    showToast('Баланс сброшен до 1000⭐, инвентарь очищен!', 'warning');
}

function renderInventory() {
    const grid = document.getElementById('inventoryGrid');
    if (!grid) return;
    
    if (inventory.length === 0) {
        grid.innerHTML = '<p class="empty-inventory" id="emptyInventory">Инвентарь пуст. Откройте несколько кейсов!</p>';
        return;
    }
    
    grid.innerHTML = inventory.map((item, index) => {
        const sellValue = getItemSellValue(item);
        return `
        <div class="inventory-item" style="--rarity-color: ${RARITY_COLORS[item.rarity]}">
            <span class="item-icon">${item.icon}</span>
            <span class="item-name">${item.name}</span>
            <span class="item-rarity" style="color: ${RARITY_COLORS[item.rarity]}">${item.rarity}</span>
            <button class="btn-sell" onclick="sellItem(${item.id})">💰 ${sellValue}⭐</button>
        </div>
    `}).join('');
}

// ==================== HISTORY ====================
function renderHistory() {
    const list = document.getElementById('historyList');
    if (!list) return;
    
    if (history.length === 0) {
        list.innerHTML = '<p class="empty-history" id="emptyHistory">История пуста</p>';
        return;
    }
    
    const recentHistory = history.slice(0, 5);
    
    list.innerHTML = recentHistory.map(item => {
        const date = new Date(item.openedAt);
        const timeStr = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        
        return `
            <div class="history-item">
                <div class="history-item-info">
                    <span class="history-item-icon">${item.icon}</span>
                    <div class="history-item-details">
                        <span class="history-item-name">${item.name}</span>
                        <span class="history-item-case">${item.caseName} кейс</span>
                    </div>
                </div>
                <span class="history-item-rarity" style="background: ${RARITY_COLORS[item.rarity]}20; color: ${RARITY_COLORS[item.rarity]}">${item.rarity}</span>
                <span class="history-item-time">${timeStr}</span>
            </div>
        `;
    }).join('');
}

// ==================== TOAST ====================
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️'
    };
    
    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <div class="toast-content">
            <div class="toast-title">${type === 'success' ? 'Успех' : type === 'error' ? 'Ошибка' : 'Внимание'}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 4000);
}

// ==================== URL PARAMS ====================
function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const caseType = params.get('case');
    
    if (caseType && CASE_ITEMS[caseType]) {
        const card = document.querySelector(`[data-case="${caseType}"]`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.style.animation = 'pulse 1s ease-in-out 2';
        }
    }
}

// ==================== KEYBOARD ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCaseModal();
        closeWinModal();
        closeUpgradeModal();
        closeUpgradeResultModal();
    }
});

// ==================== UPGRADE SYSTEM ====================
let selectedFromItem = null;
let selectedToItem = null;
let isUpgrading = false;

// Item values for upgrade calculation (in "stars")
const ITEM_VALUES = {
    '5 Звезд': 5, '10 Звезд': 10, '15 Звезд': 15, '20 Звезд': 20,
    '25 Звезд': 25, '30 Звезд': 30, '40 Звезд': 40, '50 Звезд': 50,
    '75 Звезд': 75, '100 Звезд': 100, '150 Звезд': 150, '200 Звезд': 200,
    '300 Звезд': 300, '400 Звезд': 400, '500 Звезд': 500, '750 Звезд': 750,
    '1000 Звезд': 1000, '2000 Звезд': 2000, '5000 Звезд': 5000,
    'Подарок': 50, 'Сюрприз': 75, 'Корона': 100, 'Алмаз': 150,
    'Ракета': 200, 'Кольцо': 250, 'Ключ': 300, 'Космос': 350, 'Скарлет': 500,
    // Telegram Gift items
    'Эскимо': 30, 'Чупа-чупс': 35, 'Кака': 40, 'Носки': 50,
    'Рамен': 45, 'Змея': 55, 'Пряник': 80, 'Мороженое': 50,
    'Заец': 65, 'Луна': 85, 'Книга': 95, 'Облако': 90,
    'Обезьяна': 110, 'UFC Коробка': 140, 'Змея Санта': 120,
    'Леденец': 130, 'Букет Пионов': 160, 'Какао': 170,
    'Мухомор': 190, 'Деньги': 200, 'Робот 2025': 250,
    'Торт Розовый': 210, 'Клевер': 220, 'Коробка Подарок': 230
};

const TARGET_ITEMS = [
    { name: '50 Звезд', icon: '⭐', rarity: 'rare', value: 50 },
    { name: 'Носки', icon: '🧦', rarity: 'rare', value: 50 },
    { name: '75 Звезд', icon: '⭐', rarity: 'rare', value: 75 },
    { name: 'Заец', icon: '🐰', rarity: 'rare', value: 65 },
    { name: '100 Звезд', icon: '⭐', rarity: 'epic', value: 100 },
    { name: 'Корона', icon: '👑', rarity: 'epic', value: 100 },
    { name: 'Луна', icon: '🌙', rarity: 'epic', value: 85 },
    { name: 'Книга', icon: '�', rarity: 'epic', value: 95 },
    { name: '150 Звезд', icon: '⭐', rarity: 'epic', value: 150 },
    { name: '200 Звезд', icon: '⭐', rarity: 'legendary', value: 200 },
    { name: 'Алмаз', icon: '💎', rarity: 'legendary', value: 150 },
    { name: 'UFC Коробка', icon: '🥊', rarity: 'legendary', value: 140 },
    { name: '300 Звезд', icon: '⭐', rarity: 'legendary', value: 300 },
    { name: 'Ракета', icon: '🚀', rarity: 'legendary', value: 200 },
    { name: 'Деньги', icon: '💵', rarity: 'legendary', value: 200 },
    { name: '400 Звезд', icon: '⭐', rarity: 'mythic', value: 400 },
    { name: 'Кольцо', icon: '💍', rarity: 'mythic', value: 250 },
    { name: 'Робот 2025', icon: '🤖', rarity: 'mythic', value: 250 },
    { name: '500 Звезд', icon: '⭐', rarity: 'mythic', value: 500 },
    { name: 'Ключ', icon: '🗝️', rarity: 'mythic', value: 300 },
    { name: '750 Звезд', icon: '⭐', rarity: 'mythic', value: 750 },
    { name: '1000 Звезд', icon: '⭐', rarity: 'mythic', value: 1000 },
];

function renderUpgradeInventory() {
    const container = document.getElementById('upgradeInventory');
    if (!container) return;
    
    if (inventory.length === 0) {
        container.innerHTML = '<p class="empty-text">Инвентарь пуст. Откройте кейсы!</p>';
        return;
    }
    
    container.innerHTML = inventory.map((item, index) => {
        const value = ITEM_VALUES[item.name] || item.stars || 10;
        return `
            <div class="upgrade-item ${selectedFromItem?.id === item.id ? 'selected' : ''}" 
                 onclick="selectFromItem(${index})" data-id="${item.id}">
                <span class="item-icon">${item.icon}</span>
                <span class="item-name">${item.name}</span>
                <span class="item-value">${value}⭐</span>
            </div>
        `;
    }).join('');
}

function selectFromItem(index) {
    if (isUpgrading) return;
    
    selectedFromItem = inventory[index];
    selectedToItem = null;
    
    renderUpgradeInventory();
    renderUpgradeTargets();
    updateChanceDisplay();
    
    document.getElementById('upgradeAction').style.display = 'none';
}

function renderUpgradeTargets() {
    const container = document.getElementById('upgradeTargets');
    if (!container) return;
    
    if (!selectedFromItem) {
        container.innerHTML = '<p class="empty-text">Сначала выберите предмет из инвентаря</p>';
        return;
    }
    
    const fromValue = ITEM_VALUES[selectedFromItem.name] || selectedFromItem.stars || 10;
    
    // Filter targets with higher value
    const availableTargets = TARGET_ITEMS.filter(target => target.value > fromValue);
    
    if (availableTargets.length === 0) {
        container.innerHTML = '<p class="empty-text">Нет доступных предметов для апгрейда</p>';
        return;
    }
    
    container.innerHTML = availableTargets.map((item, index) => {
        const chance = calculateChance(fromValue, item.value);
        return `
            <div class="upgrade-item ${selectedToItem?.name === item.name ? 'selected' : ''}" 
                 onclick="selectToItem(${index})" data-name="${item.name}">
                <span class="item-icon">${item.icon}</span>
                <span class="item-name">${item.name}</span>
                <span class="item-value">${item.value}⭐</span>
                <span class="item-chance" style="font-size: 0.7rem; color: var(--accent-purple); margin-top: 3px; display: block;">${chance}%</span>
            </div>
        `;
    }).join('');
}

function selectToItem(index) {
    if (isUpgrading || !selectedFromItem) return;
    
    const fromValue = ITEM_VALUES[selectedFromItem.name] || selectedFromItem.stars || 10;
    const availableTargets = TARGET_ITEMS.filter(target => target.value > fromValue);
    
    selectedToItem = availableTargets[index];
    
    renderUpgradeTargets();
    updateChanceDisplay();
    
    document.getElementById('upgradeAction').style.display = 'block';
}

function calculateChance(oldValue, newValue) {
    let chance = (oldValue / newValue) * 100;
    chance = Math.max(5, Math.min(80, chance));
    return Math.round(chance);
}

function updateChanceDisplay() {
    if (!selectedFromItem || !selectedToItem) {
        document.getElementById('chanceValue').textContent = '0%';
        return;
    }
    
    const fromValue = ITEM_VALUES[selectedFromItem.name] || selectedFromItem.stars || 10;
    const chance = calculateChance(fromValue, selectedToItem.value);
    
    document.getElementById('chanceValue').textContent = chance + '%';
}

// Canvas particles system
let upgradeParticles = null;

function initUpgradeParticles() {
    const canvas = document.getElementById('upgradeParticles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const particles = [];
    const colors = ['#8b5cf6', '#3b82f6', '#fbbf24', '#22c55e', '#ef4444', '#a78bfa'];
    
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: Math.random() * 0.5 + 0.3
        });
    }
    
    upgradeParticles = { canvas, ctx, particles, active: false };
}

function animateUpgradeParticles() {
    if (!upgradeParticles || !upgradeParticles.active) return;
    
    const { canvas, ctx, particles } = upgradeParticles;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
    });
    
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    
    requestAnimationFrame(animateUpgradeParticles);
}

function startUpgrade() {
    if (isUpgrading || !selectedFromItem || !selectedToItem) return;
    
    isUpgrading = true;
    
    const fromValue = ITEM_VALUES[selectedFromItem.name] || selectedFromItem.stars || 10;
    const toValue = selectedToItem.value;
    const chance = calculateChance(fromValue, toValue);
    
    // Elements
    const modal = document.getElementById('upgradeModal');
    const fromBox = document.getElementById('upgradeFromBox');
    const toBox = document.getElementById('upgradeToBox');
    const fromItemEl = document.getElementById('upgradeFromItem');
    const toItemEl = document.getElementById('upgradeToItem');
    const fromPriceEl = document.getElementById('upgradeFromPrice');
    const toPriceEl = document.getElementById('upgradeToPrice');
    const modalChance = document.getElementById('modalChance');
    const status = document.getElementById('upgradeStatus');
    const progressFill = document.getElementById('upgradeProgressFill');
    const progressMarker = document.getElementById('upgradeProgressMarker');
    const vsProgressFill = document.getElementById('vsProgressFill');
    
    // Calculate success
    const success = Math.random() * 100 <= chance;
    const finalPosition = success ? 20 + Math.random() * (chance - 40) : chance + Math.random() * (80 - chance);
    
    // Open modal
    modal.classList.add('active');
    
    // Init particles
    initUpgradeParticles();
    if (upgradeParticles) {
        upgradeParticles.active = true;
        animateUpgradeParticles();
    }
    
    // Set content
    fromItemEl.innerHTML = `<span style="font-size: 4rem; display: block;">${selectedFromItem.icon}</span>`;
    toItemEl.innerHTML = `<span style="font-size: 4rem; display: block;">${selectedToItem.icon}</span>`;
    fromPriceEl.textContent = fromValue + '⭐';
    toPriceEl.textContent = toValue + '⭐';
    modalChance.textContent = Math.round(chance) + '%';
    
    // Update VS ring progress
    if (vsProgressFill) {
        const circumference = 283;
        const offset = circumference - (chance / 100) * circumference;
        vsProgressFill.style.strokeDashoffset = offset;
    }
    
    // Animation sequence
    let phase = 0;
    const phases = [
        { name: 'charge', duration: 800 },
        { name: 'spin', duration: 2500 },
        { name: 'tension', duration: 600 },
        { name: 'result', duration: 1000 }
    ];
    
    function runPhase() {
        if (phase >= phases.length) {
            showUpgradeResult(success);
            return;
        }
        
        const currentPhase = phases[phase];
        
        switch(currentPhase.name) {
            case 'charge':
                status.textContent = 'Зарядка...';
                fromBox.classList.add('charging');
                toBox.classList.add('charging');
                fromBox.querySelector('.item-glow').classList.add('active');
                toBox.querySelector('.item-glow').classList.add('active');
                
                // Charging animation
                let chargeProgress = 0;
                const chargeInterval = setInterval(() => {
                    chargeProgress += 2;
                    progressFill.style.width = Math.min(chargeProgress, 100) + '%';
                    progressMarker.style.left = Math.min(chargeProgress, 100) + '%';
                    if (chargeProgress >= 100) clearInterval(chargeInterval);
                }, 16);
                break;
                
            case 'spin':
                fromBox.classList.remove('charging');
                toBox.classList.remove('charging');
                fromBox.classList.add('shaking');
                toBox.classList.add('shaking');
                status.textContent = 'Удача выбирает...';
                
                // Progress bar animation
                let currentPos = 0;
                let velocity = 15;
                const deceleration = 0.985;
                const minVelocity = 0.5;
                
                const spinInterval = setInterval(() => {
                    currentPos += velocity;
                    if (currentPos > 100) currentPos = 0;
                    
                    velocity *= deceleration;
                    
                    progressFill.style.width = currentPos + '%';
                    progressMarker.style.left = currentPos + '%';
                    
                    if (velocity <= minVelocity && Math.abs(currentPos - finalPosition) < 2) {
                        clearInterval(spinInterval);
                        // Snap to final
                        progressFill.style.width = finalPosition + '%';
                        progressMarker.style.left = finalPosition + '%';
                    }
                }, 16);
                break;
                
            case 'tension':
                status.textContent = 'НАПРЯЖЕНИЕ...';
                status.classList.add('tension');
                fromBox.classList.remove('shaking');
                toBox.classList.remove('shaking');
                
                // Intense shake
                let shakeCount = 0;
                const shakeInterval = setInterval(() => {
                    shakeCount++;
                    const offset = Math.sin(shakeCount * 0.5) * 3;
                    progressMarker.style.transform = `translate(calc(-50% + ${offset}px), -50%)`;
                    
                    if (shakeCount > 30) {
                        clearInterval(shakeInterval);
                        progressMarker.style.transform = 'translate(-50%, -50%)';
                    }
                }, 16);
                break;
                
            case 'result':
                status.classList.remove('tension');
                
                // Highlight items based on result
                if (success) {
                    fromBox.style.opacity = '0.3';
                    toBox.style.transform = 'scale(1.1)';
                    toBox.style.boxShadow = '0 0 60px rgba(34, 197, 94, 0.6)';
                    status.textContent = '✨ УСПЕХ! ✨';
                    status.style.color = '#22c55e';
                } else {
                    fromBox.style.opacity = '0.3';
                    fromBox.style.filter = 'grayscale(100%)';
                    status.textContent = '💔 ПРОВАЛ...';
                    status.style.color = '#ef4444';
                }
                break;
        }
        
        setTimeout(() => {
            phase++;
            runPhase();
        }, currentPhase.duration);
    }
    
    // Start sequence
    setTimeout(runPhase, 300);
}

function showUpgradeResult(success) {
    const upgradeModal = document.getElementById('upgradeModal');
    const resultModal = document.getElementById('upgradeResultModal');
    const resultContent = document.getElementById('upgradeResultContent');
    
    // Stop particles
    if (upgradeParticles) {
        upgradeParticles.active = false;
    }
    
    upgradeModal.classList.remove('active');
    
    // Reset boxes
    const fromBox = document.getElementById('upgradeFromBox');
    const toBox = document.getElementById('upgradeToBox');
    if (fromBox) {
        fromBox.style.opacity = '';
        fromBox.style.filter = '';
        fromBox.classList.remove('charging', 'shaking');
        const glow = fromBox.querySelector('.item-glow');
        if (glow) glow.classList.remove('active');
    }
    if (toBox) {
        toBox.style.transform = '';
        toBox.style.boxShadow = '';
        toBox.classList.remove('charging', 'shaking');
        const glow = toBox.querySelector('.item-glow');
        if (glow) glow.classList.remove('active');
    }
    
    if (success) {
        // Replace item in inventory
        const index = inventory.findIndex(item => item.id === selectedFromItem.id);
        if (index !== -1) {
            const newItem = {
                ...selectedToItem,
                id: Date.now(),
                openedAt: new Date().toISOString(),
                caseType: 'upgrade'
            };
            inventory[index] = newItem;
            
            // Add to history
            history.unshift({
                ...newItem,
                caseName: 'Апгрейд'
            });
            if (history.length > 50) history.pop();
        }
        
        const fromValue = ITEM_VALUES[selectedFromItem.name] || selectedFromItem.stars || 10;
        const valueDiff = selectedToItem.value - fromValue;
        
        resultContent.innerHTML = `
            <div class="result-icon">�</div>
            <h2 class="result-title success">SUCCESS</h2>
            <p class="result-subtitle">Upgrade completed successfully!</p>
            <div class="result-item-card success">
                <span class="item-icon">${selectedToItem.icon}</span>
                <div class="item-name">${selectedToItem.name}</div>
                <div class="result-value-change">+${valueDiff}⭐</div>
            </div>
            <button class="result-btn success-btn" onclick="closeUpgradeResultModal()">AWESOME</button>
        `;
        
        resultModal.classList.add('active', 'result-success');
        resultModal.classList.remove('result-fail');
        
        showToast('Апгрейд успешен! Предмет улучшен!', 'success');
    } else {
        // Remove item from inventory
        const index = inventory.findIndex(item => item.id === selectedFromItem.id);
        if (index !== -1) {
            inventory.splice(index, 1);
            
            // Add to history as lost
            history.unshift({
                ...selectedFromItem,
                openedAt: new Date().toISOString(),
                caseName: 'Апгрейд (провал)',
                lost: true
            });
            if (history.length > 50) history.pop();
        }
        
        resultContent.innerHTML = `
            <div class="result-icon">�</div>
            <h2 class="result-title fail">FAILED</h2>
            <p class="result-subtitle">Item was destroyed in the attempt</p>
            <div class="result-item-card fail">
                <span class="item-icon">${selectedFromItem.icon}</span>
                <div class="item-name">${selectedFromItem.name}</div>
            </div>
            <button class="result-btn fail-btn" onclick="closeUpgradeResultModal()">CONTINUE</button>
        `;
        
        resultModal.classList.add('active', 'result-fail');
        resultModal.classList.remove('result-success');
        
        showToast('Апгрейд не удался. Предмет потерян.', 'error');
    }
    
    saveData();
    renderInventory();
    renderHistory();
    updateBalanceDisplay();
    
    // Reset selection
    selectedFromItem = null;
    selectedToItem = null;
    renderUpgradeInventory();
    renderUpgradeTargets();
    document.getElementById('upgradeAction').style.display = 'none';
    
    isUpgrading = false;
}

function closeUpgradeModal() {
    const modal = document.getElementById('upgradeModal');
    modal.classList.remove('active');
    isUpgrading = false;
}

function closeUpgradeResultModal() {
    const modal = document.getElementById('upgradeResultModal');
    modal.classList.remove('active');
}

// Initialize upgrade page
document.addEventListener('DOMContentLoaded', () => {
    renderUpgradeInventory();
});

// ==================== SMOOTH PAGE TRANSITIONS ====================
document.addEventListener('DOMContentLoaded', () => {
    // Add exit animation before page unload
    const links = document.querySelectorAll('a[href^="."], a[href^="/"], a[href^="index"], a[href^="cases"], a[href^="profile"], a[href^="upgrade"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's the same page
            if (href === window.location.pathname.split('/').pop()) return;
            
            // Skip external links
            if (href.startsWith('http')) return;
            
            e.preventDefault();
            
            // Add exit animation
            document.body.classList.add('page-exit');
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
    
    // Staggered animation for cards
    const animateElements = document.querySelectorAll('.case-card, .inventory-item, .history-item, .feature-card');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
});
