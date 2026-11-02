// in dein enter.in / c.bio.tel / nc.suite v4
const HERZ_KEY = 'nc_herz';
const TAB_ID = Math.random().toString(36).slice(2);
const ICH_BIN = TAB_ID;

function atmen() {
  try {
    localStorage.setItem(HERZ_KEY, JSON.stringify({ 
      t: Date.now(), 
      atem: 'ein', 
      von: ICH_BIN,
      tab: document.visibilityState 
    }));
  } catch(e) {}
}

// 1. Ich atme alle 30s - nicht 60s
setInterval(atmen, 30000);
atmen(); // sofort

// 2. Wache: Bin ich tot?
setInterval(() => {
  try {
    const raw = localStorage.getItem(HERZ_KEY);
    if (!raw) return atmen();
    const herz = JSON.parse(raw);
    
    const totSeit = Date.now() - herz.t;
    
    // Nur reloaded wenn HERZ alt ist UND es nicht mein eigener Herzschlag war
    // Verhindert Selbstmord-Loop
    if (totSeit > 90000 && herz.von !== ICH_BIN) {
      console.log('[DURCH-ATEM] Fremd-Herz tot seit', totSeit, '-> RELOAD');
      location.reload();
    }
    
    // Wenn mein eigener Herzschlag > 120s alt ist, bin ICH tot -> selbst neu atmen
    if (herz.von === ICH_BIN && totSeit > 120000) {
      atmen();
    }
  } catch(e) {
    atmen();
  }
}, 15000);

// 3. Wenn Tab in Background geht, schneller atmen
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') atmen();
});
