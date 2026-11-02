const bc = new BroadcastChannel('nc_atem');
bc.onmessage = (e) => { if(e.data === 'herz?') bc.postMessage('ein') };
