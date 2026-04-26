// සරල VPN FREE Channel Injector Script එක
document.addEventListener('DOMContentLoaded', () => {

    // 1. මෙතනට ඔබගේ VPN Free Channels වල නම්, ලෝගෝ සහ m3u8 ලින්ක් ලබා දෙන්න
    const vpnFreeChannels = [
        { name: "Rupavahini", logo: "https://api3.viu.lk/api/client/v1/global/images/25661?accessKey=WkVjNWNscFhORDBLCg==", url: "https://cdn.livestreaminfo.com/live/OpgmxjyZGoUQXJgO/576p.m3u8" },
        { name: "ITN", logo: "https://api3.viu.lk/api/client/v1/global/images/25663?accessKey=WkVjNWNscFhORDBLCg==", url: "https://cdn.livestreaminfo.com/live/fgJBeMeotXpvORaE/576p.m3u8" },
        { name: "Hiru TV", logo: "https://api3.viu.lk/api/client/v1/global/images/25670?accessKey=WkVjNWNscFhORDBLCg==", url: "https://tv.hiruhost.com:1936/8012/8012/chunklist_w78295073.m3u8" },
        { name: "Derana", logo: "https://api3.viu.lk/api/client/v1/global/images/25665?accessKey=WkVjNWNscFhORDBLCg==", url: "https://cdn.livestreaminfo.com/live/csdmTtJnkCwvXgod/576p.m3u8" },
        { name: "Sirasa", logo: "https://api3.viu.lk/api/client/v1/global/images/25667?accessKey=WkVjNWNscFhORDBLCg==", url: "https://cdn.livestreaminfo.com/live/JlKbHLMYvvEFYvlu/576p.m3u8" },
        { name: "Swarnawahini", logo: "https://api3.viu.lk/api/client/v1/global/images/25666?accessKey=WkVjNWNscFhORDBLCg==", url: "https://cdn.livestreaminfo.com/live/OplTHNHgJtgwGPen/576p.m3u8" },
        { name: "Siyatha", logo: "https://api3.viu.lk/api/client/v1/global/images/25674?accessKey=WkVjNWNscFhORDBLCg==", url: "https://rtmp01.voaplus.com/hls/6x6ik312qk4grfxocfcv_mid/index.m3u8" },
        { name: "Haritha", logo: "https://api3.viu.lk/api/client/v1/global/images/25675?accessKey=WkVjNWNscFhORDBLCg==", url: "https://cdn.livestreaminfo.com/live/9A2M1K7Q8X3DF/576p.m3u8" },
        { name: "TV One", logo: "https://api3.viu.lk/api/client/v1/global/images/25669?accessKey=WkVjNWNscFhORDBLCg==", url: "https://mini.allinonereborn.fun/tata.php?id=11606" },
        { name: "Charana", logo: "https://www.slt.lk/sites/default/files/channel_images/305-CharanaTVHD.jpg", url: "https://cdn.livestreaminfo.com/live/koGURgmHSgCxLVmU/576p.m3u8" },
        { name: "Event TV", logo: "https://www.slt.lk/sites/default/files/channel_images/020-EventTV_0.jpg", url: "https://cdn.livestreaminfo.com/live/YvUfMAiYuYLxcovY/576p.m3u8" },
        { name: "Art Television", logo: "https://api3.viu.lk/api/client/v1/global/images/25672?accessKey=WkVjNWNscFhORDBLCg==", url: "https://mini.allinonereborn.fun/tata.php?id=11585" },
        { name: "Channel One", logo: "https://api3.viu.lk/api/client/v1/global/images/25660?accessKey=WkVjNWNscFhORDBLCg==", url: "https://mini.allinonereborn.fun/tata.php?id=115898" },
        { name: "Channel C", logo: "https://api3.viu.lk/api/client/v1/global/images/25702?accessKey=WkVjNWNscFhORDBLCg==", url: "https://mini.allinonereborn.fun/tata.php?id=11588" },
        { name: "Citi hitz", logo: "https://api3.viu.lk/api/client/v1/global/images/25678?accessKey=WkVjNWNscFhORDBLCg==", url: "https://mini.allinonereborn.fun/tata.php?id=11590" },
        { name: "Damsathara", logo: "https://www.slt.lk/sites/default/files/channel_images/126-DamsatharaTV%20%281%29.jpg", url: "https://mini.allinonereborn.fun/tata.php?id=11591" },
        { name: "Hi TV", logo: "https://api3.viu.lk/api/client/v1/global/images/25681?accessKey=WkVjNWNscFhORDBLCg==", url: "https://mini.allinonereborn.fun/tata.php?id=11596" },
        { name: "Ridee", logo: "https://api3.viu.lk/api/client/v1/global/images/25677?accessKey=WkVjNWNscFhORDBLCg==", url: "https://mini.allinonereborn.fun/tata.php?id=11602" },
        { name: "TV Didula", logo: "https://api3.viu.lk/api/client/v1/global/images/25676?accessKey=WkVjNWNscFhORDBLCg==", url: "https://mini.allinonereborn.fun/tata.php?id=11608" },
        { name: "Vasantham", logo: "https://api3.viu.lk/api/client/v1/global/images/25664?accessKey=WkVjNWNscFhORDBLCg==", url: "https://mini.allinonereborn.fun/tata.php?id=11610" },
        { name: "Shakthi", logo: "https://api3.viu.lk/api/client/v1/global/images/25668?accessKey=WkVjNWNscFhORDBLCg==", url: "https://mini.allinonereborn.fun/tata.php?id=11612" }
    ];

    // Host කරාම ඉන්ටර්නෙට් එක slow නම් තත්පර 1.5 මදි වෙන්න පුළුවන්, 
    // ඒ නිසා Container එක හැදෙනකන් බලන් ඉන්න function එකක් දාමු.
    function injectChannels() {
        const channelsContainer = document.getElementById('channelsContainer');
        
        // Container එක තාම ලෝඩ් වෙලා නැත්නම් තව 500ms ඉඳල ආයෙ බලනවා
        if (!channelsContainer) {
            setTimeout(injectChannels, 500);
            return;
        }

        // 2. Category එකේ HTML එක හැදීම
        let htmlContent = `
            <div class="cat-section">
                <div class="cat-title">VPN FREE</div>
                <div class="app-grid">
        `;

        vpnFreeChannels.forEach(channel => {
            htmlContent += `
                <a href="#" class="channel-card vpn-free-btn" data-url="${channel.url}">
                    <div class="icon-box">
                        <img src="${channel.logo}" alt="${channel.name}">
                    </div>
                    <span>${channel.name}</span>
                </a>
            `;
        });

        htmlContent += `</div></div>`;

        // 3. Main container එකේ අගටම (Bottom) මේක Add කිරීම
        channelsContainer.insertAdjacentHTML('beforeend', htmlContent);

        // 4. Shaka Player එකේ Play වීමේ ලොජික් එක
        const videoElement = document.getElementById('video');
        const spinner = document.getElementById('loadingSpinner');

        document.querySelectorAll('.vpn-free-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault();

                // Click කරපු එක රතු පාටින් (Active) පෙන්නන්න
                document.querySelectorAll('.channel-card').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');

                // Play වෙද්දි උඩට (Player එක ගාවට) යන්න
                window.scrollTo({ top: 0, behavior: 'smooth' });

                const streamUrl = btn.getAttribute('data-url');
                if (spinner) spinner.style.display = 'block';

                try {
                    // Shaka player එක අල්ලගැනීම 
                    let player = window.player || (videoElement.ui ? videoElement.ui.getControls().getPlayer() : null);
                    
                    // Player එකක් නැත්නම් අලුතින් හදන්න
                    if (!player) {
                        player = new shaka.Player(videoElement);
                        window.player = player; 
                    }

                    // පරණ ප්ලේ වෙන stream එකක් තියෙනම් ඒක clear කරන්න (Host කරාම මේක ගොඩක් වැදගත්)
                    await player.unload();

                    // වීඩියෝ ලින්ක් එක ලෝඩ් කිරීම
                    await player.load(streamUrl);
                    videoElement.play();

                } catch (error) {
                    console.error('Error playing VPN Free Channel:', error);
                    
                    // iOS වගේ (Shaka නැති) Apple Devices වලට Auto Play වෙන්න (Fallback)
                    if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
                        videoElement.src = streamUrl;
                        videoElement.play();
                    }
                } finally {
                    if (spinner) spinner.style.display = 'none';
                }
            });
        });
    }

    // Function එක call කිරීම
    injectChannels();
});
