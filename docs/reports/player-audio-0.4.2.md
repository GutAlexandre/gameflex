# Player audio and phone controls — 0.4.2

## Reproduction and cause

Production 0.4.1 decoded the synthetic gateway tone, but that isolated check did not exercise game initialization. On the real public URL, the legacy retro and child-v4 command hooks still opened native WebSockets. The QNAP prefix blocks their upgrades, preventing emulator initialization even when the audio transport itself works. Both now use the existing authenticated GameSocket relay. Native WebSockets remain available on supported networks.

The floating phone controller button also appeared on mobile when TV mode was remembered. It is removed during playback; pairing remains available from the library and settings. The sound unlock button is rendered above launch overlays and follows fullscreen roots.

Audio is enabled by default. The Launch gesture primes a shared WebAudio context before asynchronous work. Viewer renegotiation preserves this permission; leaving the player releases it. Voluntary mute remains respected. Browser autoplay restrictions still require a gesture on direct player navigation.

Document pagehide releases relay sockets with authenticated keepalive requests; BFCache restoration reconnects. The proposed backend change allows twelve channels per account for overlapping reloads/two devices, while retaining the existing global sixteen-channel and per-channel memory limits.

## Validation

- Node PlayStation suite: passed, including audio-context ownership, synchronous launch priming, late decoder cleanup, mute intent and relay document lifecycle.
- Isolated Python relay capacity test: passed; thirteenth account channel and seventeenth global channel rejected with 429.
- Actual SessionStream/LaunchScreen browser harness: player and primed-player passed, including two viewer retries, one shared context, accessible sound button, fullscreen, mute/unmute and final close. Scheduled samples: 88,320 and 82,080; decoder errors: zero.
- Full actual application on public HTTPS APIs, mobile Chromium viewport 390×844: passed with an original locally generated NES diagnostic program on the real kernel/runtime. First Launch produced 11,520 samples / post-gain PCM energy 243.94 without an additional sound tap. After hard reload, the visible sound button produced 24,960 samples / energy 581.05. No floating phone button and no page errors. Preferences writes were isolated; stored preferences unchanged. Owned cartridge/session removed after testing.
- The full-player reload test first exposed stale relay channels and intermittently failed before lifecycle cleanup settled; the final run passed. The backend capacity change remains independently tested until rollout.

These are software audio measurements, not a physical iPhone/TV speaker listening test. The diagnostic screenshot still contains the stream connection overlay; it is not evidence of successful video rendering. Physical TV playback was not interrupted: the final read-only audit found another foreground application actively playing media. No deployment while occupied, as requested. Production remains 0.4.1 until a safe deployment window.

## Reproduce

Use the existing webapp Node dependencies: `node tests/pi-tv/run-playstation-tests.cjs`. Run `tests/pi-tv/test_socket_bridge_capacity.py` in the existing experience image (wsproto dependency). `tests/pi-tv/check-player-real-game.py` requires the managed local stack and preview web build; it refuses an active game, creates only its own original diagnostic cartridge and checksums it before deletion. `tests/pi-tv/run-public-audio-check.py --live --variant player --variant primed-player` opens only a temporary synthetic gateway stream. Never use personal games as disposable test fixtures.
